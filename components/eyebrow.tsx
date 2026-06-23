import type React from "react"
import { cn } from "@/lib/utils"

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
        className
      )}
    >
      <span className="h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
