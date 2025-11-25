import React from 'react';
import { FaBolt, FaHammer, FaTree, FaCouch, FaWrench } from 'react-icons/fa';
import { MdPlumbing, MdCarpenter } from 'react-icons/md';
import { GiWoodBeam } from 'react-icons/gi';
import ServiceCard from './ServiceCard';

function Services() {
  const servicos = [
    {
      icon: <FaBolt className="text-4xl" />,
      title: "Eletricista",
      description: "Instalações e reparos elétricos"
    },
    {
      icon: <MdPlumbing className="text-4xl" />,
      title: "Encanador",
      description: "Hidráulica e tubulações"
    },
    {
      icon: <FaHammer className="text-4xl" />,
      title: "Montador",
      description: "Montagem de móveis"
    },
    {
      icon: <FaWrench className="text-4xl" />,
      title: "Soldador",
      description: "Solda e metalurgia"
    },
    {
      icon: <GiWoodBeam className="text-4xl" />,
      title: "Pedreiro",
      description: "Construção e reformas"
    },
    {
      icon: <MdCarpenter className="text-4xl" />,
      title: "Carpinteiro",
      description: "Trabalhos em madeira"
    },
    {
      icon: <FaTree className="text-4xl" />,
      title: "Jardineiro",
      description: "Cuidados com jardim"
    },
    {
      icon: <FaCouch className="text-4xl" />,
      title: "Gesseiro",
      description: "Acabamento em gesso"
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-sd-dark">
          Nossos Serviços
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos uma ampla gama de serviços profissionais para atender todas as suas necessidades
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((servico, index) => (
            <ServiceCard
              key={index}
              icon={servico.icon}
              title={servico.title}
              description={servico.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
