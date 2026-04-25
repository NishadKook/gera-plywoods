import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselProgress,
  ScrollXCarouselWrap,
} from "@/components/ui/scroll-x-carousel";
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "@/components/ui/reveal-on-hover";
import { Badge } from "@/components/ui/badge";

type Slide = {
  id: string;
  title: string;
  description: string;
  services: string[];
  type: string;
  imageUrl: string;
};

const SLIDES: Slide[] = [
  {
    id: "slide-1",
    title: "Modular Kitchen",
    description:
      "BWP marine ply carcass with high-pressure laminate finish. Boil-proof, dent-resistant — built for daily use.",
    services: ["BWP plywood", "Laminate", "Hardware"],
    type: "Residential",
    imageUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "slide-2",
    title: "Walk-in Wardrobe",
    description:
      "Block-board carcass with book-matched walnut veneer shutters. A 4BHK in Bandra — handed over in 18 days.",
    services: ["Block board", "Veneer", "Edge banding"],
    type: "Bedroom",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "slide-3",
    title: "Office Workstations",
    description:
      "Pre-laminated MDF cubicles with acoustic backboards. 60-seat office, scoped, supplied and installed in 14 days.",
    services: ["MDF", "Pre-lam", "Acoustic"],
    type: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "slide-4",
    title: "Restaurant Fit-out",
    description:
      "Solid teak veneer panels with hand-routed moldings. Warm, traditional feel guests remember and post about.",
    services: ["Teak veneer", "Plywood", "Routing"],
    type: "Hospitality",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "slide-5",
    title: "Designer Doors",
    description:
      "Solid block-board core flush doors with matte veneer face. Custom sizes; fire-retardant variants on request.",
    services: ["Flush doors", "Veneer", "Hardware"],
    type: "Doors",
    imageUrl:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "slide-6",
    title: "Living Room Set",
    description:
      "TV unit, coffee table and bookshelf — all from the same Gurjan ply, finished in matte laminate for a quiet, modern look.",
    services: ["Gurjan ply", "Matte lam", "Hardware"],
    type: "Residential",
    imageUrl:
      "https://images.unsplash.com/photo-1493663284031-b7e3aaa4a1bf?q=80&w=1600&auto=format&fit=crop",
  },
];

export function Showcase() {
  return (
    <section id="showcase">
      <div className="container mx-auto px-4 pt-20 lg:pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Our Craft
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Spaces brought to life with our wood
          </h2>
          <p className="mt-4 text-muted-foreground">
            Scroll on. Each project below was supplied and finished with stock
            from our shelves — kitchens to restaurants, doors to wardrobes.
          </p>
        </div>
      </div>

      <ScrollXCarousel className="h-[200vh]">
        <ScrollXCarouselContainer className="h-dvh place-content-center flex flex-col gap-8 py-12">
          <div className="pointer-events-none absolute inset-[0_auto_0_0] z-10 h-[103%] w-[12vw] bg-[linear-gradient(90deg,_var(--background)_35%,_transparent)]" />
          <div className="pointer-events-none absolute inset-[0_0_0_auto] z-10 h-[103%] w-[15vw] bg-[linear-gradient(270deg,_var(--background)_35%,_transparent)]" />

          <ScrollXCarouselWrap className="flex space-x-8 [&>*:first-child]:ml-8">
            {SLIDES.map((slide) => (
              <CardHoverReveal
                key={slide.id}
                className="min-w-[78vw] rounded-xl border shadow-xl md:min-w-[42vw] xl:min-w-[32vw]"
              >
                <CardHoverRevealMain>
                  <img
                    alt={slide.title}
                    src={slide.imageUrl}
                    className="size-full aspect-square object-cover"
                  />
                </CardHoverRevealMain>
                <CardHoverRevealContent className="space-y-4 rounded-2xl bg-[rgba(20,12,5,.55)] p-4 backdrop-blur-3xl">
                  <div className="space-y-2">
                    <h3 className="text-sm text-white/80">Type</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-full bg-amber-700 capitalize">
                        {slide.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm text-white/80">Materials used</h3>
                    <div className="flex flex-wrap gap-2">
                      {slide.services.map((service) => (
                        <Badge
                          key={service}
                          className="rounded-full capitalize"
                          variant="secondary"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 space-y-2">
                    <h3 className="font-medium capitalize text-white">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-white/80">{slide.description}</p>
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
            ))}
          </ScrollXCarouselWrap>

          <ScrollXCarouselProgress
            className="mx-8 h-1 overflow-hidden rounded-full bg-secondary"
            progressStyle="size-full bg-primary rounded-full"
          />
        </ScrollXCarouselContainer>
      </ScrollXCarousel>
    </section>
  );
}
