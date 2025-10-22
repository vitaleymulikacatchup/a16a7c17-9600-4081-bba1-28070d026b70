'use client'

import { useState } from 'react'
import { Menu, X, Search, User } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    'ТЕЛЕКАНАЛИ',
    'ФІЛЬМИ',
    'МУЛЬТФІЛЬМИ',
    'СЕРІАЛИ',
    'ШОУ',
    'СПОРТ',
    'ОСВІТА'
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-custom border-b border-dark-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold tracking-wider text-white">
              MEGOGO
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-gray-500 transition-colors duration-200">
              Тарифи
            </button>
            
            <button className="p-2 text-gray-300 hover:text-white transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            
            <div className="text-sm text-gray-300">UA</div>
            
            <button className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
              УВІЙТИ
            </button>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-dark-border animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header