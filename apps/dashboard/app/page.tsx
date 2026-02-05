import { BarChart3, Users, DollarSign, Activity } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Running on port 3001 with base path /dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Total Revenue</span>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold">$45,231.89</p>
          <p className="text-xs text-green-600">+20.1% from last month</p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Users</span>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold">+2350</p>
          <p className="text-xs text-green-600">+180.1% from last month</p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Sales</span>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold">+12,234</p>
          <p className="text-xs text-green-600">+19% from last month</p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Active Now</span>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold">+573</p>
          <p className="text-xs text-green-600">+201 since last hour</p>
        </div>
      </div>

      <div className="p-6 rounded-lg border bg-card">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-md bg-muted/50">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-muted-foreground">{i} hour ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
