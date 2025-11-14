import { useState, useEffect, useRef } from 'react'
import { emailConfig } from '../config/emailConfig'
import { useSEO } from '../hooks/useSEO'
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

  const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://fusioncrafttech.vercel.app/'
  const emailjsRef = useRef(null)

  useEffect(() => {
    // Init EmailJS when publicKey is available. Keep logs only while debugging.
    // Dynamically import EmailJS only when publicKey is present.
    // This prevents build/runtime errors when the dependency isn't installed
    // and lets the app provide a graceful mailto fallback.
    if (!emailConfig.publicKey) return

    let mounted = true
    import('@emailjs/browser')
      .then((mod) => {
        if (!mounted) return
        const client = mod && (mod.default || mod)
        emailjsRef.current = client
        if (client && emailConfig.publicKey) client.init(emailConfig.publicKey)
      })
      .catch((err) => {
        console.warn('EmailJS package not available (dynamic import failed):', err)
      })

    return () => {
      mounted = false
    }
  }, [])

  useSEO({
    title: 'Contact Our Product Experts',
    description:
      'Connect with FusionCraft Tech to discuss your software development, design, or digital marketing needs. Reach us via email, phone, or the project inquiry form.',
    keywords: [
      'contact FusionCraft Tech',
      'start software project',
      'request product consultation',
      'digital agency contact details'
    ],
    canonicalPath: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      url: `${siteUrl}/contact`,
      mainEntity: {
        '@type': 'Organization',
        name: 'FusionCraft Tech',
        url: siteUrl,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'fusioncrafttech@gmail.com',
            telephone: '+91-9080326730',
            availableLanguage: ['English', 'Tamil']
          }
        ]
      }
    }
  })

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

    // Basic validation for config (prevent sending when placeholders are present)
   const isPlaceholderConfig =
  !emailConfig.serviceId ||
  !emailConfig.templateId ||
  !emailConfig.publicKey ||
  emailConfig.publicKey.length < 10


    if (isPlaceholderConfig) {
      console.warn('EmailJS credentials look like placeholders or are missing:', {
        serviceId: emailConfig.serviceId,
        templateId: emailConfig.templateId,
        publicKey: emailConfig.publicKey && `${emailConfig.publicKey.slice(0, 6)}...`
      })
      setError('Email service not configured. Add your EmailJS credentials to your environment (VITE_EMAILJS_*) or in src/config/emailConfig.js for local testing.')
      setIsLoading(false)
      return
    }

    try {
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )

      // EmailJS returns an object like { status: 200, text: 'OK' } on success
      console.log('EmailJS response:', response)
      const ok = response && (response.status === 200 || response.status === '200' || response.text === 'OK')

      if (ok) {
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        })
      } else {
        console.error('EmailJS did not return success:', response)
        setError('Failed to send message. Email service returned an unexpected response. Check the browser console for details.')
      }
    } catch (err) {
      // EmailJS may throw an EmailJSResponseStatus or another Error. Log all useful fields.
      console.error('Failed to send email (caught):', err)
      const status = err && (err.status || err.statusCode || err.status_id)
      const text = err && (err.text || err.message || JSON.stringify(err))
      setError(`Failed to send message. ${status ? `Status: ${status}. ` : ''}${text ? `${text}` : ''}`)
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
                  <a
                    className="social-icon linkedin"
                    href="https://www.linkedin.com/company/fusioncrafttech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.119 20.452H3.554V9h3.565v11.452zM5.337 7.433a2.068 2.068 0 1 1 0-4.137 2.068 2.068 0 0 1 0 4.137zM20.447 20.452h-3.554V14.83c0-1.341-.024-3.067-1.868-3.067-1.869 0-2.156 1.459-2.156 2.965v5.724H9.315V9h3.413v1.561h.049c.476-.9 1.637-1.848 3.369-1.848 3.602 0 4.268 2.372 4.268 5.455v6.284z"
                      />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    className="social-icon instagram"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Instagram"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm8.75 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15a3.5 3.5 0 0 0 0-7z"
                      />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                {isSubmitted && (
                  <div className="success-message" role="status" aria-live="polite">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}
                {error && (
                  <div className="error-message" role="alert">
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
                      autoComplete="name"
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
                      autoComplete="email"
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
                      autoComplete="organization"
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
                      autoComplete="tel"
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
                    maxLength={2000}
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

