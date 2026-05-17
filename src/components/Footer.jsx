import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Bombay Offset Printers</h3>
          <p>Premium printing solutions for books, packaging, labels, and marketing collateral. Serving brands across India and worldwide since 2010.</p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Showcase</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Capabilities</h4>
          <ul>
            <li><Link to="/products">Books & Publications</Link></li>
            <li><Link to="/products">Packaging & Cartons</Link></li>
            <li><Link to="/products">Labels & Stickers</Link></li>
            <li><Link to="/products">Marketing Collateral</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>11-5-398/1, Red Hills, Lakdikapul,<br />Hyderabad, Telangana 500004</p>
          <p>+91 98663 15797</p>
          <p>info@bombayprinters.com</p>
          <p>Mon – Sat: 9 am – 6 pm</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Bombay Offset Printers. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
