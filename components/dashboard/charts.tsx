"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { TrendingUp, Calendar, BarChart3 } from "lucide-react"

const monthlyData = [
  { month: "Jan", reported: 45, resolved: 38 },
  { month: "Feb", reported: 52, resolved: 45 },
  { month: "Mar", reported: 48, resolved: 42 },
  { month: "Apr", reported: 61, resolved: 55 },
  { month: "May", reported: 55, resolved: 48 },
  { month: "Jun", reported: 67, resolved: 58 },
]

const categoryData = [
  { name: "Road Damage", value: 35, color: "#f97316" },
  { name: "Street Lighting", value: 25, color: "#eab308" },
  { name: "Waste Management", value: 20, color: "#22c55e" },
  { name: "Water Issues", value: 12, color: "#3b82f6" },
  { name: "Safety Concerns", value: 8, color: "#ef4444" },
]

const resolutionTimeData = [
  { day: "Mon", avgHours: 24 },
  { day: "Tue", avgHours: 18 },
  { day: "Wed", avgHours: 32 },
  { day: "Thu", avgHours: 28 },
  { day: "Fri", avgHours: 22 },
  { day: "Sat", avgHours: 45 },
  { day: "Sun", avgHours: 38 },
]

export function IssuesTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Issues Trend
        </CardTitle>
        <CardDescription>Monthly comparison of reported vs resolved issues</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="reported" fill="hsl(var(--primary))" name="Reported" />
            <Bar dataKey="resolved" fill="hsl(var(--chart-2))" name="Resolved" />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-between mt-4 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span>Reported</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-chart-2" />
              <span>Resolved</span>
            </div>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +12% this month
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export function CategoryDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Issue Categories</CardTitle>
        <CardDescription>Distribution of issues by category</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {categoryData.map((category) => (
            <div key={category.name} className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
              <span className="text-muted-foreground">{category.name}</span>
              <Badge variant="outline" className="ml-auto text-xs">
                {category.value}%
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function ResolutionTimeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Resolution Time
        </CardTitle>
        <CardDescription>Average resolution time by day of week</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={resolutionTimeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value} hours`, "Avg Resolution Time"]} />
            <Line type="monotone" dataKey="avgHours" stroke="hsl(var(--primary))" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <Badge variant="secondary">Average: 28 hours</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
