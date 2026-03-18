// Mock data for Jimmy's Chicken Shack — Late Night Quick Pick

export interface Mood {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
}

export interface Bundle {
  id: string;
  name: string;
  description: string;
  items: string[];
  price: number;
  tag: "Fastest" | "Fan Favorite" | "Best Deal" | "Protein Pick" | "Sweet Pick" | "Car Ready" | "Solo Pick" | "Kid Approved" | "Past Order";
  estimatedTime: number; // minutes
  moodId: string;
  image?: string;
}

export interface CustomizationOptions {
  spiceLevels: string[];
  sides: string[];
  drinks: string[];
  sauces: string[];
  desserts: string[];
}

export const MOODS: Mood[] = [
  {
    id: "feed-me-fast",
    emoji: "⚡",
    title: "Feed Me Fast",
    subtitle: "No decisions. Just food. Now.",
  },
  {
    id: "best-value",
    emoji: "💰",
    title: "Best Value",
    subtitle: "Maximum food, minimum spend.",
  },
  {
    id: "high-protein",
    emoji: "💪",
    title: "High Protein",
    subtitle: "Fuel up right. No junk, no games.",
  },
  {
    id: "for-the-car",
    emoji: "🚗",
    title: "For The Car",
    subtitle: "Built for the ride. Easy to eat.",
  },
  {
    id: "just-me",
    emoji: "🙋",
    title: "Just Me",
    subtitle: "Solo run. Exactly what you need.",
  },
  {
    id: "kids-asleep",
    emoji: "🤫",
    title: "Kids Are Asleep",
    subtitle: "You survived. You deserve this.",
  },
  {
    id: "something-sweet",
    emoji: "🍭",
    title: "Something Sweet",
    subtitle: "End the night right. Treat yourself.",
  },
  {
    id: "recently-ordered",
    emoji: "🕒",
    title: "Recently Ordered",
    subtitle: "You know exactly what you want.",
  },
];

export const BUNDLES: Record<string, Bundle[]> = {
  "feed-me-fast": [
    {
      id: "night-owl",
      name: "Night Owl Combo",
      description: "The fastest path from hunger to happy.",
      items: ["2 Crispy Tenders", "Seasoned Fries", "Fountain Drink"],
      price: 12.99,
      tag: "Fastest",
      estimatedTime: 7,
      moodId: "feed-me-fast",
      image: "/combos/tenders.png",
    },
    {
      id: "shack-classic",
      name: "Shack Classic",
      description: "The one that never misses.",
      items: ["Chicken Sandwich", "Crinkle Fries", "Lemonade"],
      price: 11.49,
      tag: "Fan Favorite",
      estimatedTime: 8,
      moodId: "feed-me-fast",
      image: "/combos/sandwich.png",
    },
    {
      id: "tender-box",
      name: "Tender Box",
      description: "All tenders, all night long.",
      items: ["5 Tenders", "House Sauce", "Small Drink"],
      price: 13.99,
      tag: "Best Deal",
      estimatedTime: 9,
      moodId: "feed-me-fast",
      image: "/combos/tenders.png",
    },
  ],
  "best-value": [
    {
      id: "big-deal",
      name: "The Big Deal",
      description: "A whole lot of shack for your dollar.",
      items: ["2 Sandwiches", "Large Fries", "2 Drinks"],
      price: 18.99,
      tag: "Best Deal",
      estimatedTime: 10,
      moodId: "best-value",
      image: "/combos/large.png",
    },
    {
      id: "family-snack",
      name: "Snack Pack",
      description: "Spread the love. Keep the coins.",
      items: ["10 Tender Bites", "Waffle Fries", "Ranch Dip", "Drink"],
      price: 15.49,
      tag: "Fan Favorite",
      estimatedTime: 9,
      moodId: "best-value",
      image: "/combos/large.png",
    },
    {
      id: "night-owl",
      name: "Night Owl Combo",
      description: "Classic value for the late night move.",
      items: ["2 Crispy Tenders", "Seasoned Fries", "Fountain Drink"],
      price: 12.99,
      tag: "Fastest",
      estimatedTime: 7,
      moodId: "best-value",
      image: "/combos/tenders.png",
    },
  ],
  "high-protein": [
    {
      id: "protein-punch",
      name: "Protein Punch",
      description: "Grilled, stacked, no apologies.",
      items: ["Grilled Chicken Bowl", "Extra Chicken", "Bottled Water"],
      price: 14.99,
      tag: "Protein Pick",
      estimatedTime: 10,
      moodId: "high-protein",
      image: "/combos/protein.png",
    },
    {
      id: "double-stack",
      name: "Double Stack",
      description: "Two sandwiches. Zero regrets.",
      items: ["2 Grilled Chicken Sandwiches", "Side Salad", "Water"],
      price: 16.49,
      tag: "Fan Favorite",
      estimatedTime: 11,
      moodId: "high-protein",
      image: "/combos/protein.png",
    },
    {
      id: "big-bird",
      name: "Big Bird Box",
      description: "For when you mean business.",
      items: ["3 Grilled Tenders", "Corn", "Black Beans", "Water"],
      price: 13.99,
      tag: "Best Deal",
      estimatedTime: 9,
      moodId: "high-protein",
      image: "/combos/protein.png",
    },
  ],
  "for-the-car": [
    {
      id: "backseat-bundle",
      name: "Backseat Bundle",
      description: "Two hands on the wheel optional.",
      items: ["2 Sandwiches", "Large Fries", "2 Drinks"],
      price: 19.99,
      tag: "Car Ready",
      estimatedTime: 10,
      moodId: "for-the-car",
      image: "/combos/large.png",
    },
    {
      id: "ride-or-fry",
      name: "Ride or Fry",
      description: "Pre-dipped. No mess. No drama.",
      items: ["Tender Dippers", "Sauce Cups", "Drink"],
      price: 14.49,
      tag: "Fastest",
      estimatedTime: 7,
      moodId: "for-the-car",
      image: "/combos/tenders.png",
    },
    {
      id: "co-pilot",
      name: "Co-Pilot Pack",
      description: "For you and whoever called shotgun.",
      items: ["2 Sandwiches", "Shared Fries", "2 Small Drinks"],
      price: 17.99,
      tag: "Fan Favorite",
      estimatedTime: 9,
      moodId: "for-the-car",
      image: "/combos/large.png",
    },
  ],
  "just-me": [
    {
      id: "solo-run",
      name: "Solo Run",
      description: "Quiet night. Good chicken. That's it.",
      items: ["1 Sandwich", "Fries", "Drink"],
      price: 10.99,
      tag: "Solo Pick",
      estimatedTime: 7,
      moodId: "just-me",
      image: "/combos/sandwich.png",
    },
    {
      id: "night-owl",
      name: "Night Owl Combo",
      description: "The late night classic. Just for you.",
      items: ["2 Crispy Tenders", "Seasoned Fries", "Fountain Drink"],
      price: 12.99,
      tag: "Fan Favorite",
      estimatedTime: 8,
      moodId: "just-me",
      image: "/combos/tenders.png",
    },
    {
      id: "tender-solo",
      name: "3 Tender Solo",
      description: "Enough. Perfect. Done.",
      items: ["3 Tenders", "1 Side", "Sauce"],
      price: 11.49,
      tag: "Fastest",
      estimatedTime: 6,
      moodId: "just-me",
      image: "/combos/tenders.png",
    },
  ],
  "kids-asleep": [
    {
      id: "survivor-pack",
      name: "Survivor Pack",
      description: "You made it through bedtime. Eat.",
      items: ["2 Sandwiches", "Loaded Fries", "2 Drinks"],
      price: 20.99,
      tag: "Fan Favorite",
      estimatedTime: 11,
      moodId: "kids-asleep",
      image: "/combos/large.png",
    },
    {
      id: "quiet-time",
      name: "Quiet Time Combo",
      description: "For the adult you are at midnight.",
      items: ["Sandwich", "Waffle Fries", "Dessert", "Drink"],
      price: 15.99,
      tag: "Best Deal",
      estimatedTime: 9,
      moodId: "kids-asleep",
      image: "/combos/sandwich.png",
    },
    {
      id: "me-time",
      name: "Me Time Plate",
      description: "Grilled. Clean. All yours.",
      items: ["Grilled Sandwich", "Side Salad", "Iced Tea"],
      price: 13.49,
      tag: "Solo Pick",
      estimatedTime: 8,
      moodId: "kids-asleep",
      image: "/combos/protein.png",
    },
  ],
  "something-sweet": [
    {
      id: "sweet-escape",
      name: "Sweet Escape",
      description: "End the night the right way.",
      items: ["Mini Bites", "Shake", "Cookie"],
      price: 11.99,
      tag: "Sweet Pick",
      estimatedTime: 6,
      moodId: "something-sweet",
      image: "/combos/sweet-escape.png",
    },
    {
      id: "dessert-duo",
      name: "Dessert Duo",
      description: "Who said chicken and dessert can't coexist?",
      items: ["3 Tenders", "Banana Pudding", "Shake"],
      price: 14.49,
      tag: "Fan Favorite",
      estimatedTime: 8,
      moodId: "something-sweet",
      image: "/combos/sweet-escape.png",
    },
    {
      id: "shake-night",
      name: "Shake Night",
      description: "Sip something good. No judgment.",
      items: ["Large Shake", "Tender Bites", "Dipping Sauce"],
      price: 10.99,
      tag: "Sweet Pick",
      estimatedTime: 5,
      moodId: "something-sweet",
      image: "/combos/sweet-escape.png",
    },
  ],
  "recently-ordered": [
    {
      id: "recent-1",
      name: "Ordered Yesterday • 1:15 AM",
      description: "3 Tenders, Seasoned Fries, House Sauce, Fountain Drink.",
      items: ["Substitute Sweet Tea (+ $0.50)", "Extra House Sauce (+ $0.50)"],
      price: 14.49,
      tag: "Past Order",
      estimatedTime: 6,
      moodId: "recently-ordered",
      image: "/combos/tenders.png",
    },
    {
      id: "recent-2",
      name: "Ordered Tuesday • 8:45 PM",
      description: "Chicken Sandwich, Mac & Cheese, Lemonade.",
      items: ["No Pickles", "Medium Spice"],
      price: 12.99,
      tag: "Past Order",
      estimatedTime: 8,
      moodId: "recently-ordered",
      image: "/combos/sandwich.png",
    },
    {
      id: "recent-3",
      name: "Ordered March 1st • 10:30 PM",
      description: "Grilled Chicken Bowl, Extra Chicken, Large Shake.",
      items: ["No Onions", "Add Bacon (+ $1.50)"],
      price: 16.99,
      tag: "Past Order",
      estimatedTime: 9,
      moodId: "recently-ordered",
      image: "/combos/protein.png",
    },
  ],
};

export const CUSTOMIZATION_OPTIONS: CustomizationOptions = {
  spiceLevels: ["No Spice", "Mild", "Medium", "Hot 🔥", "Extra Hot 🔥🔥"],
  sides: ["Seasoned Fries", "Waffle Fries", "Mac & Cheese", "Coleslaw", "Corn", "Side Salad"],
  drinks: ["Fountain Drink", "Lemonade", "Iced Tea", "Bottled Water", "Shake (+$2)"],
  sauces: ["House Sauce", "Ranch", "Honey Mustard", "BBQ", "Hot Sauce", "Garlic Butter"],
  desserts: ["Cookie", "Banana Pudding", "Mini Bites", "Shake (+$2)", "None"],
};

export const TAX_RATE = 0.085;
export const MOCK_PICKUP = "Counter Pickup";


export interface MenuItem {
  id: string;
  name: string;
  calories: string;
  image: string;
  category: "Sides" | "Drinks" | "Desserts";
}

export const MENU_ITEMS: Record<string, MenuItem[]> = {
  Sides: [
    { id: "fries", name: "Crinkle-Cut Fries", calories: "400 Cal per serving", image: "/menu-items/fries.png", category: "Sides" },
    { id: "waffle-fries", name: "Waffle Fries", calories: "450 Cal per serving", image: "/menu-items/waffle-fries.png", category: "Sides" },
    { id: "mac-cheese", name: "Mac & Cheese", calories: "280 Cal per cup", image: "/menu-items/mac-cheese.png", category: "Sides" },
    { id: "coleslaw", name: "Coleslaw", calories: "150 Cal per cup", image: "/menu-items/coleslaw.png", category: "Sides" },
    { id: "sauce", name: "House Sauce", calories: "190 Cal per serving", image: "/menu-items/house-sauce.png", category: "Sides" },
  ],
  Drinks: [
    { id: "fountain", name: "Fountain Drink", calories: "0-300 Cal per 22 fl oz", image: "/menu-items/fountain-drink.png", category: "Drinks" },
    { id: "lemonade", name: "Lemonade", calories: "290 Cal per 22 fl oz", image: "/menu-items/lemonade.png", category: "Drinks" },
    { id: "water", name: "Bottled Water", calories: "0 Cal", image: "/menu-items/water.png", category: "Drinks" },
  ],
  Desserts: [
    { id: "cookie", name: "Chocolate Chip Cookie", calories: "380 Cal", image: "/menu-items/cookie.png", category: "Desserts" },
  ],
};
