import { companyInfo } from "@/data/companyInfo";
import { FiPhoneCall } from "react-icons/fi";

export default function CTAButton({
  label = "Call for a Rapid Quote",
  phoneNumber = companyInfo.phoneNumber,
  size = "md",
  fullWidth = false,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-ember";
  const sizeStyles =
    size === "lg"
      ? "px-6 py-3 text-lg"
      : size === "sm"
      ? "px-3 py-2 text-sm"
      : "px-5 py-2.5";
  const variantStyles =
    variant === "secondary"
      ? "bg-transparent border border-white/40 text-white hover:border-brand-ember hover:text-brand-ember"
      : "bg-brand-ember text-white hover:bg-brand-rust shadow-glow-orange";

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      aria-label={`Call ${companyInfo.name}`}
    >
      <FiPhoneCall className="h-5 w-5" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

