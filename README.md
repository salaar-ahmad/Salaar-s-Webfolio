# Salaar Ahmad Portfolio

A modern, responsive portfolio website built with Next.js 16, featuring smooth animations, dark theme, and a clean minimalist design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.25.0-FF0055?style=flat-square&logo=framer)

## ✨ Features

- **Modern Dark Theme** - Sleek #0c0c0c background with cyan accent colors
- **Smooth Animations** - Powered by Framer Motion with page transitions and scroll animations
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Interactive UI** - Animated hamburger menu, hover effects, and micro-interactions
- **Contact Form** - Integrated with EmailJS for direct messaging
- **PDF Resume Viewer** - Embedded resume with download option
- **SEO Optimized** - Custom metadata and favicon

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section with animated name, professional stats, and expertise showcase |
| **Services** | Service cards showcasing project management and technical expertise |
| **Projects** | Featured projects with live demos and details |
| **About** | Professional bio, experience timeline, and skills |
| **Resume** | Embedded PDF viewer with download functionality |
| **Contact** | Contact form with EmailJS integration and social links |

## 🛠️ Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- React 19
- Framer Motion
- Tailwind CSS 4

**Integrations:**
- EmailJS (Contact Form)
- React Icons
- React Intersection Observer

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── about/
│   ├── contact/
│   ├── projects/
│   ├── resume/
│   ├── services/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.jsx
├── components/
│   ├── ClientLayout.jsx
│   ├── Footer.jsx
│   ├── MotionWrapper.jsx
│   ├── Navbar.jsx
│   └── Preloader.jsx
├── data/
│   └── projects.js
├── public/
│   ├── images/
│   ├── Resume/
│   └── favicon.svg
├── styles/
│   ├── about.css
│   ├── contact.css
│   ├── footer.css
│   ├── home.css
│   ├── navbar.css
│   ├── preloader.css
│   ├── projects.css
│   ├── resume.css
│   └── services.css
└── package.json
```

## 🎨 Customization

### Colors
Edit the accent color in CSS files:
```css
/* Primary accent */
#4da6ff (Blue)

/* Secondary accent */
#00ffff (Cyan)

/* Background */
#0c0c0c
```

### Content
- **Projects:** Edit `data/projects.js`
- **Services:** Edit `app/services/page.jsx`
- **About:** Edit `app/about/page.jsx`
- **Contact Info:** Edit `app/contact/page.jsx` and `components/Footer.jsx`

### Resume
Replace the PDF file in `public/Resume/` directory

## 📧 Contact Form Setup

The contact form uses EmailJS. To configure:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update credentials in `app/contact/page.jsx`:
   ```javascript
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {...}, "YOUR_PUBLIC_KEY")
   ```

## 📱 Responsive Breakpoints

- **Desktop:** 1024px+
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

