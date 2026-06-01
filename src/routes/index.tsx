import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FloatingNav } from "@/components/wedding/FloatingNav";
import { ArchMedia } from "@/components/wedding/ArchMedia";
import { FloralDivider } from "@/components/wedding/FloralDivider";
import { Reveal } from "@/components/wedding/Reveal";
import { PhotoGrid } from "@/components/wedding/PhotoGrid";
import { content, type Lang } from "@/components/wedding/content";
import type { MediaItem } from "@/components/wedding/MediaSlideshow";
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

  const dankeMedia: MediaItem[] = [
    { type: "image", src: imgDanke, alt: "Brautpaar in einer Bergwiese" },
    { type: "image", src: imgTrauung, alt: "Trauung am Alpsee" },
    { type: "image", src: imgFeier, alt: "Festlich gedeckte Tafel auf der Wurzelhütte" },
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

  const feierGallery = [
    { src: g01, alt: "Erster Tanz" },
    { src: g02, alt: "Gedeckte Tafel" },
    { src: g03, alt: "Hochzeitstorte" },
    { src: g04, alt: "Feiernde Gäste" },
    { src: g05, alt: "Spaziergang im Sonnenuntergang" },
    { src: g06, alt: "Ringe Detail" },
    { src: g07, alt: "Unter dem Blumenbogen" },
    { src: g08, alt: "Anstoßen" },
    { src: g09, alt: "Getting Ready" },
  ];

  const trauungGallery = [
    { src: t01, alt: "Ringtausch" },
    { src: t02, alt: "Brautstrauß" },
    { src: t03, alt: "Unterschrift" },
    { src: t04, alt: "Einzug" },
    { src: t05, alt: "Bräutigam Detail" },
    { src: t06, alt: "Gelübde" },
    { src: t07, alt: "Konfetti" },
    { src: t08, alt: "Erster Kuss" },
    { src: t09, alt: "Urkunde" },
    { src: t10, alt: "Seeufer Spaziergang" },
    { src: t11, alt: "Schuhe Detail" },
    { src: t12, alt: "In Liebe" },
  ];

  const reiseGallery = [
    { src: r01, alt: "Sonnenuntergang" },
    { src: r02, alt: "Gassenbummel" },
    { src: r03, alt: "Café" },
    { src: r04, alt: "Lavendelfeld" },
    { src: r05, alt: "Küste" },
    { src: r06, alt: "Gelato" },
    { src: r07, alt: "Hängematte" },
    { src: r08, alt: "Vespa Tour" },
    { src: r09, alt: "Markt" },
    { src: r10, alt: "Infinity Pool" },
    { src: r11, alt: "Tempel" },
    { src: r12, alt: "Sonnenaufgang" },
  ];

  return (
    <div className="mx-auto min-h-screen w-full max-w-[560px] overflow-x-hidden bg-[var(--cream)]">
      <FloatingNav lang={lang} onLangChange={setLang} />

      {/* Intro */}
      <section className="snap-section flex min-h-[78svh] flex-col items-center justify-center bg-[var(--cream)] px-6 pt-28 text-center">
        <Reveal>
          <FloralSprig />
          <p className="mt-2 font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">
            {t.introSub}
          </p>
          <h1 className="mt-3 font-script text-7xl leading-none text-[var(--clay)]">{t.intro}</h1>
        </Reveal>
      </section>

      {/* 1. Dankeschön */}
      <section id="dankeschoen" className="snap-section bg-[var(--cream)] px-4 pt-6">
        <Reveal>
          <ArchMedia
            media={dankeMedia}
            eager
            overlayBottom={
              <div>
                <p className="font-sans text-[10px] uppercase tracking-luxe">{t.dankeschoenOverlay}</p>
                <p className="font-script text-6xl leading-none">{t.intro}</p>
              </div>
            }
          />
        </Reveal>
        <FloralDivider className="py-10" />
        <Reveal className="mx-auto max-w-[440px] px-3 pb-4 text-center">
          <FloralSprig className="mb-4" />
          <h2 className="font-serif text-5xl font-light italic leading-tight text-[var(--clay)]">
            {t.dankeschoenTitle}
          </h2>
          <div className="mt-6 space-y-5">
            {t.dankeschoenBody.map((p, i) => (
              <p key={i} className="font-sans text-[15px] font-light leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <FloralDivider className="py-10" />
      </section>

      {/* 2. Hochzeitsfeier */}
      <section id="hochzeitsfeier" className="snap-section bg-[var(--sand)] px-4 pt-6">
        <Reveal className="pt-2 text-center">
          <FloralSprig className="pb-4" />
          <p className="font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">{t.feierOverlay}</p>
          <h2 className="mt-2 font-serif text-5xl font-light italic text-[var(--clay)]">{t.feierTitle}</h2>
          <p className="mt-1 font-sans text-sm tracking-[0.2em] text-foreground/70">{t.feierSub}</p>
        </Reveal>
        <Reveal className="mt-8">
          <ArchMedia media={feierMedia} />
        </Reveal>
        <Reveal className="mt-6 px-2 text-center">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">
            {lang === "de" ? "Impressionen" : "Impresiones"}
          </p>
        </Reveal>
        <div className="mt-3 pb-6">
          <PhotoGrid images={feierGallery} />
        </div>
        <FloralDivider className="py-10" />
      </section>

      {/* 3. Trauung */}
      <section id="trauung" className="snap-section bg-[var(--taupe)] px-4 pt-6">
        <Reveal className="pt-2 text-center">
          <FloralSprig className="pb-4" />
          <p className="font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">{t.trauungOverlay}</p>
          <h2 className="mt-2 font-serif text-5xl font-light italic text-[var(--clay)]">{t.trauungTitle}</h2>
          <p className="mt-1 font-sans text-sm tracking-[0.2em] text-foreground/70">{t.trauungSub}</p>
        </Reveal>
        <Reveal className="mt-8">
          <ArchMedia media={trauungMedia} />
        </Reveal>
        <Reveal className="mt-6 px-2 text-center">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">
            {lang === "de" ? "Impressionen" : "Impresiones"}
          </p>
        </Reveal>
        <div className="mt-3 pb-6">
          <PhotoGrid images={trauungGallery} />
        </div>
        <FloralDivider className="py-10" />
      </section>

      {/* 4. Hochzeitsreise */}
      <section id="hochzeitsreise" className="snap-section bg-[var(--clay)]/25 px-4 pt-6">
        <Reveal className="pt-2 text-center">
          <FloralSprig className="pb-4" />
          <p className="font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">
            {t.reiseOverlay}
          </p>
          <h2 className="mt-2 font-serif text-5xl font-light italic text-[var(--clay)]">{t.reiseTitle}</h2>
          <p className="mt-1 font-sans text-sm tracking-[0.2em] text-foreground/70">{t.reiseSub}</p>
        </Reveal>
        <Reveal className="mt-8">
          <ArchMedia
            media={reiseMedia}
            overlayBottom={
              <p className="font-script text-5xl leading-none">{t.intro}</p>
            }
          />
        </Reveal>
        <Reveal className="mt-6 px-2 text-center">
          <p className="font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">
            {lang === "de" ? "Impressionen" : "Impresiones"}
          </p>
        </Reveal>
        <div className="mt-3 pb-6">
          <PhotoGrid images={reiseGallery} />
        </div>
        <FloralDivider className="py-10" />
        <Reveal className="px-4 pb-20 text-center">
          <FloralSprig className="mb-5" />
          <p className="font-serif text-4xl font-light italic leading-snug text-[var(--clay)]">
            {t.farewell}
          </p>
          <FloralDivider className="py-6" />
          <p className="font-script text-5xl leading-tight text-[var(--clay)]">
            Paola & Robin
          </p>
          <p className="mt-3 font-sans text-sm font-bold uppercase tracking-[0.25em] text-foreground/70">
            Macias Bauerfeind
          </p>
        </Reveal>
      </section>
    </div>
  );
}

