import React from 'react';

function Button({
  children,
  variant = 'primary',
  href = null,
  onClick = null,
  className = '',
  ...props
}) {
  const baseStyles = 'font-bold py-4 px-8 rounded-lg transition transform hover:scale-105';

  const variants = {
    primary: 'bg-sd-orange hover:bg-orange-600 text-white',
    secondary: 'bg-transparent border-2 border-white hover:bg-white hover:text-sd-dark text-white',
    whatsapp: 'bg-green-600 hover:bg-green-700 text-white',
    instagram: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white',
  };

  const styleClass = variants[variant] || variants.primary;
  const fullClass = `${baseStyles} ${styleClass} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={fullClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={fullClass}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
