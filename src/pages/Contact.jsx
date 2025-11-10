import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailConfig } from '../config/emailConfig'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      phone: formData.phone || 'Not provided',
      message: formData.message,
      to_email: 'fusioncrafttech@gmail.com'
    }

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Failed to send email:', error)
      setError('Failed to send message. Please add your EmailJS credentials in src/config/emailConfig.js or contact us at fusioncrafttech@gmail.com')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Let's discuss how we can help transform your business
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-description">
                Have a project in mind? We'd love to hear from you. Send us a message 
                and we'll respond as soon as possible.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <p>fusioncrafttech@gmail.com</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <div>
                    <h3>Phone</h3>
                    <p>+91 9360121830</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">🕐</div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Mon - Fri: 9am - 6pm</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <button
                    type="button"
                    className="social-icon"
                    aria-label="Open LinkedIn"
                    onClick={() => window.open('https://www.linkedin.com/company/fusioncrafttech/', '_blank', 'noopener,noreferrer')}
                  >
                    LinkedIn
                  </button>
                  <button
                    type="button"
                    className="social-icon"
                    aria-label="Open Instagram"
                    onClick={() => window.open('https://instagram.com', '_blank', 'noopener,noreferrer')}
                  >
                    Instagram
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                {isSubmitted && (
                  <div className="success-message">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}
                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="yourmail@example.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

