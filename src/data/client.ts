/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-07-19T08:45:37.440Z
 * Kundennummer: 248
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "AllroundMove",
  branche: "",
  ort: "Warendorf",
  slogan: "professionell & zuverlässig",
  adresse: "Nordfeld 14, 48231 Warendorf",
  maps_url: "https://www.google.com/maps/place/?q=place_id:ChIJjblDk4ebuUcRMWbnDAR7K2s",
  telefon: "01520 7378376",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/konzepte/autofit/autofit_logo.webp",
  standort_bild: "https://r2.kuwezu.de/kunden/248/standort.webp",

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/248/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: " — professionell & zuverlässig",
    ueberschriftHighlight: "professionell & zuverlässig",
    untertext: "Ihr Partner für alle Belange rund um  in Warendorf und Umgebung.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/248/1784450684296-oldtimer_lenkrad.jpg",
    ueberschrift: "AllroundMove — Ihr Partner in Warendorf",
    text1: "Als erfahrener -Betrieb in Warendorf bieten wir unseren Kunden seit Jahren zuverlässigen Service und kompetente Beratung. Mit Fachkompetenz und modernen Methoden lösen wir Ihre Anliegen effizient und zuverlässig.",
    text2: "Wir setzen auf höchste Qualität, transparente Preise und persönlichen Service — damit Sie rundum zufrieden sind.",
    tags: ["Qualität", "Zuverlässigkeit", "Faire Preise", "Erfahrung"],
    stats: [],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "hu-au",
      title: "HU/AU",
      bild: "https://r2.kuwezu.de/bibliothek/HU/AU/1777878273976-leistung_tu_v.webp",
      description: "Professionelle HU/AU — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "klimaservice",
      title: "Klimaservice",
      bild: "https://r2.kuwezu.de/bibliothek/Klimaservice/1777878264706-klimaanlagen-service.webp",
      description: "Professionelle Klimaservice — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "karosserie",
      title: "Karosserie",
      bild: "https://r2.kuwezu.de/bibliothek/Karosserie/1777878013146-leistung_karosserie.webp",
      description: "Professionelle Karosserie — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    }
  ] as { slug: string; title: string; bild: string; description: string; highlights: string[] }[],

  // ── Karriere ───────────────────────────────────────────────────────────────
  // Kundenpflegbar (Stammdaten) bzw. künftig autoservice.jobs-Feed — keine
  // erfundenen Platzhalter-Stellen mehr. jobs: [] → Template blendet
  // "Offene Stellen" aus; enabled: false → ganze Section entfällt.
  karriere: {
    enabled: true as boolean,
    jobs: [

    ] as { title: string; type: string; experience: string }[],
    benefits: null as { title: string; text: string }[] | null,
    // null = In-Page-Anker #kontakt; http(s)-URL öffnet im neuen Tab
    buttonUrl: null as string | null,
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: false as boolean,
  // Wiederkehrende TÜV-/HU-Termine — leer/null: kein Infoblock auf der Seite
  tuev_slots: null as { day: string; from: string; to: string }[] | null,
  tuev_hinweis: null as string | null,
  oeffnungszeiten: {
    mo_fr: "08:00 – 20:00" as string,
    sa:    "08:00 – 20:00" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 08:00 – 20:00", "Sa: 08:00 – 20:00"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,

  // ── Impressum / Rechtsangaben (Migration 095) ───────────────────────────────
  impressum: {} as {
    inhaber?: string; rechtsform?: string; ust_id?: string; handelsregister?: string;
    registergericht?: string; aufsichtsbehoerde?: string; verantwortlicher?: string;
  },
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
