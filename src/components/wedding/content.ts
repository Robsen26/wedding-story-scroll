export type Lang = "de" | "es";

export const sectionIds = ["dankeschoen", "hochzeitsfeier", "trauung", "hochzeitsreise"] as const;
export type SectionId = (typeof sectionIds)[number];

export const navLabels: Record<Lang, Record<SectionId, string>> = {
  de: {
    dankeschoen: "Dankeschön",
    hochzeitsfeier: "Hochzeitsfeier",
    trauung: "Trauung",
    hochzeitsreise: "Hochzeitsreise",
  },
  es: {
    dankeschoen: "Gracias",
    hochzeitsfeier: "Ceremonia",
    trauung: "Boda Civil",
    hochzeitsreise: "Luna de miel",
  },
};

export const content = {
  de: {
    intro: "M & A",
    introSub: "Unsere Hochzeit",
    dankeschoenOverlay: "Danke",
    dankeschoenTitle: "Herzlicher Dank!",
    dankeschoenBody: [
      "Unser Hochzeitstag war traumhaft und wird immer in unserer Erinnerung bleiben.",
      "Vielen Dank, dass du diesen Tag mit uns gefeiert und unvergesslich gemacht hast!",
      "Wir möchten uns auch von Herzen für die vielen helfenden Hände bedanken, sowie die lieben Glückwünsche von allen, die an uns gedacht haben!",
      "Dein Geschenk ist eine große Unterstützung für unseren Traum einer laaangen Hochzeitsreise, das schätzen wir sehr!",
      "Hier ein paar Impressionen zur Erinnerung an unsere Hochzeitsfeier auf der Wurzelhütte, unserer standesamtlichen Trauung auf dem Alpsee sowie unserer Hochzeitsreise.",
    ],
    feierOverlay: "Unsere",
    feierTitle: "Hochzeitsfeier",
    feierSub: "IN DER WURZELHÜTTE",
    feierDate: "09. AUGUST 2025",
    trauungOverlay: "Unsere",
    trauungTitle: "Standesamtliche Trauung",
    trauungSub: "AUF UNSEREM ALPSEE",
    trauungDate: "03. JULI 2025",
    reiseOverlay: "Unsere",
    reiseTitle: "Hochzeitsreise",
    reiseSub: "EIN ABENTEUER IN",
    reiseDate: "VAE – SINGAPUR – INDONESIEN – KOLUMBIEN – COSTA RICA",
    farewell: "Wir freuen uns, dich bald wiederzusehen!",
  },
  es: {
    intro: "M & A",
    introSub: "Nuestra boda",
    dankeschoenOverlay: "Gracias",
    dankeschoenTitle: "¡Gracias de corazón!",
    dankeschoenBody: [
      "Nuestro día de boda fue de ensueño y quedará para siempre en nuestro recuerdo.",
      "¡Muchas gracias por celebrar este día con nosotros y hacerlo inolvidable!",
      "También queremos agradecer de corazón a las muchas manos que ayudaron, así como las preciosas felicitaciones de todos los que pensaron en nosotros.",
      "¡Tu regalo es un gran apoyo para nuestro sueño de una laaarga luna de miel, lo apreciamos muchísimo!",
      "Aquí algunas impresiones como recuerdo de nuestra fiesta en la cabaña Wurzelhütte, nuestra boda civil en el lago del Alpsee y nuestra luna de miel.",
    ],
    feierOverlay: "Nuestra",
    feierTitle: "Ceremonia",
    feierSub: "EN LA WURZELHÜTTE",
    feierDate: "09 DE AGOSTO DEL 2025",
    trauungOverlay: "Nuestra",
    trauungTitle: "Boda Civil",
    trauungSub: "EN NUESTRO LAGO EL ALPSEE",
    trauungDate: "03 DE JULIO DEL 2025",
    reiseOverlay: "Nuestra",
    reiseTitle: "Luna de miel",
    reiseSub: "UNA AVENTURA EN",
    reiseDate: "EAU – SINGAPUR – INDONESIA – COLOMBIA – COSTA RICA",
    farewell: "¡Esperamos volver a verte pronto!",
  },
} as const;