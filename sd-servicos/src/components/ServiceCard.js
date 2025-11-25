import React from 'react';

function ServiceCard({ icon, title, description }) {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5549991725327';
    const message = `Olá! Gostaria de solicitar um orçamento para o serviço de *${title}*.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      onClick={handleWhatsAppClick}
      className="bg-gray-50 p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 cursor-pointer hover:border-sd-orange"
    >
      <div className="text-sd-orange mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center text-sd-dark">
        {title}
      </h3>
      <p className="text-gray-600 text-center mb-4">
        {description}
      </p>
      <div className="text-center">
        <span className="text-sm text-sd-orange font-semibold">
          Clique para orçamento →
        </span>
      </div>
    </div>
  );
}

export default ServiceCard;