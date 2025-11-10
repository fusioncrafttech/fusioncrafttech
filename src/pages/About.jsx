import './About.css'

function About() {
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
                <img src="/Image.png" alt="About FusionCraftTech" className="about-image" />
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

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>Manojkumar B</h3>
              <p className="team-role">Web Developer</p>
              <p className="team-bio">Visionary leader with 2+ years in tech industry</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>Rajesh S</h3>
              <p className="team-role">Web Developer</p>
              <p className="team-bio">Tech expert specializing in scalable architecture</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>Ajithkumar V</h3>
              <p className="team-role">UI/UX Designer</p>
              <p className="team-bio">Creative mind with award-winning designs</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>Prasanth A</h3>
              <p className="team-role">UI/UX Designer</p>
              <p className="team-bio">Ensuring smooth execution of every project</p>
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
        </div>
      </section>
    </div>
  )
}

export default About

