import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    title: 'Quality First',
    desc: 'Every print is colour-managed, press-checked, and inspected before it leaves our facility. We never compromise on output.',
  },
  {
    title: 'Speed & Reliability',
    desc: 'Fast production without cutting corners. Our streamlined workflows ensure on-time delivery, every time.',
  },
  {
    title: 'Client Partnership',
    desc: 'We work as an extension of your team — understanding your brand, your deadlines, and your expectations.',
  },
  {
    title: 'Sustainability',
    desc: 'FSC-certified papers, vegetable-based inks, and responsible sourcing form the backbone of our environmental commitment.',
  },
];

const milestones = [
  { year: '2010', text: 'Founded in Hyderabad with a focus on high-quality offset printing.' },
  { year: '2014', text: 'Expanded capabilities to include premium packaging and rigid boxes.' },
  { year: '2018', text: 'Achieved ISO 9001 certification and launched digital embellishment services.' },
  { year: '2023', text: 'Serving 10,000+ clients across India with PAN-India delivery.' },
];

function About() {
  return (
    <div className="about-page">

      <div className="about-hero">
        <div className="container">
          <p className="about-eyebrow">Who We Are</p>
          <h1>Bombay Offset Printers</h1>
          <p>Your trusted printing partner since 2010</p>
        </div>
      </div>

      <section className="about-intro">
        <div className="container about-intro-grid">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Bombay Offset Printers was founded in 2010 with a clear mission — to deliver print products that combine technical excellence with genuine craft. What began as a small offset press in Hyderabad has grown into one of the region's most trusted full-service printing houses.</p>
            <p>Over fifteen years, we have invested in the latest presses, finishing equipment, and colour management systems to ensure every job we handle meets the highest standards — whether it's a run of 500 brochures or 100,000 product labels.</p>
            <p>We work with publishers, FMCG brands, luxury retailers, corporates, and agencies across India and internationally, offering a complete range of print solutions under one roof.</p>
          </div>
          <div className="about-stats">
            <div className="about-stat"><h3>15+</h3><p>Years in Business</p></div>
            <div className="about-stat"><h3>10K+</h3><p>Happy Clients</p></div>
            <div className="about-stat"><h3>50+</h3><p>Product Categories</p></div>
            <div className="about-stat"><h3>99%</h3><p>On-Time Delivery</p></div>
          </div>
        </div>
      </section>

      <section className="milestones">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Key milestones that define who we are today</p>
          <div className="milestones-list">
            {milestones.map((m, i) => (
              <div key={i} className="milestone-item">
                <div className="milestone-year">{m.year}</div>
                <div className="milestone-bar"></div>
                <div className="milestone-text">{m.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide every job we take on</p>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container cta-content">
          <h2>Ready to Work With Us?</h2>
          <p>Let's bring your print ideas to life — talk to our team today.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>

    </div>
  );
}

export default About;
