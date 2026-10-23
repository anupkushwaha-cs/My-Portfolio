
# Anup Kushwaha | Full-Stack Developer Portfolio

A modern, cinematic and responsive developer portfolio built with React, Vite, Tailwind CSS, GSAP, and Lenis Smooth Scroll. This portfolio showcases my skills, featured projects, development workflow, and contact information.

## 🚀 Live Portfolio

🌐 **Portfolio:** https://sky-mart-pink.vercel.app/

> Replace the link above with your portfolio website's actual deployed URL if this is a separate portfolio project.

## ✨ Features

- 🎬 Smooth animations and scroll-based transitions using GSAP.
- 🌊 Smooth scrolling powered by Lenis.
- 📱 Responsive design for desktop, tablet, and mobile devices.
- 👨‍💻 About section featuring my background and technical skills.
- 🛠️ Development workflow and services section.
- 💼 Featured projects with GitHub repositories and live demos.
- 📧 Contact form integration using EmailJS.
- 🔗 Direct links to GitHub, LinkedIn, and email.
- 🌙 Modern dark-themed design with vibrant accent colors.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Framework | React, Vite |
| Styling | Tailwind CSS |
| Animations | GSAP, ScrollTrigger |
| Smooth Scrolling | Lenis |
| API Integration | REST APIs, Axios |
| Database | MongoDB, SQL |
| Tools | Git, GitHub, VS Code |
| Deployment | Vercel, Netlify |
| Contact Form | EmailJS |

## 💼 Featured Projects

### 1. SkyMart — E-commerce Website
A product-focused shopping application featuring a responsive interface and product browsing experience.

- **Live Demo:** https://sky-mart-pink.vercel.app/
- **GitHub:** https://github.com/anupkushwaha-cs/SkyMart
- **Tech:** React, JavaScript, Tailwind CSS

### 2. Advanced Weather App
A weather application that displays weather information and air quality data using API integration.

- **Live Demo:** https://anupsinghweatherapp.netlify.app/
- **GitHub:** https://github.com/anupkushwaha-cs/WeatherApp
- **Tech:** HTML, CSS, JavaScript, REST API

### 3. Productivity Dashboard
A productivity-focused dashboard designed to organize daily activities through a clean interface.

- **Live Demo:** https://dashproductivitycohort.netlify.app/
- **GitHub:** https://github.com/anupkushwaha-cs/Productivity-Dashboard
- **Tech:** HTML, CSS, JavaScript

### 4. FinTrack — Finance Tracker
A finance tracking project focused on presenting financial information through a user-friendly interface.

- **Live Demo:** https://fintrackcohort3.netlify.app/
- **GitHub:** https://github.com/anupkushwaha-cs/FinTrack
- **Tech:** HTML, CSS, JavaScript

### 5. Lazarave UI
A modern, animation-focused website interface inspired by contemporary web design.

- **Live Demo:** https://lazaraveanup.netlify.app/
- **GitHub:** https://github.com/anupkushwaha-cs/Lazarave
- **Tech:** HTML, CSS, JavaScript, GSAP

## 📂 Project Structure

```text
portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Project.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useLenis.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (18 or newer recommended)
- npm

### Installation

1. Clone your repository:

   ```bash
   git clone <your-portfolio-repository-url>
   ```

2. Open the project directory:

   ```bash
   cd <your-project-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure EmailJS:

   ```env
   VITE_PHONE_NUMBER=your_phone_number
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Create a production build:

   ```bash
   npm run build
   ```

## 🔐 Environment Variables

The contact form requires valid EmailJS configuration to send messages.

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_PHONE_NUMBER`

Never commit your `.env` file or private credentials to GitHub. Add `.env` to `.gitignore` and share only placeholder values in `.env.example`.

## 👨‍💻 About Me

I'm Anup Kushwaha, a BCA graduate/student and aspiring Full-Stack Developer interested in building responsive, interactive, and user-friendly web applications.

I enjoy learning modern web technologies, solving development problems, and turning ideas into practical projects.

## 📫 Connect With Me

- **GitHub:** https://github.com/anupkushwaha-cs
- **LinkedIn:** https://www.linkedin.com/in/anup-kushwa-357522399/
- **Email:** anupkushwaha916@gmail.com
- **Portfolio:** https://sky-mart-pink.vercel.app/

## 📄 License

Add a license that matches the permissions granted by the original project and any assets or code you use. Do not claim unrestricted rights to third-party code without permission.
