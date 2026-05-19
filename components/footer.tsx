import Link from "next/link"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-gradient-to-br from-[#F15E24] to-[#C52F86] flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">V</span>
            </div>
            <span className="text-sm font-medium text-foreground">Verse</span>
            <span className="text-sm text-muted-foreground">| Powered by TelmarHelixa</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link 
              href="#" 
              className="hover:text-accent transition-colors inline-flex items-center gap-1.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://telmarhelixa.com/privacy-policy" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
