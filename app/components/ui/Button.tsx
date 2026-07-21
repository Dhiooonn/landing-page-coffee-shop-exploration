import React from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-sans font-medium rounded-full';
  
  const variantStyles = {
    primary: 'bg-primary text-background hover:opacity-90 transition-opacity',
    secondary: 'bg-white text-heading uppercase tracking-wider hover:bg-surface-icon transition-colors duration-300'
  };

  const sizeStyles = {
    sm: 'text-base leading-tight py-2 px-4',
    md: 'text-base leading-5 py-4 px-6',
    lg: 'text-base leading-5 py-4 px-8'
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
