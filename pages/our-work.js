import Head from "next/head";
import Gallery from "@/components/Gallery";
import CTAButton from "@/components/CTAButton";
import { companyInfo } from "@/data/companyInfo";
import { projects } from "@/data/projects";

export default function OurWorkPage() {
  return (
    <>
      <Head>
        <title>{`Our Work | ${companyInfo.name}`}</title>
        <meta
          name="description"
          content="Proof of performance from residential demos to large-scale industrial decommissions across India."
        />
      </Head>

      <section className="section-container">
        <p className="text-brand-sand uppercase text-sm tracking-[0.3em]">
          Portfolio
        </p>
        <h1 className="section-heading mt-4">
          Structures we&apos;ve cleared and crews we&apos;ve supported.
        </h1>
        <p className="text-white/70 mt-4 max-w-3xl">
          Explore featured demolitions, selective interior jobs, and
          large-scale decommissions. Every project includes safety
          documentation, environmental compliance, and zero surprise change
          orders.
        </p>
        <div className="mt-6">
          <CTAButton label="Book a site consultation" size="lg" />
        </div>
      </section>

      <section className="section-container pt-0">
        <Gallery projects={projects} />
      </section>

      <section className="section-container">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-brand-ember to-brand-rust p-10 text-slate-950">
          <h2 className="text-3xl font-semibold">
            Ready for a bid package or pre-demo planning session?
          </h2>
          <p className="mt-3 text-lg text-slate-900/80">
            Share plans, structural reports, or permit requirements. We&apos;ll
            return a detailed scope with sequencing timelines and equipment
            schedules.
          </p>
          <div className="mt-6">
            <CTAButton
              label={`Call ${companyInfo.phoneDisplay}`}
              variant="primary"
              size="lg"
              className="bg-slate-950 text-white hover:bg-slate-900"
            />
          </div>
        </div>
      </section>
    </>
  );
}

