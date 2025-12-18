import React from "react";

const variants = {
  outlined:
    "md:min-w-[140px] bg-transparent px-5 py-3 text-[13px] border border-[#2F80C9] rounded-[32px] outline-none text-[#2F80C9] font-semibold",
  contained:
    "md:min-w-[140px] bg-[#2F80C9] px-5 py-3 text-[13px] border border-[#2F80C9] outline-none rounded-[32px] text-white font-semibold",
};

const Button = ({
  children,
  variant = "contained",
  className = "",
  onClick,
  ...props
}) => {
  const variantClass = variants[variant] || variants.contained;

  return (
    <button
      className={`${variantClass} ${className} `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
