# jesperkristensen58.github.io

My personal link-in-bio page — a self-owned replacement for Linktree.
Plain static HTML/CSS/JS: **no build step, no dependencies.** It deploys to GitHub
Pages and pins to IPFS for **[jtk.eth](https://jtk.eth.limo)** from the exact same files.

🔗 Live: <https://jesperkristensen58.github.io/> · <https://jtk.eth.limo>

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page + all links (this is what you edit most). |
| `styles.css` | Theme. Change the colors in the `:root {…}` block at the top. |
| `app.js` | Tiny — only keeps the footer year current. |
| `assets/` | `avatar.jpg`, generated icons, `favicon.svg`. |
| `site.webmanifest`, `robots.txt`, `sitemap.xml`, `.nojekyll` | Standard site metadata. |

## Editing links

Open `index.html`. Each link is one self-contained block:

```html
<a class="link" href="https://example.com/" target="_blank" rel="noopener noreferrer">
  <span class="link-text">
    <span class="link-title">My link title</span>
    <span class="link-host">example.com</span>
  </span>
  <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</a>
```

- **Add** a link: copy a block, change `href`, `link-title`, and `link-host`.
- **Remove** a link: delete its block.
- **Reorder**: move blocks up/down. Sections are `<section class="section">`.
- The featured (pinned) card adds `class="link featured"` and a `<span class="link-eyebrow">`.

## Preview locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy → GitHub Pages (the github.io URL)

Pages serves the `main` branch root. Just push:

```bash
git add -A && git commit -m "Update links" && git push
```

Live within ~1 minute at <https://jesperkristensen58.github.io/>.
> The previous portfolio site is preserved on the `archive/2023-portfolio` branch.

## Deploy → jtk.eth (ENS + IPFS)

The site uses **relative paths**, so it works when served from an IPFS CID.

**Easiest (auto-sync): [Fleek](https://fleek.xyz)** — connect this GitHub repo; every
push pins to IPFS and can update the ENS content hash automatically.

**Manual:**
1. Pin the folder to IPFS (e.g. [Pinata](https://pinata.cloud), `w3` / web3.storage, or
   `ipfs add -r .`) and copy the resulting **CID**.
2. Go to <https://app.ens.domains> → **jtk.eth** → **Records** → set
   **Content Hash** to `ipfs://<CID>`.
3. Confirm the wallet transaction. Propagates in a few minutes; browse via
   `jtk.eth` (Brave/MetaMask) or the `https://jtk.eth.limo` gateway.

> Re-pin and update the content hash whenever you change the site.

## License

Code: MIT. Avatar/photo © Jesper Kristensen.
