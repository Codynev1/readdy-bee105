import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://readdy.ai/api/form/dak9c93bcsf0ijchd6sg";

type Status = "idle" | "submitting" | "success" | "error";

type FormResponse = {
  code?: string;
  message?: string;
  meta?: { message?: string; detail?: string };
};

const selections = [
  "HIPAA Compliant image storage",
  "Exchange images with patients and professionals",
  "Reporting and/or custom-built reports",
  "Full featured FDA approved viewer",
  "Complete access from anywhere on any device",
  "Paper scan in documents to DICOM",
  "Anonymize patient data",
  "Manual & Automated routing of studies",
  "QR Code access to studies",
  "DICOM modality worklist",
  "We have High speed internet 1G+",
  "We have an EMR",
];

const interests = [
  "Virtual care solution (telenursing, telesitting, virtual rounds, etc)",
  "Surgical/endoscopic recording into DICOM",
];

export default function PricingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get("website_alt") ?? "").trim();
    if (honeypot) {
      setStatus("success");
      setFormError("");
      form.reset();
      return;
    }
    formData.delete("website_alt");

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        payload.append(key, value);
      }
    });

    setStatus("submitting");
    setFormError("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      const responseText = await response.text();
      let parsed: FormResponse | null = null;
      try {
        parsed = JSON.parse(responseText) as FormResponse;
      } catch {
        parsed = null;
      }

      const serverMessage =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const isSpam = typeof serverMessage === "string" && serverMessage.toLowerCase().includes("spam");

      if (response.ok && parsed?.code === "OK" && !isSpam) {
        setStatus("success");
        setFormError("");
        form.reset();
      } else {
        setStatus("error");
        setFormError(
          typeof serverMessage === "string" && serverMessage
            ? serverMessage
            : "We couldn't send your request. Please review your details and try again.",
        );
      }
    } catch {
      setStatus("error");
      setFormError("We couldn't send your request. Please review your details and try again.");
    }
  };

  const inputClass =
    "w-full rounded-md border border-background-300 bg-background-50 px-3.5 py-2.5 text-sm text-foreground-900 placeholder:text-foreground-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200";
  const labelClass = "text-xs font-semibold text-foreground-700";

  return (
    <form
      id="pricing-quote-form"
      data-readdy-form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-background-200 bg-background-50 p-5 md:p-8"
    >
      <h3 className="font-heading text-lg font-semibold text-foreground-950">Request a Quote</h3>
      <p className="mt-1 text-xs text-foreground-600">TALK TO US ABOUT YOUR NEXT PROJECT</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="pq-first" className={labelClass}>
            First Name *
          </label>
          <input id="pq-first" name="first_name" type="text" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="pq-last" className={labelClass}>
            Last Name *
          </label>
          <input id="pq-last" name="last_name" type="text" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="pq-email" className={labelClass}>
            Email *
          </label>
          <input id="pq-email" name="email" type="email" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="pq-site" className={labelClass}>
            Name of Site
          </label>
          <input id="pq-site" name="site" type="text" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="pq-phone" className={labelClass}>
            Phone
          </label>
          <input id="pq-phone" name="phone" type="tel" className={inputClass} />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="pq-needs" className={labelClass}>
          Briefly Describe Your Needs
        </label>
        <textarea
          id="pq-needs"
          name="needs"
          rows={4}
          maxLength={500}
          className={`${inputClass} resize-none`}
        />
      </div>

      <fieldset className="mt-6">
        <legend className="font-heading text-sm font-semibold text-foreground-900">
          Tell Us More
        </legend>
        <p className="mt-1 text-xs text-foreground-600">Please check any relevant boxes</p>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {selections.map((option, index) => (
            <label key={option} className="flex items-start gap-2 text-xs text-foreground-700">
              <input
                type="checkbox"
                name={`selection_${index + 1}`}
                value={option}
                className="mt-0.5 h-4 w-4 cursor-pointer rounded border-background-300 text-primary-600 focus:ring-primary-300"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="pq-modalities" className={labelClass}>
            We have this many DICOM enabled modalities:
          </label>
          <input id="pq-modalities" name="modalities" type="number" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="pq-locations" className={labelClass}>
            We have this many locations:
          </label>
          <input id="pq-locations" name="locations" type="number" className={inputClass} />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="font-heading text-sm font-semibold text-foreground-900">
          I am interested in:
        </legend>
        <div className="mt-3 space-y-2.5">
          {interests.map((option, index) => (
            <label key={option} className="flex items-start gap-2 text-xs text-foreground-700">
              <input
                type="checkbox"
                name={`interest_${index + 1}`}
                value={option}
                className="mt-0.5 h-4 w-4 cursor-pointer rounded border-background-300 text-primary-600 focus:ring-primary-300"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field-note-aux" aria-hidden="true">
        <label htmlFor="pq-website-alt">Website (leave blank)</label>
        <input
          id="pq-website-alt"
          name="website_alt"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          readOnly
        />
      </div>

      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <i className="ri-loader-4-line animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </button>

        {status === "success" ? (
          <p className="flex items-start gap-2 text-xs font-medium text-primary-700">
            <i className="ri-checkbox-circle-fill text-base" aria-hidden="true" />
            Thanks! Your request has been sent — we will be in touch shortly.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="flex items-start gap-2 text-xs font-medium text-accent-700">
            <i className="ri-error-warning-fill text-base" aria-hidden="true" />
            {formError}
          </p>
        ) : null}
      </div>
    </form>
  );
}