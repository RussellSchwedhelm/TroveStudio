"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, Search, Instagram, Facebook, Twitter } from 'lucide-react';

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
            <a href="#" aria-label="Instagram"><Instagram size={20} strokeWidth={1} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} strokeWidth={1} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} strokeWidth={1} /></a>
          </div>
          <div className="mobile-menu-auth">
            <Link href="/login" onClick={onClose} className="mobile-menu-btn">Account</Link>
          </div>
        </div>
      </div>
    </>
  );
}
