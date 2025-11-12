import './Services.css'
import { useMemo, useState } from 'react'
import { useSEO } from '../hooks/useSEO'
import projectImgKraj from '../assets/krajandco web.png'
import projectImgSpandana from '../assets/spandana web.png'
import projectImgFoodDelivery from '../assets/fastfeast web.png'

const serviceProjects = Object.freeze([
  {
    id: 1,
    category: 'web',
    title: 'Fresh Organic Food Delivery Web Application',
    client: 'K Raj & Co',
    description: 'Full-featured online shopping platform with payment integration',
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
    description:
      'End-to-end food ordering platform with menu browsing, cart, checkout, and secure payments.',
    image: projectImgFoodDelivery,
    url: 'https://demo.fusioncrafttech.com',
    status: 'In Progress',
    date: '2025'
  },
  {
    id: 3,
    category: 'web',
    title: 'Healthcare Website Design',
    client: 'Spandana Hospital',
    description: 'Patient-centric healthcare website with optimized UX and responsive design.',
    image: projectImgSpandana,
    url: 'https://spandanahospital.org/',
    status: 'Completed',
    date: '2024'
  }
])

const categories = ['all', 'web']

function Services() {
  const [activeFilter, setActiveFilter] = useState('all')

  const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://www.fusioncrafttech.com'

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      provider: {
        '@type': 'Organization',
        name: 'FusionCraft Tech',
        url: siteUrl
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'FusionCraft Tech Services',
        itemListElement: serviceProjects.map((service, index) => ({
          '@type': 'Offer',
          position: index + 1,
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            url: service.url ?? siteUrl,
            description: service.description,
            areaServed: {
              '@type': 'Country',
              name: 'India'
            }
          }
        }))
      }
    }),
    [siteUrl]
  )

  useSEO({
    title: 'Software Development & Creative Services',
    description:
      'Explore FusionCraft Tech\'s full-service capabilities, including web app development, mobile solutions, UI/UX design, branding, video editing, and digital marketing.',
    keywords: [
      'web development services',
      'mobile app developers',
      'UI UX design services',
      'digital marketing agency',
      'FusionCraft Tech portfolio'
    ],
    canonicalPath: '/services',
    structuredData
  })

  const filteredServices = activeFilter === 'all'
    ? serviceProjects
    : serviceProjects.filter(service => service.category === activeFilter)

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
              <div className="service-item-icon">🎬</div>
              <h3>Video Editing</h3>
              <p>Engaging video content crafted to tell your story and grow your audience</p>
              <ul>
                <li>Promo & Product Videos</li>
                <li>Corporate Storytelling</li>
                <li>Motion Graphics</li>
                <li>Social Media Formats</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-item-icon">🖼️</div>
              <h3>Branding & Posters</h3>
              <p>Eye-catching visuals that reinforce your brand across every touchpoint</p>
              <ul>
                <li>Brand Identity Kits</li>
                <li>Marketing Collateral</li>
                <li>Event Posters</li>
                <li>Packaging Concepts</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-item-icon">📣</div>
              <h3>Digital Marketing</h3>
              <p>Performance-driven campaigns designed to convert and retain customers</p>
              <ul>
                <li>Paid Media Management</li>
                <li>SEO & Content Strategy</li>
                <li>Marketing Automation</li>
                <li>Analytics & Reporting</li>
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
                type="button"
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
                aria-pressed={activeFilter === category}
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
                >
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={`${service.client} - ${service.title}`}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="project-placeholder" aria-hidden="true"></div>
                  )}
                  <div className="project-badge">{service.status}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{service.title}</h3>
                  <p className="project-client">Client: {service.client}</p>
                  <p className="project-description">{service.description}</p>
                  {service.technologies?.length > 0 && (
                    <div className="project-technologies" aria-label="Technologies used">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
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

