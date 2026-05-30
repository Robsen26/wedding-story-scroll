import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FloatingNav } from "@/components/wedding/FloatingNav";
import { ArchMedia } from "@/components/wedding/ArchMedia";
import { FloralDivider } from "@/components/wedding/FloralDivider";
import { FloralSprig } from "@/components/wedding/FloralSprig";
import { Reveal } from "@/components/wedding/Reveal";
import { content, type Lang } from "@/components/wedding/content";
import type { MediaItem } from "@/components/wedding/MediaSlideshow";
import imgDanke from "@/assets/section-dankeschoen.jpg";
import imgFeier from "@/assets/section-hochzeitsfeier.jpg";
import imgTrauung from "@/assets/section-trauung.jpg";
import imgReise from "@/assets/section-hochzeitsreise.jpg";

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

  // Each section hosts a swipeable slideshow. Replace / extend these arrays with
  // your own photos, GIFs (type "gif") or videos (type "video", with optional poster).
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
      <Section
        id="hochzeitsfeier"
        bg="var(--sand)"
        media={feierMedia}
        overlay={t.feierOverlay}
        title={t.feierTitle}
        sub={t.feierSub}
      />

      {/* 3. Trauung */}
      <Section
        id="trauung"
        bg="var(--taupe)"
        media={trauungMedia}
        overlay={t.trauungOverlay}
        title={t.trauungTitle}
        sub={t.trauungSub}
      />

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
        <FloralDivider className="py-10" />
        <Reveal className="px-4 pb-20 text-center">
          <FloralSprig className="mb-5" />
          <p className="font-serif text-4xl font-light italic leading-snug text-[var(--clay)]">
            {t.farewell}
          </p>
          <FloralDivider className="pt-10" />
        </Reveal>
      </section>
    </div>
  );
}

interface SectionProps {
  id: string;
  bg: string;
  media: MediaItem[];
  overlay: string;
  title: string;
  sub: string;
}

function Section({ id, bg, media, overlay, title, sub }: SectionProps) {
  return (
    <section id={id} className="snap-section px-4 pt-6" style={{ backgroundColor: bg }}>
      <Reveal className="pt-2 text-center">
        <FloralSprig className="pb-4" />
        <p className="font-sans text-[11px] uppercase tracking-luxe text-muted-foreground">{overlay}</p>
        <h2 className="mt-2 font-serif text-5xl font-light italic text-[var(--clay)]">{title}</h2>
        <p className="mt-1 font-sans text-sm tracking-[0.2em] text-foreground/70">{sub}</p>
      </Reveal>
      <Reveal className="mt-8">
        <ArchMedia media={media} />
      </Reveal>
      <FloralDivider className="py-10" />
    </section>
  );
}
