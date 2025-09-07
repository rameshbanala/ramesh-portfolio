# Modern React Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, dark theme, and a fully functional contact form with email integration.


- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Dark Theme**: Professional dark theme with purple/blue accent colors
- **Interactive Contact Form**: Functional contact form with email integration using EmailJS
- **Project Showcase**: Dynamic project gallery with live demo and GitHub links
- **Skills Visualization**: Animated skill bars and technology badges
- **Achievement Section**: Highlighting accomplishments and recognitions
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Fast loading with Vite bundling

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 5.4.10
- **Styling**: Tailwind CSS 3.4.14
- **Animations**: Framer Motion 11.11.17
- **Icons**: Lucide React 0.454.0
- **Email Service**: EmailJS
- **Deployment**: Netlify/Vercel Ready

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## 🎯 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rameshbanala/portfolio-website.git
cd portfolio-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Project Images

Create an `assets` folder in `src/` and add your project images:

```
src/
├── assets/
│   ├── resume_analyzer.png
│   ├── agrofix.png
│   ├── fixit.png
│   └── profile-picture.jpg
```

### 4. Configure Email Service (Optional)

To enable the contact form email functionality:

1. Sign up at [EmailJS.com](https://www.emailjs.com)
2. Set up your email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the EmailJS configuration in `src/components/Contact.jsx`:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'  
const EMAILJS_PUBLIC_KEY = 'your_public_key'
```

### 5. Customize Your Information

Update the following files with your personal information:

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Skills Section**: `src/components/Skills.jsx`
- **Projects Section**: `src/components/Projects.jsx`
- **Achievements Section**: `src/components/Achievements.jsx`
- **Contact Information**: `src/components/Contact.jsx`

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

### 7. Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── profile-picture.jpg
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   ├── resume_analyzer.png
│   │   ├── agrofix.png
│   │   └── fixit.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors

The portfolio uses a dark theme with purple/blue accents. You can customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6', 
        600: '#2563eb',
        700: '#1d4ed8',
        900: '#1e3a8a',
      }
    }
  }
}
```

### Fonts

The project uses Inter font. You can change it in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

### Animations

Customize animations in individual components or create new ones using Framer Motion:

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 📝 Content Management

### Adding New Projects

Add new projects to the `projects` array in `src/components/Projects.jsx`:

```javascript
{
  title: 'Your Project Name',
  description: 'Project description...',
  image: yourProjectImg, // Import the image
  technologies: ['React', 'Node.js', 'MongoDB'],
  liveDemo: 'https://your-demo-link.com',
  github: 'https://github.com/yourusername/repo',
  featured: true
}
```

### Updating Skills

Modify the `skillCategories` array in `src/components/Skills.jsx`:

```javascript
{
  title: 'Category Name',
  skills: [
    { name: 'Skill Name', level: 90, color: 'from-blue-400 to-blue-600' }
  ]
}
```

### Adding Achievements

Update the `achievements` array in `src/components/Achievements.jsx`:

```javascript
{
  title: 'Achievement Title',
  organization: 'Organization Name',
  description: 'Achievement description...',
  icon: Trophy,
  color: 'from-yellow-400 to-orange-500',
  link: 'https://link-to-achievement.com',
  date: '2025'
}
```

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite settings
4. Deploy!

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Run deployment:

```bash
npm run deploy
```

## 📧 Email Configuration

### EmailJS Setup

1. **Create Account**: Sign up at [EmailJS.com](https://www.emailjs.com)

2. **Add Email Service**:
   - Go to Email Services
   - Add your email provider (Gmail, Outlook, etc.)
   - Follow authentication steps

3. **Create Email Template**:
   ```
   Subject: New Contact Form Message: {{subject}}
   
   Hello,
   
   You have received a new message from your portfolio:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   Best regards,
   Your Portfolio Website
   ```

4. **Get Credentials**:
   - Service ID from Email Services
   - Template ID from Email Templates  
   - Public Key from Account Settings

5. **Update Code**: Replace placeholders in `Contact.jsx`

### Alternative: Web3Forms

For a simpler setup, use Web3Forms:

1. Go to [Web3Forms.com](https://web3forms.com)
2. Enter your email and get access key
3. Replace EmailJS code with Web3Forms implementation

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Update Contact component to use environment variables:

```javascript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

## 📱 Mobile Optimization

The portfolio is fully responsive with:

- **Responsive Typography**: Scales from mobile to desktop
- **Touch-Friendly Buttons**: Proper sizing for mobile interaction
- **Mobile Navigation**: Collapsible hamburger menu
- **Optimized Images**: Proper sizing and loading
- **Mobile-First Animations**: Optimized for touch devices




## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request



## 👨‍💻 Author

**Ramesh Banala**
- GitHub: [@rameshbanala](https://github.com/rameshbanala)
- LinkedIn: [rameshbanala](https://linkedin.com/in/rameshbanala)
- Email: rameshbanalab@gmail.com

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons
- [EmailJS](https://www.emailjs.com/) for email functionality
- [Vite](https://vitejs.dev/) for fast development experience

## 📞 Support

If you have any questions or need help customizing the portfolio:

1. Check the [Issues](https://github.com/rameshbanala/portfolio-website/issues) page
2. Create a new issue if your question isn't answered
3. Contact me directly at rameshbanalab@gmail.com

***

⭐ **If you found this project helpful, please give it a star!** ⭐

**Happy coding!** 🚀