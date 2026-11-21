// 100% completion checklist data.
//
// ACCURACY RULES:
// - Only include items verified from public sources (official announcements,
//   major guides sites, widely reported gameplay). NEVER invent mission names,
//   collectible counts or locations.
// - Items that are reported but not yet confirmed use status "confirming".
// - Keep this file as the single source of truth for checklist content so it
//   is easy to update as confirmed information emerges. Do not hardcode
//   checklist items in components.
//
// FORMAT:
// - id: stable kebab-case id, never reused for a different item (progress is
//   saved by id in localStorage, so renaming an id wipes that item's progress).
// - category: one of CHECKLIST_CATEGORIES ids below.
// - title: short item name as shown in the checklist.
// - detail: optional one-line hint (e.g. where to start it).
// - status: "verified" (confirmed) or "confirming" (reported, not yet verified).

export type ChecklistStatus = "verified" | "confirming";

export interface ChecklistCategory {
  id: string;
  title: string;
  blurb: string;
}

export interface ChecklistItem {
  id: string;
  category: string;
  title: string;
  detail?: string;
  status: ChecklistStatus;
}

export const CHECKLIST_CATEGORIES: ChecklistCategory[] = [
  {
    id: "story",
    title: "Story Missions",
    blurb: "Main story missions for Lucia and Jason.",
  },
  {
    id: "strangers",
    title: "Strangers & Side Missions",
    blurb: "Side missions and stranger encounters around Leonida.",
  },
  {
    id: "collectibles",
    title: "Collectibles",
    blurb: "Hidden packages, collectibles and things to find.",
  },
  {
    id: "activities",
    title: "Activities & Challenges",
    blurb: "Sports, races, minigames and world challenges.",
  },
  {
    id: "misc",
    title: "Milestones",
    blurb: "Completion milestones that count toward 100%.",
  },
];

// Filled with verified items only. Empty categories render with an
// "information still being confirmed" note on the checklist page.
//
// SOURCES (checked 2026-11-20, post-launch):
// - 100% requirements: PowerPyx 100% Completion Checklist & Guide,
//   Push Square, Shacknews, GTABase (all agree on the 35 requirements
//   except Race Challenge Gold Medals — see the "confirming" note below).
// - Story missions: Insider Gaming, esports.gg and Space4Games full
//   mission lists (93 missions across 5 chapters), cross-checked
//   against the PowerPyx walkthrough.
// - Strangers & Freaks: PowerPyx walkthrough (Strangers & Freaks
//   section), cross-checked against outputlag and eso.jffk.org.
// - "Race Challenge Gold Medals" is marked "confirming": PowerPyx and
//   GTABase say 10 of 13, Push Square says 30, Shacknews says 42.
//   The requirement exists; the exact number is still disputed.
export const CHECKLIST_ITEMS: ChecklistItem[] = [
  // ---------------- Story Missions (93) ----------------
  // Chapter 1 — Just Like Paradise (22)
  { id: "story-ch1-prologue", category: "story", title: "Prologue", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-gone-fishing", category: "story", title: "Gone Fishing", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-gear-up", category: "story", title: "Gear Up", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-just-a-scratch", category: "story", title: "Just a Scratch", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-lab-fees", category: "story", title: "Lab Fees", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-unwanted-attention", category: "story", title: "Unwanted Attention", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-pipework", category: "story", title: "Pipework", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-hey-arnold", category: "story", title: "Hey Arnold!", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-island-dreams", category: "story", title: "Island Dreams", detail: "Chapter 1 · unlocks Kenton's treasure dives", status: "verified" },
  { id: "story-ch1-feng-shui", category: "story", title: "Feng Shui", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-coming-home", category: "story", title: "Coming Home", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-buck-me", category: "story", title: "Buck Me", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-clean-up-after-donnie", category: "story", title: "Clean Up After Donnie", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-down-to-earth", category: "story", title: "Down to Earth", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-clear-skies", category: "story", title: "Clear Skies", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-day-release", category: "story", title: "Day Release", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-swamped", category: "story", title: "Swamped", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-don-gone", category: "story", title: "Don Gone", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-recalibration", category: "story", title: "Recalibration", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-tourist-trap", category: "story", title: "Tourist Trap", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-home-sweet-home", category: "story", title: "Home Sweet Home", detail: "Chapter 1", status: "verified" },
  { id: "story-ch1-discharge-time", category: "story", title: "Discharge Time", detail: "Chapter 1", status: "verified" },
  // Chapter 2 — Paradise Lost (13, incl. 2 optional)
  { id: "story-ch2-whats-in-the-bag", category: "story", title: "What's in the Bag?", detail: "Chapter 2", status: "verified" },
  { id: "story-ch2-ambulance-chaser", category: "story", title: "Ambulance Chaser", detail: "Chapter 2", status: "verified" },
  { id: "story-ch2-just-moved-in", category: "story", title: "Just Moved In", detail: "Chapter 2", status: "verified" },
  { id: "story-ch2-girls-trip", category: "story", title: "Girls' Trip", detail: "Chapter 2", status: "verified" },
  { id: "story-ch2-moses", category: "story", title: "Moses", detail: "Chapter 2 · unlocks vehicle fencing", status: "verified" },
  { id: "story-ch2-daily-driver", category: "story", title: "Daily Driver", detail: "Chapter 2", status: "verified" },
  { id: "story-ch2-slam-dunk", category: "story", title: "Slam Dunk", detail: "Chapter 2", status: "verified" },
  { id: "story-ch2-breakfast-run", category: "story", title: "Breakfast Run", detail: "Chapter 2", status: "verified" },
  { id: "story-ch2-coffee-break", category: "story", title: "Coffee Break", detail: "Chapter 2 · unlocks Pawn Shop robberies", status: "verified" },
  { id: "story-ch2-afternoon-delight", category: "story", title: "Afternoon Delight", detail: "Chapter 2", status: "verified" },
  { id: "story-ch2-thrillbillies", category: "story", title: "Thrillbillies", detail: "Chapter 2 · Optional · Billy's Mud Club questline", status: "verified" },
  { id: "story-ch2-twist-wrist-smash-grab", category: "story", title: "Twist Wrist, Smash, Grab", detail: "Chapter 2 · Optional · Billy's Mud Club questline", status: "verified" },
  { id: "story-ch2-checking-out", category: "story", title: "Checking Out", detail: "Chapter 2", status: "verified" },
  // Chapter 3 — Tits Ass Drug Money (26)
  { id: "story-ch3-welcome-to-vice-city", category: "story", title: "Welcome to Vice City", detail: "Chapter 3", status: "verified" },
  { id: "story-ch3-dealers-choice", category: "story", title: "Dealer's Choice", detail: "Chapter 3 · Jason only", status: "verified" },
  { id: "story-ch3-meet-the-heders", category: "story", title: "Meet the Heders", detail: "Chapter 3", status: "verified" },
  { id: "story-ch3-dubious-provenance", category: "story", title: "Dubious Provenance", detail: "Chapter 3", status: "verified" },
  { id: "story-ch3-mami-knows-best", category: "story", title: "Mami Knows Best", detail: "Chapter 3 · Lucia only", status: "verified" },
  { id: "story-ch3-south-leonida-real-estate", category: "story", title: "South Leonida Real Estate", detail: "Chapter 3 · Lucia only", status: "verified" },
  { id: "story-ch3-tyrone", category: "story", title: "Tyrone", detail: "Chapter 3", status: "verified" },
  { id: "story-ch3-here-kitty-kitty", category: "story", title: "Here, Kitty Kitty", detail: "Chapter 3 · Jason only", status: "verified" },
  { id: "story-ch3-kitty-litter-labs", category: "story", title: "Kitty Litter Labs", detail: "Chapter 3", status: "verified" },
  { id: "story-ch3-car-service", category: "story", title: "Car Service", detail: "Chapter 3 · Lucia only", status: "verified" },
  { id: "story-ch3-top-billing", category: "story", title: "Top Billing", detail: "Chapter 3", status: "verified" },
  { id: "story-ch3-boobie-time", category: "story", title: "Boobie Time", detail: "Chapter 3 · Jason only", status: "verified" },
  { id: "story-ch3-first-impressions", category: "story", title: "First Impressions", detail: "Chapter 3", status: "verified" },
  { id: "story-ch3-crosstown-traffic", category: "story", title: "Crosstown Traffic", detail: "Chapter 3", status: "verified" },
  { id: "story-ch3-credit-check", category: "story", title: "Credit Check", detail: "Chapter 3 · unlocks the Dye Pack Jammer, Bank Jobs & Payday Loans", status: "verified" },
  { id: "story-ch3-clonin-keys-makin-gs", category: "story", title: "Clonin' Keys, Makin' GS", detail: "Chapter 3 · steal the Zorrusso for Randy", status: "verified" },
  { id: "story-ch3-sinfrontera-national-bank", category: "story", title: "Sinfrontera National Bank", detail: "Chapter 3 · The Cartel Heist", status: "verified" },
  { id: "story-ch3-security-expert", category: "story", title: "Security Expert", detail: "Chapter 3 · The Cartel Heist", status: "verified" },
  { id: "story-ch3-ride-or-die", category: "story", title: "Ride or Die", detail: "Chapter 3 · Jason only", status: "verified" },
  { id: "story-ch3-company-property", category: "story", title: "Company Property", detail: "Chapter 3 · The Cartel Heist", status: "verified" },
  { id: "story-ch3-the-missing-link", category: "story", title: "The Missing Link", detail: "Chapter 3 · The Cartel Heist · Lucia only", status: "verified" },
  { id: "story-ch3-safe-word", category: "story", title: "Safe Word", detail: "Chapter 3 · The Cartel Heist", status: "verified" },
  { id: "story-ch3-cooties", category: "story", title: "Cooties", detail: "Chapter 3", status: "verified" },
  { id: "story-ch3-bricked-up", category: "story", title: "Bricked Up", detail: "Chapter 3", status: "verified" },
  { id: "story-ch3-hidden-charges", category: "story", title: "Hidden Charges", detail: "Chapter 3 · The Cartel Heist", status: "verified" },
  { id: "story-ch3-the-cartel-heist", category: "story", title: "The Cartel Heist", detail: "Chapter 3 · finale heist", status: "verified" },
  // Chapter 4 — Vice City, Baby (25)
  { id: "story-ch4-ocean-beach", category: "story", title: "Ocean Beach", detail: "Chapter 4", status: "verified" },
  { id: "story-ch4-another-life", category: "story", title: "Another Life", detail: "Chapter 4", status: "verified" },
  { id: "story-ch4-company-cars", category: "story", title: "Company Cars", detail: "Chapter 4", status: "verified" },
  { id: "story-ch4-lawyer-up", category: "story", title: "Lawyer Up", detail: "Chapter 4", status: "verified" },
  { id: "story-ch4-party-hard", category: "story", title: "Party Hard", detail: "Chapter 4", status: "verified" },
  { id: "story-ch4-heavy-lifting", category: "story", title: "Heavy Lifting", detail: "Chapter 4", status: "verified" },
  { id: "story-ch4-photo-shoot", category: "story", title: "Photo/Shoot", detail: "Chapter 4", status: "verified" },
  { id: "story-ch4-making-gainz", category: "story", title: "Making Gainz", detail: "Chapter 4 · VCIA Takedown · Lucia only", status: "verified" },
  { id: "story-ch4-watch-it", category: "story", title: "Watch It", detail: "Chapter 4 · Jason only", status: "verified" },
  { id: "story-ch4-cash-injections", category: "story", title: "Cash Injections", detail: "Chapter 4 · VCIA Takedown · Lucia only", status: "verified" },
  { id: "story-ch4-amateur-hour", category: "story", title: "Amateur Hour", detail: "Chapter 4 · VCIA Takedown · Lucia only", status: "verified" },
  { id: "story-ch4-dirty-work", category: "story", title: "Dirty Work", detail: "Chapter 4 · VCIA Takedown", status: "verified" },
  { id: "story-ch4-too-much-baggage", category: "story", title: "Too Much Baggage", detail: "Chapter 4 · VCIA Takedown · Jason only", status: "verified" },
  { id: "story-ch4-adventures-in-babysitting", category: "story", title: "Adventures in Babysitting", detail: "Chapter 4 · Jason only", status: "verified" },
  { id: "story-ch4-fresh-evidence", category: "story", title: "Fresh Evidence", detail: "Chapter 4 · Jason only", status: "verified" },
  { id: "story-ch4-power-play", category: "story", title: "Power Play", detail: "Chapter 4 · VCIA Takedown · Lucia only", status: "verified" },
  { id: "story-ch4-childs-play", category: "story", title: "Child's Play", detail: "Chapter 4", status: "verified" },
  { id: "story-ch4-headliners", category: "story", title: "Headliners", detail: "Chapter 4", status: "verified" },
  { id: "story-ch4-close-surveillance", category: "story", title: "Close Surveillance", detail: "Chapter 4 · VCIA Takedown · Jason only", status: "verified" },
  { id: "story-ch4-delivery-method", category: "story", title: "Delivery Method", detail: "Chapter 4 · VCIA Takedown · Jason only", status: "verified" },
  { id: "story-ch4-team-building", category: "story", title: "Team Building", detail: "Chapter 4 · VCIA Takedown · Lucia only", status: "verified" },
  { id: "story-ch4-fully-catered", category: "story", title: "Fully Catered", detail: "Chapter 4 · VCIA Takedown", status: "verified" },
  { id: "story-ch4-vcia-takedown", category: "story", title: "VCIA Takedown", detail: "Chapter 4 · airport heist", status: "verified" },
  { id: "story-ch4-sunset", category: "story", title: "Sunset", detail: "Chapter 4", status: "verified" },
  { id: "story-ch4-starting-from-zero", category: "story", title: "Starting From Zero", detail: "Chapter 4", status: "verified" },
  // Chapter 5 — Top of the World, Ma (7)
  { id: "story-ch5-bird-in-the-hand", category: "story", title: "Bird in the Hand", detail: "Chapter 5", status: "verified" },
  { id: "story-ch5-taking-liberties", category: "story", title: "Taking Liberties", detail: "Chapter 5", status: "verified" },
  { id: "story-ch5-vc-baby", category: "story", title: "VC Baby", detail: "Chapter 5", status: "verified" },
  { id: "story-ch5-doggie-bag", category: "story", title: "Doggie Bag", detail: "Chapter 5", status: "verified" },
  { id: "story-ch5-operation-savage-glory", category: "story", title: "Operation Savage Glory", detail: "Chapter 5", status: "verified" },
  { id: "story-ch5-protective-custody", category: "story", title: "Protective Custody", detail: "Chapter 5", status: "verified" },
  { id: "story-ch5-the-end-of-the-road", category: "story", title: "The End of the Road", detail: "Chapter 5 · story finale", status: "verified" },

  // ---------------- Strangers & Side Missions (41) ----------------
  // Shirley (Chapter 1 — does not count toward the Strangers & Freaks trophy)
  { id: "strangers-shirley-get-shirleys-rum", category: "strangers", title: "Get Shirley's Rum", detail: "Shirley · Chapter 1 only, missable", status: "verified" },
  { id: "strangers-shirley-steal-the-scooter", category: "strangers", title: "Steal the Scooter", detail: "Shirley · Chapter 1 only, missable", status: "verified" },
  // Cal (Chapter 1)
  { id: "strangers-cal-catch-a-bigger-fish", category: "strangers", title: "Catch a Bigger Fish", detail: "Cal · fishing", status: "verified" },
  // Kirk (Chapter 1 — counts toward the Strangers & Freaks trophy)
  { id: "strangers-kirk-search-for-the-skunk-ape", category: "strangers", title: "Search for the Skunk Ape", detail: "Kirk · night only · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-kirk-search-for-tree-effigies", category: "strangers", title: "Search for Tree Effigies", detail: "Kirk · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-kirk-help-kirk-find-mr-mangrove", category: "strangers", title: "Help Kirk Find Mr. Mangrove", detail: "Kirk · Lucia only, night only · counts toward Strangers & Freaks", status: "verified" },
  // Kyle (Chapter 2 — counts toward the Strangers & Freaks trophy)
  { id: "strangers-kyle-check-out-mckittrick-farm", category: "strangers", title: "Check Out McKittrick Farm", detail: "Kyle · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-kyle-collect-chemicals-for-kyle", category: "strangers", title: "Collect Chemicals for Kyle", detail: "Kyle · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-kyle-buddy", category: "strangers", title: "Buddy?", detail: "Kyle · counts toward Strangers & Freaks", status: "verified" },
  // Moses (Chapter 2)
  { id: "strangers-moses-steal-vehicles-for-moses", category: "strangers", title: "Steal Vehicles for Moses", detail: "Moses · Port Gellhorn", status: "verified" },
  { id: "strangers-moses-collect-moses-gift", category: "strangers", title: "Collect Moses' Gift", detail: "Moses", status: "verified" },
  // Bret Vogel (Chapter 2)
  { id: "strangers-bret-veteran-hunted", category: "strangers", title: "Veteran Hunted", detail: "Bret Vogel · Jason only", status: "verified" },
  { id: "strangers-bret-hunting-decks", category: "strangers", title: "Bret's Hunting Decks", detail: "Bret Vogel · Jason only · all 15 Target Decks", status: "verified" },
  // Billy (Chapter 2)
  { id: "strangers-billy-thrillbillies", category: "strangers", title: "Thrillbillies", detail: "Billy · Mud Club", status: "verified" },
  { id: "strangers-billy-twist-wrist-smash-grab", category: "strangers", title: "Twist Wrist, Smash, Grab", detail: "Billy · Mud Club", status: "verified" },
  { id: "strangers-billy-mall-rats", category: "strangers", title: "Mall Rats", detail: "Billy · Mud Club", status: "verified" },
  { id: "strangers-billy-the-impaler", category: "strangers", title: "The Impaler", detail: "Billy · steal the Impaler", status: "verified" },
  { id: "strangers-billy-hometown-heroes", category: "strangers", title: "Hometown Heroes", detail: "Billy · Mud Club · finale", status: "verified" },
  // Yago (Chapter 3 — counts toward the Strangers & Freaks trophy)
  { id: "strangers-yago-join-a-street-race", category: "strangers", title: "Join a Street Race", detail: "Yago · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-yago-bumper-to-bumper", category: "strangers", title: "Bumper to Bumper", detail: "Yago · Jason only · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-yago-race-against-yago", category: "strangers", title: "Race Against Yago", detail: "Yago · time-sensitive, missable · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-yago-brother-to-brother", category: "strangers", title: "Brother to Brother", detail: "Yago · Jason only · counts toward Strangers & Freaks", status: "verified" },
  // Andy (Chapter 3 — Lucia only)
  { id: "strangers-andy-climbing-the-cellerichain", category: "strangers", title: "Climbing the Cellerichain", detail: "Andy · Lucia only · Parts 1-3", status: "verified" },
  { id: "strangers-andy-pay-the-cellerica-fee", category: "strangers", title: "Pay the Cellerica Fee", detail: "Andy · Lucia only", status: "verified" },
  { id: "strangers-andy-peach", category: "strangers", title: "Peach!", detail: "Andy · Lucia only · Cellerica initiation", status: "verified" },
  { id: "strangers-andy-read-the-label", category: "strangers", title: "Read the Label", detail: "Andy · Lucia only · retrieve the Cellerica van", status: "verified" },
  { id: "strangers-andy-puff-puff-pass", category: "strangers", title: "Puff Puff Pass", detail: "Andy · Lucia only · finale", status: "verified" },
  // Yasmani (Chapter 3)
  { id: "strangers-yasmani-jewelry-jobs", category: "strangers", title: "Yasmani's Jewelry Jobs", detail: "Yasmani · unlocks Jewelry Store robberies", status: "verified" },
  { id: "strangers-yasmani-atm-jobs", category: "strangers", title: "Yasmani's ATM Jobs", detail: "Yasmani", status: "verified" },
  { id: "strangers-yasmani-payday-loans-jobs", category: "strangers", title: "Yasmani's Payday Loans Jobs", detail: "Yasmani", status: "verified" },
  { id: "strangers-yasmani-tail-the-security-van", category: "strangers", title: "Tail the Security Van", detail: "Yasmani", status: "verified" },
  // Randy (Chapter 3)
  { id: "strangers-randy-wish-list", category: "strangers", title: "Randy's Wish List", detail: "Randy · deliver the cars on his wish list", status: "verified" },
  // Tyrone (Chapter 3)
  { id: "strangers-tyrone-take-out-kitty-litter", category: "strangers", title: "Take Out Kitty Litter", detail: "Tyrone · Kitty Litter Labs", status: "verified" },
  { id: "strangers-tyrone-spin-on-this", category: "strangers", title: "Spin On This", detail: "Tyrone · shut down the labs", status: "verified" },
  // Dunk (Chapter 3)
  { id: "strangers-dunk-robbery-tips", category: "strangers", title: "Dunk's Robbery Tips", detail: "Dunk", status: "verified" },
  // Eddie Acosta (Chapter 4)
  { id: "strangers-eddie-attend-eddie-acostas-party", category: "strangers", title: "Attend Eddie Acosta's Party", detail: "Eddie Acosta · Chapter 4", status: "verified" },
  // Pilot Pete (Chapter 4 — counts toward the Strangers & Freaks trophy)
  { id: "strangers-pete-the-last-mile-passing-the-torch", category: "strangers", title: "The Last Mile: Passing the Torch", detail: "Pilot Pete · Jason only · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-pete-the-last-mile-backseat-pilot", category: "strangers", title: "The Last Mile: Backseat Pilot", detail: "Pilot Pete · Jason only · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-pete-deliveries-southpoint-airfield", category: "strangers", title: "Pete's Deliveries: Southpoint Airfield", detail: "Pilot Pete · Jason only · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-pete-deliveries-avery-allen", category: "strangers", title: "Pete's Deliveries: Avery Allen & Co.", detail: "Pilot Pete · Jason only · counts toward Strangers & Freaks", status: "verified" },
  { id: "strangers-pete-deliver-packages", category: "strangers", title: "Deliver Packages", detail: "Pilot Pete · Jason only · counts toward Strangers & Freaks", status: "verified" },

  // ---------------- Collectibles (6) ----------------
  { id: "coll-kenton-sets", category: "collectibles", title: "Kenton Sets Completed", detail: "Complete 5 of 7 treasure-dive sets for Kenton Rees", status: "verified" },
  { id: "coll-card-sets", category: "collectibles", title: "Collectible Card Sets Found", detail: "Find all cards from 15 of 18 sets · 480 cards in total", status: "verified" },
  { id: "coll-waink-locations", category: "collectibles", title: "WAiNK Locations Scanned", detail: "Scan 100 locations with the WAiNK phone app", status: "verified" },
  { id: "coll-underwater-discoveries", category: "collectibles", title: "Underwater Discoveries Found", detail: "Find all 33 · part of Kenton's treasure hunts", status: "verified" },
  { id: "coll-magazines-books-comics", category: "collectibles", title: "Magazines, Books & Comics Found", detail: "Find 30 of 34 · 27 magazines plus 7 Book Swaps", status: "verified" },
  { id: "coll-cocaine-flamingos", category: "collectibles", title: "Cocaine Flamingos Destroyed", detail: "Destroy 100 of 125 flamingos", status: "verified" },

  // ---------------- Activities & Challenges (14) ----------------
  { id: "act-meditation-spots", category: "activities", title: "Meditation Spots Completed", detail: "Complete 15 of 18 meditation spots", status: "verified" },
  { id: "act-unique-playlists", category: "activities", title: "Unique Playlists Completed", detail: "Complete 2 of 2 unique playlists", status: "verified" },
  { id: "act-discovered-styles", category: "activities", title: "Discovered Styles", detail: "Discover 70 of 79 styles · magazine styles, tattoos, luxury watches", status: "verified" },
  { id: "act-unique-races-won", category: "activities", title: "Unique Races Won", detail: "Win 30 of 40 unique races", status: "verified" },
  { id: "act-race-challenge-gold-medals", category: "activities", title: "Race Challenge Gold Medals", detail: "10 of 13 gold medals · sources disagree on the exact number, see note", status: "confirming" },
  { id: "act-shooting-range-gold-medals", category: "activities", title: "Shooting Range Gold Medals", detail: "Earn all 42 gold medals", status: "verified" },
  { id: "act-video-games-played", category: "activities", title: "Video Games Played", detail: "Play all 4 video games", status: "verified" },
  { id: "act-pool-opponents-defeated", category: "activities", title: "Pool Opponents Defeated", detail: "Defeat 5 of 7 pool opponents", status: "verified" },
  { id: "act-mini-golf-locations", category: "activities", title: "Mini Golf Locations Played", detail: "Play at 2 of 3 mini golf locations", status: "verified" },
  { id: "act-basketball-hoops", category: "activities", title: "Basketball Hoops", detail: "Score at 90 of 100 hoops", status: "verified" },
  { id: "act-drone-time-trials", category: "activities", title: "Drone Time Trials Completed", detail: "Complete all 42 trials · 14 Top Fun locations", status: "verified" },
  { id: "act-stunts", category: "activities", title: "Stunts Completed", detail: "Complete 300 of 397 · 130 stunt jumps, 202 under the bridges, 40 knife flights, 25 base jumps", status: "verified" },
  { id: "act-challenges", category: "activities", title: "Challenges Completed", detail: "Complete 70 of 80 challenges", status: "verified" },
  { id: "act-bret-target-decks", category: "activities", title: "Bret's Target Decks", detail: "Complete all 15 hunting decks for Bret Vogel", status: "verified" },

  // ---------------- Milestones (15) ----------------
  { id: "mile-story-completion", category: "misc", title: "Story Completion", detail: "Finish the story · all 5 chapters", status: "verified" },
  { id: "mile-optional-tasks", category: "misc", title: "Optional Tasks Completed", detail: "Complete 100 optional tasks · black icons with pink letters, plus purple map icons", status: "verified" },
  { id: "mile-gang-operations", category: "misc", title: "Gang Operations Cleared", detail: "Clear all 39 · loot every key valuable at each location", status: "verified" },
  { id: "mile-bank-jobs", category: "misc", title: "Bank Jobs Fully Completed", detail: "Fully complete all 22 · cash drawer and safe at every bank", status: "verified" },
  { id: "mile-payday-loan-jobs", category: "misc", title: "Payday Loan Jobs Fully Completed", detail: "Fully complete all 7", status: "verified" },
  { id: "mile-smash-n-grabs", category: "misc", title: "Smash 'N' Grabs Fully Completed", detail: "Fully complete 34 of 35 · pawn shops and jewelry stores", status: "verified" },
  { id: "mile-stick-ups", category: "misc", title: "Stick Ups Fully Completed", detail: "Fully complete 50 of 91 · convenience, fast food and liquor stores", status: "verified" },
  { id: "mile-narcotics-fenced", category: "misc", title: "Narcotics Fenced", detail: "Fence $100,000 of narcotics", status: "verified" },
  { id: "mile-jewelry-fenced", category: "misc", title: "Jewelry Fenced", detail: "Fence $100,000 of jewelry", status: "verified" },
  { id: "mile-marked-bills-fenced", category: "misc", title: "Marked Bills Fenced", detail: "Fence $250,000 of marked bills", status: "verified" },
  { id: "mile-vaults-hit", category: "misc", title: "Vaults Hit", detail: "Steal from all 8 vaults at the large banks · unlocks in Chapter 4", status: "verified" },
  { id: "mile-vehicles-fenced", category: "misc", title: "Vehicles Fenced", detail: "Fence $200,000 of vehicles", status: "verified" },
  { id: "mile-base-model-vehicles", category: "misc", title: "Base Model Vehicles Scanned", detail: "Scan 200 of 277 base-model vehicles with WAiNK", status: "verified" },
  { id: "mile-standard-issue-weapons", category: "misc", title: "Standard Issue Weapons Found", detail: "Find 50 of 66 · 53 guns, 9 melee, 4 explosives in total", status: "verified" },
  { id: "mile-animals-studied", category: "misc", title: "Animals Studied", detail: "Study 100 of 255 animals through the binoculars · no hunting needed", status: "verified" },
];
