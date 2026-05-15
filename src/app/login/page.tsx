'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { AuthInput, AuthButton, GoogleButton } from '@/components/AuthUI';
import '@/app/auth.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/profile');
      router.refresh();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>Welcome Back</h1>
        <p>Enter your details to access your account</p>
      </div>

      <GoogleButton />

      <div className="auth-divider">
        <span>or</span>
      </div>

      <form onSubmit={handleLogin}>
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
          {loading ? 'Signing in...' : 'Sign In'}
        </AuthButton>
      </form>

      <div className="auth-footer">
        Don't have an account? 
        <Link href="/signup" className="auth-link">
          Sign up
        </Link>
      </div>
    </div>
  );
}
