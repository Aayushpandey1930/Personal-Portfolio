<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- All editable content (profile, contact links, skills, learnings, projects) lives in `src/content/*.ts`; components only render it — keeps edits in one place.
- Contact/profile links go through `src/lib/contact.ts` helpers; a `null` value must render a non-clickable placeholder, never a guessed URL or mailto.
- Project previews are coded components in `ProjectVisual.tsx` scaled with container-query units, not screenshots — they stay crisp and contain no invented data.
- Case studies are static routes at `/projects/$slug` driven by `src/content/projects.ts`; there is no backend.
- Scroll-reveal hides content only after JS adds `html.reveal-ready` (see `use-reveal.ts`), so SSR content stays visible without JS and under reduced motion.
- Client libraries newly imported by app code are listed in `optimizeDeps.include` in `vite.config.ts` — prevents mid-session re-optimization that loads two React copies in the open preview.
