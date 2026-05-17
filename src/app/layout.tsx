import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Trôve Studio | Curated Vintage Retail",
  description: "Discover Trôve Studio's curated selection of high-end vintage pieces, released in seasonal capsule drops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="announcement-bar">
            <p>Free shipping on orders over R2500</p>
          </div>

          <Header />
          <CartDrawer />

          <main>{children}</main>

          <footer className="site-footer">
            <div className="container footer-grid">
              <div className="footer-column">
                <h4>Customer Care</h4>
                <ul>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/shipping-returns">Shipping & Returns</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/garment-care">Garment Care</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>About</h4>
                <ul>
                  <li><a href="/about">Our Story</a></li>
                  <li><a href="/journal">Journal</a></li>
                  <li><a href="/careers">Careers</a></li>
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
        </CartProvider>
      </body>
    </html>
  );
}
