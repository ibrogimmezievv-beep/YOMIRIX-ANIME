# YOMIRIX - Premium Anime Streaming Platform

## Overview

YOMIRIX is a modern, premium anime streaming platform built with cutting-edge web technologies. It provides a seamless experience for discovering, browsing, and watching anime with a beautiful, responsive interface.

## Features

### Core Features
- **Hero Section**: Featured anime showcase with metadata
- **Browse & Search**: Full-featured catalog with advanced filtering
- **Anime Details**: Comprehensive information pages for each anime
- **Watch Player**: Integrated video player with episode list
- **Favorites**: Save your favorite anime
- **User Profile**: Track your viewing statistics
- **Responsive Design**: Mobile-first, works on all devices
- **Comments**: Community discussions on episodes
- **View Tracking**: Progress bar for watching status

### Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Featured content and trending anime |
| Catalog | `/catalog` | Browse all anime with filters |
| Popular | `/popular` | Most watched anime |
| Latest | `/latest` | Newly released episodes |
| Anime Details | `/anime/[slug]` | Detailed information page |
| Watch | `/watch/[slug]` | Video player and episode list |
| Search | `/search?q=...` | Search results |
| Favorites | `/favorites` | Saved anime |
| Profile | `/profile` | User statistics and preferences |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image Component
- **Type Safety**: Full TypeScript coverage

## Project Structure

```
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── catalog/
│   │   ├── page.tsx             # Catalog with filters
│   │   └── layout.tsx
│   ├── anime/[slug]/
│   │   ├── page.tsx             # Anime details
│   │   └── layout.tsx
│   ├── watch/[slug]/
│   │   ├── page.tsx             # Video player
│   │   └── layout.tsx
│   ├── search/
│   │   └── page.tsx             # Search results
│   ├── favorites/
│   │   ├── page.tsx             # Favorites list
│   │   └── layout.tsx
│   ├── profile/
│   │   ├── page.tsx             # User profile
│   │   └── layout.tsx
│   ├── popular/
│   │   ├── page.tsx             # Popular anime
│   │   └── layout.tsx
│   ├── latest/
│   │   ├── page.tsx             # Latest releases
│   │   └── layout.tsx
│   ├── not-found.tsx            # 404 page
│   └── error.tsx                # Error handling
├── components/
│   ├── Header.tsx               # Main navigation
│   ├── MobileNav.tsx            # Mobile navigation
│   ├── AnimeCard.tsx            # Anime card component
│   ├── AnimeGrid.tsx            # Grid layout
│   ├── Hero.tsx                 # Hero section
│   ├── SearchBar.tsx            # Search input
│   ├── FilterBar.tsx            # Filter controls
│   ├── EpisodeList.tsx          # Episode listing
│   ├── SeasonSelector.tsx       # Season switcher
│   ├── VideoPlayer.tsx          # Video player
│   ├── CommentList.tsx          # Comments section
│   ├── CommentItem.tsx          # Single comment
│   ├── SectionHeader.tsx        # Section title
│   └── ui/
│       ├── Button.tsx           # Button component
│       ├── Badge.tsx            # Badge component
│       ├── Rating.tsx           # Star rating
│       ├── LoadingState.tsx     # Loading indicator
│       └── EmptyState.tsx       # Empty state
├── lib/
│   ├── types/
│   │   └── anime.ts             # TypeScript types
│   ├── anime-data.ts            # Mock database
│   ├── providers/
│   │   └── anime-provider.ts    # API provider interface
│   └── utils.ts                 # Utility functions
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies
```

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone https://github.com/ibrogimmezievv-beep/YOMIRIX-ANIME.git
cd YOMIRIX-ANIME
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

### Production Build
```bash
npm run build
npm start
```

### Type Check
```bash
npm run type-check
```

### Lint
```bash
npm run lint
```

## Environment Variables

Create a `.env.local` file (optional for future integrations):

```env
# API Providers
NEXT_PUBLIC_ANILIST_API=https://graphql.anilist.co
NEXT_PUBLIC_JIKAN_API=https://api.jikan.moe/v4
```

## Architecture & Design Patterns

### Provider Architecture
The project uses a provider-based architecture to abstract API calls:

```typescript
interface AnimeProviderInterface {
  searchAnime(query: string): Promise<SearchResult[]>;
  getAnime(id: string): Promise<Anime | null>;
  getPopular(): Promise<Anime[]>;
  getSeasonal(): Promise<Anime[]>;
  getEpisodes(animeId: string): Promise<Episode[]>;
}
```

This allows easy integration with:
- AniList API
- Jikan API
- Custom backends
- Database queries

### Component Architecture

**Server Components**:
- Layouts
- List displays
- Content sections

**Client Components**:
- Interactive elements (marked with `'use client'`)
- Search, filters, favorites
- Video player controls

### Type Safety

Full TypeScript coverage with strict mode:
```typescript
interface Anime {
  id: string;
  slug: string;
  title: string;
  // ... more fields
}
```

## Styling

### Color Scheme

```
Brand Colors:
- 900 (#0a0a0a): Almost black background
- 800 (#1a1a1a): Dark surfaces
- 700 (#2a2a2a): Slightly lighter surfaces
- 600 (#3a3a3a): Hover states
- 500 (#4a4a4a): Borders
- 400 (#6a6a6a): Secondary text
- 300 (#8a8a8a): Tertiary text
- 200 (#b0b0b0): Muted text
- 100 (#d4d4d4): Primary text
- accent (#e63946): Red accent color
```

### Responsive Breakpoints
- Mobile: < 640px (default styles)
- Tablet: 640px - 1024px (sm:, md: prefixes)
- Desktop: > 1024px (lg:, xl: prefixes)

## Future Roadmap

### Phase 2 - Backend & Authentication
- [ ] Supabase/PostgreSQL integration
- [ ] User registration and login
- [ ] OAuth2 with Discord/Google
- [ ] Persistent user data

### Phase 3 - Community
- [ ] Database-backed comments
- [ ] User ratings and reviews
- [ ] Push notifications
- [ ] Personalized recommendations

### Phase 4 - Content
- [ ] Author system
- [ ] Content upload
- [ ] Moderation panel
- [ ] Admin dashboard

### Phase 5 - Streaming
- [ ] AniList/Jikan API integration
- [ ] Legal streaming provider APIs
- [ ] Subtitle support
- [ ] Multi-language audio
- [ ] Watch history sync across devices

## Performance Optimization

- ✅ Image optimization with Next.js Image
- ✅ Lazy loading for images and components
- ✅ Code splitting and tree-shaking
- ✅ Minimal client-side JavaScript
- ✅ CSS-in-JS for efficient styling
- ✅ Server-side rendering where appropriate

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels for icon buttons
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Color contrast compliance
- ✅ Alt text for all images

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Credits

- Icons by [Lucide React](https://lucide.dev)
- Styling by [Tailwind CSS](https://tailwindcss.com)
- Built with [Next.js](https://nextjs.org)

## Support

For issues, questions, or suggestions, please create an GitHub issue.

## Changelog

### v1.0.0 (Initial Release)
- Core MVP with 12 anime titles
- Full navigation and routing
- Responsive design
- Search and filtering
- Video player interface
- User favorites
- Profile page with statistics
- Comments section
- Provider architecture for future API integration
