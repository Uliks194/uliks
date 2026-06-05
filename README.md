# Urban Style - Fashion E-Commerce Application

A modern, professional, production-ready fashion e-commerce web application built with Next.js, React, TypeScript, Tailwind CSS, and Supabase.

## 🎯 Features

### User Features
- **Modern Design**: Premium minimalist design inspired by Zara, H&M, and ASOS
- **Responsive Design**: Full support for desktop, tablet, and mobile devices
- **Product Catalog**: Browse fashion products with filtering, sorting, and search
- **Product Details**: Zoom images, view descriptions, sizes, colors, and reviews
- **Shopping Cart**: Add/remove items, manage quantities
- **Wishlist**: Save favorite products for later
- **Checkout**: Secure payment with Stripe and multiple payment methods
- **User Account**: Profile, order history, saved addresses
- **Authentication**: Email/password and social login
- **Dark Mode**: Toggle between light and dark themes
- **Multi-Language**: English, Albanian, and German support
- **AI Recommendations**: Smart product suggestions
- **Reviews & Ratings**: Customer feedback and ratings

### Admin Features
- **Dashboard**: Sales analytics and revenue charts
- **Product Management**: Create, edit, delete products
- **Order Management**: Track and manage orders
- **Customer Management**: View and manage customer data
- **Inventory Tracking**: Real-time stock updates
- **Coupon Management**: Create and manage discount codes
- **Analytics**: Detailed business insights

## 🛠️ Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI Components
- **State Management**: Zustand
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth
- **Payment**: Stripe
- **HTTP Client**: Axios
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Icons**: React Icons
- **Internationalization**: next-intl

## 📁 Project Structure

```
urban-style-ecommerce/
├── app/                          # Next.js app directory
│   ├── (auth)/                   # Authentication routes
│   ├── (dashboard)/              # Admin dashboard routes
│   ├── (shop)/                   # Shop routes
│   ├── api/                      # API routes
│   └── layout.tsx                # Root layout
├── components/                    # Reusable components
│   ├── common/                   # Common components
│   ├── product/                  # Product components
│   ├── cart/                     # Cart components
│   ├── checkout/                 # Checkout components
│   └── dashboard/                # Admin dashboard components
├── lib/                          # Utility functions
│   ├── supabase/                # Supabase client
│   └── stripe/                  # Stripe utilities
├── types/                        # TypeScript types
├── hooks/                        # Custom React hooks
├── store/                        # Zustand stores
├── utils/                        # Utility functions
├── styles/                       # Global styles
├── public/                       # Static assets
└── database/                     # Database schema and migrations
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/uliks.git
cd uliks
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase and Stripe credentials.

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📚 Database Setup

See `database/schema.sql` for the complete PostgreSQL schema.

Key tables:
- `users` - User accounts and profiles
- `products` - Product catalog
- `categories` - Product categories
- `orders` - Customer orders
- `order_items` - Individual items in orders
- `cart_items` - Shopping cart items
- `wishlist` - Saved products
- `reviews` - Product reviews and ratings
- `coupons` - Discount codes
- `inventory` - Stock tracking

## 🔐 Authentication

Authentication is handled by Supabase Auth with:
- Email/password registration and login
- Social login (Google, GitHub, etc.)
- Password reset functionality
- Email verification

## 💳 Payment Integration

Stripe integration for:
- Credit/Debit card payments
- PayPal (via Stripe)
- Webhook handling for payment events

## 🌐 Deployment

The application is ready for deployment on:
- Vercel (recommended for Next.js)
- AWS
- Google Cloud
- Any Node.js hosting provider

## 📄 License

MIT

## 👨‍💻 Author

Created with ❤️ for modern fashion e-commerce
