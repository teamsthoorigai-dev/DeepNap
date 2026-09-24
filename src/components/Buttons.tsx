import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const PrimaryButton = ({ href, children, className = "", target, rel, ...props }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary-container text-surface-white font-label-nav text-label-nav font-semibold hover:bg-navy-deep transition-all shadow-sm";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel}>
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

const SecondaryButton = ({ href, children, className = "", target, rel, ...props }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center h-12 px-6 rounded-full bg-transparent text-primary-container font-label-nav text-label-nav font-semibold border-[1.5px] border-primary-container hover:bg-primary-container hover:text-surface-white transition-all";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel}>
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
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-surface-white"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.625 2.952-6.57 6.577-6.57a6.59 6.59 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
      {children || "WhatsApp"}
    </a>
  );
};

export { PrimaryButton, SecondaryButton, WhatsAppButton };
