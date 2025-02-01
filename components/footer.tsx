export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">BLSK</span>
            <span className="text-xl font-bold text-primary">TECHWORKS</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BLSK TECHWORKS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

