export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  avatar: string
  createdAt: string
  updatedAt: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  discount: number
  images: string[]
  category: string
  brand: string
  sizes: string[]
  colors: Color[]
  stock: number
  rating: number
  reviews: number
  featured: boolean
  bestseller: boolean
  createdAt: string
  updatedAt: string
}

export interface Color {
  name: string
  hex: string
  stock: number
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  description: string
}

export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
  size: string
  color: string
  addedAt: string
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  totalAmount: number
  shippingCost: number
  taxAmount: number
  couponCode?: string
  discountAmount: number
  shippingAddress: Address
  paymentMethod: string
  trackingNumber?: string
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  product: Product
  quantity: number
  price: number
  size: string
  color: string
}

export interface Address {
  id: string
  fullName: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
  isDefault: boolean
}

export interface Review {
  id: string
  productId: string
  userId: string
  user: { firstName: string; lastName: string; avatar: string }
  rating: number
  comment: string
  helpful: number
  createdAt: string
  updatedAt: string
}

export interface Coupon {
  id: string
  code: string
  discount: number
  discountType: 'percentage' | 'fixed'
  minOrderAmount: number
  maxUses: number
  usedCount: number
  validFrom: string
  validUntil: string
  active: boolean
}

export interface Wishlist {
  id: string
  userId: string
  productId: string
  product: Product
  addedAt: string
}
