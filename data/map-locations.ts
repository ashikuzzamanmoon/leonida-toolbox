// Interactive map location data.
//
// ACCURACY RULES:
// - Only include locations whose names are publicly confirmed (official
//   trailers, Rockstar announcements, major guides sites). NEVER invent
//   place names or positions.
// - x/y are percentages (0-100) on the stylised Leonida map illustration.
//   They are approximate placements for a fan-made illustration, not exact
//   in-game coordinates — the map page says so.
// - Items reported but not yet confirmed use status "confirming".
//
// FORMAT:
// - id: stable kebab-case id.
// - category: "city" | "town" | "landmark" | "region" | "activity".
// - x, y: position on the map illustration, 0-100.
// - description: one or two sentences, original writing.
//
// SOURCES (checked 2026-11-20): Rockstar's six official Leonida regions;
// Rockstar's launch-day printable "Leonida Map & Cover Art Poster"
// (Nov 19, 2026); PowerPyx full world map list; Insider Gaming POI list;
// GamesFuze locations guide; allgtaworld map guide.

export type MapCategory =
  | "city"
  | "town"
  | "landmark"
  | "region"
  | "activity";

export type MapStatus = "verified" | "confirming";

export interface MapLocation {
  id: string;
  name: string;
  category: MapCategory;
  x: number;
  y: number;
  description: string;
  status: MapStatus;
}

export const MAP_CATEGORIES: { id: MapCategory; label: string }[] = [
  { id: "city", label: "Cities" },
  { id: "town", label: "Towns" },
  { id: "landmark", label: "Landmarks" },
  { id: "region", label: "Regions" },
  { id: "activity", label: "Activities" },
];

// 33 locations: 30 verified, 3 confirming.
// Coordinates are approximate placements on the stylised illustration.
export const MAP_LOCATIONS: MapLocation[] = [
  // ---- Cities ----
  {
    id: "vice-city",
    name: "Vice City",
    category: "city",
    x: 76,
    y: 71,
    description:
      "Leonida's neon-soaked metropolis on the southeast coast and the heart of GTA VI. Downtown towers, Ocean Beach, Little Cuba and the Stockyard art district all sit inside its limits.",
    status: "verified",
  },
  {
    id: "port-gellhorn",
    name: "Port Gellhorn",
    category: "city",
    x: 13,
    y: 32,
    description:
      "A faded resort town on the Gulf coast whose glory days are long behind it. Cheap motels, pawn shops and dirt tracks make it Leonida's rough-and-ready west coast hub.",
    status: "verified",
  },

  // ---- Towns ----
  {
    id: "ambrosia",
    name: "Ambrosia",
    category: "town",
    x: 50,
    y: 47,
    description:
      "An industrial sugar town in central Leonida, just west of Lake Leonida. Factories, freight yards and biker gangs define its working-class edge.",
    status: "verified",
  },
  {
    id: "key-lento",
    name: "Key Lento",
    category: "town",
    x: 42,
    y: 93,
    description:
      "The busiest key in the Leonida Keys and where Jason's story begins. Bars, boat works and stilt houses line its docks.",
    status: "verified",
  },
  {
    id: "southwind",
    name: "Southwind",
    category: "town",
    x: 28,
    y: 95,
    description:
      "A quiet key town at the far end of the island chain, known for its seaplanes. A good early spot to grab a plane and uncover the map.",
    status: "verified",
  },
  {
    id: "watson-bay",
    name: "Watson Bay",
    category: "town",
    x: 22,
    y: 66,
    description:
      "A rough waterfront fishing town on the edge of the Grassrivers wetlands. Stilt shacks, airboats and alligators are part of daily life here.",
    status: "verified",
  },
  {
    id: "hamlet",
    name: "Hamlet",
    category: "town",
    x: 63,
    y: 76,
    description:
      "A small town on the southern edge of the mainland, between the Grassrivers swamps and Vice City. The Boone Speedway sits nearby.",
    status: "verified",
  },
  {
    id: "grayson",
    name: "Grayson",
    category: "town",
    x: 36,
    y: 13,
    description:
      "A northern town in Lummox County, on the doorstep of Mount Kalaga National Park. Expect backwoods characters and hunting country.",
    status: "verified",
  },
  {
    id: "belville",
    name: "Belville",
    category: "town",
    x: 70,
    y: 22,
    description:
      "A northeast town in Leonard County, not far from Lake Leonida. Launch guides flag a house here that mirrors a famous photo from GTA San Andreas.",
    status: "verified",
  },
  {
    id: "vice-beach",
    name: "Vice Beach",
    category: "town",
    x: 86,
    y: 66,
    description:
      "The barrier-island beach city across the bay from Vice City, home to Ocean Beach and Washington Beach. Pastel hotels, boardwalks and white sand.",
    status: "verified",
  },
  {
    id: "capri",
    name: "Capri",
    category: "town",
    x: 16,
    y: 55,
    description:
      "A small coastal settlement on the Gulf side, south of Port Gellhorn and north of the wetlands. Tortoise Lake and Capri Sound are nearby.",
    status: "verified",
  },

  // ---- Regions ----
  {
    id: "leonida-keys",
    name: "Leonida Keys",
    category: "region",
    x: 56,
    y: 91,
    description:
      "The tropical island chain at Leonida's southern tip, linked by causeways and the toll road 1A. Boats, bars and smuggling runs define island life.",
    status: "verified",
  },
  {
    id: "grassrivers",
    name: "Grassrivers",
    category: "region",
    x: 32,
    y: 72,
    description:
      "Leonida's vast Everglades-style wetlands in the southwest. Shallow water, mangroves and marshland, best crossed by airboat — and home to plenty of alligators.",
    status: "verified",
  },
  {
    id: "mount-kalaga",
    name: "Mount Kalaga National Park",
    category: "region",
    x: 46,
    y: 8,
    description:
      "The wild national park along Leonida's northern border. Forests, hills and backcountry trails, with hunting quests starting in the surrounding county.",
    status: "verified",
  },
  {
    id: "pelican-valley",
    name: "Pelican Valley",
    category: "region",
    x: 40,
    y: 80,
    description:
      "Swamp country in the south, cut through by the Pelican River. Cottonmouth Lake, Gullet Marsh and Wetman Bay all sit within its wetlands.",
    status: "verified",
  },
  {
    id: "buckskin-swamp",
    name: "Buckskin Swamp",
    category: "region",
    x: 26,
    y: 45,
    description:
      "A marshy stretch of Kelly County between Port Gellhorn and the Grassrivers. Remote, muddy and well off the tourist trail.",
    status: "verified",
  },

  // ---- Landmarks ----
  {
    id: "ocean-beach",
    name: "Ocean Beach",
    category: "landmark",
    x: 89,
    y: 62,
    description:
      "Vice Beach's famous strip of white sand and pastel art-deco hotels. The postcard image of Vice City's beachfront.",
    status: "verified",
  },
  {
    id: "little-cuba",
    name: "Little Cuba",
    category: "landmark",
    x: 72,
    y: 74,
    description:
      "Vice City's Cuban neighbourhood, full of bakeries, cigar shops and Latin street life. One of the city's most characterful districts.",
    status: "verified",
  },
  {
    id: "washington-beach",
    name: "Washington Beach",
    category: "landmark",
    x: 88,
    y: 70,
    description:
      "A beachfront district on Vice Beach, south of Ocean Beach. Boardwalk crowds, hotels and ocean views.",
    status: "verified",
  },
  {
    id: "downtown-vice-city",
    name: "Downtown Vice City",
    category: "landmark",
    x: 80,
    y: 67,
    description:
      "The glass-tower financial heart of Vice City, with the Tequesta district nearby. High-rises, offices and the city's biggest heist targets.",
    status: "verified",
  },
  {
    id: "stockyard",
    name: "Stockyard",
    category: "landmark",
    x: 82,
    y: 73,
    description:
      "Vice City's arty warehouse district, known for street art and car meets. Home to an Ultimate Edition clothing store and tattoo parlor.",
    status: "verified",
  },
  {
    id: "port-vice-city",
    name: "Port Vice City",
    category: "landmark",
    x: 83,
    y: 77,
    description:
      "Vice City's working container port, south of downtown. Cranes, cargo ships and dockside smuggling routes.",
    status: "verified",
  },
  {
    id: "vcia",
    name: "Vice City International Airport",
    category: "landmark",
    x: 71,
    y: 79,
    description:
      "Leonida's main airport (VCIA), west of downtown Vice City. The fastest way in and out of the state — and a handy place to steal a plane.",
    status: "verified",
  },
  {
    id: "lake-leonida",
    name: "Lake Leonida",
    category: "landmark",
    x: 60,
    y: 40,
    description:
      "The huge lake in northeast Leonida, with Ambrosia on its western shore. An off-road mod shop sits nearby, and its shoreline is prime off-roading country.",
    status: "verified",
  },
  {
    id: "mile-zero-air-station",
    name: "Mile Zero Air Station",
    category: "landmark",
    x: 18,
    y: 97,
    description:
      "A military air station at the far southern end of the Keys. Expect restricted airspace and a heavy armed presence.",
    status: "verified",
  },
  {
    id: "gambit-bay",
    name: "Gambit Bay",
    category: "landmark",
    x: 48,
    y: 88,
    description:
      "A bay off the Keys near Key Lento, marked on the official map. Sheltered water, good for boating between the islands.",
    status: "verified",
  },
  {
    id: "featherstone-islands",
    name: "Featherstone Islands",
    category: "landmark",
    x: 8,
    y: 14,
    description:
      "A small island group off Leonida's northwest coast in Lummox County. Remote and reachable only by boat or air.",
    status: "verified",
  },
  {
    id: "leonida-state-prison",
    name: "Leonida State Prison",
    category: "landmark",
    x: 56,
    y: 13,
    description:
      "Reported prison facility in northern Lummox County. Listed in launch-day POI roundups; its exact in-game placement is still being confirmed.",
    status: "confirming",
  },
  {
    id: "draper-island",
    name: "Draper Island",
    category: "landmark",
    x: 9,
    y: 40,
    description:
      "An island off the Kelly County coast near Port Gellhorn. Printed on the official map, though some guides trace the name to earlier leaked material — treated as unconfirmed for now.",
    status: "confirming",
  },

  // ---- Activities ----
  {
    id: "gellhorn-international-raceway",
    name: "Gellhorn International Raceway",
    category: "activity",
    x: 17,
    y: 26,
    description:
      "Port Gellhorn's motorsports venue for dirt bikes, demolition events and circuit racing. The name appeared in Trailer 2; launch guides disagree on its exact status, so it is listed as unconfirmed.",
    status: "confirming",
  },
  {
    id: "rodgers-ranch",
    name: "Rodgers Ranch & Shooting Range",
    category: "activity",
    x: 21,
    y: 31,
    description:
      "A shooting range northeast of Port Gellhorn with 72 medals to earn across its challenges. A key stop for the ammo cheats and The Shootist trophy.",
    status: "verified",
  },
  {
    id: "boone-speedway",
    name: "Boone Speedway",
    category: "activity",
    x: 59,
    y: 81,
    description:
      "An oval racing venue near Hamlet, advertised on the local water tower. Race wins here count toward the Repair Vehicle cheat.",
    status: "verified",
  },
  {
    id: "griffin-shooting-range",
    name: "Griffin Shooting Range",
    category: "activity",
    x: 74,
    y: 64,
    description:
      "Vice City's shooting range, with 54 medals to earn. Pair it with Rodgers Ranch to unlock the ammo cheats.",
    status: "verified",
  },
];
