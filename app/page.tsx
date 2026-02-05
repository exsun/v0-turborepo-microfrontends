import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutDashboard, ShoppingBag, Home, CheckCircle2, Circle } from "lucide-react"

const isProduction = process.env.NODE_ENV === "production"
const vercelEnv = process.env.VERCEL_ENV || "development"

export default function ShellPage() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b bg-card">
        <div className="container mx-auto flex items-center gap-6 px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Home className="h-5 w-5" />
            Shell
          </Link>
          <Link 
            href="/dashboard" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link 
            href="/store" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            Store
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Badge variant={isProduction ? "default" : "secondary"} className="flex items-center gap-1">
              {isProduction ? <CheckCircle2 className="h-3 w-3" /> : <Circle className="h-3 w-3" />}
              {vercelEnv}
            </Badge>
            <Badge variant="outline">Shell Host</Badge>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome to the Shell</h1>
          <p className="text-muted-foreground text-lg">
            This is the host application that orchestrates all microfrontends.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Navigate to Microfrontends</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/dashboard">
              <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <LayoutDashboard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Dashboard</CardTitle>
                      <CardDescription>Port 3001 | Base Path: /dashboard</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    View analytics, manage users, and monitor your system metrics.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/store">
              <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <ShoppingBag className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Store</CardTitle>
                      <CardDescription>Port 3002 | Base Path: /store</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Browse products, manage inventory, and process orders.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Architecture Overview</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 rounded-lg border-2 border-primary bg-primary/5">
                  <Badge className="mb-2">Host</Badge>
                  <h3 className="font-semibold">shell</h3>
                  <p className="text-sm text-muted-foreground mt-1">Port 3000</p>
                  <p className="text-sm text-muted-foreground">Base: /</p>
                </div>
                <div className="p-4 rounded-lg border bg-muted/30">
                  <Badge variant="secondary" className="mb-2">Remote</Badge>
                  <h3 className="font-semibold">dashboard</h3>
                  <p className="text-sm text-muted-foreground mt-1">Port 3001</p>
                  <p className="text-sm text-muted-foreground">Base: /dashboard</p>
                </div>
                <div className="p-4 rounded-lg border bg-muted/30">
                  <Badge variant="secondary" className="mb-2">Remote</Badge>
                  <h3 className="font-semibold">store</h3>
                  <p className="text-sm text-muted-foreground mt-1">Port 3002</p>
                  <p className="text-sm text-muted-foreground">Base: /store</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Production Deployment</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Environment Variables</CardTitle>
                <CardDescription>Set in Vercel Project Settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted p-4 font-mono text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 shrink-0" />
                    <span>NEXT_PUBLIC_SHELL_URL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 shrink-0" />
                    <span>NEXT_PUBLIC_DASHBOARD_URL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 shrink-0" />
                    <span>NEXT_PUBLIC_STORE_URL</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Production Files</CardTitle>
                <CardDescription>Configuration ready for deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono">vercel.json</span>
                    <Badge variant="outline" className="text-xs">Security headers</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono">turbo.json</span>
                    <Badge variant="outline" className="text-xs">Build pipeline</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono">microfrontends.json</span>
                    <Badge variant="outline" className="text-xs">App routing</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono">.env.example</span>
                    <Badge variant="outline" className="text-xs">Env template</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base">Deploy to Vercel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div className="p-3 rounded-lg border">
                  <p className="font-medium mb-1">1. Connect Repo</p>
                  <p className="text-muted-foreground text-xs">Link your GitHub repository to Vercel</p>
                </div>
                <div className="p-3 rounded-lg border">
                  <p className="font-medium mb-1">2. Set Env Variables</p>
                  <p className="text-muted-foreground text-xs">Add production URLs in project settings</p>
                </div>
                <div className="p-3 rounded-lg border">
                  <p className="font-medium mb-1">3. Deploy</p>
                  <p className="text-muted-foreground text-xs">Vercel auto-detects Turborepo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
