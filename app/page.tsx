import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutDashboard, ShoppingBag, Home } from "lucide-react"

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
          <Badge variant="outline" className="ml-auto">Host App - Port 3000</Badge>
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

        <section>
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
      </div>
    </main>
  )
}
