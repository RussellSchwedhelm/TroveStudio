import React from 'react';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase-server';
import '@/app/auth.css';

export default async function ProfilePage() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  if (!user) {
    redirect('/login');
  }

  // Fetch profile data
  let profile = null;
  try {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    profile = data;
  } catch (error) {
    console.error('Error fetching profile:', error);
  }

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
          
          <form action={handleLogout} className="logout-form" style={{ marginTop: '40px' }}>
            <button type="submit" className="logout-button">
              Log Out
            </button>
          </form>
        </aside>

        <main className="profile-content">
          <h2>Personal Information</h2>
          
          <div className="profile-info-row">
            <span className="info-label">Full Name</span>
            <span className="info-value">{profile?.full_name || user.user_metadata?.full_name || 'Not provided'}</span>
          </div>

          <div className="profile-info-row">
            <span className="info-label">Email Address</span>
            <span className="info-value">{user.email}</span>
          </div>

          <div className="profile-info-row">
            <span className="info-label">Member Since</span>
            <span className="info-value">{new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          </div>

          <div style={{ marginTop: '60px' }}>
            <p style={{ fontSize: '12px', color: 'var(--color-text-light)', lineHeight: '1.8', maxWidth: '400px' }}>
              To update your personal information or change your password, please contact our support team or use the security settings.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
