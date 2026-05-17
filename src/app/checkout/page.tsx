'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/components/CartContext';
import './checkout.css';

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();
  const [step, setStep] = useState<'details' | 'shipping' | 'payment'>('details');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const shippingFee = cartTotal >= 2500 ? 0 : 150;
  const orderTotal = cartTotal + shippingFee;

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty container">
          <h1 className="serif-title">Checkout</h1>
          <p>Your cart is empty. Add some items before checking out.</p>
          <Link href="/shop" className="checkout-cta">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-inner container">
        {/* Left: Form */}
        <div className="checkout-form-col">
          <Link href="/" className="checkout-logo">TRÔVE STUDIO</Link>

          <div className="checkout-steps">
            <span className={step === 'details' ? 'active' : ''}>Contact</span>
            <span className="step-sep">›</span>
            <span className={step === 'shipping' ? 'active' : ''}>Shipping</span>
            <span className="step-sep">›</span>
            <span className={step === 'payment' ? 'active' : ''}>Payment</span>
          </div>

          {step === 'details' && (
            <form
              className="checkout-form"
              onSubmit={(e) => { e.preventDefault(); setStep('shipping'); }}
            >
              <h2>Contact information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>
              <button type="submit" className="checkout-next-btn">Continue to Shipping</button>
            </form>
          )}

          {step === 'shipping' && (
            <form
              className="checkout-form"
              onSubmit={(e) => { e.preventDefault(); setStep('payment'); }}
            >
              <h2>Shipping address</h2>
              <div className="form-group">
                <label htmlFor="address">Street address</label>
                <input id="address" name="address" type="text" required value={formData.address} onChange={handleChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input id="city" name="city" type="text" required value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postal code</label>
                  <input id="postalCode" name="postalCode" type="text" required value={formData.postalCode} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="province">Province</label>
                <select id="province" name="province" required value={formData.province} onChange={handleChange}>
                  <option value="">Select province</option>
                  <option>Western Cape</option>
                  <option>Gauteng</option>
                  <option>KwaZulu-Natal</option>
                  <option>Eastern Cape</option>
                  <option>Free State</option>
                  <option>Limpopo</option>
                  <option>Mpumalanga</option>
                  <option>North West</option>
                  <option>Northern Cape</option>
                </select>
              </div>
              <div className="checkout-form-nav">
                <button type="button" className="checkout-back-btn" onClick={() => setStep('details')}>← Back</button>
                <button type="submit" className="checkout-next-btn">Continue to Payment</button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <div className="checkout-form">
              <h2>Payment</h2>
              <p className="payment-note">
                This is a demo store. No real payment will be processed.<br />
                In a live environment this would integrate with a payment gateway like PayFast or Stripe.
              </p>
              <button
                className="checkout-next-btn"
                onClick={() => alert('Thank you for your order! This is a demo.')}
              >
                Place Order
              </button>
              <button type="button" className="checkout-back-btn" style={{marginTop: '12px'}} onClick={() => setStep('shipping')}>← Back</button>
            </div>
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="checkout-summary-col">
          <h3 className="summary-title">Order Summary</h3>
          <div className="summary-items">
            {items.map((item) => (
              <div key={item.id} className="summary-item">
                <div className="summary-item-img">
                  <img src={item.image} alt={item.name} />
                  <span className="summary-item-qty">{item.quantity}</span>
                </div>
                <div className="summary-item-info">
                  <p className="summary-item-name">{item.name}</p>
                  {item.variant && <p className="summary-item-variant">{item.variant}</p>}
                </div>
                <p className="summary-item-price">R {(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>
          <div className="summary-divider" />
          <div className="summary-row">
            <span>Subtotal</span>
            <span>R {cartTotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shippingFee === 0 ? 'Free' : `R ${shippingFee}`}</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>R {orderTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
