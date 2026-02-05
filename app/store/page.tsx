import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { LayoutDashboard, ShoppingBag, Home, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Product Alpha", price: 29.99, rating: 4.5 },
  { id: 2, name: "Product Beta", price: 49.99, rating: 4.8 },
  { id: 3, name: "Product Gamma", price: 19.99, rating: 4.2 },
  { id: 4, name: "Product Delta", price: 99.99, rating: 5.0 },
  { id: 5, name: "Product Epsilon", price: 39.99, rating: 4.6 },
  { id: 6, name: "Product Zeta", price: 59.99, rating: 4.3 },
]

export default function StorePage() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b bg-card">
        <div className="container mx-auto flex items-center gap-6 px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
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
            className="flex items-center gap-2 font-semibold"
          >
            <ShoppingBag className="h-4 w-4" />
            Store
          </Link>
          <Badge variant="secondary" className="ml-auto">Store MFE - Port 3002</Badge>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Store</h1>
          <p className="text-muted-foreground">
            Running on port 3002 with base path /store
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg border bg-card overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center">
                <ShoppingCart className="h-16 w-16 text-muted-foreground/50" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold">${product.price}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
