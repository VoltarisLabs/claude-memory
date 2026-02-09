# Title Voice

<div align="center">
  <img src="public/logo.png" alt="Title Voice Logo" width="200"/>

  <h3>AI-Powered Solutions for the Title Industry</h3>
  <p><strong>Never miss a call again.</strong></p>

  [![Website](https://img.shields.io/badge/Website-titlevoice.ai-0080FF)](https://titlevoice.ai)
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-4.5-646CFF?logo=vite)](https://vitejs.dev/)
  [![Tailwind](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 📖 About

Title Voice is an AI-powered virtual assistant platform designed specifically for title companies. We partner with title companies nationwide to transform customer interactions, accelerate business growth, and preserve the personal relationships that set them apart.

### What We Do

- 📞 **24/7 AI Receptionist** - Never miss another opportunity
- 📅 **Smart Scheduling** - Automated closing scheduling with calendar integration
- 💬 **Deal Status Updates** - Real-time transaction information for clients
- 🤝 **Seamless Handoffs** - Smooth transfers between AI and human team members
- 📊 **Analytics & Insights** - Detailed reporting for data-driven decisions
- 🔗 **Title Software Integration** - Works with Qualia, SoftPro, ResWare, and more

---

## ✨ Features

### 🎯 AI Capabilities
- **Natural Language Processing** - Human-like conversations that feel personal
- **Context-Aware Responses** - Understands title industry terminology
- **Multi-Channel Support** - Phone, chat, and email integration
- **Real-Time Learning** - Continuously improves from interactions
- **Compliance Logging** - Complete call transcripts and audit trails

### 🎨 Website Features
- **Interactive UI** - Modern, responsive design with smooth animations
- **Live Audio Demos** - Hear real AI conversations
- **ROI Calculator** - Calculate potential savings and revenue impact
- **Integrated Booking** - Cal.com scheduling for demos
- **Contact Form** - Direct email delivery via Web3Forms API

---

## 🚀 Tech Stack

### Frontend Framework
- **React 18.2** - Component-based UI library
- **Vite 4.5** - Next-generation frontend tooling
- **React Router 6.21** - Client-side routing

### Styling & UI
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Framer Motion 10.18** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icons

### Forms & Integrations
- **Web3Forms** - Serverless form backend (250 emails/month free)
- **Cal.com** - Scheduling platform integration
- **React Hot Toast** - Beautiful toast notifications

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

---

## 📦 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/title-voice.git
   cd title-voice
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Get your Web3Forms access key**
   - Visit [web3forms.com](https://web3forms.com)
   - Enter your email address
   - Click "Get Access Key"
   - Check your email and copy the key
   - Add to `.env`:
     ```
     VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
     ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3001`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📂 Project Structure

```
title-voice/
├── public/                    # Static assets
│   ├── audio/                # AI call demo audio files
│   │   ├── never-miss-a-call.m4a
│   │   ├── Real-time-updates.m4a
│   │   └── ...
│   ├── logo.png              # Company logo
│   ├── spheremotion.mp4      # Hero background video
│   └── ...
│
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── AnimatedCounter.jsx      # Counting animation
│   │   ├── AnimatedInput.jsx        # Form inputs with validation
│   │   ├── AudioPlayer.jsx          # Custom audio player
│   │   ├── BookingModal.jsx         # Demo booking modal
│   │   ├── Footer.jsx               # Site footer
│   │   ├── GradientMesh.jsx         # Animated background
│   │   ├── Navigation.jsx           # Main navigation
│   │   ├── ROICalculator.jsx        # Interactive calculator
│   │   ├── SpaceLines.jsx           # Background effects
│   │   ├── TextAnimations.jsx       # Text reveal effects
│   │   └── ...
│   │
│   ├── context/              # React Context providers
│   │   └── BookingContext.jsx       # Booking state management
│   │
│   ├── hooks/                # Custom React hooks
│   │   └── useReducedMotion.js      # Accessibility hook
│   │
│   ├── pages/                # Page components
│   │   ├── Home.jsx                 # Landing page
│   │   ├── About.jsx                # Company information
│   │   ├── Contact.jsx              # Contact form
│   │   ├── Pricing.jsx              # Pricing tiers & FAQ
│   │   ├── Solutions.jsx            # Product features
│   │   ├── Workflows.jsx            # Workflow automation
│   │   ├── ROICalculator.jsx        # ROI calculator page
│   │   └── ...
│   │
│   ├── utils/                # Utility functions
│   │   └── formValidation.js        # Form validation logic
│   │
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles & Tailwind
│   └── main.jsx              # Application entry point
│
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── index.html                # HTML entry point
├── package.json              # Dependencies & scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

---

## 🎯 Key Pages

### Home (`/`)
Hero section with animated sphere background, live AI call demos, feature showcase with interactive tabs, animated statistics, and customer testimonials.

### Solutions (`/solutions`)
Comprehensive overview of AI answering service, integration capabilities, benefits with ROI metrics, and implementation process.

### Workflows (`/workflows`)
Workflow automation showcase with step-by-step visualizations, use cases, and real-world examples.

### Pricing (`/pricing`)
Two pricing tiers (Professional & Enterprise), feature comparison table, FAQ accordion, and trust indicators.

### About (`/about`)
Company mission and values, case studies with impact metrics, team process, and our journey.

### Contact (`/contact`)
Contact form with real-time validation, direct email integration, meeting scheduling, and contact information.

### ROI Calculator (`/roi-calculator`)
Interactive calculator to estimate potential savings and revenue impact from implementing Title Voice.

---

## 🎨 Design System

### Color Palette
```css
--primary-blue: #0080FF
--primary-purple: #4F1AD6
--background: #000000
--text-primary: #FFFFFF
--text-secondary: rgba(255, 255, 255, 0.8)
--text-muted: rgba(255, 255, 255, 0.5)
```

### Typography
- **Font Stack**: System fonts (optimized for performance)
- **Headings**: Bold weight, large scale (4xl - 7xl)
- **Body**: Regular weight, readable sizes (base - xl)
- **Buttons**: Medium weight, clear hierarchy

### Spacing Scale
- Tailwind's default spacing scale (0.25rem increments)
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Components
- **Cards**: White/5 background, subtle borders, hover effects
- **Buttons**: Primary (blue gradient), Outline (transparent with border)
- **Inputs**: Animated labels, validation states, character counts
- **Modals**: Backdrop blur, smooth enter/exit animations

---

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Code Style Guidelines

- Use functional components with hooks
- Prefer named exports over default exports (except for pages)
- Use Tailwind classes instead of custom CSS when possible
- Keep components small and focused (single responsibility)
- Add PropTypes or TypeScript for type safety (future enhancement)
- Write descriptive variable and function names
- Add comments for complex logic

### Animation Best Practices

- Use `useReducedMotion` hook to respect user preferences
- Keep animations smooth (60fps target)
- Avoid layout thrashing
- Use `framer-motion` for complex animations
- CSS transitions for simple state changes

---

## 📊 Performance Optimizations

### Current Metrics
- **Bundle Size**: ~650KB (170KB gzipped)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Lighthouse Score**: 90+ (Performance)

### Optimization Techniques
- ✅ Code splitting with `React.lazy()`
- ✅ Image optimization (WebP format where supported)
- ✅ Tree shaking with Vite
- ✅ CSS purging with Tailwind
- ✅ Lazy loading for heavy components
- ✅ Debounced scroll handlers
- ✅ Memoization for expensive calculations

---

## 🚢 Deployment

### Recommended Platforms

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm run build
# Upload dist/ folder or connect Git repository
```

**GitHub Pages**
```bash
npm run build
# Push dist/ to gh-pages branch
```

### Environment Variables

Add these to your hosting platform:

```
VITE_WEB3FORMS_ACCESS_KEY=your_production_key_here
```

### Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Node Version**: 16.x or higher

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works across all routes
- [ ] Contact form validates and submits
- [ ] Booking modal opens and closes
- [ ] Audio player plays demos
- [ ] ROI calculator computes correctly
- [ ] Animations trigger on scroll
- [ ] Mobile responsive on all pages
- [ ] Forms work with keyboard navigation
- [ ] Reduced motion preferences respected

### Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation as needed

---

## 📝 License

This project is proprietary software owned by Voltaris Labs. All rights reserved.

For licensing inquiries, contact: support@titlevoice.ai

---

## 📞 Contact & Support

### Title Voice
- **Website**: [titlevoice.ai](https://titlevoice.ai)
- **Email**: support@titlevoice.ai
- **Location**: Akron, OH
- **LinkedIn**: [Title Voice](https://www.linkedin.com/company/title-voice)
- **Twitter**: [@titlevoiceai](https://twitter.com/titlevoiceai)

### Book a Demo
Schedule a 15-minute demo: [cal.com/title-voice-ai-tsigyx/30min](https://cal.com/title-voice-ai-tsigyx/30min)

---

## 🙏 Acknowledgments

- **React Team** - For the incredible framework
- **Vercel** - For Vite and hosting platform
- **Tailwind Labs** - For Tailwind CSS
- **Framer** - For Framer Motion animations
- **Web3Forms** - For serverless form backend
- **Cal.com** - For scheduling integration
- **Lucide** - For beautiful icons

---

## 📈 Stats

- **100+ Title Companies** served nationwide
- **500K+ Calls Handled** through AI assistant
- **99% Uptime** - Enterprise-grade reliability
- **4.8/5 Customer Rating** - Trusted by the industry

---

<div align="center">
  <p>Made with ❤️ by the Title Voice Team</p>
  <p>© 2024-2026 Title Voice. All rights reserved.</p>
  <br>
  <p>🤖 <em>Powered by cutting-edge AI technology</em></p>
</div>
