import { companyInfo } from "@/data/companyInfo";

const detailList = [
  {
    label: "Main Line",
    value: companyInfo.phoneDisplay,
    href: `tel:${companyInfo.phoneNumber}`,
  },
  {
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    label: "HQ Address",
    value: companyInfo.address,
  },
  {
    label: "Service Hours",
    value: companyInfo.hours,
  },
];

export default function ContactDetails({ variant = "dark" }) {
  const isDark = variant === "dark";
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl p-6 border ${
        isDark
          ? "bg-white/5 border-white/10 text-white"
          : "bg-white shadow-xl text-slate-900 border-transparent"
      }`}
    >
      {detailList.map((item) => (
        <div key={item.label}>
          <p
            className={`text-sm uppercase tracking-wide ${
              isDark ? "text-white/60" : "text-slate-500"
            }`}
          >
            {item.label}
          </p>
          {item.href ? (
            <a
              href={item.href}
              className={`mt-1 block text-lg font-semibold ${
                isDark ? "text-white hover:text-brand-ember" : "text-brand-steel"
              }`}
            >
              {item.value}
            </a>
          ) : (
            <p className="mt-1 text-lg font-semibold">{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}

