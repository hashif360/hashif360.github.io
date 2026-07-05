# hashif360.github.io

Personal blog of **Hashif Habeeb** — built with [Astro](https://astro.build) and deployed to
GitHub Pages. Editorial-minimal design, Markdown-driven posts.

**Live:** https://hashif360.github.io

## Writing a post

1. Drop a Markdown file in [`src/content/blog/`](src/content/blog/) — see
   [`src/content/blog/README.md`](src/content/blog/README.md) for the frontmatter template.
2. Publish it:
   ```bash
   npm run deploy      # build + push the site live
   ```
   The site updates at https://hashif360.github.io within ~1 minute.

## How deploys work

The site is published from the **`gh-pages` branch** (GitHub Pages "deploy from a branch" mode),
which is free for public repos. `npm run deploy` builds `dist/` and pushes it there; GitHub serves
it within ~1 minute.

> **Note:** a custom GitHub Actions workflow (push-to-publish) was intentionally *not* used —
> custom Actions runs are restricted on this account, while the built-in branch deployment is free
> and reliable. `npm run deploy` is the supported path. (If true `git push`-to-publish is ever
> wanted, deploy the same build to Cloudflare Pages or Netlify instead.)

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → ./dist
npm run preview   # preview the production build
```

## Structure

```
src/
  components/   Header, Footer, PostCard, ThemeToggle, BaseHead
  layouts/      BaseLayout, PostLayout
  pages/        index, about, blog/[...slug], tags/[tag], 404, rss.xml
  content/blog/ your posts (Markdown / MDX)
  styles/       global.css — design tokens live here
  consts.ts     site metadata, projects, socials, nav — edit these
```

## Customizing

- **Site name / bio / projects / links:** [`src/consts.ts`](src/consts.ts)
- **Colors, fonts, accent:** the `:root` tokens at the top of [`src/styles/global.css`](src/styles/global.css)
- **Custom domain:** add a `CNAME` file with your domain + configure DNS.
