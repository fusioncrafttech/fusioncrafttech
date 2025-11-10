import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="animated-shape shape-1"></div>
        <div className="animated-shape shape-2"></div>
        <div className="animated-shape shape-3"></div>
        <div className="animated-shape shape-4"></div>
        <div className="animated-shape shape-5"></div>
        <div className="animated-shape shape-6"></div>
      </div>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-animated-bg">
          <div className="gradient-mesh gradient-1"></div>
          <div className="gradient-mesh gradient-2"></div>
          <div className="gradient-mesh gradient-3"></div>
        </div>
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">FusionCraft Tech</span>
          </h1>
          <p className="hero-subtitle">
            We transform your vision into cutting-edge digital solutions that drive business success
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <div className="card-icon">💼</div>
            <h3>Business Solutions</h3>
            <p>Custom software that grows with you</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">🚀</div>
            <h3>Innovation</h3>
            <p>Latest technology for modern needs</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">🎯</div>
            <h3>Results Driven</h3>
            <p>Measurable impact on your success</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web/App Development</h3>
              <p>Responsive, modern websites that engage your audience and convert visitors into customers.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">�</div>
              <h3>SaaS Development</h3>
              <p>Scalable cloud infrastructure that grows with your business needs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI Design</h3>
              <p>Beautiful, intuitive designs that make your product stand out from the competition.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎥</div>
              <h3>Video Editing</h3>
              <p>Professional video editing services to enhance your content.</p>
            </div>
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

