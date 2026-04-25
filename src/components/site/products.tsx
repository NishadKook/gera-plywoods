import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Product = {
  name: string;
  blurb: string;
  tags: string[];
  image: string;
};

const products: Product[] = [
  {
    name: "Marine-Grade Plywood",
    blurb:
      "BWP-treated, boil-proof plywood engineered for kitchens, bathrooms and outdoor joinery.",
    tags: ["BWP", "Waterproof", "ISI 710"],
    image:
      "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Commercial Plywood",
    blurb:
      "MR-grade ply for furniture, partitions and shop interiors. Smooth, dent-resistant face.",
    tags: ["MR", "Furniture grade", "ISI 303"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Block Board",
    blurb:
      "Solid pine-core block boards for doors, tabletops and long horizontal spans without bowing.",
    tags: ["Anti-bow", "Heavy-duty"],
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Decorative Veneers",
    blurb:
      "Natural teak, walnut and oak veneers — book-matched sheets with consistent grain.",
    tags: ["Teak", "Walnut", "Oak"],
    image:
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Laminates",
    blurb:
      "0.8mm and 1mm laminates in 400+ shades — matte, gloss, suede and textured finishes.",
    tags: ["Scratch-resistant", "400+ shades"],
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "MDF & HDF Boards",
    blurb:
      "Pre-laminated and plain MDF/HDF — perfect for CNC, routing and modular furniture.",
    tags: ["CNC ready", "Pre-lam"],
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=80",
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="section-grain border-t border-border bg-background/70 py-20 backdrop-blur-sm lg:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Our Range
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Plywood, boards & finishes for every project
          </h2>
          <p className="mt-4 text-muted-foreground">
            From contractors to homeowners, we stock the right grade for the
            right job — backed by branded warranties and ISI-marked quality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
