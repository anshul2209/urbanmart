# 🛒 UrbanMart - Modern E-commerce Platform

A modern, full-stack e-commerce application built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean architecture, robust state management, and excellent developer experience.

## ✨ Features

### 🛍️ **E-commerce Functionality**
- **Product Catalog**: Browse products with beautiful cards and responsive grid layout
- **Product Details**: Detailed product pages with images, descriptions, and ratings
- **Shopping Cart**: Add/remove items, update quantities, and view totals
- **Persistent Cart**: Cart state persists across browser sessions using localStorage

### 🏗️ **Technical Features**
- **Next.js 15**: Latest App Router with Server-Side Rendering
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with responsive design
- **Zustand**: Lightweight state management with persistence
- **Biome**: Fast linting and formatting (replaces ESLint + Prettier)
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Loading States**: Skeleton components and loading indicators
- **SEO Optimized**: Meta tags, JSON-LD structured data, and sitemap

### 🎨 **User Experience**
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient re-renders
- **Hydration Safe**: Proper SSR/client hydration handling
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd urbanmart
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
urbanmart/
├── app/                    # Next.js App Router
│   ├── cart/              # Shopping cart page
│   ├── products/[id]/     # Dynamic product pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── AddToCartButton.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── LoadingSpinner.tsx
├── hooks/                 # Custom React hooks
│   └── useCart.ts
├── lib/                   # Utility functions
│   ├── api.ts            # API client and data fetching
│   └── errors.ts         # Error handling utilities
├── store/                 # State management
│   └── cartStore.ts      # Zustand cart store
├── types/                 # TypeScript type definitions
│   └── product.ts
└── public/               # Static assets
```

## 🛠️ Development

### Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server

# Code Quality
yarn check        # Run linting and formatting checks
yarn check:fix    # Fix linting and formatting issues
yarn lint         # Run linting only
yarn format       # Run formatting only
```

### Code Quality

This project uses **Biome** for linting and formatting, providing:
- ⚡ **Fast Performance**: 10-100x faster than ESLint + Prettier
- 🔧 **Zero Configuration**: Works out of the box
- 🎯 **TypeScript Support**: Full TypeScript and React support
- 📦 **All-in-One**: Linting, formatting, and import organization

### VS Code Integration

The project includes VS Code settings for seamless development:
- Auto-formatting on save
- Import organization
- Real-time linting errors
- Biome as default formatter

## 🏗️ Architecture

### **Frontend Architecture**
- **Layered Design**: Clear separation between API, state, and UI layers
- **Custom Hooks**: Reusable logic with `useCart` hook
- **Error Boundaries**: Comprehensive error handling with custom error types
- **Loading States**: Skeleton components and loading indicators

### **State Management**
- **Zustand Store**: Lightweight, type-safe state management
- **Persistence**: Automatic localStorage sync with hydration handling
- **Optimized Selectors**: Prevents unnecessary re-renders
- **Computed Values**: Derived state for cart totals and summaries

### **Data Fetching**
- **API Client**: Generic, type-safe API client with error handling
- **Next.js Caching**: Built-in revalidation and caching strategies
- **Error Recovery**: Graceful fallbacks for failed requests
- **Type Safety**: Full TypeScript coverage for API responses

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Custom Components**: Reusable UI components with consistent styling
- **Dark Mode Ready**: Prepared for theme switching

## 📱 Features in Detail

### Shopping Cart
- Add/remove products with quantity controls
- Real-time total calculation
- Persistent storage across sessions
- Optimistic updates for better UX

### Product Management
- Dynamic product pages with detailed information
- Image optimization with Next.js Image component
- Breadcrumb navigation
- SEO-optimized meta tags

### Error Handling
- Custom error types and logging
- User-friendly error messages
- Development vs production error displays
- Graceful fallbacks for failed operations

## 🔧 Configuration

### Biome Configuration
The project uses a comprehensive Biome configuration with:
- TypeScript and React support
- Custom rules for Next.js best practices
- Accessibility enforcement
- Performance optimizations
- Security considerations

### Next.js Configuration
- App Router with latest features
- Image optimization
- Metadata API for SEO
- Error and loading boundaries

## 🚀 Deployment

### Free Deployment on Render

This application is configured for easy deployment on Render (free tier available):

#### 1. **Prepare Your Repository**
Make sure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket).

#### 2. **Deploy to Render**
1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your Git repository
4. Render will automatically detect the `render.yaml` configuration
5. Click "Create Web Service"

#### 3. **Environment Variables** (if needed)
If your app requires environment variables:
1. Go to your service dashboard
2. Navigate to "Environment" tab
3. Add any required variables from `env.example`

#### 4. **Deployment Details**
- **Build Command**: `yarn install && yarn build`
- **Start Command**: `yarn start`
- **Node Version**: 18+ (automatically detected)
- **Health Check**: Automatic at root path `/`

#### 5. **Custom Domain** (Optional)
- Free tier includes: `your-app-name.onrender.com`
- Custom domains available on paid plans

### Other Deployment Options
The application is also ready for:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting platform**

### Build for Production
```bash
yarn build
yarn start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `yarn check` to ensure code quality
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [Biome](https://biomejs.dev/) - Linting and formatting
- [DummyJSON](https://dummyjson.com/) - API for product data
