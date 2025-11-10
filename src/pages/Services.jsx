import './Services.css'
import { useState } from 'react'

function Services() {
  const [activeFilter, setActiveFilter] = useState('all')

  const services = [
    {
      id: 1,
      category: 'webapp',
      title: 'E-Commerce Platform',
      client: 'TechMart Inc',
      description: 'Full-featured online shopping platform with payment integration',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      image: '🛒',
      status: 'Completed',
      date: '2024'
    },
    {
      id: 2,
      category: 'webapp',
      title: 'Corporate Website',
      client: 'Global Corp Ltd',
      description: 'Modern, responsive website with CMS integration',
      technologies: ['Next.js', 'Contentful', 'Tailwind CSS'],
      image: '🏢',
      status: 'Completed',
      date: '2024'
    },
    {
      id: 3,
      category: 'webapp',
      title: 'Mobile Web App',
      client: 'StartupScale',
      description: 'Cross-platform web application with mobile-first design',
      technologies: ['React', 'PWA', 'Firebase'],
      image: '📱',
      status: 'Completed',
      date: '2024'
    },
    {
      id: 4,
      category: 'saas',
      title: 'SaaS Dashboard Platform',
      client: 'DataFlow Systems',
      description: 'Cloud-based SaaS platform with subscription management',
      technologies: ['AWS', 'Node.js', 'Stripe', 'PostgreSQL'],
      image: '☁️',
      status: 'Completed',
      date: '2024'
    },
    {
      id: 5,
      category: 'saas',
      title: 'Multi-tenant Platform',
      client: 'InnovateLab',
      description: 'Scalable SaaS solution for business management',
      technologies: ['Next.js', 'Docker', 'Kubernetes', 'MongoDB'],
      image: '💼',
      status: 'In Progress',
      date: '2024'
    },
    {
      id: 6,
      category: 'design',
      title: 'UI/UX Design System',
      client: 'DesignStudio',
      description: 'Complete design system with component library',
      technologies: ['Figma', 'Design Tokens', 'Storybook'],
      image: '🎨',
      status: 'Completed',
      date: '2024'
    },
    {
      id: 7,
      category: 'design',
      title: 'Brand Identity Design',
      client: 'CreativeAgency',
      description: 'Complete brand identity and UI design package',
      technologies: ['Figma', 'Illustrator', 'Photoshop'],
      image: '✨',
      status: 'Completed',
      date: '2023'
    },
    {
      id: 8,
      category: 'video',
      title: 'Product Promotional Video',
      client: 'ProductShowcase',
      description: 'Professional promotional video with motion graphics',
      technologies: ['Premiere Pro', 'After Effects', 'DaVinci'],
      image: '🎥',
      status: 'Completed',
      date: '2024'
    },
    {
      id: 9,
      category: 'video',
      title: 'Corporate Video Series',
      client: 'Corporate Inc',
      description: 'Series of corporate training and marketing videos',
      technologies: ['Premiere Pro', 'Motion Graphics', 'Color Grading'],
      image: '🎬',
      status: 'In Progress',
      date: '2024'
    }
  ]

  const categories = ['all', 'webapp', 'saas', 'design', 'video']

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
              <h3>Web/App Development</h3>
              <p>Responsive, modern websites that engage your audience and convert visitors into customers.</p>
              <ul>
                <li>Responsive Design</li>
                <li>E-Commerce Solutions</li>
                <li>Content Management</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-item-icon">💼</div>
              <h3>SaaS Development</h3>
              <p>Scalable cloud infrastructure that grows with your business needs.</p>
              <ul>
                <li>Cloud Architecture</li>
                <li>Scalable Solutions</li>
                <li>Subscription Management</li>
                <li>Multi-tenant Systems</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-item-icon">🎨</div>
              <h3>UI Design</h3>
              <p>Beautiful, intuitive designs that make your product stand out from the competition.</p>
              <ul>
                <li>User Research</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </div>
            <div className="service-item">
              <div className="service-item-icon">🎥</div>
              <h3>Video Editing</h3>
              <p>Professional video editing services to enhance your content.</p>
              <ul>
                <li>Professional Editing</li>
                <li>Motion Graphics</li>
                <li>Color Correction</li>
                <li>Content Enhancement</li>
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
            {categories.map(category => {
              const displayName = category === 'webapp' ? 'Web/App' : 
                                 category === 'saas' ? 'SaaS' : 
                                 category.charAt(0).toUpperCase() + category.slice(1)
              return (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {displayName}
                </button>
              )
            })}
          </div>

          <div className="projects-grid">
            {filteredServices.map(service => (
              <div key={service.id} className="project-card">
                <div className="project-header">
                  <div className="project-icon">{service.image}</div>
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

