import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"

export function Layout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <Outlet />
      </main>
    </div>
  )
}
