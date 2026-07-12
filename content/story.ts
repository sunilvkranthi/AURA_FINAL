// ─────────────────────────────────────────────────────────────
// PROJECT AURA — Story Content
// This is the ONLY file you should need to edit to change the
// story, the copy, or which photos appear. No component code
// needs to change when you swap media or rewrite text.
// ─────────────────────────────────────────────────────────────

export type Scene = {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  image: string;
  imageAlt: string;
  align: "left" | "right" | "center";
  ambience?: "office" | "rain" | "wind" | "footsteps" | "paper" | "birds" | "city";
};

export const opening = {
  heartbeatLabel: "loading the memory",
  image: "/images/opening-eyes.jpg",
  imageAlt: "A quiet close-up, eyes catching the first light",
  line1: "Some stories don't begin with an event.",
  line2: "They begin with a look.",
  enterLabel: "Begin",
};

export const scenes: Scene[] = [
  {
    id: "quiet-mornings",
    eyebrow: "I — Quiet Mornings",
    title: "The days that didn't ask to be remembered",
    body: [
      "There was no reason to keep this moment. No occasion, no camera ready on purpose.",
      "Just an ordinary desk, an ordinary hour, and someone who happened to be there — the way she always is.",
    ],
    image: "/images/scene-desk.jpg",
    imageAlt: "A quiet portrait at a work desk",
    align: "left",
    ambience: "office",
  },
  {
    id: "small-ceremonies",
    eyebrow: "II — Small Ceremonies",
    title: "Even ordinary days get dressed up sometimes",
    body: [
      "A lamp lit carefully. A saree chosen with intention. A small ritual, taken seriously — because that's who she is.",
      "Some people wait for big occasions to show up fully. She shows up fully for the small ones too.",
    ],
    image: "/images/scene-lamp.jpg",
    imageAlt: "Lighting a ceremonial lamp, dressed in a saree",
    align: "right",
    ambience: "paper",
  },
  {
    id: "the-shore",
    eyebrow: "III — The Shore",
    title: "Somewhere the noise finally stopped",
    body: [
      "The waves kept arriving, one after another, unbothered by anything.",
      "And for a moment, so was she.",
    ],
    image: "/images/scene-shore.jpg",
    imageAlt: "Standing at the shoreline at dusk",
    align: "center",
    ambience: "wind",
  },
  {
    id: "ordinary-laughter",
    eyebrow: "IV — Ordinary Laughter",
    title: "The kind of laugh that isn't performed",
    body: [
      "Not the laugh for photos. The other one — the one that shows up uninvited, usually at the worst possible moment, and is somehow always the best one.",
    ],
    image: "/images/scene-hearts.jpg",
    imageAlt: "A candid laugh between two people",
    align: "left",
    ambience: "footsteps",
  },
  {
    id: "between-meetings",
    eyebrow: "V — Between Meetings",
    title: "The corridors in between",
    body: [
      "Not the plans. Not the milestones. Just the walk from one place to another — the part nobody photographs, and somehow the part that stays.",
    ],
    image: "/images/scene-corridor.jpg",
    imageAlt: "Walking together between two moments",
    align: "right",
    ambience: "footsteps",
  },
  {
    id: "any-given-wall",
    eyebrow: "VI — Any Given Wall",
    title: "No backdrop, no plan, no problem",
    body: [
      "Some of the best photographs happen in front of the least interesting walls — because the wall was never the point.",
    ],
    image: "/images/scene-wall-smile.jpg",
    imageAlt: "Smiling in front of a plain wall",
    align: "left",
  },
  {
    id: "the-stairwell",
    eyebrow: "VII — The Stairwell",
    title: "Even the in-between places remember",
    body: [
      "A stairwell, some afternoon light, five seconds before someone said 'okay, one more photo.'",
    ],
    image: "/images/scene-stairwell.jpg",
    imageAlt: "Standing together on a stairwell",
    align: "right",
  },
  {
    id: "where-we-stood",
    eyebrow: "VIII — Where We Stood",
    title: "Nothing special about the room. Everything special about the moment",
    body: [
      "A plain white wall. An ordinary afternoon. And still — somehow — one of the frames worth keeping.",
    ],
    image: "/images/scene-white-wall.jpg",
    imageAlt: "Standing together against a plain wall, smiling",
    align: "left",
  },
  {
    id: "a-single-frame",
    eyebrow: "IX — A Single Frame",
    title: "Just her, exactly as she is",
    body: [
      "No filter does this justice. No caption either. Some frames just need to be looked at.",
    ],
    image: "/images/scene-portrait-solo.jpg",
    imageAlt: "A solo portrait, calm and confident",
    align: "center",
  },
];

export const finale = {
  eyebrow: "X — Today",
  title: "Happy Birthday",
  image: "/images/finale-birthday.jpg",
  imageAlt: "Celebrating together at a birthday, cutting the cake",
  message: [
    "Thank you for being part of so many ordinary moments that quietly became unforgettable.",
    "I hope this year brings you joy, peace, laughter, and beautiful new memories.",
  ],
  signOff: "With all my love.",
};

// ─────────────────────────────────────────────────────────────
// Music & Ambient Sound — replace these with your own licensed
// or royalty-free tracks. Suggested sources below (all free for
// personal use, verify current license terms before deploying):
//
//   Theme candidates:
//   - "Wanderlust" — Artificial.Music (Uppbeat, free w/ account)
//   - "First Snow" — Chad Crouch (freemusicarchive.org, CC BY-NC)
//   - "Quiet Rain" — Ghostrifter Official (YouTube Audio Library)
//
//   Ambient one-shots (footsteps, paper, wind, rain, birds):
//   - freesound.org (search + filter by CC0 license)
//   - BBC Sound Effects Archive (bbcsfx.acropolis.org.uk) — free
//     for personal, non-commercial projects
//
// Drop the files into /public/audio/ using these exact names and
// everything will wire up automatically:
// ─────────────────────────────────────────────────────────────
export const audio = {
  theme: "/audio/theme.mp3", // main recurring musical theme
  ambient: {
    office: "/audio/amb-office.mp3",
    rain: "/audio/amb-rain.mp3",
    wind: "/audio/amb-wind.mp3",
    footsteps: "/audio/amb-footsteps.mp3",
    paper: "/audio/amb-paper.mp3",
    birds: "/audio/amb-birds.mp3",
    city: "/audio/amb-city.mp3",
  },
};
