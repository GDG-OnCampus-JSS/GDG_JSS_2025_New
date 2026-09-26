"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const years = [
  { value: 1, label: "1st" },
  { value: 2, label: "2nd" },
  { value: 3, label: "3rd" },
  { value: 4, label: "4th" },
];

const inputClass =
  "mt-2 h-12 w-full rounded-lg border border-[#DADCE0] bg-white px-4 text-base text-[#202124] outline-none transition-colors placeholder:text-[#9AA0A6] focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/15";
const validEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) && value.trim().length <= 254;

export default function AndroidStudyJamsPage() {
  const [submitting, setSubmitting] = useState(false);
  const reduceMotion = useReducedMotion();
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const [selectedCollege, setSelectedCollege] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [emailTouched, setEmailTouched] = useState(false);

  useEffect(() => {
    if (!registered) return;
    const frame = requestAnimationFrame(() =>
      window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" })
    );
    return () => cancelAnimationFrame(frame);
  }, [registered, reduceMotion]);

  function fieldHint(field: string) {
    return fieldErrors[field] ? (
      <p
        id={`${field}-error`}
        role="alert"
        className="mt-2 w-fit rounded-lg border border-[#E4D8C3] bg-[#FCF8EF] px-3 py-2 text-sm text-[#795528]"
      >
        {fieldErrors[field]}
      </p>
    ) : null;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const errors: Record<string, string> = {};
    if (!String(data.get("name") || "").trim())
      errors.name = "Please enter your full name.";
    const email = form.elements.namedItem("email") as HTMLInputElement;
    if (!validEmail(email.value))
      errors.email = "Please enter a valid email address.";
    if (!data.get("college")) errors.college = "Choose your college.";
    if (!data.get("year")) errors.year = "Choose your year of study.";
    setFieldErrors(errors);
    const firstError = Object.keys(errors)[0];
    if (firstError) {
      form
        .querySelector<HTMLInputElement>(`input[name="${firstError}"]`)
        ?.focus();
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/android-study-jams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          college: data.get("college"),
          year: data.get("year"),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Please try again.");
      setRegistered(true);
      setSelectedYear(null);
      setSelectedCollege("");
      form.reset();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 pt-8 pb-16 font-ProductSans sm:px-8 sm:pt-12 sm:pb-24">
        <Link
          href="/events"
          className="mb-7 inline-flex items-center gap-2 rounded text-sm text-[#5F6368] transition-colors hover:text-[#1A73E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A73E8]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All events
        </Link>

        <div className="overflow-hidden rounded-2xl border border-[#BFD6B4] bg-white shadow-[0_8px_32px_rgba(42,91,51,0.07)]">
          <div className="relative overflow-hidden border-b border-[#A8D696] bg-[#E5F6CE] px-8 py-10 sm:px-14 sm:py-12">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-3 bg-[url('/events/android-study-jams/poster-side.svg')] bg-[length:100%_100%] sm:w-4.5"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-3 bg-[url('/events/android-study-jams/poster-side-right.svg')] bg-[length:100%_100%] sm:w-4.5"
            />
            {/* <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1.5 bg-[#4CAF68]"
            /> */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[url('/events/android-study-jams/grid.svg')] bg-cover bg-center opacity-35"
            />
            <Image
              src="/events/android-study-jams/pixel-plus.svg"
              alt=""
              width={17}
              height={17}
              className="absolute top-10 right-8 opacity-55 sm:right-12"
            />
            <div className="relative">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#CDE2C4] bg-white/70 px-3 py-1.5 font-bold text-[#287044]">
                  Registrations open
                </span>
                <span className="text-[#5F6368]">2026</span>
              </div>
              <h1 className="text-4xl leading-[1.12] font-bold tracking-tight text-[#202124] sm:text-5xl">
                Android
                <br />
                <span className="text-[#287044]">Study Jams</span>
              </h1>
              <p className="mt-4 max-w-sm pr-10 text-base leading-relaxed text-[#565F53] sm:pr-0">
                Learn Android development with us.
              </p>
            </div>
            <Image
              src="/events/android-study-jams/android.svg"
              alt=""
              width={190}
              height={114}
              className="pointer-events-none absolute right-7 bottom-0 h-auto w-20 opacity-75 sm:right-12 sm:w-28"
            />
          </div>

          <section
            className="p-6 sm:p-10"
            aria-labelledby="registration-heading"
          >
            {registered ? (
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="py-10 text-center"
                role="status"
              >
                <CheckCircle2
                  className="mx-auto mb-5 text-[#188038]"
                  size={48}
                  strokeWidth={1.75}
                />
                <h2
                  id="registration-heading"
                  className="text-3xl font-bold text-[#202124]"
                >
                  Thanks for registering!
                </h2>
                <p className="mt-3 text-[#5F6368]">
                  Your registration for Android Study Jams 2026 has been saved.
                </p>
              </motion.div>
            ) : (
              <>
                <h2
                  id="registration-heading"
                  className="text-2xl font-bold text-[#202124]"
                >
                  Register for the jam
                </h2>
                <p className="mt-1 text-sm text-[#5F6368]">
                  All fields are required.
                </p>
                <form
                  noValidate
                  onSubmit={submit}
                  onChange={(event) => {
                    const field = (event.target as HTMLInputElement).name;
                    if (field === "email") return;
                    setFieldErrors((current) => ({ ...current, [field]: "" }));
                  }}
                  className="mt-7 space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="font-medium text-[#202124]"
                    >
                      Full name
                    </label>
                    <input
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={
                        fieldErrors.name ? "name-error" : undefined
                      }
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your first and last name"
                      maxLength={150}
                      className={inputClass}
                      required
                    />
                    {fieldHint("name")}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-medium text-[#202124]"
                    >
                      Email address
                    </label>
                    <input
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={
                        fieldErrors.email ? "email-error" : undefined
                      }
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      maxLength={254}
                      className={inputClass}
                      onBlur={(event) => {
                        setEmailTouched(true);
                        setFieldErrors((current) => ({
                          ...current,
                          email: validEmail(event.target.value)
                            ? ""
                            : "Please enter a valid email address.",
                        }));
                      }}
                      onChange={(event) => {
                        if (!emailTouched) return;
                        setFieldErrors((current) => ({
                          ...current,
                          email: validEmail(event.target.value)
                            ? ""
                            : "Please enter a valid email address.",
                        }));
                      }}
                      required
                    />
                    {fieldHint("email")}
                  </div>
                  <fieldset>
                    <legend className="font-medium text-[#202124]">
                      College
                    </legend>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {["JSSATEN", "JSS University"].map((college) => (
                        <label
                          key={college}
                          className={`flex min-h-12 cursor-pointer items-center justify-center rounded-lg border px-2 text-center text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-[#1A73E8]/30 ${selectedCollege === college ? "border-[#1A73E8] bg-[#E8F0FE] text-[#174EA6]" : "border-[#DADCE0] text-[#3C4043] hover:border-[#1A73E8]"}`}
                        >
                          <input
                            type="radio"
                            name="college"
                            value={college}
                            required
                            checked={selectedCollege === college}
                            onChange={() => setSelectedCollege(college)}
                            aria-describedby={
                              fieldErrors.college ? "college-error" : undefined
                            }
                            className="sr-only"
                          />
                          {college}
                        </label>
                      ))}
                    </div>
                    {fieldHint("college")}
                  </fieldset>
                  <fieldset>
                    <legend className="font-medium text-[#202124]">
                      Year of study
                    </legend>
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                      {years.map((year) => (
                        <label
                          key={year.value}
                          className={`flex h-12 cursor-pointer items-center justify-center rounded-lg border text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-[#1A73E8]/30 ${selectedYear === year.value ? "border-[#1A73E8] bg-[#E8F0FE] text-[#174EA6]" : "border-[#DADCE0] text-[#3C4043] hover:border-[#1A73E8]"}`}
                        >
                          <input
                            type="radio"
                            name="year"
                            value={year.value}
                            required
                            checked={selectedYear === year.value}
                            onChange={() => setSelectedYear(year.value)}
                            aria-describedby={
                              fieldErrors.year
                                ? "year-help year-error"
                                : "year-help"
                            }
                            className="sr-only"
                          />
                          {year.label}
                        </label>
                      ))}
                    </div>
                    {fieldHint("year")}
                  </fieldset>
                  {error && (
                    <p
                      className="rounded-lg bg-[#FCE8E6] px-4 py-3 text-sm text-[#B3261E]"
                      role="alert"
                    >
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1A73E8] px-6 font-medium text-white transition-colors hover:bg-[#1765C1] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                  >
                    {submitting ? "Submitting..." : "Register"}
                    {!submitting && <ArrowRight size={18} />}
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
