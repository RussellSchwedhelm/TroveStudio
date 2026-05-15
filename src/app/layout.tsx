import type { Metadata } from "next";
import "./globals.css";
import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';

export const metadata: Metadata = {
  title: "Trôve Studio | Minimalist Luxury Jewelry",
  description: "Discover Trôve Studio's selection of timeless, minimalist jewelry with a casual elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="announcement-bar">
          <p>Free shipping on orders over R2500</p>
        </div>

        <header className="site-header" id="header">
          <div className="header-inner">
            <nav className="header-nav-left">
              <ul>
                <li><a href="#">News</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Journal</a></li>
                <li><a href="#">Archive Sale</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </nav>
            
            <h1 className="header-logo">
              <a href="/">TRÔVE STUDIO</a>
            </h1>
            
            <nav className="header-nav-right">
              <ul>
                <li><button aria-label="Search"><Search size={20} strokeWidth={1.5} /></button></li>
                <li><button aria-label="Wishlist"><Heart size={20} strokeWidth={1.5} /></button></li>
                <li><button aria-label="Cart"><ShoppingBag size={20} strokeWidth={1.5} /></button></li>
              </ul>
            </nav>

            <button className="mobile-menu-toggle" aria-label="Menu">
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="footer-column">
              <h4>Customer Care</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Jewelry Care</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Journal</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-column newsletter-col">
              <h4>Newsletter</h4>
              <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="container footer-bottom">
            <p>&copy; {new Date().getFullYear()} Trôve Studio. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
