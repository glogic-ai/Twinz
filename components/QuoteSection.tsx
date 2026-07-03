"use client";

import { useState } from "react";

type QuoteFormValues = {
  name: string;
  phone: string;
  service_needed: string;
  project_details: string;
};

export default function QuoteSection() {
  const [values, setValues] = useState<QuoteFormValues>({
    name: "",
    phone: "",
    service_needed: "",
    project_details: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function updateField(field: keyof QuoteFormValues, value: string) {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        setMessage(json.error || "Something went wrong.");
        return;
      }

      setMessage("Quote request submitted successfully.");

      setValues({
        name: "",
        phone: "",
        service_needed: "",
        project_details: "",
      });
    } catch (error) {
      setMessage("Unable to submit quote right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="quote" className="w-full px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-6 text-white shadow-xl backdrop-blur md:p-8">
        <div className="mb-8">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-red-400">
            Lead capture
          </p>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Request a Quote
          </h2>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">
            Make it easy to ask for a quote in under a minute.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-white/60">
            This section now connects to Supabase so every request can be saved
            and reviewed later.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/90">
              Name
            </label>
            <input
              type="text"
              value={values.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-red-400"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/90">
              Phone
            </label>
            <input
              type="tel"
              value={values.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="Your phone number"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-red-400"
              required
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-white/90">
              Service Needed
            </label>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Window Tint",
                "Vinyl Wrap",
                "Commercial Graphics",
                "Not Sure Yet",
              ].map((service) => (
                <label
                  key={service}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                    values.service_needed === service
                      ? "border-red-400 bg-red-500/10 text-white"
                      : "border-white/15 bg-white/5 text-white/80 hover:border-white/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="service_needed"
                    value={service}
                    checked={values.service_needed === service}
                    onChange={(e) =>
                      updateField("service_needed", e.target.value)
                    }
                    className="h-4 w-4 accent-red-500"
                    required
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/90">
              Project Details
            </label>
            <textarea
              value={values.project_details}
              onChange={(e) => updateField("project_details", e.target.value)}
              placeholder="Tell us about the project, vehicle, goals, or timeline."
              rows={5}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-red-400"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Quote Request"}
            </button>
          </div>

          {message && <p className="text-sm text-white/80">{message}</p>}
        </form>
      </div>
    </section>
  );
}