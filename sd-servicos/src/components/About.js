import React from 'react';
import StatCard from './StatCard';

function About() {
  const stats = [
    { value: '100+', label: 'Clientes Satisfeitos' },
    { value: '8', label: 'Tipos de Serviços' },
    { value: '5+', label: 'Anos de Experiência' },
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-sd-dark">
            Sobre Nós
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              A <span className="font-bold text-sd-orange">SD Serviços e Manutenções</span> é uma empresa especializada em oferecer soluções completas para seu lar e negócio.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Com profissional experiente e qualificado, garantimos serviços de qualidade em diversas áreas como elétrica, hidráulica, construção civil, marcenaria e muito mais.
            </p>
            <p className="text-lg text-gray-700">
              Nossa missão é proporcionar tranquilidade e satisfação aos nossos clientes, realizando cada trabalho com dedicação, pontualidade e excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
