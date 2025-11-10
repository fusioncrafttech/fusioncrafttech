import './Services.css'
import { useState } from 'react'
import projectImgKraj from '../assets/krajandco web.png'
import projectImgSpandana from '../assets/spandana web.png'
import projectImgFoodDelivery from '../assets/fastfeast web.png'
function Services() {
  const [activeFilter, setActiveFilter] = useState('all')

  const services = [
    {
      id: 1,
      category: 'web',
      title: 'Fresh Organic Food Delivery Web Application',
      client: 'K Raj & Co',
      description: 'Full-featured online shopping platform with payment integration',
      technologies: ['React','Tailwindcss', 'Node.js', 'supabase', 'MySQL'],
      image: projectImgKraj,
      url: 'https://krajandco.com',
      status: 'Completed',
      date: '2025'
    },
    
    {
      id: 2,
      category: 'web',
      title: 'Food Delivery Web Application',
      client: 'Demo By Fusioncraft Tech',
      description: 'End-to-end food ordering platform with menu browsing, cart, checkout, and payments',
      technologies: ['Reactjs','Nodejs','Javascript','supabase','Stripe'],
      image: projectImgFoodDelivery,
      url: 'https://demo.fusioncrafttech.com',
      status: 'Inprogress',
      date: '2025'
    },

    {
      id: 3,
      category: 'web',
      title: 'Healthcare Website Design',
      client: 'Spandana Hospital',
      description: "Clean, user-friendly healthcare website with optimized UI/UX",
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      image: projectImgSpandana,
      url: 'https://spandanahospital.org/',
      status: 'Completed',
      date: '2024'
    }
   
  ]

  const categories = ['all', 'web']

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter)

  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="services-grid">
            <div className="service-item">
              <div className="service-item-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Custom websites and web applications built with modern technologies</p>
              <ul>
                <li>Responsive Design</li>
                <li>E-Commerce Solutions</li>
                <li>Content Management</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-item-icon">📱</div>
              <h3>Mobile Development</h3>
              <p>Native and cross-platform mobile applications for iOS and Android</p>
              <ul>
                <li>iOS & Android Apps</li>
                <li>React Native</li>
                <li>App Store Optimization</li>
                <li>Push Notifications</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-item-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful, intuitive designs that enhance user experience</p>
              <ul>
                <li>User Research</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-item-icon">☁️</div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure and DevOps services</p>
              <ul>
                <li>AWS & Azure</li>
                <li>CI/CD Pipelines</li>
                <li>Containerization</li>
                <li>Serverless Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Client Projects</h2>
          <p className="section-subtitle">Showcasing our portfolio of successful implementations</p>
          
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredServices.map(service => (
              <div key={service.id} className="project-card">
                <div
                  className="project-header project-media"
                  style={{
                    backgroundImage: service.image ? `url(${service.image})` : undefined
                  }}
                >
                  <div className="project-badge">{service.status}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{service.title}</h3>
                  <p className="project-client">Client: {service.client}</p>
                  <p className="project-description">{service.description}</p>
                  <div className="project-technologies">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span className="project-date">{service.date}</span>
                    {service.url && (
                      <a
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-visit-btn"
                        aria-label={`Visit ${service.client} project`}
                      >
                        Visit
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

