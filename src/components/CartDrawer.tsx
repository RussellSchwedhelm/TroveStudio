"use client";

import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/CartContext';
import Image from 'next/image';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeCart]);

  // Handle click outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isOpen ? 'is-open' : ''}`} 
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={`cart-drawer ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        <div className="cart-header">
          <h3>Shopping Bag ({items.length})</h3>
          <button onClick={closeCart} aria-label="Close cart" className="close-cart">
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={48} strokeWidth={0.5} />
              <p>Your bag is empty</p>
              <button onClick={closeCart} className="continue-shopping">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      {item.variant && <p className="cart-item-variant">{item.variant}</p>}
                      <p className="cart-item-price">R {item.price.toLocaleString()}</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-selector">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="remove-item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Subtotal</span>
              <span>R {cartTotal.toLocaleString()}</span>
            </div>
            <p className="cart-shipping-note">Shipping and taxes calculated at checkout</p>
            <button className="checkout-button">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
