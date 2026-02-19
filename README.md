# SpeakQuick Landing Page

A modern, responsive landing page for SpeakQuick - an AI-powered transcription app for macOS.

## Features

- **Hero Section**: Animated mesh gradient background with live transcription demo
- **Features Explorer**: Interactive tabbed interface showcasing transcription capabilities
- **Why Different**: Animated cards highlighting key differentiators
- **Pricing**: Simple one-time purchase pricing table
- **FAQ**: Expandable accordion with common questions
- **Animations**: Scroll-triggered animations using Framer Motion
- **Responsive**: Fully responsive design for all screen sizes

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                  # Next.js app router
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # UI components (Button, Accordion)
│   ├── hero.tsx        # Hero section
│   ├── features-section.tsx
│   ├── why-different-section.tsx
│   ├── pricing-section.tsx
│   ├── faq-section.tsx
│   └── footer.tsx
├── hooks/              # Custom React hooks
│   └── use-scroll-animation.ts
├── lib/                # Utilities
│   └── utils.ts
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind configuration
└── next.config.js      # Next.js configuration
```

## Design Inspiration

This landing page is inspired by [NameQuick](https://namequick.app) and follows similar design patterns:
- Mesh gradient backgrounds
- macOS-style UI elements
- Glassmorphism effects
- Smooth animations and transitions
- Clean typography and spacing

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 216 100% 50%;    /* Adjust primary color */
  --background: 215 22% 96%;  /* Adjust background */
  /* ... */
}
```

### Content

Update the content in each section component:
- `components/hero.tsx` - Hero headline and CTA
- `components/features-section.tsx` - Feature categories and descriptions
- `components/pricing-section.tsx` - Pricing tiers
- `components/faq-section.tsx` - FAQ items

## License

MIT
