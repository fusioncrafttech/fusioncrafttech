import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import './About.css'

function About() {
  const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://www.fusioncrafttech.com'

  useSEO({
    title: 'About Our Digital Product Team',
    description:
      'Learn about FusionCraft Tech\'s mission, values, and experienced team delivering scalable software, cloud solutions, and design services for ambitious brands.',
    keywords: [
      'about FusionCraft Tech',
      'technology consulting team',
      'product engineering company',
      'digital innovation partner'
    ],
    canonicalPath: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      url: `${siteUrl}/about`,
      mainEntity: {
        '@type': 'Organization',
        name: 'FusionCraft Tech',
        url: siteUrl,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'fusioncrafttech@gmail.com',
            telephone: '+91-9360121830'
          }
        ]
      }
    }
  })

  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Your trusted technology partner for innovative digital solutions
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-text">
              <h2>Our Story</h2>
              <p>
                Founded with a passion for technology and innovation, FusionCraft Tech has been at the forefront 
                of digital transformation for over a decade. We started as a small team of dedicated developers 
                and have grown into a trusted partner for businesses worldwide.
              </p>
              <p>
                Our journey began with a simple mission: to bridge the gap between complex technology and 
                practical business solutions. Today, we're proud to have helped hundreds of companies leverage 
                technology to achieve their goals and exceed their expectations.
              </p>
            </div>
            <div className="content-image">
              <div className="image-placeholder">
                <img
                  src="/Image.png"
                  alt="FusionCraft Tech team collaborating on product strategy"
                  className="about-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every project, ensuring the highest quality standards in all our work.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>We believe in building long-term partnerships based on trust, transparency, and mutual success.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We stay ahead of the curve, constantly learning and implementing the latest technologies and best practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Customer Focus</h3>
              <p>Your success is our success. We are committed to understanding and meeting your unique business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Driving Impact Together</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">🚀</div>
              <h3>Strategy to Scale</h3>
              <p>We align technology roadmaps with business goals, ensuring every release moves key metrics forward.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🔍</div>
              <h3>Data-Backed Decisions</h3>
              <p>Our cross-functional specialists analyze performance insights to fine-tune solutions in real time.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🤝</div>
              <h3>Collaborative Delivery</h3>
              <p>Embedded squads work alongside your stakeholders, providing transparent communication at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title">Why Choose FusionCraftTech?</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Proven Track Record</h3>
                <p>Over 100 successful projects delivered across various industries</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Expert Team</h3>
                <p>Experienced professionals with deep expertise in latest technologies</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Agile Methodology</h3>
                <p>Fast delivery with iterative approach ensuring client satisfaction</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock support to keep your business running smoothly</p>
              </div>
            </div>
          </div>
          <div className="why-us-cta">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

