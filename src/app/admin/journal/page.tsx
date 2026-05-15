import React from 'react';
import { createClient } from '@/lib/supabase-server';
import AdminLayout from '@/components/admin/AdminLayout';
import JournalManager from '@/components/admin/JournalManager';

export default async function AdminJournalPage() {
  const supabase = await createClient();
  
  const { data: journals } = await supabase
    .from('journals')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <AdminLayout>
      <JournalManager journals={journals || []} />
    </AdminLayout>
  );
}
