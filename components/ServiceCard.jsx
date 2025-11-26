import Image from "next/image";
import CTAButton from "./CTAButton";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col">
      <div className="relative h-56">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <p className="text-sm uppercase tracking-wide text-brand-sand/80">
            Core Service
          </p>
          <h3 className="text-2xl font-semibold text-white mt-1">
            {service.title}
          </h3>
          <p className="text-white/70 mt-3">{service.description}</p>
        </div>

        <ul className="space-y-2 text-white/80 text-sm">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-ember" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <CTAButton label="Request a site walk" size="sm" />
      </div>
    </div>
  );
}

