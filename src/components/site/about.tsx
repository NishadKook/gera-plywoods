import Image from "next/image";
import { ShieldCheck, Truck, BadgeCheck, Hammer } from "lucide-react";

const stats = [
  { label: "Years in business", value: "40+" },
  { label: "Projects supplied", value: "12k+" },
  { label: "Brand partners", value: "25+" },
  { label: "Cities served", value: "30+" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "ISI-marked quality",
    text: "Every sheet we sell carries an ISI mark and brand warranty — no seconds, no compromises.",
  },
  {
    icon: Truck,
    title: "Same-day delivery",
    text: "Local delivery within the city by 6 PM if you order before noon. Outstation in 2–3 days.",
  },
  {
    icon: BadgeCheck,
    title: "Authorised dealer",
    text: "Authorised stockist for leading plywood, laminate and veneer brands across India.",
  },
  {
    icon: Hammer,
    title: "Trade-friendly pricing",
    text: "Special slabs for contractors, carpenters and architects. Bulk discounts on request.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1581782204324-37c19b81b73d?auto=format&fit=crop&w=1600&q=80"
              alt="Stacks of plywood sheets at the warehouse"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              About Gera Plywoods
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Four decades of stocking the good stuff.
            </h2>
            <p className="mt-5 text-muted-foreground">
              What started as a single timber yard in 1985 has grown into one
              of the region&apos;s most trusted plywood and laminate suppliers.
              We work directly with mills and brand principals so what reaches
              you is genuine, graded and priced fairly.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card p-4 text-card-foreground"
                >
                  <div className="text-2xl font-semibold tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="why"
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6 text-card-foreground"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
