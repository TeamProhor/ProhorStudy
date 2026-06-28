export const translations = {
  en: {
    settings: "Settings",
    searchPlaceholder: "Search",
    tabs: {
      general: "General",
      account: "Account",
      privacy: "Privacy",
      billing: "Billing",
      capabilities: "Capabilities",
      connectors: "Connectors",
      claudeCode: "Claude Code",
    },
    general: {
      profile: {
        title: "Profile",
        avatar: "Avatar",
        fullName: "Full name",
        displayName: "What should Claude call you?",
        workDescription: "What best describes your work?",
        select: "Select",
        instructionsTitle: "Instructions for Claude",
        instructionsSubtitle:
          "Claude will keep these in mind across chats and Cowork within ",
        instructionsLink: "Anthropic's guidelines",
        instructionsPlaceholder:
          "e.g. when learning new concepts, I find analogies particularly helpful",
      },
      preferences: {
        title: "Preferences",
        appearance: "Appearance",
        chatFont: "Chat font",
        motion: "Motion",
        motionSubtitle:
          "Reduce animation in streaming responses and other interface elements.",
        system: "System",
        reduced: "Reduced",
      },
      voice: {
        title: "Voice",
        language: "Language",
        style: "Style",
        speed: "Speed",
        english: "English",
        buttery: "Buttery",
        normal: "Normal",
      },
      notifications: {
        title: "Notifications",
        responseCompletions: "Response completions",
        responseCompletionsSubtitle:
          "Get notified when Claude has finished a response. Useful for long-running tasks.",
        dispatchMessages: "Dispatch messages",
        dispatchMessagesSubtitle:
          "Get a push notification on your phone when Claude messages you in Dispatch.",
      },
    },
  },
  bn: {
    settings: "সেটিংস",
    searchPlaceholder: "খুঁজুন",
    tabs: {
      general: "সাধারণ",
      account: "অ্যাকাউন্ট",
      privacy: "গোপনীয়তা",
      billing: "বিলিং",
      capabilities: "ক্ষমতা",
      connectors: "কানেক্টর",
      claudeCode: "ক্লদ কোড",
    },
    general: {
      profile: {
        title: "প্রোফাইল",
        avatar: "অ্যাভাটার",
        fullName: "পুরো নাম",
        displayName: "ক্লদ আপনাকে কী বলে ডাকবে?",
        workDescription: "আপনার কাজের সেরা বর্ণনা কী?",
        select: "নির্বাচন করুন",
        instructionsTitle: "ক্লদের জন্য নির্দেশনা",
        instructionsSubtitle: "ক্লদ চ্যাট এবং কোওয়ার্কে এগুলো মনে রাখবে ",
        instructionsLink: "অ্যানথ্রপিকের নির্দেশিকা",
        instructionsPlaceholder:
          "যেমন: নতুন ধারণা শেখার সময় আমি অ্যানালজি বা উপমা খুব সহায়ক মনে করি",
      },
      preferences: {
        title: "পছন্দসমূহ",
        appearance: "আবির্ভাব",
        chatFont: "চ্যাট ফন্ট",
        motion: "মোশন",
        motionSubtitle: "স্ট্রিমিং রেসপন্স এবং অন্যান্য ইন্টারফেস উপাদানে অ্যানিমেশন কমান।",
        system: "সিস্টেম",
        reduced: "কমানো",
      },
      voice: {
        title: "ভয়েস",
        language: "ভাষা",
        style: "স্টাইল",
        speed: "গতি",
        english: "ইংরেজি",
        buttery: "মসৃণ",
        normal: "সাধারণ",
      },
      notifications: {
        title: "নোটিফিকেশন",
        responseCompletions: "রেসপন্স সমাপ্তি",
        responseCompletionsSubtitle:
          "ক্লদ একটি রেসপন্স শেষ করলে বিজ্ঞপ্তি পান। দীর্ঘ কাজের জন্য দরকারী।",
        dispatchMessages: "ডিসপ্যাচ বার্তা",
        dispatchMessagesSubtitle:
          "ক্লদ ডিসপ্যাচে বার্তা পাঠালে আপনার ফোনে পুশ নোটিফিকেশন পান।",
      },
    },
  },
} as const;

export const lang = "bn";
export const t = translations[lang];
