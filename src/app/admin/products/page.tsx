import React from 'react';
import { createClient } from '@/lib/supabase-server';
import AdminLayout from '@/components/admin/AdminLayout';
import ProductManager from '@/components/admin/ProductManager';

export default async function AdminProductsPage() {
  const supabase = await createClient();
  
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <AdminLayout>
      <ProductManager products={products || []} />
    </AdminLayout>
  );
}
