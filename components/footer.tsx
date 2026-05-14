import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-gradient-to-br from-[#F15E24] to-[#C52F86] flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">V</span>
            </div>
            <span className="text-sm font-medium text-foreground">verse</span>
            <span className="text-sm text-muted-foreground">by TelmarHelixa</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} TelmarHelixa. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
