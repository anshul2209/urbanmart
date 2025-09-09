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

## 🌐 Live Demo

**🚀 [View Live Application](https://urbanmart-dun4.onrender.com)**

Your UrbanMart e-commerce platform is now live and ready to use! Browse products, add items to cart, and experience the full shopping functionality.

> **Note**: This is deployed on Render's free tier. The instance may spin down with inactivity, causing initial requests to take 50+ seconds to wake up the server.

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

This application is successfully deployed on Render's free tier:

#### 🌐 **Live Application**
- **URL**: [https://urbanmart-dun4.onrender.com](https://urbanmart-dun4.onrender.com)
- **Status**: ✅ Successfully Deployed
- **Features**: Full e-commerce functionality with product browsing and cart management

#### ⚠️ **Free Tier Limitations**
- **Sleep Mode**: Instance spins down after 15 minutes of inactivity
- **Cold Start**: First request after sleep takes 50+ seconds to wake up
- **Monthly Hours**: 750 hours/month (sufficient for 24/7 uptime when active)
- **Performance**: 512MB RAM, shared CPU resources

#### 🚀 **Deployment Process**
1. **Repository Setup**: Code pushed to Git repository
2. **Render Configuration**: Uses `render.yaml` for automatic setup
3. **Build Process**: `yarn install && yarn build`
4. **Start Command**: `yarn start`
5. **Health Check**: Automatic monitoring

#### 💡 **Performance Tips**
- **Keep Active**: Regular traffic keeps the instance warm
- **Upgrade Path**: Consider paid plans for production use
- **Monitoring**: Check Render dashboard for usage statistics

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

## 🌐 Live Demo & Deployment

**🚀 [View Live Application](https://urbanmart-dun4.onrender.com)**

UrbanMart e-commerce platform is successfully deployed and running! Experience the full shopping functionality with product browsing, cart management, and responsive design.

### Deployment Details
- **Platform**: Render (Free Tier)
- **URL**: [https://urbanmart-dun4.onrender.com](https://urbanmart-dun4.onrender.com)
- **Status**: ✅ Live and Functional
- **Features**: Complete e-commerce experience with session-based cart persistence

### Free Tier Considerations
- **Sleep Mode**: Instance may spin down after inactivity
- **Cold Start**: Initial requests after sleep may take 50+ seconds
- **Performance**: Optimized for development and testing

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [Biome](https://biomejs.dev/) - Linting and formatting
- [DummyJSON](https://dummyjson.com/) - API for product data
- [Render](https://render.com/) - Free hosting platform
