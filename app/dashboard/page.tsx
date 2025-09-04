import { Navbar } from "@/components/navigation/navbar"
import { StatsCards, PriorityBreakdown } from "@/components/dashboard/stats-cards"
import { RecentIssues } from "@/components/dashboard/recent-issues"
import { IssuesTrendChart, CategoryDistribution, ResolutionTimeChart } from "@/components/dashboard/charts"
import { TopContributors, CommunityGoals } from "@/components/dashboard/community-activity"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Filter, Download, Bell } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Community Dashboard</h1>
            <p className="text-muted-foreground">Track civic issues and community engagement in real-time</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Report Issue
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <StatsCards />

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            <IssuesTrendChart />

            <div className="grid gap-6 md:grid-cols-2">
              <CategoryDistribution />
              <ResolutionTimeChart />
            </div>
          </div>

          {/* Right Column - Activity & Stats */}
          <div className="space-y-6">
            <PriorityBreakdown />
            <CommunityGoals />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentIssues />
          </div>
          <div>
            <TopContributors />
          </div>
        </div>

        {/* Community Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Community Alerts
            </CardTitle>
            <CardDescription>Important updates and announcements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Scheduled Maintenance</p>
                  <p className="text-xs text-muted-foreground">
                    Street lighting maintenance scheduled for Oak Park area on Sunday, 2-6 PM
                  </p>
                  <Badge variant="secondary" className="text-xs mt-1">
                    2 hours ago
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Resolution Update</p>
                  <p className="text-xs text-muted-foreground">
                    Main Street pothole has been successfully repaired. Thank you for reporting!
                  </p>
                  <Badge variant="secondary" className="text-xs mt-1">
                    5 hours ago
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
