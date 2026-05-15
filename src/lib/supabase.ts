import { createClient } from '@supabase/supabase-js';

// Use environment variables or placeholders during build to prevent crashes
// We check if the URL starts with http to avoid using placeholders like "your-supabase-url"
const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabaseUrl = rawUrl.startsWith('http') ? rawUrl : 'https://placeholder-url.supabase.co';
const supabaseAnonKey = rawKey && rawKey !== 'your-supabase-anon-key' ? rawKey : 'placeholder-key';

if (!rawUrl || !rawUrl.startsWith('http') || !rawKey || rawKey === 'your-supabase-anon-key') {
  // Only warn in the browser to avoid cluttering build logs unnecessarily, 
  // but enough to help debugging if someone forgot to set them.
  if (typeof window !== 'undefined') {
    console.warn('Supabase URL or Anon Key is missing or invalid. Please check your environment variables.');
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
