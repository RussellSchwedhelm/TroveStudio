import React from 'react';
import { createClient } from '@/lib/supabase-server';
import AdminLayout from '@/components/admin/AdminLayout';
import NewsManager from '@/components/admin/NewsManager';

export default async function AdminNewsPage() {
  const supabase = await createClient();
  
  const { data: news } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <AdminLayout>
      <NewsManager news={news || []} />
    </AdminLayout>
  );
}
