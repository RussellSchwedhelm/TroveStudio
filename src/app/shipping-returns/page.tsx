'use client';

import React from 'react';

export default function ShippingReturnsPage() {
  return (
    <div className="shipping-returns-page">
      <section className="page-header container">
        <h1 className="serif-title">Shipping & Returns</h1>
      </section>

      <section className="content-section container">
        <div className="policy-block">
          <h2>Shipping Information</h2>
          <p>We ship nationwide across South Africa and offer international shipping to selected countries. All orders are processed and shipped from our studio in Pretoria.</p>
          
          <div className="policy-grid">
            <div className="policy-item">
              <h3>Domestic (South Africa)</h3>
              <ul>
                <li><strong>Standard Shipping:</strong> R100 (3-5 business days)</li>
                <li><strong>Express Shipping:</strong> R180 (1-2 business days)</li>
                <li><strong>Free Shipping:</strong> On orders over R2,500</li>
              </ul>
            </div>
            <div className="policy-item">
              <h3>International</h3>
              <ul>
                <li><strong>Standard International:</strong> R600 (10-15 business days)</li>
                <li><strong>Express International:</strong> R1,200 (3-7 business days)</li>
                <li><em>Customs duties and taxes may apply upon delivery.</em></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="policy-block">
          <h2>Returns & Exchanges</h2>
          <p>We want you to love your Trôve Studio pieces. If for any reason you are not completely satisfied with your purchase, we offer returns and exchanges under the following conditions:</p>
          
          <div className="policy-list">
            <div className="list-item">
              <h3>Eligibility</h3>
              <p>Items must be returned within 14 days of receipt, in their original, unworn condition and packaging. For hygiene reasons, earrings cannot be returned or exchanged unless faulty.</p>
            </div>
            <div className="list-item">
              <h3>Process</h3>
              <p>To initiate a return, please email <a href="mailto:returns@trovestudio.co.za">returns@trovestudio.co.za</a> with your order number and reason for return. Once approved, you will be responsible for shipping the item back to our studio.</p>
            </div>
            <div className="list-item">
              <h3>Refunds</h3>
              <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds will be processed via the original method of payment within 7-10 business days.</p>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="policy-block">
          <h2>Faulty Items</h2>
          <p>Every piece is carefully inspected before shipping. However, if you receive a faulty item, please contact us immediately at <a href="mailto:hello@trovestudio.co.za">hello@trovestudio.co.za</a> with photos of the damage. We will arrange for a replacement or full refund including shipping costs.</p>
        </div>
      </section>

      <style jsx>{`
        .shipping-returns-page {
          padding-top: 80px;
          padding-bottom: 120px;
        }
        .page-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .serif-title {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 400;
        }
        .content-section {
          max-width: 900px;
        }
        .policy-block {
          margin-bottom: 60px;
        }
        .policy-block h2 {
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 400;
          margin-bottom: 24px;
        }
        .policy-block p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--color-text-light);
          margin-bottom: 32px;
        }
        .policy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .policy-item h3 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          font-weight: 500;
        }
        .policy-item ul li {
          font-size: 15px;
          margin-bottom: 12px;
          color: var(--color-text-light);
        }
        .policy-item ul li strong {
          color: var(--color-text);
          font-weight: 500;
        }
        .divider {
          border: none;
          border-top: 1px solid var(--color-border);
          margin: 60px 0;
        }
        .policy-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .list-item h3 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          font-weight: 500;
        }
        .list-item p {
          margin-bottom: 0;
        }
        .list-item a {
          text-decoration: underline;
          text-underline-offset: 4px;
          color: var(--color-text);
        }

        @media (max-width: 768px) {
          .serif-title {
            font-size: 36px;
          }
          .policy-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
