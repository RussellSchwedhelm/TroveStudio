import { supabase } from './supabase';

export interface SearchResult {
  id: string | number;
  title: string;
  image_url: string;
  type: 'product' | 'news' | 'journal';
  url: string;
  price?: number;
  category?: string;
  excerpt?: string;
}

export async function searchAll(query: string): Promise<SearchResult[]> {
  if (!query || query.trim().length < 2) return [];

  const searchTerm = `%${query}%`;

  try {
    // 1. Search Products
    const { data: products, error: productError } = await supabase
      .from('products')
      .select('id, title, image_url, price, category')
      .or(`title.ilike.${searchTerm},category.ilike.${searchTerm}`)
      .limit(5);

    if (productError) console.error('Product search error:', productError);

    // 2. Search News
    const { data: news, error: newsError } = await supabase
      .from('news')
      .select('id, title, image_url, category, excerpt')
      .or(`title.ilike.${searchTerm},category.ilike.${searchTerm},excerpt.ilike.${searchTerm}`)
      .limit(3);

    if (newsError) console.error('News search error:', newsError);

    // 3. Search Journals
    const { data: journals, error: journalError } = await supabase
      .from('journals')
      .select('id, title, image_url, subtitle')
      .or(`title.ilike.${searchTerm},subtitle.ilike.${searchTerm}`)
      .limit(3);

    if (journalError) console.error('Journal search error:', journalError);

    // Combine results
    const results: SearchResult[] = [];

    if (products) {
      results.push(...products.map(p => ({
        id: p.id,
        title: p.title,
        image_url: p.image_url,
        type: 'product' as const,
        url: `/shop/${p.id}`,
        price: p.price,
        category: p.category
      })));
    }

    if (news) {
      results.push(...news.map(n => ({
        id: n.id,
        title: n.title,
        image_url: n.image_url,
        type: 'news' as const,
        url: `/news/${n.id}`,
        category: n.category,
        excerpt: n.excerpt
      })));
    }

    if (journals) {
      results.push(...journals.map(j => ({
        id: j.id,
        title: j.title,
        image_url: j.image_url,
        type: 'journal' as const,
        url: `/journal/${j.id}`,
        excerpt: j.subtitle
      })));
    }

    return results;
  } catch (err) {
    console.error('Unified search error:', err);
    return [];
  }
}
