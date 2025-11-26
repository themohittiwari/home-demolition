import { companyInfo } from "@/data/companyInfo";

export default function HeroStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3 mt-10">
      {companyInfo.heroStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
        >
          <p className="text-3xl font-semibold text-brand-sand">{stat.value}</p>
          <p className="text-sm uppercase tracking-wide text-white/60 mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

