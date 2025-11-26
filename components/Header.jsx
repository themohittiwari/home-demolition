import { useState } from "react";
import Link from "next/link";
import CTAButton from "./CTAButton";
import { companyInfo, navLinks } from "@/data/companyInfo";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="h-12 w-12 rounded-full bg-brand-ember text-slate-950 font-bold flex items-center justify-center">
            TD
          </div>
          <div>
            <p className="text-lg font-semibold">{companyInfo.name}</p>
            <p className="text-xs text-white/70">{companyInfo.tagline}</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
          <CTAButton label={`Call ${companyInfo.phoneDisplay}`} size="sm" />
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <FiX className="h-7 w-7" aria-hidden="true" />
          ) : (
            <FiMenu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95 px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-white/80 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <CTAButton
            label={`Call ${companyInfo.phoneDisplay}`}
            size="md"
            fullWidth
          />
        </div>
      )}
    </header>
  );
}

