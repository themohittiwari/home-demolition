import Head from "next/head";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import HeroStats from "@/components/HeroStats";
import ServiceCard from "@/components/ServiceCard";
import { companyInfo } from "@/data/companyInfo";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { FiArrowRight, FiArrowUpRight , FiPhoneCall} from "react-icons/fi";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>{companyInfo.name} | Demolition & Site Services</title>
        <meta
          name="description"
          content="Full-service residential and commercial demolition across Texas with rapid response and white-glove project management."
        />
      </Head>

      <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="section-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-brand-sand uppercase text-sm tracking-[0.3em]">
              Demolition & Site Prep
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-6">
              Safe, clean demolition crews that pick up on the first ring.
            </h1>
            <p className="text-lg text-white/70 mt-6 max-w-2xl">
              We mobilize licensed demo specialists, engineers, and hauling
              partners in under 24 hours so your project never waits for site
              prep. Transparent budgets, daily reporting, and zero surprises.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton label={`Call ${companyInfo.phoneDisplay}`} size="lg" />
              <a
                href="#services"
                className="inline-flex items-center font-semibold text-white/80 hover:text-brand-sand"
              > 
                View services
                <FiArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            <HeroStats />
          </div>

          <div className="relative">
            <div className="relative h-[28rem] rounded-[2.5rem] overflow-hidden border border-white/10">
              <Image
                src="/images/HeroStats.jpg"
                alt="Excavators breaking down a house"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur rounded-2xl p-4">
                <p className="text-sm text-white/70">Average response time</p>
                <p className="text-3xl font-semibold text-white">15 minutes</p>
                <p className="text-xs text-white/60 mt-1">
                  Dispatchers on call 24/7
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-6 w-48 rounded-2xl bg-white/10 p-4 border border-white/15">
              <p className="text-xs uppercase tracking-wide text-white/60">
                Service Areas
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white">
                {companyInfo.serviceAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-ember" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="section-container" id="services">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-brand-sand uppercase text-sm tracking-[0.3em]">
              Services
            </p>
            <h2 className="section-heading">Everything your site needs</h2>
            <p className="text-white/70 mt-3 max-w-2xl">
              One call covers surveys, permits, demo, abatement coordination,
              and recycling manifests. Your superintendent gets a daily report
              before 6 AM.
            </p>
          </div>
          <CTAButton label="Schedule a walkthrough" variant="secondary" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="section-container pt-0">
        <ContactDetails />
      </section>

      <section className="section-container grid gap-10 lg:grid-cols-2 ">
        <div className="space-y-6">
          <p className="text-brand-sand uppercase text-sm tracking-[0.3em]">
            Why builders trust us
          </p>
          <h2 className="section-heading">
            Turn-key demolition with project managers on-site daily.
          </h2>
          <ul className="space-y-4">
            {[
              "Dedicated PM with live photo updates and daily safety logs.",
              "In-house fleet of excavators, high-reach, hydro-vacs, and roll-offs.",
              "Environmental compliance team handles notifications and air monitoring.",
              "Flexible phasing for occupied sites and night/weekend windows.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-white/75">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-ember" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
      <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white gap-6">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand-ember text-white shadow-glow-orange">
            <FiPhoneCall className="h-12 w-12" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Call dispatch
            </p>
             <a
               href={`tel:${companyInfo.phoneNumber}`}
               className="text-3xl font-semibold mt-2 hover:text-brand-sand transition "
             >
               {companyInfo.phoneDisplay}
             </a>
            <p className="text-white/70 mt-3">
              Rapid-response coordinators answer in under 15 minutes.
            </p>
          </div>
          <CTAButton
            label="Tap to call now"
            size="md"
            fullWidth
            />
        </div>
      </section>

      <section className="section-container" id="our-work">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-brand-sand uppercase text-sm tracking-[0.3em]">
              Our Work
            </p>
            <h2 className="section-heading">Recent clears & success stories</h2>
            <p className="text-white/70 mt-3 max-w-2xl">
              Browse a few of the 1,200+ structures we&apos;ve safely brought
              down for builders, municipalities, and real estate groups across
              Ayodha Bypass and Shahpura.
            </p>
          </div>
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-brand-sand font-semibold hover:text-white"
          >
            View full gallery
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <Gallery projects={projects.slice(0, 3)} showFilters={false} />
      </section>

      {/* <section className="section-container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="text-brand-sand uppercase text-sm tracking-[0.3em]">
              Visit our yard
            </p>
            <h2 className="section-heading">
              Walk through equipment, meet the crew, plan your next mobilization.
            </h2>
            <p className="text-white/70">
              Our operations center features a full fabrication shop, training
              bay, and fleet staging. Drop by or schedule a pre-bid meeting.
            </p>
            <ContactDetails variant="light" />
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            
          </div>
        </div>
      </section> */}
    </>
  );
}