'use server';

import { createClient } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';

// --- Products ---

export async function addProduct(formData: FormData) {
  const supabase = await createClient();
  
  const product = {
    title: formData.get('title') as string,
    price: parseFloat(formData.get('price') as string),
    image_url: formData.get('image_url') as string,
    category: formData.get('category') as string,
    stock_quantity: parseInt(formData.get('stock_quantity') as string) || 0,
  };

  const { error } = await supabase.from('products').insert([product]);

  if (error) throw error;
  
  revalidatePath('/shop');
  revalidatePath('/admin/products');
}

export async function updateProduct(id: number, formData: FormData) {
  const supabase = await createClient();
  
  const product = {
    title: formData.get('title') as string,
    price: parseFloat(formData.get('price') as string),
    image_url: formData.get('image_url') as string,
    category: formData.get('category') as string,
    stock_quantity: parseInt(formData.get('stock_quantity') as string) || 0,
  };

  const { error } = await supabase.from('products').update(product).eq('id', id);

  if (error) throw error;
  
  revalidatePath('/shop');
  revalidatePath('/admin/products');
}

export async function deleteProduct(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from('products').delete().eq('id', id);

  if (error) throw error;
  
  revalidatePath('/shop');
  revalidatePath('/admin/products');
}

// --- News ---

export async function addNews(formData: FormData) {
  const supabase = await createClient();
  
  const newsItem = {
    title: formData.get('title') as string,
    date: formData.get('date') as string,
    category: formData.get('category') as string,
    excerpt: formData.get('excerpt') as string,
    image_url: formData.get('image_url') as string,
  };

  const { error } = await supabase.from('news').insert([newsItem]);

  if (error) throw error;
  
  revalidatePath('/news');
  revalidatePath('/admin/news');
}

export async function updateNews(id: number, formData: FormData) {
  const supabase = await createClient();
  
  const newsItem = {
    title: formData.get('title') as string,
    date: formData.get('date') as string,
    category: formData.get('category') as string,
    excerpt: formData.get('excerpt') as string,
    image_url: formData.get('image_url') as string,
  };

  const { error } = await supabase.from('news').update(newsItem).eq('id', id);

  if (error) throw error;
  
  revalidatePath('/news');
  revalidatePath('/admin/news');
}

export async function deleteNews(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from('news').delete().eq('id', id);

  if (error) throw error;
  
  revalidatePath('/news');
  revalidatePath('/admin/news');
}

// --- Journals ---

export async function addJournal(formData: FormData) {
  const supabase = await createClient();
  
  const journalEntry = {
    title: formData.get('title') as string,
    subtitle: formData.get('subtitle') as string,
    content: formData.get('content') as string,
    image_url: formData.get('image_url') as string,
    is_featured: formData.get('is_featured') === 'on',
  };

  const { error } = await supabase.from('journals').insert([journalEntry]);

  if (error) throw error;
  
  revalidatePath('/journal');
  revalidatePath('/admin/journal');
}

export async function updateJournal(id: number, formData: FormData) {
  const supabase = await createClient();
  
  const journalEntry = {
    title: formData.get('title') as string,
    subtitle: formData.get('subtitle') as string,
    content: formData.get('content') as string,
    image_url: formData.get('image_url') as string,
    is_featured: formData.get('is_featured') === 'on',
  };

  const { error } = await supabase.from('journals').update(journalEntry).eq('id', id);

  if (error) throw error;
  
  revalidatePath('/journal');
  revalidatePath('/admin/journal');
}

export async function deleteJournal(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from('journals').delete().eq('id', id);

  if (error) throw error;
  
  revalidatePath('/journal');
  revalidatePath('/admin/journal');
}
