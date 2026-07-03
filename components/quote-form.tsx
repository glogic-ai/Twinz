"use client";

import { useState } from "react";

type QuoteFormValues = {
  name: string;
  email: string;
  phone: string;
  vin: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_year: string;
  services: string;
  notes: string;
};

export default function QuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>({
    name: "",
    email: "",
    phone: "",
    vin: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_year: "",
    services: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function updateField(
    field: keyof QuoteFormValues,
    value: string
  ) {
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
        setLoading(false);
        return;
      }

      setMessage("Quote request submitted successfully.");

      setValues({
        name: "",
        email: "",
        phone: "",
        vin: "",
        vehicle_make: "",
        vehicle_model: "",
        vehicle_year: "",
        services: "",
        notes: "",
      });
    } catch (error) {
      setMessage("Unable to submit quote right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={values.name}
        onChange={(e) => updateField("name", e.target.value)}
        className="w-full rounded border p-3"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={(e) => updateField("email", e.target.value)}
        className="w-full rounded border p-3"
        required
      />

      <input
        type="text"
        placeholder="Phone"
        value={values.phone}
        onChange={(e) => updateField("phone", e.target.value)}
        className="w-full rounded border p-3"
      />

      <input
        type="text"
        placeholder="VIN"
        value={values.vin}
        onChange={(e) => updateField("vin", e.target.value)}
        className="w-full rounded border p-3"
      />

      <input
        type="text"
        placeholder="Vehicle Make"
        value={values.vehicle_make}
        onChange={(e) => updateField("vehicle_make", e.target.value)}
        className="w-full rounded border p-3"
      />

      <input
        type="text"
        placeholder="Vehicle Model"
        value={values.vehicle_model}
        onChange={(e) => updateField("vehicle_model", e.target.value)}
        className="w-full rounded border p-3"
      />

      <input
        type="text"
        placeholder="Vehicle Year"
        value={values.vehicle_year}
        onChange={(e) => updateField("vehicle_year", e.target.value)}
        className="w-full rounded border p-3"
      />

      <input
        type="text"
        placeholder="Requested Services"
        value={values.services}
        onChange={(e) => updateField("services", e.target.value)}
        className="w-full rounded border p-3"
      />

      <textarea
        placeholder="Notes"
        value={values.notes}
        onChange={(e) => updateField("notes", e.target.value)}
        className="w-full rounded border p-3"
        rows={5}
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-black px-6 py-3 text-white disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Quote Request"}
      </button>

      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}