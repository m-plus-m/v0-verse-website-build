import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ProductBreadcrumbProps {
  productName: string
  categoryName: string
}

export function ProductBreadcrumb({ productName, categoryName }: ProductBreadcrumbProps) {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 border-b border-border/40 bg-background/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
            Products
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground" />
          <span className="font-medium text-foreground">{productName}</span>
          <span className="text-muted-foreground">/ {categoryName}</span>
        </div>
      </div>
    </div>
  )
}
