import Head from "next/head";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import { companyInfo } from "@/data/companyInfo";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact {companyInfo.name}</title>
        <meta
          name="description"
          content="Request demolition pricing, schedule site walks, or talk through urgent tear-outs with Ghar Todo."
        />
      </Head>
      <section className="section-container flex flex-col items-center text-center">
        <p className="text-brand-sand uppercase text-sm tracking-[0.3em]">
          Contact
        </p>
        <h1 className="section-heading mt-4">
          Talk with a demolition specialist any time.
        </h1>
        <p className="text-white/70 mt-4 max-w-3xl">
          We respond to every inquiry within minutes. Include site details and
          we&apos;ll return engineered solutions, budgets, and permit timelines
          the same day.
        </p>
        <div className="mt-8">
          {/* <ContactDetails /> */}
        </div>
      </section>

      <section className="section-container pt-0 gap-12 lg:grid-cols-2 flex justify-center items-center">
        {/* <ContactForm /> */}
        <div className="space-y-6 max-w-md w-full mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Immediate demolition
            </p>
            <h2 className="text-3xl font-semibold mt-3">
              Call us right now for emergency response.
            </h2>
            <p className="text-white/70 mt-4">
              Storm, fire, or structural emergency? Our on-call superintendent
              will confirm crew availability and give you a firm ETA.
            </p>
            <CTAButton
              label={`Call ${companyInfo.phoneDisplay}`}
              size="lg"
              className="mt-6 w-full"
              fullWidth
            />
          </div>

          {/* <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              title="Titan Demolition HQ map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.274018500758!2d-96.82027822359451!3d32.79005358570538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9918b9788ef7%3A0x24f0af8d1b1c6d23!2sDesign%20District%2C%20Dallas%2C%20TX!5e0!3m2!1sen!2sus!4v1708471712345!5m2!1sen!2sus"
              width="100%"
              height="500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div> */}
        </div>
      </section>

      <section className="section-container pt-0">
        <ContactDetails />
      </section>
    </>
  );
}

