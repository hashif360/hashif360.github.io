# How to publish a post

Publishing is just **adding a Markdown file here and pushing to `main`**. GitHub Actions
rebuilds and deploys the site automatically (usually live within ~1–2 minutes).

## 1. Create a file

Add a new `.md` (or `.mdx`) file in this folder. The file name becomes the URL slug:

```
src/content/blog/my-new-idea.md   →   https://hashif360.github.io/blog/my-new-idea/
```

Use lowercase words separated by hyphens.

## 2. Add frontmatter

Every post starts with this block between `---` fences:

```markdown
---
title: 'Your headline here'
description: 'One or two sentences shown in the list, RSS, and social previews.'
pubDate: 2026-07-05
tags: ['building', 'craft']   # optional
draft: false                  # optional — set true to hide from the live site
---

Your post body starts here. Regular **Markdown** works:
headings, lists, `code`, [links](https://example.com), > blockquotes, images, etc.
```

### Fields

| Field         | Required | Notes                                                        |
| ------------- | -------- | ------------------------------------------------------------ |
| `title`       | yes      | The post headline.                                           |
| `description` | yes      | Shown in the list, RSS feed, and Open Graph preview.         |
| `pubDate`     | yes      | `YYYY-MM-DD`. Posts sort newest-first by this date.          |
| `updatedDate` | no       | `YYYY-MM-DD`. Shows an "updated" note when present.          |
| `tags`        | no       | Array of strings. Each becomes a `/tags/<tag>/` page.        |
| `heroImage`   | no       | Path to an image (place it next to the post or in `public`). |
| `draft`       | no       | `true` hides the post from the live site (still visible in `npm run dev`). |

## 3. Commit & push

```bash
git add .
git commit -m "post: my new idea"
git push
```

That's it — the Action deploys it. Preview locally first with `npm run dev` if you like.
