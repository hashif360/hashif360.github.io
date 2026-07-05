# hashif360.github.io

Personal blog of **Hashif Habeeb** — built with [Astro](https://astro.build) and deployed to
GitHub Pages. Editorial-minimal design, Markdown-driven posts.

**Live:** https://hashif360.github.io

## Writing a post

Drop a Markdown file in [`src/content/blog/`](src/content/blog/) and push to `main`. See
[`src/content/blog/README.md`](src/content/blog/README.md) for the frontmatter template. The
deploy is automatic via GitHub Actions.

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
