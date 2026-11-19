import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const CATEGORY_LABEL: Record<Post['data']['category'], string> = {
  'raport-ai': 'Raport AI',
  artykul: 'Artykuł',
};

/** Opublikowane wpisy (bez szkiców), od najnowszego. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
}
