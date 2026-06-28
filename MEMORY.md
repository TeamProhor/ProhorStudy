# Memory & Learnings
This document acts as a persistent memory for past decisions and mistakes to avoid repeating them.

## Key Decisions
- **Register**: Product (Study AI Web & Mobile App).
- **Design System**: Claude-inspired editorial canvas with a warm cream (`#faf9f5`) background and coral (`#cc785c`) CTAs.
- **Typography**: Copernicus/Tiempos (serif) for headings, StyreneB/Inter (sans-serif) for body text and UI labels.
- **Mockups**: Code block UI and terminal outputs use dark navy (`#181715`) surfaces to contrast the cream canvas.
- **AI UI Architecture**: Decided on Vercel's `ai-elements` ecosystem (along with `@blocks-so/ai-02`) to construct the frontend conversational interfaces.
- **Chat Infrastructure**: Decided on Supabase Realtime (`@supabase/realtime-chat-nextjs` and `infinite-query-hook`) to power the low-latency message streaming backend.

## Known Mistakes to Avoid
- **Color Palette**: Do not use generic SaaS blue/cyan palettes. Stick to the cream/coral/navy identity.
- **Contrast**: Watch out for low contrast text on tinted cream backgrounds. Ensure body text is legible.
- **Over-animation**: Do not animate everything. Motion should be intentional and purposeful, not an afterthought.
