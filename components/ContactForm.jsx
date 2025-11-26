import Image from "next/image";
import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
};

export default function ContactForm({
  variant = "light",
  showPhoneImage = false,
}) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const isBrand = variant === "brand";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    }, 800);
  };

  const fieldStyles = isBrand
    ? "border-white/20 bg-white/95 text-slate-900"
    : "border-slate-200 bg-white text-slate-900";
  const buttonClasses = isBrand
    ? "bg-white text-brand-ember hover:bg-slate-100 shadow-lg shadow-black/20"
    : "bg-brand-ember text-white hover:bg-brand-rust shadow-lg shadow-brand-ember/30";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-[2.5rem] p-8 shadow-2xl space-y-6 ${
        isBrand
          ? "bg-gradient-to-br from-brand-ember to-brand-rust text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {showPhoneImage && (
        <div className="relative h-36 w-full overflow-hidden rounded-2xl border border-white/30">
          <Image
            src="https://cdn.pixabay.com/photo/2015/09/05/20/02/smartphone-923566_1280.jpg"
            alt="Supervisor on phone scheduling demolition crews"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
        </div>
      )}

      <div>
        <p
          className={`text-sm font-semibold uppercase tracking-wide ${
            isBrand ? "text-white/70" : "text-brand-rust"
          }`}
        >
          Get a same-day callback
        </p>
        <h2
          className={`text-3xl font-semibold mt-2 ${
            isBrand ? "text-white" : "text-slate-900"
          }`}
        >
          Tell us about your site
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {[
          {
            name: "name",
            label: "Contact name",
            type: "text",
            placeholder: "Jordan Hayes",
          },
          {
            name: "phone",
            label: "Phone number",
            type: "tel",
            placeholder: "(555) 123-4567",
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "you@company.com",
          },
        ].map(({ name, label, type, placeholder }) => (
          <label
            key={name}
            className={`text-sm font-medium ${
              isBrand ? "text-white/90" : "text-slate-700"
            }`}
          >
            {label}
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              required={name !== "email"}
              className={`mt-2 w-full rounded-xl border px-4 py-3 placeholder:text-slate-400 focus:border-brand-ember focus:ring-2 focus:ring-brand-ember/40 ${fieldStyles}`}
              placeholder={placeholder}
            />
          </label>
        ))}
        <label
          className={`text-sm font-medium ${
            isBrand ? "text-white/90" : "text-slate-700"
          }`}
        >
          Project type
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            required
            className={`mt-2 w-full rounded-xl border px-4 py-3 focus:border-brand-ember focus:ring-2 focus:ring-brand-ember/40 ${fieldStyles}`}
          >
            <option value="">Select</option>
            <option value="residential">Residential Demolition</option>
            <option value="commercial">Commercial Demo</option>
            <option value="interior">Selective / Interior</option>
            <option value="site">Site Clearing</option>
          </select>
        </label>
      </div>

      <label
        className={`text-sm font-medium block ${
          isBrand ? "text-white/90" : "text-slate-700"
        }`}
      >
        Project details
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className={`mt-2 w-full rounded-xl border px-4 py-3 placeholder:text-slate-400 focus:border-brand-ember focus:ring-2 focus:ring-brand-ember/40 ${fieldStyles}`}
          placeholder="Timeline, square footage, access notes..."
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full rounded-full font-semibold py-3.5 transition-all ${buttonClasses} ${
          status === "sending" ? "opacity-75" : ""
        }`}
      >
        {status === "sent"
          ? "Message sent — we’ll call you shortly"
          : status === "sending"
          ? "Submitting..."
          : "Send my project details"}
      </button>

      <p
        className={`text-xs text-center ${
          isBrand ? "text-white/80" : "text-slate-500"
        }`}
      >
        We reply within minutes. For immediate service call{" "}
        <a
          href="tel:+15554828701"
          className="font-semibold underline-offset-4 hover:underline"
        >
          (555) 482-8701
        </a>
        .
      </p>
    </form>
  );
}

