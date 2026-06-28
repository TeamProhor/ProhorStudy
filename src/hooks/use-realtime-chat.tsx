"use client";

import { useCallback, useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";
import { getRandomAIResponse } from "@/lib/responses";

interface UseRealtimeChatProps {
  roomName: string;
  username: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  user: {
    name: string;
  };
  createdAt: string;
}

const EVENT_MESSAGE_TYPE = "message";

export function useRealtimeChat({ roomName, username }: UseRealtimeChatProps) {
  const supabase = createClient();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [channel, setChannel] = useState<ReturnType<
    typeof supabase.channel
  > | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    const newChannel = supabase.channel(roomName);

    newChannel
      .on("broadcast", { event: EVENT_MESSAGE_TYPE }, (payload) => {
        setMessages((current) => {
          const exists = current.find((m) => m.id === payload.payload.id);
          if (exists) {
            return current.map((m) =>
              m.id === payload.payload.id ? payload.payload as ChatMessage : m
            );
          }
          return [...current, payload.payload as ChatMessage];
        });
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      });

    setChannel(newChannel);

    return () => {
      supabase.removeChannel(newChannel);
    };
  }, [roomName, supabase]);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!channel || !isConnected) return;

      const message: ChatMessage = {
        id: crypto.randomUUID(),
        content,
        user: {
          name: username,
        },
        createdAt: new Date().toISOString(),
      };

      // Update local state immediately for the sender
      setMessages((current) => [...current, message]);

      await channel.send({
        type: "broadcast",
        event: EVENT_MESSAGE_TYPE,
        payload: message,
      });

      setIsThinking(true);

      // Simulate an AI response after a short delay
      setTimeout(async () => {
        setIsThinking(false);
        const fullResponse = getRandomAIResponse();
        const aiMessageId = crypto.randomUUID();
        
        let currentContent = "";
        
        const aiMessage: ChatMessage = {
          id: aiMessageId,
          content: "",
          user: {
            name: "AI Assistant",
          },
          createdAt: new Date().toISOString(),
        };

        // Add empty message initially
        setMessages((current) => [...current, aiMessage]);

        // Simulate streaming
        const chunks = fullResponse.match(/[\s\S]{1,2}/g) || [fullResponse];
        
        for (let i = 0; i < chunks.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 20 + Math.random() * 30));
          currentContent += chunks[i];
          
          setMessages((current) => 
            current.map((msg) => 
              msg.id === aiMessageId ? { ...msg, content: currentContent } : msg
            )
          );
        }

        // Broadcast the final completed message
        await channel.send({
          type: "broadcast",
          event: EVENT_MESSAGE_TYPE,
          payload: { ...aiMessage, content: currentContent },
        });
      }, 1000 + Math.random() * 1000); // 1-2 second delay
    },
    [channel, isConnected, username],
  );

  return { messages, sendMessage, isConnected, isThinking };
}
