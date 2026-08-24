import { useState } from "react";
import { Mail, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Section from "./ui/Section";
import { Reveal } from "./ui/Section";
import { email } from "../data/social";

const EMAILJS_SERVICE_ID = "service_hbx4zdw";
const EMAILJS_TEMPLATE_ID = "template_lepcpyq";
const EMAILJS_PUBLIC_KEY = "bb4mToSG2qnLyFG7-";

const contactLinks = [
  { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rameshbanala",
    href: "https://github.com/rameshbanala",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rameshbanala",
    href: "https://linkedin.com/in/rameshbanala",
  },
];

const inputClasses =
  "w-full rounded-lg border border-line bg-ink-900 px-4 py-3 text-sm text-paper placeholder-muted transition-colors focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Ramesh Banala",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          Have an interesting product or engineering problem?
        </h2>
        <p className="mt-4 text-lg text-muted">Let&apos;s talk.</p>
      </Reveal>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal className="space-y-4">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              className="flex items-center gap-4 rounded-xl border border-line bg-ink-800/60 p-4 transition-colors hover:border-accent-500/40"
            >
              <span className="rounded-lg bg-accent-500/10 p-3 text-accent-400">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-xs text-muted">{label}</p>
                <p className="text-sm font-medium text-paper">{value}</p>
              </div>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-line bg-ink-800/60 p-6 sm:p-8"
          >
            {submitStatus && (
              <div
                className={`flex items-center gap-3 rounded-lg p-4 text-sm ${
                  submitStatus === "success"
                    ? "border border-emerald-500/25 bg-emerald-500/10 text-emerald-300"
                    : "border border-red-500/25 bg-red-500/10 text-red-300"
                }`}
                role="status"
              >
                {submitStatus === "success" ? (
                  <CheckCircle size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}
                <span>
                  {submitStatus === "success"
                    ? "Thanks — your message has been sent. I'll get back to you soon."
                    : "Something went wrong sending your message. Please email me directly."}
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-paper-dim">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-paper-dim">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-paper-dim">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="Let's work together"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-paper-dim">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputClasses} resize-none`}
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-500 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
