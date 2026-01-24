import Link from "next/link";
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarInset,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Search, Bell, LayoutGrid, List, PlusCircle, User, LogOut, CheckSquare, Shield, Users, Megaphone, MessageSquarePlus } from "lucide-react";
import { FeedbackDialog } from "@/components/feedback-dialog";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mock user data, in a real app this would come from an auth context/session
  const user = {
    name: "Alex Doe",
    email: "alex.doe@campus.edu",
    avatarUrl: "https://picsum.photos/seed/alex/100/100",
  };
  const isAdmin = true; // In a real app, this would be based on user roles

  const navItems = [
    { href: "/dashboard", icon: LayoutGrid, label: "Dashboard" },
    { href: "/dashboard/lost", icon: List, label: "Lost Items" },
    { href: "/dashboard/found", icon: CheckSquare, label: "Found Items" },
    { href: "/dashboard/report-lost", icon: PlusCircle, label: "Report Lost Item" },
    { href: "/dashboard/report-found", icon: PlusCircle, label: "Report Found Item" },
  ];

  const adminNavItems = [
    { href: "/dashboard/admin", icon: Shield, label: "Admin Overview" },
    { href: "/dashboard/admin/users", icon: Users, label: "User Management" },
    { href: "/dashboard/admin/announcements", icon: Megaphone, label: "Announcements" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar collapsible="icon">
            <SidebarHeader>
              <Logo />
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild tooltip={item.label}>
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              {isAdmin && (
                <>
                  <SidebarSeparator />
                  <SidebarGroup>
                    <SidebarGroupLabel className="px-2">Admin</SidebarGroupLabel>
                    <SidebarMenu>
                      {adminNavItems.map((item) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton asChild tooltip={item.label}>
                            <Link href={item.href}>
                              <item.icon />
                              <span>{item.label}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroup>
                </>
              )}
            </SidebarContent>
            <SidebarSeparator />
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                   <SidebarMenuButton asChild tooltip="Profile">
                      <Link href="/dashboard/profile">
                        <Avatar className="h-8 w-8">
                           <AvatarImage src={user.avatarUrl} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <FeedbackDialog>
                    <SidebarMenuButton tooltip="Feedback">
                        <MessageSquarePlus />
                        <span>Feedback</span>
                    </SidebarMenuButton>
                  </FeedbackDialog>
                </SidebarMenuItem>
                <SidebarMenuItem>
                   <SidebarMenuButton asChild tooltip="Log out">
                     <Link href="/">
                       <LogOut />
                       <span>Log out</span>
                      </Link>
                   </SidebarMenuButton>
                 </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SidebarTrigger className="sm:hidden" />
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search items..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
              />
            </div>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </header>
          <main className="p-4 sm:px-6 sm:py-0">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
