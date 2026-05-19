import { Quote } from "lucide-react"

// Placeholder testimonials - replace with actual testimonials
const testimonials = [
  {
    quote: "Testimonial quote placeholder. This will be replaced with actual customer feedback.",
    author: "Author Name",
    title: "Title",
    company: "Company Name",
  },
  {
    quote: "Testimonial quote placeholder. This will be replaced with actual customer feedback.",
    author: "Author Name",
    title: "Title",
    company: "Company Name",
  },
  {
    quote: "Testimonial quote placeholder. This will be replaced with actual customer feedback.",
    author: "Author Name",
    title: "Title",
    company: "Company Name",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-6 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-foreground mb-4">
          What our customers say
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See how teams are transforming their audience intelligence workflow with Verse.
        </p>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border/40 bg-card/50 p-8"
            >
              <Quote className="h-8 w-8 text-[#F15E24]/40 mb-4" />
              <blockquote className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="border-t border-border/40 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
