'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { AuthInput, AuthButton, GoogleButton } from '@/components/AuthUI';
import '@/app/auth.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Supabase by default requires email confirmation.
      // We can redirect to a check-email page or just show a message.
      alert('Check your email for the confirmation link!');
      router.push('/login');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>Create Account</h1>
        <p>Join Trôve Studio for an exclusive experience</p>
      </div>

      <GoogleButton />

      <div className="auth-divider">
        <span>or</span>
      </div>

      <form onSubmit={handleSignup}>
        <AuthInput
          id="fullName"
          label="Full Name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <AuthInput
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <AuthInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {error && <p className="auth-error-text" style={{ textAlign: 'center', marginBottom: '15px' }}>{error}</p>}
        
        <AuthButton type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Create Account'}
        </AuthButton>
      </form>

      <div className="auth-footer">
        Already have an account? 
        <Link href="/login" className="auth-link">
          Sign in
        </Link>
      </div>
    </div>
  );
}
