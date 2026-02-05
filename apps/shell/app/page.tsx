export default function HomePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Shell</h1>
      <p className="text-muted-foreground mb-8">
        This is the host application that orchestrates all microfrontends.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="/dashboard"
          className="block p-6 rounded-lg border bg-card hover:border-primary transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
          <p className="text-muted-foreground">
            View analytics and manage your data.
          </p>
        </a>
        <a
          href="/store"
          className="block p-6 rounded-lg border bg-card hover:border-primary transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-2">Store</h2>
          <p className="text-muted-foreground">
            Browse products and manage orders.
          </p>
        </a>
      </div>
    </div>
  );
}
