# jtk-links — source for jesperkristensen58.github.io

My personal link-in-bio page — a self-owned replacement for Linktree.
Plain static HTML/CSS/JS: **no build step, no dependencies.**

🔗 Live: <https://jesperkristensen58.github.io/> · <https://jtk.eth.limo>

## How publishing works

```
  edit here (PRIVATE jtk-links)  ──push to main──▶  GitHub Action
                                                         │ mirrors files
                                                         ▼
                          PUBLIC jesperkristensen58.github.io  ──▶  live site
```

- **You only ever edit this repo.** On every push to `main`, `.github/workflows/deploy.yml`
  mirrors the files to the public `jesperkristensen58.github.io` repo, which serves the page.
- Auth is a write-scoped SSH **deploy key** (private half = the `PAGES_DEPLOY_KEY` secret here).
- Don't edit the public repo directly — it's generated output and gets overwritten on each publish.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page + all links (this is what you edit most). |
| `styles.css` | Theme. Change the colors in the `:root {…}` block at the top. |
| `app.js` | Tiny — only keeps the footer year current. |
| `assets/` | `avatar.jpg`, generated icons, `favicon.svg`. |
| `papers/` | Research PDFs (kept so old `…/papers/…` links don't 404). |
| `.github/workflows/deploy.yml` | The auto-publish Action (stays private; not mirrored). |

## Editing links

Each link in `index.html` is one self-contained block:

```html
<a class="link" href="https://example.com/" target="_blank" rel="noopener noreferrer">
  <span class="link-text">
    <span class="link-title">My link title</span>
    <span class="link-host">example.com</span>
  </span>
  <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</a>
```

Copy a block to add, delete it to remove, move it to reorder. Sections are `<section class="section">`.
The featured (pinned) card adds `class="link featured"` and a `<span class="link-eyebrow">`.

## Preview locally

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

## Deploy

```bash
git add -A && git commit -m "Update links" && git push
```

That's it — the Action publishes to the public repo and the live site updates in ~1–2 min.
Watch it under this repo's **Actions** tab.

## jtk.eth (ENS + IPFS)

The site uses relative paths, so it also serves from IPFS. Pin the published files (e.g. via
[Fleek](https://fleek.xyz), [Pinata](https://pinata.cloud), or `ipfs add -r .`), then at
<https://app.ens.domains> set **jtk.eth → Records → Content Hash** to `ipfs://<CID>` and sign
the transaction. Re-pin + update the hash whenever the site changes (Fleek can automate this).

## License

Code: MIT. Avatar/photo © Jesper Kristensen.
