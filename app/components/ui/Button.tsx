import Link from "next/link";

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

export function Button({ 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  href,
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium rounded-full cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200 active:scale-95';
  
  const variantStyles = {
    primary: 'bg-primary text-background hover:opacity-95 shadow-sm hover:shadow-md',
    secondary: 'bg-white text-heading uppercase tracking-wider hover:bg-surface-icon shadow-sm hover:shadow-md'
  };

  const sizeStyles = {
    sm: 'text-base leading-tight py-2 px-4',
    md: 'text-base leading-5 py-4 px-6',
    lg: 'text-base leading-5 py-4 px-6 md:px-8'
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  // Jika ada href, render sebagai Link agar bisa navigasi ke anchor
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
