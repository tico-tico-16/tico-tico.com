import { Construction } from "lucide-react"

export function AboutPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
      <div className="flex size-20 items-center justify-center rounded-full border border-border bg-secondary">
        <Construction className="size-10 text-primary" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          About
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Under Construction
        </p>
        <p className="mt-2 text-sm text-muted-foreground/70">
          このページは現在準備中です。もうしばらくお待ちください。
        </p>
      </div>
    </div>
  )
}
