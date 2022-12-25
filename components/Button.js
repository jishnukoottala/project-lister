import React from "react";
import Link from "next/link";

export default function Button({
  children,
  onClick,
  asLink = false,
  href,
  fullWidth,
  variant,
  disabled = false,
}) {
  const getVariants = (variant) => {
    switch (variant) {
      case "secondary":
        return "";

      case "warning":
        return "bg-red-800  hover:bg-red-600";

      default:
        return "bg-[#0067a0] hover:bg-[#0088d3]";
    }
  };

  const variantClassName = getVariants(variant);
  const disabledClassName = disabled
    ? "cursor-not-allowed border border-solid border-red-500"
    : "";

  if (asLink) {
    return (
      <Link
        href={href}
        className="hover:shadow-form hover:underline  rounded-md  py-3 px-8 text-center text-base font-semibold text-blue-900 outline-none"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${getVariants(
        variant
      )} ${disabledClassName} hover:shadow-form rounded-md bg-[#0067a0] py-3 px-8 text-center text-base font-semibold text-white outline-none ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
}
