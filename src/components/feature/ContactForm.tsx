import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

const FORM_ENDPOINT = "https://readdy.ai/api/form/dak99gvh3l9b18n2bsng";

type Status = "idle" | "submitting" | "success" | "error";

type FormResponse = {
  code?: string;
  message?: string;
  meta?: { message?: string; detail?: string };
};

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const roleOptions = t("footer.form.roleOptions", { returnObjects: true }) as string[];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get("contact_alt") ?? "").trim();
    if (honeypot) {
      setStatus("success");
      setFormError("");
      form.reset();
      return;
    }
    formData.delete("contact_alt");

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
          typeof serverMessage === "string" && serverMessage ? serverMessage : t("footer.form.error"),
        );
      }
    } catch {
      setStatus("error");
      setFormError(t("footer.form.error"));
    }
  };

  const inputClass =
    "w-full rounded-md border border-background-300 bg-background-50 px-3.5 py-2.5 text-sm text-foreground-900 placeholder:text-foreground-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200";

  return (
    <form
      id="contact-form"
      data-readdy-form
      onSubmit={handleSubmit}
      className="rounded-lg border border-background-200 bg-background-50 p-5 md:p-6"
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-xs font-semibold text-foreground-700">
            {t("footer.form.name")}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder={t("footer.form.namePlaceholder")}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="text-xs font-semibold text-foreground-700">
            {t("footer.form.email")}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder={t("footer.form.emailPlaceholder")}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-organization" className="text-xs font-semibold text-foreground-700">
            {t("footer.form.organization")}
          </label>
          <input
            id="cf-organization"
            name="organization"
            type="text"
            placeholder={t("footer.form.organizationPlaceholder")}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-role" className="text-xs font-semibold text-foreground-700">
            {t("footer.form.role")}
          </label>
          <select id="cf-role" name="role" defaultValue="" className={inputClass}>
            <option value="" disabled>
              {t("footer.form.role")}
            </option>
            {roleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-xs font-semibold text-foreground-700">
          {t("footer.form.message")}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          maxLength={500}
          required
          placeholder={t("footer.form.messagePlaceholder")}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="field-note-aux" aria-hidden="true">
        <label htmlFor="cf-contact-alt">{t("footer.form.honeypotLabel")}</label>
        <input
          id="cf-contact-alt"
          name="contact_alt"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          readOnly
        />
      </div>

      <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <i className="ri-loader-4-line animate-spin" aria-hidden="true" />
              {t("footer.form.sending")}
            </>
          ) : (
            <>
              {t("footer.form.submit")}
              <i className="ri-send-plane-line" aria-hidden="true" />
            </>
          )}
        </button>

        {status === "success" ? (
          <p className="flex items-start gap-2 text-xs font-medium text-primary-700">
            <i className="ri-checkbox-circle-fill text-base" aria-hidden="true" />
            {t("footer.form.success")}
          </p>
        ) : null}

        {status === "error" ? (
          <p className="flex items-start gap-2 text-xs font-medium text-accent-700">
            <i className="ri-error-warning-fill text-base" aria-hidden="true" />
            {formError || t("footer.form.error")}
          </p>
        ) : null}
      </div>
    </form>
  );
}