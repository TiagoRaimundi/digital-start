'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import ProductModal from './components/ProductModal'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products onProductClick={setSelectedProduct} />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  )
}
