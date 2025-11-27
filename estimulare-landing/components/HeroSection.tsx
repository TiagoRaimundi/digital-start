"use client";

import { FaWhatsapp, FaUsers, FaStar, FaMapMarkerAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white overflow-hidden pt-20 sm:pt-24"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-300/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">
                Atendimento disponível em Xanxerê - SC
              </span>
            </div>
          </div>

          {/* Main heading - MARCA EM DESTAQUE */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-white/90 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 sm:mb-4">
                Clínica
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent drop-shadow-2xl font-extrabold tracking-tight">
                Estimulare
              </span>
              <span className="block text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-3 sm:mt-4 px-4">
                Cuidado que transforma vidas
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-purple-100 mb-6 leading-relaxed max-w-4xl mx-auto px-4">
              Clínica multidisciplinar com olhar integrativo para o seu
              desenvolvimento em todas as fases da vida
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🏥</div>
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                +8 Especialidades
              </h3>
              <p className="text-purple-100 text-xs sm:text-sm">
                Equipe multidisciplinar completa para cuidar de você
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">❤️</div>
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                Atendimento Humanizado
              </h3>
              <p className="text-purple-100 text-xs sm:text-sm">
                Acolhimento e atenção em cada consulta
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🌟</div>
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                Olhar Integrativo
              </h3>
              <p className="text-purple-100 text-xs sm:text-sm">
                Cuidado completo pensando no todo
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 mb-8 sm:mb-12">
            <a
              href="https://wa.me/5549889820000?text=Olá! Gostaria de agendar uma consulta na Clínica Estimulare."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white text-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <FaWhatsapp className="text-xl sm:text-2xl group-hover:animate-pulse flex-shrink-0" />
              <span className="text-sm sm:text-base">Agendar Consulta</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center space-x-2 bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 text-center text-sm sm:text-base"
            >
              <span>Conhecer Especialidades</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-purple-100 px-4">
            <div className="flex items-center space-x-2">
              <FaUsers className="text-lg sm:text-xl lg:text-2xl flex-shrink-0" />
              <span className="text-xs sm:text-sm whitespace-nowrap">
                900+ seguidores
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <FaStar className="text-yellow-300 text-base sm:text-lg lg:text-xl" />
              <FaStar className="text-yellow-300 text-base sm:text-lg lg:text-xl" />
              <FaStar className="text-yellow-300 text-base sm:text-lg lg:text-xl" />
              <FaStar className="text-yellow-300 text-base sm:text-lg lg:text-xl" />
              <FaStar className="text-yellow-300 text-base sm:text-lg lg:text-xl" />
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-lg sm:text-xl lg:text-2xl flex-shrink-0" />
              <span className="text-xs sm:text-sm whitespace-nowrap">
                Centro de Xanxerê
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <a
          href="#especialidades"
          className="flex flex-col items-center space-y-2 group"
        >
          <span className="text-xs sm:text-sm text-purple-100 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Role para explorar
          </span>
          <div className="animate-bounce">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
