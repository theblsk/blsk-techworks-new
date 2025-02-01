"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  const handleScroll = React.useCallback(() => {
    setIsScrolled(window.scrollY > 0)
  }, [])

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const headerClass = React.useMemo(
    () => `sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-sm" : ""}`,
    [isScrolled]
  )

  const NavLinks = React.memo(() => (
    <>
      <Link href="#about" className="text-sm hover:text-primary transition-colors">
        About
      </Link>
      <Link href="#services" className="text-sm hover:text-primary transition-colors">
        Services
      </Link>
      <Link href="#projects" className="text-sm hover:text-primary transition-colors">
        Projects
      </Link>
      <ThemeToggle />
      <Button asChild>
        <Link href="#contact">Let&apos;s work together!</Link>
      </Button>
    </>
  ))
  NavLinks.displayName = "NavLinks"

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">BLSK</span>
            <span className="text-xl font-bold text-primary">TECHWORKS</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </nav>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open main menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

