# Jimmy's Chicken Shack — Late Night Quick Pick 🔥

A bold, mobile-first ordering prototype built for the **Late Night Quick Pick** concept — a guided ordering experience designed to reduce decision fatigue for late-night fast food customers.

---

## What Is This?

**Late Night Quick Pick** is a smart ordering concept for Jimmy's Chicken Shack that replaces the traditional menu-browsing experience with a mood-based guided flow. Instead of scrolling through 40+ items at midnight, customers tap their vibe, get 3 curated bundles, and customize in seconds.

This prototype demonstrates what a pilot experience could look like — polished, branded, and believable.

---

## Why It's Designed This Way

Late-night customers are tired and hungry. Traditional menu ordering adds friction at exactly the wrong moment. The UX principle here is **decision compression**:

- Mood selection → narrows the universe of options
- Smart bundles → pre-curated combinations that feel personal
- Minimal customization → only the 4-5 decisions that actually matter
- Confirmation → immediate and satisfying

The visual design mirrors the brand energy: dark, bold, high-contrast, warm, urgent. Every screen is designed to feel easy to operate with one thumb.

---

## How to Run It Locally

### Prerequisites
- Node.js 18+
- npm

### Steps

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

For mobile testing, open Chrome DevTools → Toggle device toolbar → Select iPhone 14 Pro (or similar).

### Build for production
```bash
npm run build
npm start
```

---

## What's Mocked

Everything. This is a pure front-end prototype:

| Feature | Mock |
|--------|------|
| Menu data | Hardcoded in `lib/data.ts` |
| Order flow | React Context + useReducer in `context/OrderContext.tsx` |
| Order number | `Math.random()` 4-digit number |
| Estimated ready time | `Date.now() + 10 minutes` |
| Tax | Flat 8.5% calculated client-side |
| Pickup method | Static string ("Counter Pickup") |
| Payment | Not implemented — button says "Place Mock Order" |
| Auth / Login | Not required |
| Rewards | Not implemented — placeholder nav items |
| Location | Not implemented — placeholder nav items |

---

## Project Structure

```
jimmys-chicken-shack/
├── app/
│   ├── globals.css          # Brand animations, utilities, base styles
│   ├── layout.tsx           # Root layout with OrderProvider + metadata
│   └── page.tsx             # Main SPA page — routes by currentStep
├── components/
│   ├── BrandHeader.tsx      # Sticky nav with responsive logos
│   ├── HeroSection.tsx      # Full-viewport hero with flame logo
│   ├── BenefitsStrip.tsx    # 3 quick value props
│   ├── WhyItWorks.tsx       # Concept explanation + stat cards
│   ├── MoodSelector.tsx     # Step 1: 7 mood cards
│   ├── RecommendationGrid.tsx # Step 2: 3 bundle picks
│   ├── BundleCard.tsx       # Individual bundle display component
│   ├── CustomizationSheet.tsx # Step 3: spice, side, drink, sauce, dessert
│   ├── OrderSummary.tsx     # Pricing breakdown + place order CTA
│   ├── ConfirmationScreen.tsx # Order confirmed + mock order number
│   └── FooterNav.tsx        # Mobile-only sticky bottom nav
├── context/
│   └── OrderContext.tsx     # Global state: mood, bundle, customizations, step
├── lib/
│   └── data.ts              # All mock data: moods, bundles, options
└── public/
    ├── hero-logo.png        # Full flame logo for hero section
    ├── web-logo.png         # Wordmark logo for desktop nav
    └── mobile-logo.png      # "J" flame icon for mobile nav / favicon
```

---

## Interview Notes

### The Problem Being Solved

Late-night fast food ordering is broken for the customer and for the crew. Customers face a wall of options when their brains are at minimum capacity. Kitchen staff deal with half-heard special requests and nonstandard orders that slow down service and increase mistakes.

### The Customer Benefit

- **Speed**: 4+ minutes of menu browsing → under 30 seconds to first tap
- **Confidence**: Curated bundles remove second-guessing
- **Satisfaction**: Recommendations feel personal, not random
- **Low friction**: Customization only asks what actually matters

### The Staff Benefit

- **Standardized orders**: Bundles have defined item lists — less ambiguity
- **Fewer mistakes**: No free-form requests at the window
- **Faster prep**: Predictable bundles mean the kitchen can pre-stage common items
- **Scalable**: Works across locations without menu training reductions

### Why This Is a Realistic Pilot

- **Low risk to implement**: Frontend-only experience layered on top of existing POS
- **Works with existing menu**: Bundles curated from current menu items
- **Measurable outcomes**: Ordering time, order ticket accuracy, customer satisfaction — all trackable
- **Channel fit**: 70%+ of late-night orders in QSR come through mobile — this meets customers where they already are
- **Phased rollout**: Pilot at 3–5 high-volume late-night locations, compare against control group

---

## 1-Minute Walkthrough Script

> "This is the Late Night Quick Pick — a guided ordering concept for Jimmy's Chicken Shack.
>
> The problem is simple: late-night customers are tired, indecisive, and staring at a wall of options. We solve that with a three-step flow.
>
> First — they hit 'Start Your Order.' Instead of a menu, we ask one question: what's your vibe? Feed Me Fast, Best Value, High Protein, For The Car — seven moods, one tap.
>
> Second — based on that mood, we surface three curated bundles. No scrolling. No second-guessing. Just the three best options for what they told us they wanted.
>
> Third — they customize in seconds. Spice level, side swap, drink, sauce. Done. Confirm, review the order, and place it.
>
> The result? Faster ordering for the customer. Cleaner, more predictable tickets for the kitchen. And a digital experience that actually fits the brand.
>
> This could go live as a pilot at high-volume late-night locations with minimal integration work — it layers right on top of the existing POS. I built it mobile-first because that's where 70% of late-night QSR orders happen."

---

## Phase 2 Enhancements

| Feature | Description |
|---------|-------------|
| **Real POS Integration** | Connect bundles to actual menu items via API (e.g., Square, Toast) |
| **Geolocation Pickup** | "Find the nearest Shack" using browser Geolocation API |
| **Order History** | LocalStorage or authenticated account for repeat order shortcuts |
| **Loyalty Points** | Rewards system integration — show points earned per order |
| **Dynamic Bundles** | Time-based bundle surfacing (e.g., late-night exclusives 10pm–3am) |
| **Push Notifications** | "Your order's ready" notification via PWA Service Worker |
| **Kiosk Mode** | Tablet-optimized in-store Quick Pick experience |
| **A/B Bundle Testing** | Serve different bundle sets and measure conversion |
| **Allergen Filtering** | Dietary/allergen flags on bundles and items |
| **Group Ordering** | "For The Car" flow supports multiple people adding to one cart |

---

## Why Mobile-First Was the Right Product Decision

The late-night QSR customer is almost always on a phone. According to industry data, over 70% of digital food orders between 10pm and 3am are placed on mobile devices. Designing for mobile first meant:

1. **Touch targets came first**: Buttons and cards are thumb-friendly before they're mouse-friendly
2. **Content hierarchy was forced**: Every word had to earn its place on a 375px screen
3. **Performance constraints clarified**: What felt fast on mobile felt fast on desktop too
4. **Real-world context fit**: One hand, dim lighting, possibly from a car — the interface had to survive all of it

Desktop is a bonus in this use case. Mobile is the product.
