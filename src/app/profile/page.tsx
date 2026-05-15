import React from 'react';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase-server';
import '@/app/auth.css';

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch profile data
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  const handleLogout = async () => {
    'use server';
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect('/login');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-title">
          <p className="info-label">Account</p>
          <h1>My Profile</h1>
        </div>
        <form action={handleLogout}>
          <button type="submit" className="logout-button">
            Log Out
          </button>
        </form>
      </div>

      <div className="profile-grid">
        <aside className="profile-nav">
          <ul>
            <li className="active">Personal Info</li>
            <li>Order History</li>
            <li>Wishlist</li>
            <li>Shipping Addresses</li>
            <li>Security</li>
          </ul>
        </aside>

        <main className="profile-content">
          <h2>Personal Information</h2>
          
          <div className="profile-info-row">
            <span className="info-label">Full Name</span>
            <span>{profile?.full_name || user.user_metadata?.full_name || 'Not provided'}</span>
          </div>

          <div className="profile-info-row">
            <span className="info-label">Email Address</span>
            <span>{user.email}</span>
          </div>

          <div className="profile-info-row">
            <span className="info-label">Member Since</span>
            <span>{new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          </div>

          <div style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '13px', color: 'var(--color-text-light)' }}>
              To update your personal information or change your password, please contact our support team or use the security settings.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
