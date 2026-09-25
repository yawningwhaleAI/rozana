/**
 * content.ts — the single source of truth for all copy on the page.
 * Edit text here; components never hardcode strings.
 * Wrap a word/phrase in [[double brackets]] to give it the yellow highlighter.
 */

export const site = {
  name: "Rozana",
  tagline: "Everyday, better.",
  email: "hello.rozana@gmail.com",
  instagram: "https://instagram.com/rozana",
  metaTitle: "Rozana — Everyday, better.",
  metaDescription:
    "Everyday home and kitchen paper essentials — better made, honestly labelled, and built to be seen. Join the launch waitlist in Delhi NCR.",
};

export const announcement = {
  text: "Launching in Delhi NCR",
  detail: "First 500 waitlist members get the launch box at 20% off.",
  cta: "Join the waitlist",
  href: "#waitlist",
};

export const nav = {
  links: [
    { label: "Why Rozana", href: "#story" },
    { label: "The number", href: "#spec" },
    { label: "Products", href: "#products" },
    { label: "Our team", href: "#people" },
    { label: "Talk to us", href: "#contact" },
  ],
  cta: { label: "Join the waitlist", href: "#waitlist" },
};

export const hero = {
  eyebrow: "Home & kitchen paper essentials",
  headline: "Nobody remembers the [[paper]] they bought.",
  sub: "We're changing that. Everyday home and kitchen essentials — better made, honestly labelled, and built to be seen.",
  emailPlaceholder: "you@example.com",
  cta: "Join the waitlist",
  perk: "First 500 members get the launch box at 20% off.",
  trust: "Made by the team behind Origami & 10 On Tissues.",
  imageAlt:
    "The Rozana range — Pocket Napkins, Facial Tissues, Party Napkins, Toilet Rolls and Kitchen Roll, each with its illustrated pack and tagline.",
  stripCaption: "One range. Every everyday mess, sorted.",
};

// The real pack taglines — used for the scrolling ticker.
export const ticker = [
  "Strong for real life.",
  "Rozana ke liye, hamesha yahan.",
  "Good food deserves good napkins.",
  "Essentials, better packed.",
  "Less mess. More good food.",
  "Khana freshh, rozana.",
  "Ghar ka kachra, tension ka nahi.",
  "Khaa peeyo, bina sochke.",
];

export const story = {
  pill: "Why Rozana",
  heading: "Everyday paper is invisible. [[We're making it visible.]]",
  paragraphs: [
    "Every week, Indian homes buy kitchen towels, tissues, napkins and rolls — and forget the brand by the time the bag is unpacked. The category runs on one trick: say \"soft\", say \"strong\", say \"premium\", and print nothing you can actually check.",
    "So quality stays hidden and price quietly wins. We think that's backwards. Rozana prints the numbers that decide quality — GSM, sheet size, absorbency — right on the front. And we design packs you'd leave on the counter, not hide under the sink.",
  ],
  quote: "Made by the people who built India's tissue brands for 20 years — so we choose the fibre per product, and we can prove it.",
};

export const stats = {
  items: [
    { value: "20 yrs", label: "building India's paper & tissue brands" },
    { value: "₹0 → ₹100 cr", label: "ARR built at 10 On Tissues, in two years" },
    { value: "8", label: "everyday essentials, honestly labelled" },
    { value: "Delhi NCR", label: "where we launch first" },
  ],
};

export const problem = {
  pill: "The problem",
  heading: "Buying paper is a [[guessing game.]]",
  cards: [
    {
      title: "Quality is invisible",
      body: 'Every pack says "soft". None tells you the GSM, the sheet size or how much it actually absorbs.',
    },
    {
      title: "The brand is invisible",
      body: "Generic packs, generic claims, hidden under the sink.",
    },
    {
      title: "So price decides",
      body: "When nothing else is different, you buy the cheapest and forget it.",
    },
  ],
};

export const spec = {
  pill: "What makes us different",
  heading: "We print the number [[nobody prints.]]",
  body: 'Everyone prints "2 Ply". Almost nobody prints GSM — the grammage that actually decides softness and strength. We put GSM, sheet size and absorbency on the front, so you can judge the product before you buy it, not after.',
  panel: {
    brand: "Rozana",
    product: "Kitchen Roll",
    tagline: "For Indian kitchens.",
    specs: [
      { label: "GSM", value: "150", note: "grammage — decides softness & strength" },
      { label: "Ply", value: "2", note: "layers" },
      { label: "Sheet size", value: "22 × 24 cm", note: "per sheet" },
      { label: "Food-safe", value: "Yes", note: "food-contact tested" },
    ],
    footnote: "Printed on the front. Every pack.",
  },
};

export const products = {
  pill: "The range",
  heading: "Packs worth leaving [[on the counter.]]",
  sub: "The packs are the product. Illustrated, honest, and made to be seen — not hidden.",
  items: [
    {
      name: "Kitchen Towel",
      tagline: "Strong for real life.",
      image: "/products/kitchen-towel.png",
      alt: "Rozana Kitchen Roll standing on an Indian kitchen counter.",
    },
    {
      name: "Facial Tissues",
      tagline: "Rozana ke liye, hamesha yahan.",
      image: "/products/facial-tissues.png",
      alt: "Rozana Facial Tissues in a tiffin-tin style pack on a desk.",
    },
    {
      name: "Party Napkins",
      tagline: "Good food deserves good napkins.",
      image: "/products/party-napkins.png",
      alt: "Rozana Party Napkins in a pizza-box style pack at a get-together.",
    },
    {
      name: "Toilet Rolls",
      tagline: "Essentials, better packed.",
      image: "/products/toilet-rolls.png",
      alt: "Rozana Toilet Rolls 6-pack in egg-carton style packaging.",
    },
    {
      name: "Air-Fryer Liners",
      tagline: "Less mess. More good food.",
      image: "/products/air-fryer-liners.png",
      alt: "Rozana Air-Fryer Liners pack beside an air fryer.",
    },
    {
      name: "Food Wrap",
      tagline: "Khana freshh, rozana.",
      image: "/products/food-wrap.png",
      alt: "Rozana Food Wrap in a retro cassette-style box.",
    },
  ],
};

export const why = {
  pill: "Why it's different",
  heading: "Five words we can [[actually back up.]]",
  points: [
    {
      title: "Made in our own supply chain",
      body: "We choose the fibre per product, because we've spent 20 years inside this category.",
      icon: "supply",
    },
    {
      title: "Food-contact tested",
      body: "Tested for the things that touch your food. We say what's true, not what sells.",
      icon: "shield",
    },
    {
      title: "Packs worth displaying",
      body: "Tiffin-tin tissue boxes, pizza-box napkins, egg-carton toilet rolls. Leave them out.",
      icon: "display",
    },
    {
      title: "Specs printed on every pack",
      body: "GSM, sheet size and absorbency on the front. Judge before you buy.",
      icon: "tag",
    },
  ],
};

export const people = {
  pill: "The people behind it",
  heading: "Built by people who have made this category for [[20 years.]]",
  sub: "This is not a first attempt. It's what happens when the people who built India's tissue brands start their own.",
  bios: [
    {
      name: "Rajesh Singh",
      role: "Operations",
      line: "Six-plus years as All India Head at Origami, then took 10 On Tissues from ₹0 to ₹100 crore ARR in two years.",
    },
    {
      name: "Anup Kapoor",
      role: "Brand",
      line: "20+ years in FMCG. Former CXO at Emami, Himalaya and All Out.",
    },
    {
      name: "Satyajit",
      role: "Sourcing",
      line: "Eastern-region raw-material access, including JK Paper and West Coast Paper Mills.",
    },
    {
      name: "Aryan Singh",
      role: "Sales & Marketing",
      line: "Leads sales, marketing, growth and digital — turning a better product into demand across quick commerce, retail and institutions.",
    },
    {
      name: "Pragya Rathi",
      role: "Finance",
      line: "Leads finance — pricing, margins and the discipline that keeps everyday quality affordable.",
    },
  ],
};

export const contact = {
  pill: "Talk to us",
  heading: "Talk to us",
  sub: "Buying for a hotel, café or office? Want to stock Rozana? Or just have something to say? Write to us.",
  audience: [
    "Hotels, cafés & cloud kitchens",
    "Offices & caterers",
    "Retail stocking & partnerships",
  ],
  fields: {
    name: { label: "Name", placeholder: "Your name", required: true },
    email: { label: "Email", placeholder: "you@example.com", required: true },
    organisation: { label: "Organisation", placeholder: "Optional", required: false },
    city: { label: "City", placeholder: "Optional", required: false },
    topic: {
      label: "I'm writing about",
      options: [
        "Bulk / institutional order",
        "Retail stocking",
        "Partnership",
        "Something else",
      ],
    },
    message: {
      label: "Message",
      placeholder: "Tell us what you need and roughly how much.",
      required: true,
    },
  },
  submit: "Send message",
  mailtoIntro: "Prefer email? Write to us at",
  mailtoOutro: "— we reply within two working days.",
  success: "Got it. We'll get back to you within two working days.",
  error: "Something went wrong. Email us directly at hello.rozana@gmail.com.",
};

export const waitlist = {
  pill: "Launching soon",
  heading: "Be first when [[Rozana]] lands.",
  sub: "Join the launch waitlist. One email, no spam — just a heads-up when we go live in Delhi NCR.",
  emailPlaceholder: "you@example.com",
  cta: "Join the waitlist",
  perk: "First 500 members get the launch box at 20% off.",
  success: "You're on the list. We'll email you before we launch.",
  error: "Something went wrong. Email us directly at hello.rozana@gmail.com.",
};

export const footer = {
  tagline: "Everyday, better.",
  blurb: "Everyday home and kitchen paper essentials, made honest.",
  email: "hello.rozana@gmail.com",
  instagram: "https://instagram.com/rozana",
  nav: [
    { label: "Why Rozana", href: "#story" },
    { label: "Products", href: "#products" },
    { label: "Our team", href: "#people" },
    { label: "Talk to us", href: "#contact" },
  ],
  legal: `© ${new Date().getFullYear()} Rozana. All rights reserved.`,
  madeIn: "Made in India.",
};
