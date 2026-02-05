import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const microfrontends = [
  {
    name: "shell",
    description: "Host application that orchestrates all microfrontends",
    port: 3000,
    basePath: "/",
    role: "Host",
  },
  {
    name: "dashboard",
    description: "Analytics and admin dashboard microfrontend",
    port: 3001,
    basePath: "/dashboard",
    role: "Remote",
  },
  {
    name: "store",
    description: "E-commerce store microfrontend",
    port: 3002,
    basePath: "/store",
    role: "Remote",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Turborepo Microfrontends</h1>
          <p className="text-muted-foreground">
            Your microfrontends architecture is configured and ready for local development.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Configuration Overview</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {microfrontends.map((mf) => (
              <Card key={mf.name}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{mf.name}</CardTitle>
                    <Badge variant={mf.role === "Host" ? "default" : "secondary"}>
                      {mf.role}
                    </Badge>
                  </div>
                  <CardDescription>{mf.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Port</span>
                    <code className="rounded bg-muted px-1.5 py-0.5">{mf.port}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base Path</span>
                    <code className="rounded bg-muted px-1.5 py-0.5">{mf.basePath}</code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Files Created</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0">Config</Badge>
                  <div>
                    <p className="font-medium">microfrontends.json</p>
                    <p className="text-muted-foreground">Central configuration for all microfrontend applications</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0">Config</Badge>
                  <div>
                    <p className="font-medium">turbo.json</p>
                    <p className="text-muted-foreground">Turborepo pipeline configuration</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0">Config</Badge>
                  <div>
                    <p className="font-medium">pnpm-workspace.yaml</p>
                    <p className="text-muted-foreground">Monorepo workspace configuration</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0">App</Badge>
                  <div>
                    <p className="font-medium">apps/shell/</p>
                    <p className="text-muted-foreground">Host application with routing rewrites</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0">App</Badge>
                  <div>
                    <p className="font-medium">apps/dashboard/</p>
                    <p className="text-muted-foreground">Dashboard microfrontend with basePath: /dashboard</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0">App</Badge>
                  <div>
                    <p className="font-medium">apps/store/</p>
                    <p className="text-muted-foreground">Store microfrontend with basePath: /store</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Getting Started</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Install dependencies:</p>
                <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                  <code>pnpm install</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Run all microfrontends with Turborepo:</p>
                <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                  <code>pnpm turbo:dev</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Or run individually:</p>
                <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                  <code>{`pnpm dev:shell      # localhost:3000
pnpm dev:dashboard  # localhost:3001/dashboard
pnpm dev:store      # localhost:3002/store`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
