import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FloatingNav } from "@/components/wedding/FloatingNav";
import { ArchMedia } from "@/components/wedding/ArchMedia";
import { FloralDivider } from "@/components/wedding/FloralDivider";
import { Unalome } from "@/components/wedding/Unalome";
import { Parallax } from "@/components/wedding/Parallax";
import { FloralPattern } from "@/components/wedding/FloralPattern";
import { Reveal } from "@/components/wedding/Reveal";
import { PhotoGrid } from "@/components/wedding/PhotoGrid";
import { content, type Lang } from "@/components/wedding/content";
import { MediaSlideshow, type MediaItem } from "@/components/wedding/MediaSlideshow";
import imgDanke from "@/assets/section-dankeschoen.jpg";
import imgFeier from "@/assets/section-hochzeitsfeier.jpg";
import imgTrauung from "@/assets/section-trauung.jpg";
import imgReise from "@/assets/section-hochzeitsreise.jpg";
import g01 from "@/assets/gallery/feier-01.jpg";
import g02 from "@/assets/gallery/feier-02.jpg";
import g03 from "@/assets/gallery/feier-03.jpg";
import g04 from "@/assets/gallery/feier-04.jpg";
import g05 from "@/assets/gallery/feier-05.jpg";
import g06 from "@/assets/gallery/feier-06.jpg";
import g07 from "@/assets/gallery/feier-07.jpg";
import g08 from "@/assets/gallery/feier-08.jpg";
import g09 from "@/assets/gallery/feier-09.jpg";
import t01 from "@/assets/gallery/trauung-01.jpg";
import t02 from "@/assets/gallery/trauung-02.jpg";
import t03 from "@/assets/gallery/trauung-03.jpg";
import t04 from "@/assets/gallery/trauung-04.jpg";
import t05 from "@/assets/gallery/trauung-05.jpg";
import t06 from "@/assets/gallery/trauung-06.jpg";
import t07 from "@/assets/gallery/trauung-07.jpg";
import t08 from "@/assets/gallery/trauung-08.jpg";
import t09 from "@/assets/gallery/trauung-09.jpg";
import t10 from "@/assets/gallery/trauung-10.jpg";
import t11 from "@/assets/gallery/trauung-11.jpg";
import t12 from "@/assets/gallery/trauung-12.jpg";
import r01 from "@/assets/gallery/reise-01.jpg";
import r02 from "@/assets/gallery/reise-02.jpg";
import r03 from "@/assets/gallery/reise-03.jpg";
import r04 from "@/assets/gallery/reise-04.jpg";
import r05 from "@/assets/gallery/reise-05.jpg";
import r06 from "@/assets/gallery/reise-06.jpg";
import r07 from "@/assets/gallery/reise-07.jpg";
import r08 from "@/assets/gallery/reise-08.jpg";
import r09 from "@/assets/gallery/reise-09.jpg";
import r10 from "@/assets/gallery/reise-10.jpg";
import r11 from "@/assets/gallery/reise-11.jpg";
import r12 from "@/assets/gallery/reise-12.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M & A — Unsere Hochzeit" },
      {
        name: "description",
        content:
          "Ein digitales Hochzeits-Editorial: Dankeschön, Hochzeitsfeier auf der Wurzelhütte, Trauung am Alpsee und unsere Hochzeitsreise.",
      },
      { property: "og:title", content: "M & A — Unsere Hochzeit" },
      {
        property: "og:description",
        content: "Dankeschön, Hochzeitsfeier, Trauung und Hochzeitsreise — unsere Erinnerungen.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("de");
  const t = content[lang];

  // Full-screen hero media placeholder (replace with video/GIF later).
  const heroMedia: MediaItem[] = [
    { type: "image", src: imgDanke, alt: "Brautpaar – Hochzeitsfilm" },
  ];
  const feierMedia: MediaItem[] = [
    { type: "image", src: imgFeier, alt: "Festlich gedeckte Tafel auf der Wurzelhütte" },
    { type: "image", src: imgDanke, alt: "Gäste feiern auf der Wurzelhütte" },
  ];
  const trauungMedia: MediaItem[] = [
    { type: "image", src: imgTrauung, alt: "Trauung am Alpsee" },
    { type: "image", src: imgReise, alt: "Brautpaar am Seeufer" },
  ];
  const reiseMedia: MediaItem[] = [
    { type: "image", src: imgReise, alt: "Brautpaar blickt in den Sonnenuntergang" },
    { type: "image", src: imgTrauung, alt: "Impression der Hochzeitsreise" },
  ];

  const feierSrcs = [g01, g02, g03, g04, g05, g06, g07, g08, g09];
  const trauungSrcs = [t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11, t12];
  const reiseSrcs = [r01, r02, r03, r04, r05, r06, r07, r08, r09, r10, r11, r12];

  const feierGallery = Array.from({ length: 30 }, (_, i) => ({
    src: feierSrcs[i % feierSrcs.length],
    alt: `Hochzeitsfeier Foto ${i + 1}`,
  }));
  const trauungGallery = Array.from({ length: 18 }, (_, i) => ({
    src: trauungSrcs[i % trauungSrcs.length],
    alt: `Trauung Foto ${i + 1}`,
  }));
  const reiseGallery = Array.from({ length: 12 }, (_, i) => ({
    src: reiseSrcs[i % reiseSrcs.length],
    alt: `Hochzeitsreise Foto ${i + 1}`,
  }));

  // Track which section is centered in the viewport so the nav can match its colour.
  const [active, setActive] = useState("intro");
  useEffect(() => {
    const ids = ["intro", "dankeschoen", "hochzeitsfeier", "trauung", "hochzeitsreise", "abschied"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const sectionBg: Record<string, string> = {
    intro: "var(--cream)",
    dankeschoen: "var(--cream)",
    hochzeitsfeier: "var(--sand)",
    trauung: "var(--taupe)",
    hochzeitsreise: "color-mix(in oklab, var(--clay) 25%, var(--cream))",
    abschied: "var(--taupe)",
  };
  const activeBg = sectionBg[active] ?? "var(--cream)";

  return (
    <div className="mx-auto min-h-screen w-full max-w-[560px] overflow-x-hidden bg-[var(--cream)]">
      <FloatingNav lang={lang} onLangChange={setLang} activeBg={activeBg} />

      {/* Intro — full-screen hero media (video/GIF placeholder) */}
      <section id="intro" className="relative h-[100svh] w-full overflow-hidden bg-[var(--cream)]">
        <MediaSlideshow items={heroMedia} eager />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(60,42,28,0.15)] via-transparent to-[rgba(60,42,28,0.4)]" />
      </section>

      {/* 1. Dankeschön */}
      <section id="dankeschoen" className="snap-section relative bg-[var(--cream)] px-4 pb-16 pt-6">
        <Parallax speed={0.16} className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <FloralPattern className="h-[150%] w-[150%] max-w-[560px] opacity-[0.12]" />
        </Parallax>
        <Reveal className="relative z-10 mx-auto max-w-[440px] px-3 pb-4 pt-6 text-center">
          <h2 className="text-center font-serif text-[clamp(1.75rem,7vw,2.75rem)] font-light italic leading-tight text-[var(--clay)]">
            {t.dankeschoenTitle}
          </h2>
          <div className="mt-6 space-y-2">
            {t.dankeschoenBody.map((p, i) => (
              <p key={i} className="font-sans text-[15px] font-light leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <BoundaryDivider />
      </section>

      {/* 2. Hochzeitsfeier */}
      <section id="hochzeitsfeier" className="snap-section relative bg-[var(--sand)] px-4 pb-16 pt-6">
        <Reveal className="pt-2 text-center">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">{t.feierOverlay}</p>
          <h2 className="mt-2 text-center font-serif text-[clamp(1.75rem,7vw,2.75rem)] font-light italic leading-tight text-[var(--clay)]">{t.feierTitle}</h2>
          <p className="mt-1 font-sans text-sm uppercase tracking-[0.2em] text-foreground/70">{t.feierSub}</p>
          <p className="mt-1 font-sans text-sm uppercase tracking-[0.2em] text-foreground/70">{t.feierDate}</p>
        </Reveal>
        <Reveal className="mt-8">
          <ArchMedia media={feierMedia} />
        </Reveal>
        <div className="mt-6 pb-2">
          <PhotoGrid images={feierGallery} />
        </div>
        <BoundaryDivider />
      </section>

      {/* 3. Trauung */}
      <section id="trauung" className="snap-section relative bg-[var(--taupe)] px-4 pb-16 pt-6">
        <Reveal className="pt-2 text-center">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">{t.trauungOverlay}</p>
          <h2 className="mt-2 text-center font-serif text-[clamp(1.75rem,7vw,2.75rem)] font-light italic leading-tight text-[var(--clay)]">{t.trauungTitle}</h2>
          <p className="mt-1 font-sans text-sm uppercase tracking-[0.2em] text-foreground/70">{t.trauungSub}</p>
          <p className="mt-1 font-sans text-sm uppercase tracking-[0.2em] text-foreground/70">{t.trauungDate}</p>
        </Reveal>
        <Reveal className="mt-8">
          <ArchMedia media={trauungMedia} />
        </Reveal>
        <div className="mt-6 pb-2">
          <PhotoGrid images={trauungGallery} />
        </div>
        <BoundaryDivider />
      </section>

      {/* 4. Hochzeitsreise */}
      <section id="hochzeitsreise" className="snap-section relative bg-[color-mix(in_oklab,var(--clay)_25%,var(--cream))] px-4 pb-16 pt-6">
        <Reveal className="pt-2 text-center">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">{t.reiseOverlay}</p>
          <h2 className="mt-2 text-center font-serif text-[clamp(1.75rem,7vw,2.75rem)] font-light italic leading-tight text-[var(--clay)]">{t.reiseTitle}</h2>
          <p className="mt-1 font-sans text-sm uppercase tracking-[0.2em] text-foreground/70">{t.reiseSub}</p>
          <p className="mt-1 px-4 font-sans text-sm uppercase tracking-[0.2em] text-foreground/70">{t.reiseDate}</p>
        </Reveal>
        <Reveal className="mt-8">
          <ArchMedia media={reiseMedia} />
        </Reveal>
        <div className="mt-6 pb-2">
          <PhotoGrid images={reiseGallery} />
        </div>
        <BoundaryDivider />
      </section>

      {/* 5. Abschied */}
      <section id="abschied" className="snap-section relative bg-[var(--taupe)] px-4 pb-40 pt-16 text-center">
        <Parallax speed={0.16} className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <FloralPattern className="h-[150%] w-[150%] max-w-[560px] opacity-[0.12]" />
        </Parallax>
        <Reveal className="relative z-10 px-4">
          <p className="font-serif text-4xl font-light italic leading-snug text-[var(--clay)]">
            {t.farewell}
          </p>
          <p className="mt-6 font-calligraphy text-7xl font-bold leading-tight text-[var(--clay)]">
            Paola &amp; Robin Macias Bauerfeind
          </p>
        </Reveal>
      </section>
    </div>
  );
}

/** Decorative floral divider matching the one on the final page. */
function BoundaryDivider() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-1/2">
      <FloralDivider />
    </div>
  );
}

