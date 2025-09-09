# 🛒 UrbanMart - Modern E-commerce Platform

A modern e-commerce application built with Next.js 15, TypeScript, and Tailwind CSS. Features product browsing, shopping cart, and responsive design.

## ✨ Features

- **Product Catalog**: Browse products with responsive grid layout
- **Shopping Cart**: Add/remove items with session-based persistence
- **Product Details**: Dynamic product pages with images and ratings
- **Next.js 15**: App Router with Server-Side Rendering
- **TypeScript**: Full type safety
- **Tailwind CSS**: Responsive utility-first styling
- **Zustand**: Lightweight state management
- **SEO Optimized**: Meta tags and structured data

## 🌐 Live Demo

**🚀 [View Live Application](https://urbanmart-dun4.onrender.com)**

> **Note**: Deployed on Render's free tier. May take 50+ seconds to wake up after inactivity.

## 🚀 Quick Start

```bash
git clone <repository-url>
cd urbanmart
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## 💭 Development Notes

### Thought Process & Trade-offs

**Architecture Decisions:**
- **Next.js App Router**: Chose for modern React patterns and better SEO
- **Zustand over Redux**: Simpler state management with less boilerplate
- **SessionStorage over LocalStorage**: Cart data persists only during browser session (more realistic e-commerce behavior)
- **Server-Side Rendering**: Products load on server for better SEO and initial performance

**Technical Trade-offs:**
- **API Dependency**: Uses DummyJSON API - simple but external dependency
- **No Database**: Stateless design for easier deployment
- **Client-Side Cart**: No server-side cart persistence (simplifies architecture)
- **Free Tier Deployment**: Render free tier has cold start limitations

**Code Quality:**
- **Biome over ESLint+Prettier**: Faster tooling with zero configuration
- **TypeScript**: Full type safety for better maintainability
- **Error Boundaries**: Graceful error handling without complex state management

### Known Limitations

**Current Limitations:**
- **External API Dependency**: Relies on DummyJSON API (could be down)
- **No User Authentication**: No login/register functionality
- **No Payment Processing**: Cart functionality only (no checkout)
- **No Admin Panel**: No product management interface
- **Session-Only Cart**: Cart data lost when browser tab closes
- **Free Tier Constraints**: 50+ second cold starts on Render

**Production Considerations:**
- **Database Required**: For real e-commerce (products, users, orders)
- **Authentication System**: User accounts and session management
- **Payment Integration**: Stripe, PayPal, or similar
- **Image Storage**: CDN for product images
- **Security**: CSRF protection, input validation, rate limiting

## 🛠️ Development

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn check        # Run linting and formatting
```

**Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Zustand, Biome

## 🚀 Deployment

**Live URL**: [https://urbanmart-dun4.onrender.com](https://urbanmart-dun4.onrender.com)

- **Platform**: Render (Free Tier)
- **Status**: ✅ Live and Functional
- **Note**: May take 50+ seconds to wake up after inactivity

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [DummyJSON](https://dummyjson.com/) - API for product data
- [Render](https://render.com/) - Free hosting platform
