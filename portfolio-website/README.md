# Personal Portfolio Website

A modern, responsive portfolio website to showcase projects, skills, and experience.

## 🎯 Features

- ✨ Modern and responsive design
- 🎨 Smooth animations and transitions
- 📱 Mobile-first approach
- 🌙 Dark/Light theme toggle
- 📧 Contact form functionality
- 🚀 Fast loading and optimized performance
- ♿ Accessibility-friendly

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Build Tool:** Vite
- **Package Manager:** npm/yarn

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   └── data/
│       ├── projects.js
│       └── skills.js
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/f-khalloufi/khalloufi-fares.git
   cd khalloufi-fares
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📄 Sections

### 1. **Header/Navigation**
- Logo/Brand name
- Navigation menu (Home, About, Projects, Skills, Contact)
- Theme toggle (dark/light mode)
- Mobile hamburger menu

### 2. **Hero Section**
- Welcome message
- Brief introduction
- Call-to-action button
- Background animation or image

### 3. **About Section**
- Professional bio
- Key achievements
- Technologies and interests
- Download CV button

### 4. **Projects Section**
- Project cards with:
  - Project title and description
  - Technologies used
  - Live demo link
  - GitHub repository link
  - Project image/screenshot

### 5. **Skills Section**
- Categorized skills (Frontend, Backend, Tools)
- Skill level indicators
- Technology icons

### 6. **Contact Section**
- Contact form (name, email, message)
- Social media links
- Email address
- Phone number (optional)

### 7. **Footer**
- Quick links
- Social media links
- Copyright information

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "react-icons": "^4.11.0"
  },
  "devDependencies": {
    "vite": "^4.4.0",
    "@vitejs/plugin-react": "^4.0.0",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

## 🎨 Customization

1. **Update personal information** - Edit `src/data/projects.js` and `src/data/skills.js`
2. **Change colors** - Modify `tailwind.config.js`
3. **Add projects** - Add entries in `src/data/projects.js`
4. **Customize components** - Edit component files in `src/components/`

## 🚀 Deployment

### Deploy on Vercel
```bash
npm install -g vercel
vercel
```

### Deploy on Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

## 📝 Next Steps

- [ ] Initialize React project with Vite
- [ ] Install dependencies (React, Tailwind, Framer Motion)
- [ ] Create component structure
- [ ] Design and build Hero section
- [ ] Build About section
- [ ] Create Projects showcase
- [ ] Add Skills section
- [ ] Implement Contact form
- [ ] Add animations
- [ ] Optimize for mobile
- [ ] Deploy to production

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Created:** June 2026  
**Status:** In Development 🚧
