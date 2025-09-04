"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Award } from "lucide-react"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-heading font-bold text-foreground">CivicReport</h1>
          </div>
          <p className="text-muted-foreground">Join your community in making a difference</p>
        </div>

        <Tabs defaultValue="citizen" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="citizen" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Citizen
            </TabsTrigger>
            <TabsTrigger value="municipality" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Municipality
            </TabsTrigger>
          </TabsList>

          <TabsContent value="citizen">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl font-heading">Citizen Login</CardTitle>
                <CardDescription>Report issues and track your community impact</CardDescription>
                <div className="flex gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs">
                    <Award className="h-3 w-3 mr-1" />
                    Earn Points
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Track Issues
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
                <div className="mt-4 text-center">
                  <Button variant="link" className="text-sm">
                    Don't have an account? Sign up
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="municipality">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl font-heading">Municipality Login</CardTitle>
                <CardDescription>Manage and resolve community issues efficiently</CardDescription>
                <div className="flex gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs">
                    Admin Access
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Issue Management
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="municipality-id">Municipality ID</Label>
                    <Input id="municipality-id" type="text" placeholder="MUN-12345" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input id="admin-email" type="email" placeholder="admin@municipality.gov" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <Input id="admin-password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Access Dashboard"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-muted-foreground">
          <p>Secure authentication powered by modern encryption</p>
        </div>
      </div>
    </div>
  )
}
