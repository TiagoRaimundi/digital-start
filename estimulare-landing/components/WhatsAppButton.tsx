import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5549889820000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 animate-pulse hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  )
}
