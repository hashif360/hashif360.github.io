import getReadingTime from 'reading-time';
import type { CollectionEntry } from 'astro:content';

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function readingTime(body: string | undefined): string {
  if (!body) return '1 min read';
  return getReadingTime(body).text;
}

// Newest first, drafts hidden in production.
export function sortPosts(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return posts
    .filter((p) => import.meta.env.DEV || !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
