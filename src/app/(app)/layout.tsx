'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Home, Trophy, User } from 'lucide-react';
import type { ReactNode } from 'react';

import { AppHeader } from '@/components/app-header';
import { Logo } from '@/components/logo';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Início', icon: Home },
    { href: '/licoes', label: 'Lições', icon: BookOpen },
    { href: '/conquistas', label: 'Conquistas', icon: Trophy },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="size-8 text-primary" />
            <h1 className="font-headline text-2xl font-semibold">Nota Dentro</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  className="font-body"
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div
            className={cn(
              'flex items-center gap-3 rounded-lg bg-secondary/50 p-2 transition-all',
              'group-data-[collapsible=icon]:-m-2 group-data-[collapsible=icon]:p-0'
            )}
          >
            <Avatar className="size-9 group-data-[collapsible=icon]:size-8">
              <AvatarImage src="https://picsum.photos/seed/user/40/40" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-medium text-foreground">
                Aluno
              </span>
              <span className="text-xs text-muted-foreground">Nível 5</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto size-8 group-data-[collapsible=icon]:hidden"
            >
              <User className="size-4" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <AppHeader />
        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
