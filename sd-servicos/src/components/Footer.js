import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="bg-sd-orange w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
            SD
          </div>
          <span className="font-bold text-lg">SD Serviços e Manutenções</span>
        </div>
        <p className="text-gray-400">
          © {currentYear} SD Serviços e Manutenções. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
