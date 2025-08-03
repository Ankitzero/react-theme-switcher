# React Theme Switcher

A dynamic React-based web application featuring three distinct themes with complete visual transformations. Built with Vite, TypeScript, Tailwind CSS, and React Router, this project demonstrates advanced theme switching capabilities that go beyond simple color changes. [App Link](https://app-theme-switcher.netlify.app)

## 🎯 Project Objective

Build a React application with a comprehensive theme switcher that allows users to select from three distinct themes. Each theme transforms not only colors but also structure, fonts, spacing, and layout to create completely different user experiences.

## ✨ Features

- 🎨 **Three Complete Themes**: Minimalist, Dark Sidebar, and Colorful Grid layouts
- 🔄 **Theme Persistence**: Themes persist across page reloads using localStorage
- 🌐 **Multi-page Support**: Theme consistency across Home, About, and Contact pages
- 📱 **Fully Responsive**: Compatible with all devices (desktop, tablet, mobile)
- ⚡ **Smooth Animations**: Subtle transitions when switching themes
- 🛡️ **Type-Safe**: Built with TypeScript for enhanced security and reliability
- 🎯 **Context API**: Centralized theme management using React Context
- 🔗 **API Integration**: Dynamic content from Fake Store API
- 🧭 **React Router**: Multi-page navigation with theme persistence

## 🎨 Theme System

The application features three distinct themes that transform the entire user interface:
- **Theme 1**: Default minimalist design
- **Theme 2**: Dark mode with sidebar layout
- **Theme 3**: Colorful grid-based layout

Each theme changes layout structure, typography, spacing, and visual design elements.

## 🛠️ Technology Stack

- **React 19.1.0** - Modern UI library with latest features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.0.4** - Fast build tool and development server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **React Router DOM 7.7.1** - Client-side routing
- **Context API** - State management for theme switching
- **Fake Store API** - External data source
- **localStorage** - Theme persistence

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, or **pnpm** package manager
- Modern web browser with JavaScript enabled

Check your Node.js version:
```bash
node --version
```

## 🚀 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ankitzero/react-theme-switcher.git
   cd react-theme-switcher
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
   Or with yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:5173](http://localhost:5173)

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run lint         # Run ESLint for code quality
npm run lint --fix   # Auto-fix linting issues
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🏗️ Project Structure

```
react-theme-switcher/
├── node_modules/           # Dependencies
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header/
│   │   │   └── index.tsx
│   │   ├── Layout/
│   │   │   └── index.tsx
│   │   ├── NoItemFound/
│   │   │   └── index.tsx
│   │   ├── ProductButton/
│   │   │   └── index.tsx
│   │   ├── ProductCard/
│   │   │   └── index.tsx
│   │   ├── ProductImage/
│   │   │   └── index.tsx
│   │   ├── ProductLayout/
│   │   │   └── index.tsx
│   │   ├── ProductList/
│   │   │   └── index.tsx
│   │   └── Sidebar/
│   │       └── index.tsx
│   ├── contexts/           # React Context API
│   │   └── ThemeContext.tsx
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Route components
│   │   ├── About.tsx       # About page
│   │   ├── Contact.tsx     # Contact page
│   │   └── Home.tsx        # Homepage with products
│   ├── router/             # Routing configuration
│   │   └── AppRouter.tsx
│   ├── styles/             # CSS and theme styles
│   │   └── themes.css      # Theme definitions
│   ├── types/              # TypeScript definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   └── index.ts
│   ├── App.tsx             # Main application
│   └── main.tsx            # Entry point
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Project dependencies
├── package-lock.json       # Dependency lock file
├── README.md               # Project documentation
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── vite.config.ts          # Vite configuration
```

## 🎯 Core Components

### Header Component
- Fixed top navigation bar
- App name/logo display
- Theme dropdown selector (Theme 1 as default)
- Responsive design for all screen sizes

### Main Content Areas
- **Title Section**: Dynamic heading with theme-specific styling
- **Content Paragraph**: Sample text with theme-appropriate typography
- **Interactive Button**: Action button with theme-consistent design
- **Product Display**: Cards/list showing API data from Fake Store API
- **Responsive Layout**: Adapts to desktop, tablet, and mobile views

### Theme Management
- **Context Provider**: Centralized theme state management
- **localStorage Integration**: Automatic theme persistence
- **Animation System**: Smooth transitions between theme changes
- **Type Safety**: Full TypeScript support for theme configurations

## 🌐 API Integration

The application integrates with the Fake Store API to demonstrate dynamic content:

```typescript
// Example API endpoint
https://fakestoreapi.com/products
```

Features:
- Fetches product data dynamically
- Displays products according to current theme layout
- Error handling and loading states
- Responsive product cards/lists

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔧 Development Guidelines

### Theme Development
1. Each theme should have distinct visual identity
2. Layout structure must change significantly between themes
3. Typography, spacing, and component styles should differ
4. Maintain accessibility standards across all themes

### Code Quality
- Use TypeScript for all components
- Follow ESLint rules and best practices
- Implement proper error boundaries
- Write reusable, modular components

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Test Production Build
```bash
npm run preview
```

The production-ready files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🐛 Troubleshooting

### Common Issues

**Theme not persisting**: Check localStorage permissions in your browser settings.

**API data not loading**: Verify internet connection and check browser console for CORS issues.

**Styles not applying**: Ensure Tailwind CSS is properly configured and classes are not being purged.

**TypeScript errors**: Run `npm run lint` to identify and fix type issues.

**Responsive issues**: Test on multiple devices and use browser dev tools for debugging.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 Assignment Checklist

- ✅ Fixed header with app name and theme dropdown
- ✅ Three distinct themes with different layouts, fonts, and structures
- ✅ Theme persistence using localStorage
- ✅ Context API for theme management
- ✅ Fake Store API integration
- ✅ Responsive design with Tailwind CSS
- ✅ Smooth theme switching animations
- ✅ Multi-page routing (Home, About, Contact)
- ✅ Full TypeScript implementation
- ✅ Security best practices
- ✅ Cross-device compatibility

---

**Ready to experience dynamic theming?** 🎨✨

Start the development server and watch as your application transforms with each theme selection!
