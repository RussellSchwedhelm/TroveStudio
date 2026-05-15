"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, Search } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle click outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''}`} 
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        className={`mobile-menu-drawer ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="mobile-menu-header">
          <button onClick={onClose} aria-label="Close menu" className="close-menu">
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <ul>
            <li><Link href="/shop" onClick={onClose}>Shop All</Link></li>
            <li><Link href="/news" onClick={onClose}>New Arrivals</Link></li>
            <li><Link href="/journal" onClick={onClose}>Journal</Link></li>
            <li><Link href="/archive-sale" onClick={onClose}>Archive Sale</Link></li>
            <li><Link href="/about" onClick={onClose}>Our Story</Link></li>
            <li><Link href="/contact" onClick={onClose}>Contact</Link></li>
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <div className="mobile-menu-social">
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
          </div>
          <div className="mobile-menu-auth">
            <Link href="/login" onClick={onClose} className="mobile-menu-btn">Account</Link>
          </div>
        </div>
      </div>
    </>
  );
}
