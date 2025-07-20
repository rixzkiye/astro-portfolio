# Modern Bio Website - Astro Portfolio

A modern, aesthetic, and functional bio website built with Astro, featuring dual themes, content collections, and optimized performance.

## 🚀 Features

### Design & User Experience
- **Dual Theme Support**: Seamless light/dark mode switching with system preference detection
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Micro-animations**: Subtle hover effects and smooth transitions
- **Modern Typography**: Inter for body text, Playfair Display for headings
- **Accessibility**: WCAG AA compliant with proper contrast ratios

### Content Management
- **Type-safe Collections**: Astro content collections with Zod validation
- **Markdown Support**: Rich content authoring with frontmatter
- **SEO Optimized**: Automatic meta tags, Open Graph, and sitemap generation
- **Image Optimization**: Automatic WebP conversion and lazy loading

### Performance
- **Lighthouse Score 95+**: Optimized for Core Web Vitals
- **Static Generation**: Pre-rendered pages for instant loading
- **Minimal JavaScript**: Only interactive components are hydrated
- **Bundle Optimization**: Tree-shaking and code splitting

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── images/          # Static images
│   └── pdfs/           # PDF files for papers
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.tsx
│   │   ├── ProjectCard.astro
│   │   ├── PaperCard.astro
│   │   └── PDFViewer.tsx
│   ├── content/
│   │   ├── config.ts
│   │   ├── projects/
│   │   │   ├── code/
│   │   │   ├── music/
│   │   │   └── video/
│   │   └── papers/
│   │       ├── esai/
│   │       ├── puisi/
│   │       └── artikel/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── papers.astro
│   │   ├── pustaka.astro
│   │   └── about.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── theme.ts
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## 🛠 Tech Stack

- **Framework**: Astro 5.10.2
- **Styling**: Tailwind CSS
- **UI Components**: React (for interactive components)
- **Content**: Markdown with frontmatter
- **Icons**: Lucide React
- **PDF Viewer**: React-PDF
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd astro-bio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📝 Adding Content

### Adding a New Project

1. Create a new `.md` file in the appropriate category folder:
   - `src/content/projects/code/` for code projects
   - `src/content/projects/music/` for music projects  
   - `src/content/projects/video/` for video projects

2. Use this frontmatter template:

```markdown
---
title: "Project Title"
description: "Brief description of the project"
thumbnail: "https://example.com/image.jpg"
category: "code" # or "music" or "video"
tags: ["tag1", "tag2", "tag3"]
date: 2025-01-15
views: 0
externalLink: "https://project-url.com"
githubLink: "https://github.com/username/repo"
youtubeLink: "https://youtube.com/watch?v=..."
spotifyLink: "https://open.spotify.com/..."
featured: true
status: "published"
---

# Project Title

Your project content here...
```

### Adding a New Paper

1. Create a new `.md` file in the appropriate category folder:
   - `src/content/papers/esai/` for essays
   - `src/content/papers/puisi/` for poetry
   - `src/content/papers/artikel/` for articles

2. Use this frontmatter template:

```markdown
---
title: "Paper Title"
description: "Brief description of the paper"
thumbnail: "https://example.com/image.jpg" # optional
category: "esai" # or "puisi" or "artikel"
tags: ["tag1", "tag2", "tag3"]
date: 2025-01-15
views: 0
readTime: 5 # in minutes
pdfUrl: "/pdfs/paper.pdf" # optional
featured: true
status: "published"
---

# Paper Title

Your paper content here...
```

## 🎨 Customization

### Colors and Themes

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  light: {
    bg: '#ffffff',
    surface: '#f8fafc',
    border: '#e2e8f0',
    text: '#1e293b',
    muted: '#64748b',
    accent: '#3b82f6',
    sage: '#84cc16',
  },
  dark: {
    bg: '#0f172a',
    surface: '#1e293b',
    border: '#334155',
    text: '#f1f5f9',
    muted: '#94a3b8',
    accent: '#1e40af',
    gold: '#f59e0b',
  }
}
```

### Typography

Update font imports in `src/styles/global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
```

### Personal Information

Update the following files with your information:
- `src/components/Navbar.astro` - Brand name
- `src/components/Footer.astro` - Social links and copyright
- `src/pages/about.astro` - Bio, skills, and timeline
- `src/layouts/Layout.astro` - Default meta information

## 📊 Performance Optimization

### Image Optimization
- Use WebP format when possible
- Implement lazy loading with `loading="lazy"`
- Optimize images before uploading (recommended: 800px width for thumbnails)

### Bundle Size
- Only import necessary components
- Use dynamic imports for heavy components
- Leverage Astro's partial hydration

### SEO Best Practices
- Use descriptive meta titles and descriptions
- Implement proper heading hierarchy (h1, h2, h3)
- Add alt text to all images
- Use semantic HTML elements

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run astro check
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Pexels](https://pexels.com/) for the stock images
- [Google Fonts](https://fonts.google.com/) for the typography

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact [your.email@example.com](mailto:your.email@example.com).
