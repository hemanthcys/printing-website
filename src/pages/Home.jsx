import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const categories = [
  {
    title: 'Books & Publications',
    desc: 'Art books, coffee table books, corporate publications, and educational materials with premium finishes.',
    bg: '#1a2e4a',
  },
  {
    title: 'Packaging & Cartons',
    desc: 'Custom folding cartons, rigid boxes, and specialty packaging for luxury and retail products.',
    bg: '#2d4a6e',
  },
  {
    title: 'Labels & Stickers',
    desc: 'Product labels, barcode labels, wine labels, and custom die-cut stickers in all sizes.',
    bg: '#1e3a58',
  },
  {
    title: 'Brochures & Marketing',
    desc: 'Sales brochures, flyers, corporate stationery, and marketing collateral with sharp, vibrant colors.',
    bg: '#243d5c',
  },
];

const features = [
  {
    title: 'One-Stop Solution',
    body: 'From concept to final product, we handle prepress, printing, finishing, and delivery under one roof — eliminating coordination overhead and ensuring consistent quality throughout.',
  },
  {
    title: 'Premium Quality Assurance',
    body: 'Every job is colour-managed and press-checked before delivery. We use industry-standard G7 calibration and ISO-certified processes for consistent, repeatable results across every run.',
  },
  {
    title: 'Dependable Partnership',
    body: 'With 15+ years serving brands across India, we understand deadlines and business needs. Our dedicated account managers keep you informed at every stage of production.',
  },
  {
    title: 'Advanced Embellishment',
    body: 'Foil stamping, spot UV, embossing, debossing, and soft-touch lamination — we bring tactile luxury to your print products, making them stand out on shelf and in hand.',
  },
];

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Publishing Director',
    text: 'Bombay Offset delivered our coffee table book on time and the quality exceeded all expectations. The colour accuracy and binding were impeccable.',
  },
  {
    name: 'Priya Sharma',
    role: 'Brand Manager',
    text: 'Their packaging work for our product launch was flawless. The foil stamping and soft-touch finish truly elevated our brand presence.',
  },
  {
    name: 'Rahul Verma',
    role: 'Marketing Head',
    text: 'Consistent quality, competitive pricing, and a team that actually listens. They have been our go-to printers for over three years now.',
  },
];

function Home() {
  const [openFeature, setOpenFeature] = useState(0);

  const toggle = (i) => setOpenFeature(openFeature === i ? -1 : i);

  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <p className="hero-eyebrow">Hyderabad's Premier Printing House</p>
          <h1>We cover the entire gamut<br />of print needs</h1>
          <p className="hero-sub">
            Delivering premium books, packaging, labels, and marketing materials
            across India and worldwide — with craft, precision, and care.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">View Showcase</Link>
            <Link to="/contact" className="btn btn-outline-light">Find Our Office</Link>
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="showcase">
        <div className="container">
          <h2 className="section-title">What We Print</h2>
          <p className="section-subtitle">End-to-end solutions across four core categories</p>
          <div className="showcase-grid">
            {categories.map((cat, i) => (
              <div key={i} className="showcase-card" style={{ background: cat.bg }}>
                <div className="showcase-card-inner">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <Link to="/products" className="showcase-link">Explore →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Accordion */}
      <section className="features">
        <div className="container features-inner">
          <div className="features-heading">
            <h2>Why Bombay Offset Printers?</h2>
            <p>We bring together technology, craftsmanship, and reliability to deliver print that performs.</p>
          </div>
          <div className="features-accordion">
            {features.map((f, i) => (
              <div key={i} className={`accordion-item ${openFeature === i ? 'open' : ''}`}>
                <button className="accordion-trigger" onClick={() => toggle(i)}>
                  <span>{f.title}</span>
                  <span className="accordion-icon">{openFeature === i ? '−' : '+'}</span>
                </button>
                <div className="accordion-body">
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Stats */}
      <section className="awards">
        <div className="container awards-inner">
          <div className="awards-text">
            <h2>Award-Winning Print Excellence</h2>
            <p>Recognised by leading industry bodies for our commitment to quality and innovation in printing across every category we serve.</p>
          </div>
          <div className="awards-stats">
            <div className="award-stat"><h3>15+</h3><p>Years in Business</p></div>
            <div className="award-stat"><h3>10K+</h3><p>Projects Delivered</p></div>
            <div className="award-stat"><h3>99%</h3><p>On-Time Delivery</p></div>
            <div className="award-stat"><h3>PAN India</h3><p>Coverage</p></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by brands across industries</p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p>"{t.text}"</p>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Get in touch and let us bring your print vision to life.</p>
          <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
