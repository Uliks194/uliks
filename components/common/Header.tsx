import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-primary dark:text-secondary">
              Urban Style
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              Contact
            </Link>
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Link href="/cart">Cart</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Link href="/account">Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
