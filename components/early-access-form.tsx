"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string
          formId: string
          region: string
          target: string
        }) => void
      }
    }
  }
}

export function EarlyAccessForm() {
  const formContainerRef = useRef<HTMLDivElement>(null)
  const formCreated = useRef(false)

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.charset = "utf-8"
    script.async = true
    
    script.onload = () => {
      // Create form after script loads
      if (window.hbspt && formContainerRef.current && !formCreated.current) {
        formCreated.current = true
        window.hbspt.forms.create({
          portalId: "544981",
          formId: "e249ee32-f64b-4ce2-b52d-41b9809a50d7",
          region: "na1",
          target: "#hubspot-early-access-form-container"
        })
      }
    }
    
    document.body.appendChild(script)
    
    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {"We're"} opening early beta access to a limited group of teams who want to help shape the product. Get a preview from our team and a seat at the table before general release.
          </p>
          
          <div className="text-left max-w-md mx-auto mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-4">What you get:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#F15E24] to-[#C52F86] shrink-0" />
                <span>A hands-on preview of the Verse AI workflow before launch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#F15E24] to-[#C52F86] shrink-0" />
                <span>Direct input into how the product works for your team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#F15E24] to-[#C52F86] shrink-0" />
                <span>First access when beta opens</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div 
          id="hubspot-early-access-form-container" 
          ref={formContainerRef}
          className="hubspot-form-wrapper text-center"
        />
        
        <p className="text-center text-sm text-muted-foreground mt-8">
          Limited spots. {"We'll"} reach out to schedule your preview.
        </p>
      </div>
      
      <style jsx global>{`
        /* Reset HubSpot base styles */
        .hubspot-form-wrapper,
        .hubspot-form-wrapper * {
          box-sizing: border-box;
        }
        .hubspot-form-wrapper .hs-form {
          font-family: inherit;
          max-width: 100% !important;
          margin: 0 auto !important;
        }
        .hubspot-form-wrapper .hs-form-field {
          margin-bottom: 1.5rem;
          position: relative;
          text-align: left !important;
        }
        /* Labels - always visible above input */
        .hubspot-form-wrapper .hs-form-field label:not(.hs-form-booleancheckbox-display):not(.hs-error-msg),
        .hubspot-form-wrapper .hs-form-field > label:not(.hs-form-booleancheckbox-display):not(.hs-error-msg) {
          display: block !important;
          margin-bottom: 0.5rem !important;
          font-size: 0.875rem !important;
          font-weight: 500 !important;
          color: hsl(var(--foreground)) !important;
          position: static !important;
          transform: none !important;
          opacity: 1 !important;
          visibility: visible !important;
          text-align: left !important;
        }
        /* Input wrapper - keep two-column layout */
        .hubspot-form-wrapper .input,
        .hubspot-form-wrapper .hs-fieldtype-text .input,
        .hubspot-form-wrapper .hs-fieldtype-select .input,
        .hubspot-form-wrapper .hs-form-field .input {
          width: 100% !important;
          position: relative !important;
        }
        /* Form row layout - two fields per row */
        .hubspot-form-wrapper .form-columns-2 {
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 1rem !important;
          width: 100% !important;
        }
        .hubspot-form-wrapper .form-columns-2 > .hs-form-field {
          flex: 1 1 calc(50% - 0.5rem) !important;
          min-width: 200px !important;
          width: auto !important;
        }
        .hubspot-form-wrapper .form-columns-1 {
          width: 100% !important;
        }
        .hubspot-form-wrapper .form-columns-1 > .hs-form-field {
          width: 100% !important;
        }
        /* Input fields - distinct from labels */
        .hubspot-form-wrapper .hs-input,
        .hubspot-form-wrapper input.hs-input,
        .hubspot-form-wrapper input[type="text"].hs-input,
        .hubspot-form-wrapper input[type="email"].hs-input,
        .hubspot-form-wrapper input[type="tel"].hs-input,
        .hubspot-form-wrapper select.hs-input,
        .hubspot-form-wrapper textarea.hs-input {
          display: block !important;
          width: 100% !important;
          height: auto !important;
          min-height: 2.75rem !important;
          padding: 0.625rem 0.875rem !important;
          border: 1px solid rgba(255, 255, 255, 0.6) !important;
          border-radius: 0.375rem !important;
          background-color: rgba(255, 255, 255, 0.05) !important;
          color: hsl(var(--foreground)) !important;
          font-size: 0.875rem !important;
          line-height: 1.5 !important;
          transition: border-color 0.2s, background-color 0.2s !important;
        }
        .hubspot-form-wrapper .hs-input:focus,
        .hubspot-form-wrapper input.hs-input:focus,
        .hubspot-form-wrapper select.hs-input:focus,
        .hubspot-form-wrapper textarea.hs-input:focus {
          outline: none !important;
          border-color: #F15E24 !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
        }
        .hubspot-form-wrapper .hs-input::placeholder {
          color: rgba(255, 255, 255, 0.7) !important;
          opacity: 1 !important;
        }
        /* Submit button container - add spacing */
        .hubspot-form-wrapper .hs-submit {
          margin-top: 1.5rem !important;
        }
        /* Button styles with maximum specificity */
        .hubspot-form-wrapper .hs-button,
        .hubspot-form-wrapper .hs-button.primary,
        .hubspot-form-wrapper .hs-submit input,
        .hubspot-form-wrapper .hs-submit input.hs-button,
        .hubspot-form-wrapper .hs-submit input[type="submit"],
        .hubspot-form-wrapper input[type="submit"],
        .hubspot-form-wrapper button[type="submit"],
        .hubspot-form-wrapper .actions input {
          width: 100% !important;
          padding: 0.75rem 1.5rem !important;
          background: linear-gradient(to right, #F15E24, #C52F86) !important;
          background-color: transparent !important;
          color: white !important;
          font-weight: 500 !important;
          font-size: 0.875rem !important;
          border: none !important;
          border-radius: 0.375rem !important;
          cursor: pointer !important;
          transition: opacity 0.2s !important;
          text-shadow: none !important;
          box-shadow: none !important;
        }
        .hubspot-form-wrapper .hs-button:hover,
        .hubspot-form-wrapper .hs-submit input:hover,
        .hubspot-form-wrapper input[type="submit"]:hover {
          opacity: 0.9 !important;
          background: linear-gradient(to right, #F15E24, #C52F86) !important;
        }
        .hubspot-form-wrapper .hs-error-msgs,
        .hubspot-form-wrapper .hs-error-msgs label {
          margin-top: 0.25rem;
          font-size: 0.75rem !important;
          color: #ef4444 !important;
        }
        .hubspot-form-wrapper .submitted-message {
          text-align: center;
          padding: 3rem 1.5rem;
          color: hsl(var(--foreground)) !important;
        }
        /* Legal/Privacy policy text */
        .hubspot-form-wrapper .hs-richtext,
        .hubspot-form-wrapper .hs-richtext p,
        .hubspot-form-wrapper .legal-consent-container,
        .hubspot-form-wrapper .legal-consent-container p,
        .hubspot-form-wrapper .legal-consent-container span,
        .hubspot-form-wrapper .legal-consent-container label,
        .hubspot-form-wrapper .hs-form-booleancheckbox,
        .hubspot-form-wrapper .hs-form-booleancheckbox span,
        .hubspot-form-wrapper .hs-form-booleancheckbox p,
        .hubspot-form-wrapper .hs-form-booleancheckbox label,
        .hubspot-form-wrapper .hs-form-booleancheckbox-display,
        .hubspot-form-wrapper .hs-form-booleancheckbox-display span,
        .hubspot-form-wrapper .hs-form-booleancheckbox-display p,
        .hubspot-form-wrapper .hs-form-booleancheckbox-display label,
        .hubspot-form-wrapper .legal-consent-container .hs-richtext,
        .hubspot-form-wrapper .legal-consent-container .hs-richtext p,
        .hubspot-form-wrapper .hs-form .legal-consent-container,
        .hubspot-form-wrapper .hs-form .legal-consent-container * {
          color: #9ca3af !important;
          font-size: 0.875rem !important;
        }
        .hubspot-form-wrapper .legal-consent-container a,
        .hubspot-form-wrapper .hs-richtext a,
        .hubspot-form-wrapper .hs-form-booleancheckbox a,
        .hubspot-form-wrapper .hs-form-booleancheckbox-display a {
          color: #F15E24 !important;
          text-decoration: underline !important;
        }
        .hubspot-form-wrapper .legal-consent-container a:hover,
        .hubspot-form-wrapper .hs-richtext a:hover {
          color: #C52F86 !important;
        }
        .hubspot-form-wrapper select.hs-input {
          appearance: none !important;
          -webkit-appearance: none !important;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e") !important;
          background-position: right 0.5rem center !important;
          background-repeat: no-repeat !important;
          background-size: 1.5em 1.5em !important;
          padding-right: 2.5rem !important;
        }
        /* Checkbox styling - inline with label */
        .hubspot-form-wrapper .hs-form-booleancheckbox-display {
          display: flex !important;
          flex-direction: row !important;
          align-items: flex-start !important;
          gap: 0.75rem !important;
        }
        .hubspot-form-wrapper .hs-form-booleancheckbox-display input[type="checkbox"] {
          flex-shrink: 0 !important;
          margin-top: 0.25rem !important;
          width: 1rem !important;
          height: 1rem !important;
          accent-color: #F15E24 !important;
          order: -1 !important;
        }
        .hubspot-form-wrapper .hs-form-booleancheckbox-display span {
          flex: 1 !important;
        }
        .hubspot-form-wrapper input[type="checkbox"] {
          accent-color: #F15E24 !important;
          width: 1rem !important;
          height: 1rem !important;
        }
        /* Radio button styling for Yes/No fields */
        .hubspot-form-wrapper .hs-form-radio,
        .hubspot-form-wrapper .hs-form-radio-display {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 0.5rem !important;
        }
        .hubspot-form-wrapper .hs-form-radio-display input[type="radio"],
        .hubspot-form-wrapper input[type="radio"] {
          flex-shrink: 0 !important;
          width: 1rem !important;
          height: 1rem !important;
          accent-color: #F15E24 !important;
          order: -1 !important;
          margin: 0 !important;
        }
        .hubspot-form-wrapper .hs-form-radio-display span {
          order: 1 !important;
        }
        .hubspot-form-wrapper .inputs-list {
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
          display: flex !important;
          flex-direction: row !important;
          gap: 1.5rem !important;
        }
        .hubspot-form-wrapper .inputs-list li {
          margin: 0 !important;
        }
        .hubspot-form-wrapper .inputs-list label {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 0.5rem !important;
          cursor: pointer !important;
        }
      `}</style>
    </section>
  )
}
