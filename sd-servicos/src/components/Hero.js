import React from "react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { MdConstruction, MdElectricBolt, MdPlumbing } from "react-icons/md";
import Button from "./Button";

function Hero({ phoneNumber }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    { icon: <FaCheckCircle />, text: "Profissional Qualificado" },
    { icon: <FaCheckCircle />, text: "Atendimento Rápido" },
    { icon: <FaCheckCircle />, text: "Orçamento Gratuito" },
  ];

  return (
    <section
      id="home"
      className="relative pt-20 bg-gradient-to-br from-sd-dark via-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl">
          <MdConstruction />
        </div>
        <div className="absolute bottom-20 right-20 text-9xl">
          <MdElectricBolt />
        </div>
        <div className="absolute top-1/2 right-10 text-8xl">
          <MdPlumbing />
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sd-orange opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sd-orange/20 border border-sd-orange/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-sd-orange rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-sd-orange">
                Disponível agora
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              SD Serviços e
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sd-orange to-yellow-400">
                {" "}
                Manutenções
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Profissional qualificado e experiente para cuidar do seu lar e do
              seu negócio com excelência
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 transition-all"
                >
                  <span className="text-green-400">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  "Olá! Gostaria de solicitar um orçamento."
                )}`}
                variant="primary"
                className="flex items-center justify-center gap-2 group shadow-xl shadow-sd-orange/30 hover:shadow-2xl hover:shadow-sd-orange/50 transition-all"
              >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
                Solicitar Orçamento
              </Button>
              <Button
                onClick={() => scrollToSection("servicos")}
                variant="secondary"
                className="backdrop-blur-sm border-2 hover:bg-white hover:text-sd-dark transition-all"
              >
                Ver Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-sd-orange mb-1">
                  100+
                </div>
                <div className="text-sm text-gray-400">
                  Clientes Satisfeitos
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-sd-orange mb-1">
                  8
                </div>
                <div className="text-sm text-gray-400">Especialidades</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-sd-orange mb-1">
                  5+
                </div>
                <div className="text-sm text-gray-400">Anos Experiência</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-sd-orange/20 to-yellow-500/20 backdrop-blur-sm border border-sd-orange/30 rounded-2xl p-6 transform hover:scale-105 transition-all hover:shadow-xl hover:shadow-sd-orange/30">
                  <div className="w-12 h-12 bg-sd-orange rounded-xl flex items-center justify-center mb-4">
                    <MdElectricBolt className="text-2xl text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Elétrica</h3>
                  <p className="text-gray-400 text-sm">
                    Instalações e reparos profissionais
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 transform hover:scale-105 transition-all hover:shadow-xl hover:shadow-blue-500/30">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <MdPlumbing className="text-2xl text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Hidráulica</h3>
                  <p className="text-gray-400 text-sm">
                    Encanamento e tubulações
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 transform hover:scale-105 transition-all hover:shadow-xl hover:shadow-green-500/30">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                    <MdConstruction className="text-2xl text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Construção</h3>
                  <p className="text-gray-400 text-sm">
                    Reformas e manutenções
                  </p>
                </div>

                {/* Floating Card */}
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 transform hover:scale-105 transition-all hover:shadow-xl hover:shadow-purple-500/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-sd-orange rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm font-semibold">+100 clientes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Avaliação média dos clientes
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-sd-orange text-white rounded-full p-4 shadow-2xl shadow-sd-orange/50 animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs">Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 fill-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
