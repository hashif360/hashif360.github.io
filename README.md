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

## Auto-deploy (optional — publish by `git push` alone)

A ready-to-use GitHub Actions workflow lives at `.github/workflows/deploy.yml`. It isn't active
yet because pushing a workflow file needs an extra permission on the CLI token. To turn it on
(one-time):

```bash
# 1. Grant the workflow scope (opens a browser / device prompt)
gh auth refresh -h github.com -s workflow

# 2. Commit and push the workflow
git add .github && git commit -m "Enable auto-deploy" && git push

# 3. Switch Pages to build from Actions
gh api -X PUT repos/hashif360/hashif360.github.io/pages -f build_type=workflow
```

After that, every `git push` to `main` rebuilds and deploys automatically — no `npm run deploy`
needed.

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
