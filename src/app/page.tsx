'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useCart } from '@/components/CartContext';

const products = [
  {
    id: "1",
    title: "The Classic Ring",
    price: 2650,
    image: "/assets/images/trove_hero_3_1778846644095.png"
  },
  {
    id: "2",
    title: "Chunky Hoops",
    price: 3850,
    image: "/assets/images/trove_hero_1_1778846613200.png"
  },
  {
    id: "3",
    title: "Statement Chain",
    price: 6400,
    image: "/assets/images/trove_hero_2_1778846628465.png"
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const header = document.getElementById('header');
    if (header) {
      if (isScrolled) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
  }, [isScrolled]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-centered');
        } else {
          entry.target.classList.remove('is-centered');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.hero-item');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-item">
            <Image 
              src="/assets/images/trove_hero_1_1778846613200.png" 
              alt="Model wearing chunky silver hoop earrings" 
              width={800} 
              height={1200}
              priority
            />
            <div className="hero-overlay">
              <a href="#" className="hero-link">Shop Earrings</a>
            </div>
          </div>
          <div className="hero-item">
            <Image 
              src="/assets/images/trove_hero_2_1778846628465.png" 
              alt="Model wearing thick elegant silver chain necklace" 
              width={800} 
              height={1200}
              priority
            />
            <div className="hero-overlay">
              <a href="#" className="hero-link">Shop Necklaces</a>
            </div>
          </div>
          <div className="hero-item">
            <Image 
              src="/assets/images/trove_hero_3_1778846644095.png" 
              alt="Silver ring and chain bracelet on linen cloth" 
              width={800} 
              height={1200}
              priority
            />
            <div className="hero-overlay">
              <a href="#" className="hero-link">Shop Bracelets & Rings</a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <h2>"Less is more. A fashion-focused selection of timeless jewelry with a casual elegance."</h2>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="featured-products container">
        <div className="section-header">
          <h3>New Arrivals</h3>
          <a href="#" className="view-all">View All</a>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  width={500} 
                  height={625}
                />
                <button 
                  className="quick-add-to-cart"
                  onClick={() => addItem({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                  })}
                >
                  Quick Add
                </button>
              </div>
              <div className="product-info">
                <h4 className="product-title">{product.title}</h4>
                <p className="product-price">R{product.price.toLocaleString('en-ZA')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
