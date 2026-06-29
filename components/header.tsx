"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/lib/site-content"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  const handleScroll = React.useCallback(() => {
    setIsScrolled(window.scrollY > 0)
  }, [])

  React.useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const headerClass = React.useMemo(
    () => `fixed w-full top-0 z-50 transition-all duration-300 h-16 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : ""}`,
    [isScrolled]
  )

  const navItems = [
    { href: "/#services", label: "Services" },
    { href: "/#work", label: "Work" },
    { href: "/#engagements", label: "Engagements" },
    { href: "/#process", label: "Process" },
  ]

  return (
    <>
      <header className={headerClass}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 h-9">
              <Image
                src="/logo.png"
                alt="BLSK Labs logo"
                width={28}
                height={28}
                className="flex-shrink-0"
                priority
              />
              <span className="text-lg font-semibold tracking-tight text-render-optimized">BLSK Labs</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle />
              <Button asChild size="sm" className="h-9 px-5">
                <a href={siteConfig.bookingUrl}>Book a call</a>
              </Button>
            </nav>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Open main menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="sr-only">Main navigation</SheetTitle>
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <ThemeToggle />
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <a href={siteConfig.bookingUrl}>Book a call</a>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div className="h-16" />
    </>
  )
}
