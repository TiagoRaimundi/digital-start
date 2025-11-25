import React from 'react';

function ContactCard({ icon: Icon, href, title, subtitle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 p-6 rounded-lg transition transform hover:scale-105"
    >
      {Icon && <Icon className="text-4xl flex-shrink-0" />}
      <div>
        <div className="font-bold text-lg">{title}</div>
        <div className="text-gray-200">{subtitle}</div>
      </div>
    </a>
  );
}

export default ContactCard;
