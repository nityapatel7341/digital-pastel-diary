<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the portfolio at the TanStack index route; use Bootstrap grid CSS for responsive columns and the shared Button for actions, preserving the supported React runtime.
- Render a fixed set of portfolio sections ending at the footer; avoid scroll-triggered content insertion to keep navigation and page length stable.
- Keep all portfolio visual roles in global CSS tokens; use generated camera imagery as decorative still-life, never as a personal photo.

- Keep contact client-only as a downloadable unsent draft until a real delivery destination is supplied; never imply successful delivery.
