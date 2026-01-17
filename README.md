# BaQui Advisory Limited

Digital Family Office Website - A professional, responsive website for a luxury wealth management firm.

## 🌟 Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Hero Slideshow** - Dynamic image presentation with auto-rotation
- **Contact Form** - Integrated with Zoho email backend
- **Scroll Animations** - Smooth fade-in animations as you scroll
- **Mobile Navigation** - Hamburger menu for small screens
- **SEO Ready** - Meta tags for search engines and social sharing

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

Example `.env` file:
```
ZOHO_EMAIL=info@baquiadvisory.com
ZOHO_PASSWORD=your-zoho-app-password
PORT=3000
```

## 🛠️ Development

```bash
# Start development server with auto-restart
npm run dev
```

## 📁 Project Structure

```
baqui-advisory/
├── asset/                  # Images and static assets
│   ├── baqui logo 2.0.png  # Logo
│   ├── *.jpeg              # Hero and section images
│   └── *.png               # Service cards and icons
├── node_modules/           # Dependencies (auto-generated)
├── .env.example            # Environment template
├── .gitignore              # Git ignore rules
├── index.html              # Main HTML file
├── package.json            # Project metadata
├── README.md               # This file
└── server.js               # Express backend server
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

## 📄 Sections

1. **Hero** - Main landing area with slideshow
2. **Services** - Three service cards (Wealth Management, Planning, Digital Office)
3. **Approach** - Company philosophy and timeline
4. **Families** - Target client descriptions
5. **Insights** - Market insights cards
6. **Contact** - Contact form with Zoho integration
7. **Footer** - Copyright and navigation

## 🔒 Security Notes

- Never commit `.env` files with real credentials
- The contact form includes server-side validation
- All form inputs are validated before sending emails

## 🔧 Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express
- **Email:** Nodemailer with Zoho SMTP
- **Fonts:** Montserrat (Google Fonts)

## 📞 Support

For questions about this website, contact: info@baquiadvisory.com

---

## 📝 Development Notes

### Adding New Sections

To add a new section to the website:

1. Add the HTML section in `index.html` after the appropriate section
2. Add corresponding styles in `style.css`
3. Add any JavaScript functionality in the script section

### Modifying Colors

All colors are defined in the stylesheet. Key colors:
- Primary blue: `#7cc3ff`
- Dark background: `#0a1528`

### Form Submission

The contact form submits to `/api/contact` which:
1. Validates required fields
2. Sends email via Zoho SMTP
3. Returns JSON response

### Animation Customization

Scroll animations use CSS classes:
- `.fade-in-up` - Fade in and move up
- `.visible` - Applied when element is in view
- `.stagger-1` to `.stagger-4` - Staggered delays

---

## 📄 License

MIT License

---

Built with care for BaQui Advisory Limited

