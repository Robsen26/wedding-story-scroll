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
    hochzeitsfeier: "La fiesta",
    trauung: "La boda",
    hochzeitsreise: "Luna de miel",
  },
};

export const content = {
  de: {
    intro: "M & A",
    introSub: "Unsere Hochzeit",
    dankeschoenOverlay: "Danke",
    dankeschoenTitle: "Es war traumhaft!",
    dankeschoenBody: [
      "Unser Hochzeitstag war ein absoluter Traum und wird immer in unserer Erinnerung bleiben.",
      "Vielen Dank, dass du diesen Tag mit uns gefeiert und unvergesslich gemacht hast!",
      "Wir möchten uns auch von Herzen für die vielen helfenden Hände bedanken, sowie die lieben Glückwünsche von allen, die an uns gedacht haben!",
      "Dein Geschenk ist eine große Unterstützung für unseren Traum einer laaangen Hochzeitsreise, das schätzen wir sehr!",
      "Hier ein paar Impressionen zur Erinnerung an unsere Hochzeitsfeier auf der Wurzelhütte, unserer standesamtlichen Trauung auf dem Alpsee sowie unserer Hochzeitsreise.",
    ],
    feierOverlay: "Die Feier",
    feierTitle: "Hochzeitsfeier",
    feierSub: "Wurzelhütte",
    trauungOverlay: "Das Ja-Wort",
    trauungTitle: "Trauung",
    trauungSub: "Alpsee",
    reiseOverlay: "Das Abenteuer",
    reiseTitle: "Hochzeitsreise",
    reiseSub: "Unsere Reise zu zweit",
    farewell: "Wir freuen uns, dich bald wiederzusehen!",
  },
  es: {
    intro: "M & A",
    introSub: "Nuestra boda",
    dankeschoenOverlay: "Gracias",
    dankeschoenTitle: "¡Fue de ensueño!",
    dankeschoenBody: [
      "Nuestro día de boda fue un sueño absoluto y quedará para siempre en nuestro recuerdo.",
      "¡Muchas gracias por celebrar este día con nosotros y hacerlo inolvidable!",
      "También queremos agradecer de corazón a las muchas manos que ayudaron, así como las preciosas felicitaciones de todos los que pensaron en nosotros.",
      "¡Tu regalo es un gran apoyo para nuestro sueño de una laaarga luna de miel, lo apreciamos muchísimo!",
      "Aquí algunas impresiones como recuerdo de nuestra fiesta en la Wurzelhütte, nuestra boda civil en el Alpsee y nuestra luna de miel.",
    ],
    feierOverlay: "La fiesta",
    feierTitle: "La fiesta",
    feierSub: "Wurzelhütte",
    trauungOverlay: "El sí, quiero",
    trauungTitle: "La boda",
    trauungSub: "Alpsee",
    reiseOverlay: "La aventura",
    reiseTitle: "Luna de miel",
    reiseSub: "Nuestro viaje juntos",
    farewell: "¡Esperamos volver a verte pronto!",
  },
} as const;