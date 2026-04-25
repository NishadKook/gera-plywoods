"use client";

import { MapPin, Phone, Mail, Clock, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-grain border-t border-border bg-background/70 py-20 backdrop-blur-sm lg:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Visit the showroom
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Drop by, call, or send us a list.
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Bring your cutting list and we&apos;ll get you sorted. Walk-ins
              welcome — we keep tea hot for site engineers and contractors.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium">Showroom &amp; warehouse</div>
                  <div className="text-sm text-muted-foreground">
                    Gera Plywoods, Main Road, City — replace with full address.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium">Call us</div>
                  <a
                    href="tel:+910000000000"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    +91 00000 00000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium">Email</div>
                  <a
                    href="mailto:hello@geraplywoods.example"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    hello@geraplywoods.example
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium">Hours</div>
                  <div className="text-sm text-muted-foreground">
                    Mon – Sat · 9:30 AM – 8:00 PM &middot; Sun closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-semibold tracking-tight">
              Request a quote
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us what you need. We&apos;ll come back within a working day.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Your name" id="name" placeholder="Full name" />
              <Field
                label="Phone"
                id="phone"
                type="tel"
                placeholder="+91 9XXXXXXXXX"
              />
              <Field
                className="sm:col-span-2"
                label="Email"
                id="email"
                type="email"
                placeholder="you@example.com"
              />
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="E.g. 10 sheets 19mm BWP ply, 5 sheets 1mm laminate (matte)…"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full gap-3">
              Send enquiry <MoveRight className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Or just call us — fastest way to lock pricing.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}
