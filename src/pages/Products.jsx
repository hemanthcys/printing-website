import { Link } from 'react-router-dom';
import './Products.css';

const categories = [
  {
    id: 'books',
    name: 'Books & Publications',
    desc: 'Premium books, coffee table books, art books, corporate publications, and educational materials with exceptional finish quality.',
    items: ['Coffee Table Books', 'Art Books', 'Corporate Journals', 'Educational Materials', 'Annual Reports'],
  },
  {
    id: 'packaging',
    name: 'Packaging & Cartons',
    desc: 'Custom folding cartons, rigid boxes, and specialty packaging engineered for luxury retail and consumer products.',
    items: ['Folding Cartons', 'Rigid Boxes', 'Specialty Packaging', 'Gift Boxes', 'Sleeve Packaging'],
  },
  {
    id: 'labels',
    name: 'Labels & Stickers',
    desc: 'Product labels, wine & beverage labels, barcode labels, and custom die-cut stickers for any application.',
    items: ['Product Labels', 'Wine & Beverage Labels', 'Barcode Labels', 'Custom Stickers', 'BOPP Labels'],
  },
  {
    id: 'marketing',
    name: 'Marketing Collateral',
    desc: 'Sales brochures, leaflets, corporate stationery, posters, and comprehensive marketing materials with vibrant reproduction.',
    items: ['Sales Brochures', 'Leaflets & Flyers', 'Corporate Stationery', 'Posters & Banners', 'Presentation Folders'],
  },
];

const finishes = [
  'Soft-Touch Lamination',
  'Gloss / Matte Lamination',
  'Spot UV Coating',
  'Foil Stamping',
  'Embossing & Debossing',
  'Aqueous Coating',
  'Die Cutting',
  'Perfect Binding',
];

function Products() {
  return (
    <div className="products-page">

      <div className="products-hero">
        <div className="container">
          <p className="products-eyebrow">Our Capabilities</p>
          <h1>Showcase</h1>
          <p>Explore our range of premium print products and finishing capabilities</p>
        </div>
      </div>

      <section className="products-categories">
        <div className="container">
          {categories.map((cat, i) => (
            <div key={cat.id} className={`category-row ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="category-visual" style={{ background: `hsl(${210 + i * 8}, 48%, ${22 + i * 3}%)` }}>
                <span className="category-number">0{i + 1}</span>
              </div>
              <div className="category-content">
                <h2>{cat.name}</h2>
                <p>{cat.desc}</p>
                <ul className="category-items">
                  {cat.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="finishes-section">
        <div className="container">
          <h2 className="section-title">Finishing Capabilities</h2>
          <p className="section-subtitle">Every job benefits from our extensive range of post-press finishing options</p>
          <div className="finishes-grid">
            {finishes.map((f, i) => (
              <div key={i} className="finish-item">
                <span className="finish-dot"></span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-cta">
        <div className="container cta-content">
          <h2>Don't see what you need?</h2>
          <p>We handle custom and complex print requirements. Talk to our team about your project.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>

    </div>
  );
}

export default Products;
