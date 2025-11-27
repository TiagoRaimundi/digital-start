'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import EspecialidadesSection from '@/components/EspecialidadesSection'
import SobreSection from '@/components/SobreSection'
import DepoimentosSection from '@/components/DepoimentosSection'
import ContatoSection from '@/components/ContatoSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SchemaOrg from '@/components/SchemaOrg'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header />
      <HeroSection />
      <EspecialidadesSection />
      <SobreSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
      <WhatsAppButton />
      <SchemaOrg />
    </>
  )
}
