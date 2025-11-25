import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import ContactCard from './ContactCard';

function Contact({ phoneNumber, phoneFormatted = '(49) 99172-5327' }) {
  const contactWhatsappUrl = `https://wa.me/${phoneNumber}`;
  const contactInstagramUrl = 'https://instagram.com/sd.servicosemanutencoes';

  return (
    <section id="contato" className="py-20 bg-sd-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Entre em Contato
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Solicite um orçamento sem compromisso
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="space-y-6">
              <ContactCard
                icon={FaWhatsapp}
                href={contactWhatsappUrl}
                title="WhatsApp"
                subtitle={phoneFormatted}
              />
              <ContactCard
                icon={FaInstagram}
                href={contactInstagramUrl}
                title="Instagram"
                subtitle="@sd.servicosemanutencoes"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">Horário de Atendimento</p>
              <p className="text-white font-bold">Segunda a Sábado: 8h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
