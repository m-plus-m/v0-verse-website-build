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

export function DemoForm() {
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
          formId: "4194ac09-d493-4ad8-af5c-1dcd76066f45",
          region: "na1",
          target: "#hubspot-form-container"
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
    <section className="py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <p className="text-center text-lg text-muted-foreground mb-12 leading-relaxed">
          Find out how teams are using Discover, Explore and Plan to get from audience insight to media plan faster — without stitching together five tools to get there.
        </p>
        
        <div 
          id="hubspot-form-container" 
          ref={formContainerRef}
          className="hubspot-form-wrapper"
        />
        
        <p className="text-center text-sm text-muted-foreground mt-8">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
      
      <style jsx global>{`
        .hubspot-form-wrapper .hs-form {
          font-family: inherit;
        }
        .hubspot-form-wrapper .hs-form-field {
          margin-bottom: 1.5rem;
        }
        .hubspot-form-wrapper .hs-form-field label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: hsl(var(--foreground));
        }
        .hubspot-form-wrapper .hs-input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border: 1px solid hsl(var(--border) / 0.6);
          border-radius: 0.375rem;
          background-color: hsl(var(--card) / 0.5);
          color: hsl(var(--foreground));
          font-size: 0.875rem;
          transition: border-color 0.2s;
        }
        .hubspot-form-wrapper .hs-input:focus {
          outline: none;
          border-color: hsl(var(--accent));
        }
        .hubspot-form-wrapper .hs-input::placeholder {
          color: hsl(var(--muted-foreground));
        }
        .hubspot-form-wrapper .hs-button,
        .hubspot-form-wrapper .hs-submit input[type="submit"],
        .hubspot-form-wrapper input[type="submit"] {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(to right, #F15E24, #C52F86) !important;
          color: white !important;
          font-weight: 500;
          font-size: 0.875rem;
          border: none !important;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .hubspot-form-wrapper .hs-button:hover,
        .hubspot-form-wrapper .hs-submit input[type="submit"]:hover,
        .hubspot-form-wrapper input[type="submit"]:hover {
          opacity: 0.9;
        }
        .hubspot-form-wrapper .hs-error-msgs {
          margin-top: 0.25rem;
          font-size: 0.75rem;
          color: #ef4444;
        }
        .hubspot-form-wrapper .submitted-message {
          text-align: center;
          padding: 3rem 1.5rem;
          color: hsl(var(--foreground));
        }
        .hubspot-form-wrapper .hs-richtext,
        .hubspot-form-wrapper .legal-consent-container,
        .hubspot-form-wrapper .hs-form-booleancheckbox-display,
        .hubspot-form-wrapper .hs-form-booleancheckbox-display span,
        .hubspot-form-wrapper .hs-form-booleancheckbox-display p,
        .hubspot-form-wrapper .legal-consent-container .hs-richtext p {
          color: hsl(var(--muted-foreground)) !important;
          font-size: 0.875rem;
        }
        .hubspot-form-wrapper .legal-consent-container a,
        .hubspot-form-wrapper .hs-richtext a {
          color: #F15E24 !important;
          text-decoration: underline;
        }
        .hubspot-form-wrapper .legal-consent-container a:hover,
        .hubspot-form-wrapper .hs-richtext a:hover {
          color: #C52F86 !important;
        }
        .hubspot-form-wrapper select.hs-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
      `}</style>
    </section>
  )
}
