import Link from "next/link";
import { companyInfo, navLinks } from "@/data/companyInfo";
import CTAButton from "./CTAButton";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{companyInfo.name}</p>
          <p className="text-white/70 mt-3 max-w-sm">{companyInfo.tagline}</p>
          <p className="mt-4 text-sm text-white/60">{companyInfo.license}</p>
          <CTAButton
            label={`Call ${companyInfo.phoneDisplay}`}
            size="sm"
            fullWidth={false}
            className="mt-6"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-brand-ember transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Contact
          </p>
          <div className="mt-4 space-y-2 text-white/80">
            <a href={`tel:${companyInfo.phoneNumber}`} className="block">
              {companyInfo.phoneDisplay}
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="block hover:text-brand-ember"
            >
              {companyInfo.email}
            </a>
            <p>{companyInfo.address}</p>
            <p>{companyInfo.hours}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}

