"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Shield,
  Plus,
  BarChart3,
  Trophy,
  Settings,
  Bell,
  Menu,
  MapPin,
  MessageSquare,
  Users,
  FileText,
  Award,
} from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      title: "Report Issue",
      href: "/report",
      description: "Report a new civic issue in your area",
      icon: Plus,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      description: "View your reports and community stats",
      icon: BarChart3,
    },
    {
      title: "Community Map",
      href: "/map",
      description: "See issues reported in your neighborhood",
      icon: MapPin,
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
      description: "Top contributors in your community",
      icon: Trophy,
    },
  ]

  const quickActions = [
    { title: "My Reports", href: "/my-reports", icon: FileText },
    { title: "Community", href: "/community", icon: Users },
    { title: "Achievements", href: "/achievements", icon: Award },
    { title: "Feedback", href: "/feedback", icon: MessageSquare },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-heading font-bold text-xl">CivicReport</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                    {navigationItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      )
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Quick Actions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[300px]">
                    {quickActions.map((action) => {
                      const Icon = action.icon
                      return (
                        <NavigationMenuLink key={action.href} asChild>
                          <Link
                            href={action.href}
                            className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <Icon className="h-4 w-4" />
                            <span className="text-sm font-medium">{action.title}</span>
                          </Link>
                        </NavigationMenuLink>
                      )
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
          </Button>

          <Button asChild className="hidden md:flex">
            <Link href="/report">
              <Plus className="h-4 w-4 mr-2" />
              Report Issue
            </Link>
          </Button>

          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold">Features</h3>
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    )
                  })}
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading font-semibold">Quick Actions</h3>
                  {quickActions.map((action) => {
                    const Icon = action.icon
                    return (
                      <Link
                        key={action.href}
                        href={action.href}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{action.title}</span>
                      </Link>
                    )
                  })}
                </div>

                <Button asChild className="w-full">
                  <Link href="/report" onClick={() => setIsOpen(false)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Report Issue
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
