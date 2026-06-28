"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { IconHistory, IconSettings, IconBooks, IconBook2 } from "@tabler/icons-react"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border bg-card">
      <SidebarHeader className="p-4 flex flex-row items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <IconBook2 className="text-primary-foreground w-5 h-5" />
        </div>
        <span className="font-heading font-semibold text-lg text-foreground tracking-tight">Study AI</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-sans">Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/chat">
                    <IconBooks className="w-4 h-4" />
                    <span>Current Session</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <IconHistory className="w-4 h-4" />
                    <span>History</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <IconSettings className="w-4 h-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
