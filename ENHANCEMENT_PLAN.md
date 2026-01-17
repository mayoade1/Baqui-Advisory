
# BaQui Advisory Website - Enhancement Plan

## Overview
This document outlines the planned improvements to complete the BaQui Advisory website.

---

## Phase 1: Setup Files (Foundation)

### 1.1 Create `.env.example`
**File:** `.env.example`
```env
# Zoho Email Configuration
# Get these credentials from your Zoho account
# https://mail.zoho.com/ -> Settings -> Mail Accounts -> Configure

ZOHO_EMAIL=info@baquiadvisory.com
ZOHO_PASSWORD=your-zoho-app-password

# Server Configuration (optional)
PORT=3000
```
**Purpose:** Template for environment variables, showing what credentials are needed.

### 1.2 Create `.gitignore`
**File:** `.gitignore`
```gitignore
# Dependencies
node_modules/

# Environment variables (never commit real credentials)
.env
.env.local
.env.*.local

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/
```
**Purpose:** Prevents committing sensitive data and unnecessary files.

---

## Phase 2: Documentation (README Enhancement)

### 2.1 Enhanced `README.md`
**File:** `README.md`
```markdown
# BaQui Advisory Limited

Digital Family Office Website - A professional, responsive website for a luxury wealth management firm.

## 🌟 Features

- **Responsive Design** - Optimized for all devices
- **Hero Slideshow** - Dynamic image presentation
- **Contact Form** - Integrated with Zoho email
- **Smooth Animations** - Polished user experience
- **SEO Ready** - Meta tags for search engines

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd baqui-advisory
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env and add your Zoho credentials
```

4. Start the server:
```bash
npm start
```

5. Open in browser:
```
http://localhost:3000
```

## 📧 Zoho Email Setup

1. Log in to Zoho Mail: https://mail.zoho.com
2. Go to Settings → Mail Accounts → Configure
3. Note your email and generate an app-specific password
4. Add credentials to your `.env` file

## 🛠️ Development

```bash
# Start development server with auto-restart
npm run dev

# The server will restart when files change
```

## 📁 Project Structure

```
baqui-advisory/
├── asset/              # Images and static assets
├── node_modules/       # Dependencies (auto-generated)
├── .env.example        # Environment template
├── .gitignore          # Git ignore rules
├── index.html          # Main HTML file
├── package.json        # Project metadata
├── README.md           # This file
└── server.js           # Express backend server
```

## 🎨 Design System

- **Primary Color:** #7cc3ff (Light blue)
- **Secondary Color:** #3b82f6 (Blue)
- **Background:** #0a1528 (Dark navy)
- **Font:** Montserrat (Google Fonts)
- **Style:** Modern, premium, financial services aesthetic

## 📱 Responsive Breakpoints

- **Desktop:** > 960px
- **Tablet:** 720px - 960px
- **Mobile:** < 720px

## 🔒 Security Notes

- Never commit `.env` files with real credentials
- The contact form includes anti-spam measures
- All form inputs are validated server-side

## 📄 License

MIT License - See LICENSE file for details

## 📞 Support

For questions about this website, contact: info@baquiadvisory.com
```

**Purpose:** Clear documentation for developers and stakeholders.

---

## Phase 3: Mobile Navigation (UX Improvement)

### 3.1 Add Mobile Menu HTML
**File:** `index.html` (add after header nav)
```html
<!-- Mobile Menu Button -->
<button class="mobile-menu-btn" aria-label="Toggle menu">
  <span class="hamburger"></span>
</button>

<!-- Mobile Navigation Overlay -->
<div class="mobile-nav-overlay">
  <nav class="mobile-nav">
    <a href="#services">Services</a>
    <a href="#approach">Approach</a>
    <a href="#families">Families</a>
    <a href="#insights">Insights</a>
    <a href="#contact" class="nav-cta">Talk with us</a>
  </nav>
</div>
```

### 3.2 Add Mobile Menu CSS
**File:** `style.css` (add at end)
```css
/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1001;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  display: block;
  width: 24px;
  height: 2px;
  background: #7cc3ff;
  position: absolute;
  left: 10px;
  transition: all 0.3s ease;
}

.hamburger {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger::before {
  content: "";
  top: -8px;
}

.hamburger::after {
  content: "";
  top: 8px;
}

/* Hamburger animation when active */
.mobile-menu-btn.active .hamburger {
  background: transparent;
}

.mobile-menu-btn.active .hamburger::before {
  top: 0;
  transform: rotate(45deg);
}

.mobile-menu-btn.active .hamburger::after {
  top: 0;
  transform: rotate(-45deg);
}

/* Mobile Navigation Overlay */
.mobile-nav-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(10, 21, 40, 0.98);
  z-index: 1000;
  padding-top: 100px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-nav-overlay.active {
  opacity: 1;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 20px;
}

.mobile-nav a {
  font-size: 1.5rem;
  color: #f5f7fb;
  text-decoration: none;
  transition: color 0.2s ease;
}

.mobile-nav a:hover {
  color: #7cc3ff;
}

.mobile-nav .nav-cta {
  margin-top: 12px;
  padding: 14px 28px;
  border-radius: 999px;
  border: 1px solid rgba(120, 172, 255, 0.5);
  background: radial-gradient(circle at 0 0, rgba(124, 195, 255, 0.24), #0d1a2e);
}

/* Show mobile menu button on small screens */
@media (max-width: 960px) {
  .mobile-menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .mobile-nav-overlay.active {
    display: block;
  }
}
```

### 3.3 Add Mobile Menu JavaScript
**File:** `index.html` (add to script section)
```javascript
// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

if (mobileMenuBtn && mobileNavOverlay) {
  mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active');
    document.body.style.overflow = mobileNavOverlay.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking a link
  const mobileLinks = mobileNavOverlay.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuBtn.classList.remove('active');
      mobileNavOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}
```

---

## Phase 4: Scroll Animations (Visual Enhancement)

### 4.1 Add Animation CSS
**File:** `style.css` (add at end)
```css
/* Animation Classes */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in {
  opacity: 0;
  transition: opacity 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Staggered animation delays */
.stagger-1 { transition-delay: 0.1s; }
.stagger-2 { transition-delay: 0.2s; }
.stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; }
```

### 4.2 Add Animation JavaScript
**File:** `index.html` (add to script section)
```javascript
// Scroll Animations using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  // Add animation classes to elements
  const animatedElements = document.querySelectorAll(
    '.section-header, .card, .split-copy, .split-visual, .insight-card'
  );
  
  animatedElements.forEach(el => {
    el.classList.add('fade-in-up');
  });

  // Add stagger classes to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.classList.add(`stagger-${(index % 4) + 1}`);
  });

  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all animated elements
  document.querySelectorAll('.fade-in-up, .fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
});
```

---

## Phase 5: SEO & Favicon (Discovery)

### 5.1 Add SEO Meta Tags
**File:** `index.html` (update head section)
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BaQui Advisory Limited | Digital Family Office</title>
  <meta
    name="description"
    content="BaQui Advisory is a digital family office specializing in private wealth management and multi-generational wealth planning. We help families steward wealth with intention."
  />
  <meta name="keywords" content="family office, wealth management, private wealth, multi-generational planning, estate planning, digital family office" />
  <meta name="author" content="BaQui Advisory Limited" />
  <meta name="robots" content="index, follow" />
  
  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.baquiadvisory.com/" />
  <meta property="og:title" content="BaQui Advisory Limited | Digital Family Office" />
  <meta property="og:description" content="Private wealth management for multi-generational families. Institutional-grade investment discipline with deeply personal planning." />
  <meta property="og:image" content="https://www.baquiadvisory.com/asset/baqui%20logo%202.0.png" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BaQui Advisory Limited | Digital Family Office" />
  <meta name="twitter:description" content="Private wealth management for multi-generational families." />
  <meta name="twitter:image" content="https://www.baquiadvisory.com/asset/baqui%20logo%202.0.png" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="asset/favicon.png" />
  <link rel="apple-touch-icon" href="asset/favicon.png" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.baquiadvisory.com/" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  
  <link rel="stylesheet" href="style.css" />
</head>
```

### 5.2 Create Favicon
**File:** `asset/favicon.png`
- Create a 32x32 PNG version of the BaQui logo
- Simple, recognizable at small sizes
- Recommended: Blue background with white text "BQ"

---

## Phase 6: Additional Enhancements

### 6.1 Add Loading State to Form Button
**File:** `style.css` (add at end)
```css
/* Loading Button State */
.btn.loading {
  position: relative;
  color: transparent !important;
  pointer-events: none;
}

.btn.loading::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  margin-left: -10px;
  margin-top: -10px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### 6.2 Update Form JavaScript for Loading State
**File:** `index.html` (update form submission)
```javascript
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.classList.add('loading');
    submitButton.textContent = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        form.style.display = 'none';
        formSuccess.style.display = 'block';
      } else {
        alert(result.message || 'There was a problem submitting your form. Please try again.');
        submitButton.classList.remove('loading');
        submitButton.textContent = 'Request a conversation';
      }
    } catch (error) {
      alert('There was a problem submitting your form. Please try again.');
      submitButton.classList.remove('loading');
      submitButton.textContent = 'Request a conversation';
    }
  });
}
```

---

## Summary of Changes

| Phase | Files to Create/Modify | Description |
|-------|----------------------|-------------|
| 1 | Create `.env.example` | Environment variable template |
| 1 | Create `.gitignore` | Git ignore rules |
| 2 | Modify `README.md` | Enhanced documentation |
| 3 | Modify `index.html` | Mobile menu HTML |
| 3 | Modify `style.css` | Mobile menu styles |
| 3 | Modify `index.html` | Mobile menu JavaScript |
| 4 | Modify `style.css` | Animation classes |
| 4 | Modify `index.html` | Scroll animation script |
| 5 | Modify `index.html` | SEO meta tags and favicon |
| 5 | Create `asset/favicon.png` | Favicon image |
| 6 | Modify `style.css` | Loading spinner styles |
| 6 | Modify `index.html` | Loading state JavaScript |

---

## Time Estimate
- **Setup Files:** 5 minutes
- **Mobile Navigation:** 15 minutes
- **Scroll Animations:** 10 minutes
- **SEO & Favicon:** 10 minutes
- **Form Enhancement:** 5 minutes
- **Total:** ~45 minutes

---

## Next Steps
1. Review this plan
2. Provide feedback or request changes
3. Approve the plan to begin implementation

