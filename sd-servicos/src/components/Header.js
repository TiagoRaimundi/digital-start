import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <>
      {/* Header Desktop */}
      <header className="bg-white text-gray-900 fixed w-full z-40 shadow-md top-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="bg-sd-orange w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white">
              SD
            </div>
            <span className="font-bold text-lg hidden sm:inline text-gray-900">SD Serviços</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 font-medium hover:text-sd-orange transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sd-orange group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center space-y-1.5 w-10 h-10"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <nav className="fixed left-0 top-0 h-screen w-64 bg-sd-dark text-white z-40 md:hidden overflow-y-auto">
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-2xl hover:text-sd-orange transition"
              >
                ✕
              </button>

              {/* Logo in Sidebar */}
              <div className="flex items-center space-x-3 mb-8 mt-8">
                <div className="bg-sd-orange w-12 h-12 rounded-full flex items-center justify-center font-bold text-white">
                  SD
                </div>
                <span className="font-bold text-lg">SD Serviços</span>
              </div>

              {/* Navigation Items */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-lg text-white font-medium hover:bg-sd-orange transition-colors duration-200 block"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </>
      )}

      {/* Padding para conteúdo não ficar sob o header */}
      <div className="h-16"></div>
    </>
  );
}

export default Header;
