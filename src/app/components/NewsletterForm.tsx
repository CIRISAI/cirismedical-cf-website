"use client";

import { useState, useTransition } from "react";
import LogoIcon from "./ui/floating/LogoIcon";
import FadeInwrapper from "./ui/fadeInwrapper";
import CButton from "./Buttons";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      setIsSuccess(false);
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("https://api.brevo.com/v3/contacts", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY || "",
          },
          body: JSON.stringify({
            email: email.toLowerCase().trim(),
            attributes: {
              FIRSTNAME: "",
              LASTNAME: "",
              SOURCE: "Website Newsletter",
              SIGNUP_DATE: new Date().toISOString(),
            },
            listIds: [parseInt(process.env.NEXT_PUBLIC_BREVO_LIST_ID || "1")],
            updateEnabled: true,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (
            response.status === 400 &&
            data.message?.includes("already exists")
          ) {
            setMessage("You are already subscribed to our newsletter!");
            setIsSuccess(true);
          } else {
            throw new Error(
              data.message || `HTTP error! status: ${response.status}`,
            );
          }
        } else {
          setMessage("Successfully subscribed to our newsletter!");
          setIsSuccess(true);
          setEmail(""); // Clear form on success
        }
      } catch (error) {
        console.error("Newsletter subscription error:", error);
        setMessage("Something went wrong. Please try again later.");
        setIsSuccess(false);
      }
    });
  };

  return (
    <div className="bg-white *:py-16 sm:py-24 dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-sm sm:px-24 xl:py-32">
          <FadeInwrapper delay={0.5}>
            <div className="flex justify-center opacity-0">
              <LogoIcon className="fill-brand-primary h-8 w-8 object-contain" />
            </div>
          </FadeInwrapper>

          <FadeInwrapper delay={1}>
            <div className="flex justify-center opacity-0">
              <h2 className="text-brand-primary mx-auto max-w-3xl text-center text-4xl tracking-tight sm:text-5xl">
                Start a Conversation
              </h2>
            </div>
          </FadeInwrapper>

          <FadeInwrapper delay={1}>
            <div className="flex-col justify-center opacity-0">
              <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
                Hospital networks, government health agencies, NGOs - we're ready to discuss your deployment.
                Or subscribe for updates on open source medical AI.
              </p>

              <div className="mx-auto mt-8 flex justify-center">
                <a
                  href="mailto:info@ciris.ai"
                  className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email info@ciris.ai
                </a>
              </div>

              <p className="mx-auto mt-8 text-center text-sm text-gray-400">
                Or subscribe for updates:
              </p>

              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-4 flex max-w-md"
              >
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  disabled={isPending}
                  className="min-w-0 flex-auto bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white disabled:opacity-50 sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="flex-none"
                  disabled={isPending}
                >
                  <CButton
                    text={isPending ? "Subscribing..." : "Notify me"}
                    variant="primary"
                  />
                </button>
              </form>

              {message && (
                <div
                  className={`mx-auto mt-4 max-w-md text-center text-sm ${
                    isSuccess ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </FadeInwrapper>

          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                r={1}
                cx={0}
                cy={0}
                id="759c1415-0410-454c-8f7c-9a820de03641"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="var(--color-brand-primary)" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
