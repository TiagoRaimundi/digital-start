'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#especialidades', label: 'Especialidades' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' }
  ]

  const handleMenuClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/10 backdrop-blur-md'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Marca em destaque */}
          <a href="#inicio" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-xl sm:text-2xl">E</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex flex-col">
              <span className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight transition-colors ${isScrolled ? 'text-purple-700' : 'text-white'}`}>
                Estimulare
              </span>
              <span className={`text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-colors ${isScrolled ? 'text-purple-500' : 'text-purple-100'}`}>
                Clínica Multidisciplinar
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-purple-600'
                    : 'text-white hover:text-purple-200'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* CTA Button Desktop */}
            <a
              href="https://wa.me/5549889820000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaWhatsapp className="text-lg" />
              <span>Agendar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className={isScrolled ? 'text-purple-700' : 'text-white'} />
            ) : (
              <FaBars className={isScrolled ? 'text-purple-700' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-2xl shadow-xl animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-6 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors font-medium"
                onClick={handleMenuClick}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="https://wa.me/5549889820000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg"
                onClick={handleMenuClick}
              >
                <FaWhatsapp className="text-xl" />
                <span>Agendar Consulta</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}