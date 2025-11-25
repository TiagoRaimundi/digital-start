import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function FloatingButton({ phoneNumber }) {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110 z-50"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}

export default FloatingButton;
