---
title: 'Four products, one lesson: shipping beats perfect'
description: 'What building DoosraBox, Interviewable, SayWhen and Lesson21 taught me about the gap between a great idea and a live URL.'
pubDate: 2026-06-28
tags: ['building', 'craft', 'lessons']
---

Every product I've built started the same way: a spark of an idea that felt obviously great,
followed by weeks of quietly convincing myself it wasn't ready yet. **DoosraBox**,
**Interviewable**, **SayWhen**, **Lesson21** — four very different products, one recurring
lesson. The version in my head was always more polished than anything I could ship, and that
gap is exactly where projects go to die.

Here's what I keep re-learning.

## 1. The demo you can click beats the doc you can read

A spec describes a thing. A running prototype *is* the thing. The moment there's a URL a
stranger can open, the conversation changes from "what if" to "what about this?" — and that
second conversation is the only one that improves the product.

```ts
// The most valuable line in any project is the one that makes it real:
app.listen(PORT, () => console.log(`live → http://localhost:${PORT}`));
```

Get to that line as fast as you honestly can.

## 2. Scope is a feeling, not a fact

Every time I felt a project was "almost done," it had about three weeks left. Every time I felt
it was "way too early to show anyone," it was already good enough for someone. My gut is a
terrible estimator in both directions — so now I ship on a calendar, not on a feeling.

## 3. Polish the first five minutes

Nobody experiences your whole product on day one. They experience the first five minutes:
the landing page, the sign-up, the first click that either works or doesn't. I've learned to
pour a disproportionate amount of care there and let the deep corners stay rough until someone
actually reaches them.

- The empty state matters more than the power-user view.
- The error message matters more than the happy path.
- The loading spinner is a promise — keep it short.

## 4. Boring tech, interesting product

None of my products got more interesting because I used a fancier database. They got
interesting when the *idea* was sharp and the experience was smooth. Boring, well-understood
tools free up all your attention for the part that's actually novel.

---

If there's a through-line to four products, it's this: **the work only starts once it's
live.** Everything before the first real user is rehearsal. So ship the rehearsal, and let
reality edit the rest.

More build logs to come.
