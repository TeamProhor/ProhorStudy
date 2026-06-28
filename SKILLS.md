# Skills & Expertise
This document outlines task-specific expertise and workflows for this project.

## UI & Animations
- We use `shadcn/ui` for base components.
- We use GSAP for advanced animations (e.g., stagger, scroll-driven reveals).
- Mobile-first approach is mandatory, ensuring interfaces feel native on small screens and expand elegantly for desktop.

## AI Interfaces & Chat
- We use Vercel's `ai-elements` and shadcn `@blocks-so/ai-02` for building conversational UIs, tool displays, and AI artifacts.
- When working on chat features, always refer to the local skill instructions at `.agents/skills/ai-elements/SKILL.md`.

## Database, Backend & State
- Supabase is used for backend operations. Refer to Postgres best practices for schema and queries.
- For chat architecture, we utilize `@supabase/realtime-chat-nextjs` for low-latency realtime message streaming.
- Use `@supabase/infinite-query-hook` (via `use-infinite-query.ts`) for chat history pagination and efficient data fetching.

## Performance
- Highly optimized performance is a priority.
- Ensure efficient rendering, memoization where necessary, and minimal layout shifts.
