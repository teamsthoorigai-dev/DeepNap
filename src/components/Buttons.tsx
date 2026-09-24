import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({ href, children, className = "", ...props }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary-container text-surface-white font-label-nav text-label-nav font-semibold hover:bg-navy-deep transition-all shadow-sm";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

const SecondaryButton = ({ href, children, className = "", ...props }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center h-12 px-6 rounded-full bg-transparent text-primary-container font-label-nav text-label-nav font-semibold border-[1.5px] border-primary-container hover:bg-primary-container/5 transition-all";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

interface WhatsAppButtonProps extends Omit<ButtonProps, 'href' | 'children'> {
  phoneNumber?: string;
  message?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ 
  phoneNumber = "919600889334", 
  message = "Hello, I would like to get a quote.", 
  children, 
  className = "", 
  ...props 
}: WhatsAppButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 bg-[#25D366] text-surface-white px-5 h-[42px] rounded-full font-label-nav text-label-nav font-medium hover:bg-[#20b958] transition-all shadow-sm";
  const combinedClasses = `${baseClasses} ${className}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className={combinedClasses} 
      target="_blank" 
      rel="noopener noreferrer"
      {...(props as any)}
    >
      <span className="material-symbols-outlined text-[18px]">chat</span>
      {children || "WhatsApp"}
    </a>
  );
};

export { PrimaryButton, SecondaryButton, WhatsAppButton };
