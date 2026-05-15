import React from 'react';
import { createClient } from '@/lib/supabase-server';
import AdminLayout from '@/components/admin/AdminLayout';
import Dashboard from '@/components/admin/Dashboard';

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [
    { count: productCount },
    { count: newsCount },
    { count: journalCount }
  ] = await Promise.all([
    supabase.from('products').select('*', { count: 'exact', head: true }),
    supabase.from('news').select('*', { count: 'exact', head: true }),
    supabase.from('journals').select('*', { count: 'exact', head: true }),
  ]);

  const stats = {
    products: productCount || 0,
    news: newsCount || 0,
    journals: journalCount || 0,
  };

  return (
    <AdminLayout>
      <Dashboard stats={stats} />
    </AdminLayout>
  );
}
