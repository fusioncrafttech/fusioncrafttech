# FusionCraft Tech - Business Portfolio Website

A modern, responsive business portfolio website built with React and Vite. Showcasing services, team, client projects, and contact information.

## Features

- 🏠 **Home Page** - Hero section, services overview, and company statistics
- 📖 **About Us** - Company story, values, and team members
- 💼 **Services** - Detailed services and client projects showcase with filtering
- 📧 **Contact** - Contact form with company information

## Technology Stack

- **React 19** - Modern UI library
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with gradients and animations

## Project Structure

```
src/
├── components/
│   └── Layout/
│       ├── Navbar.jsx       # Navigation component
│       ├── Navbar.css
│       ├── Footer.jsx       # Footer component
│       └── Footer.css
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Home.css
│   ├── About.jsx           # About us page
│   ├── About.css
│   ├── Services.jsx        # Services page
│   ├── Services.css
│   ├── Contact.jsx        # Contact page
│   └── Contact.css
├── App.jsx                 # Main app component
├── App.css                 # Global app styles
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Pages Overview

### Home (`/`)
- Hero section with call-to-action buttons
- Services preview cards
- Company statistics

### About Us (`/about`)
- Company story and mission
- Core values
- Team members
- Why choose us section

### Services (`/services`)
- Service offerings overview
- Client projects showcase
- Filterable project gallery by category

### Contact (`/contact`)
- Contact information cards
- Contact form
- Social media links

## Customization

### Update Company Information

- **Contact details**: Edit `src/pages/Contact.jsx` and `src/components/Layout/Footer.jsx`
- **Team members**: Edit `src/pages/About.jsx`
- **Client projects**: Edit the `services` array in `src/pages/Services.jsx`

### Styling

The website uses CSS custom properties for easy theming. Main colors are defined in `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #2c3e50;
}
```

## Features

- ✅ Fully responsive design
- ✅ Modern gradient aesthetics
- ✅ Smooth animations and transitions
- ✅ Mobile-friendly navigation
- ✅ SEO-friendly structure
- ✅ Client projects showcase
- ✅ Contact form with validation

## License

MIT

---

Built with ❤️ by FusionCraft Tech
