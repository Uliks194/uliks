import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '@/types'

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useCartStore = create<CartState>(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item: CartItem) => {
        const items = get().items
        const existingItem = items.find(
          (i) => i.productId === item.productId && i.size === item.size && i.color === item.color
        )
        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === existingItem.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          })
        } else {
          set({ items: [...items, item] })
        }
      },
      removeItem: (itemId: string) => {
        set({ items: get().items.filter((item) => item.id !== itemId) })
      },
      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          set({ items: get().items.filter((item) => item.id !== itemId) })
        } else {
          set({
            items: get().items.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
          })
        }
      },
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.product.price * (1 - item.product.discount / 100)
          return total + price * item.quantity
        }, 0)
      },
      getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: 'cart-storage',
    }
  )
)
