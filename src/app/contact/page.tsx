"use client";
 
import { useState, useRef, MouseEvent } from "react";
 
const contactMethods = [
  {
    icon: "✉",
    label: "Email Us",
    value: "hello@shopsphere.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: "✆",
    label: "Call Us",
    value: "+20 100 123 4567",
    sub: "Sun – Thu, 9am – 6pm",
  },
  {
    icon: "⌖",
    label: "Visit Us",
    value: "Cairo, Egypt",
    sub: "New Cairo, 5th Settlement",
  },
];
 
const faqs = [
  {
    q: "How long does delivery take?",
    a: "Standard delivery is 2–5 business days. Express is next day.",
  },
  {
    q: "Can I return a product?",
    a: "Yes — free returns within 14 days of receiving your order.",
  },
  {
    q: "How do I track my order?",
    a: "You'll get a tracking link by email once your order ships.",
  },
  {
    q: "Do you ship outside Egypt?",
    a: "We're working on it! International shipping is coming soon.",
  },
];
 
// ✅ FIX: added onClick to props so the Send button actually works
function MagneticButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
 
  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
 
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };
 
  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      style={{ transition: "transform 0.2s cubic-bezier(0.23,1,0.32,1)" }}
    >
      {children}
    </button>
  );
}
 
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });
 
  // ✅ FIX: correct event type matching MagneticButton's onClick signature
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };
 
  return (
    <main
      className="min-h-screen bg-[#eef0f4] overflow-x-hidden"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* ══ HERO STRIP ══ */}
      <section className="relative bg-[#0f1729] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#e8a020]/20 to-transparent"
              style={{
                top: `${10 + i * 12}%`,
                left: "-10%",
                right: "-10%",
                transform: `rotate(-8deg)`,
              }}
            />
          ))}
        </div>
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#e8a020] opacity-5 rounded-full blur-[140px]" />
        <div className="absolute left-[-100px] bottom-[-100px] w-[400px] h-[400px] bg-[#3b5bdb] opacity-10 rounded-full blur-[120px]" />
 
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 flex flex-col md:flex-row items-end justify-between gap-10">
          <div>
            <p
              className="text-[#e8a020] text-xs uppercase tracking-[0.4em] mb-5"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              Get in Touch
            </p>
            <h1
              className="text-white font-bold leading-[0.95] mb-0"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Let&apos;s
              <br />
              {/* ✅ FIX: escaped apostrophe for Next.js */}
              <span
                className="text-[#e8a020]"
                style={{ WebkitTextStroke: "2px #e8a020", color: "transparent" }}
              >
                Talk.
              </span>
            </h1>
          </div>
          <p
            className="text-gray-400 text-lg max-w-sm leading-relaxed mb-2"
            style={{ fontFamily: "'Arial', sans-serif", fontWeight: 300 }}
          >
            Whether it&apos;s a question about your order, a partnership idea, or
            just saying hello — we&apos;re all ears.
          </p>
        </div>
 
        <div className="border-t border-white/5 overflow-hidden">
          <div
            className="flex gap-12 py-3 text-white/20 text-sm uppercase tracking-widest whitespace-nowrap"
            style={{
              fontFamily: "'Arial', sans-serif",
              animation: "ticker 18s linear infinite",
            }}
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex gap-12">
                <span>Fast Replies</span>
                <span className="text-[#e8a020]">✦</span>
                <span>Free Returns</span>
                <span className="text-[#e8a020]">✦</span>
                <span>24/7 Support</span>
                <span className="text-[#e8a020]">✦</span>
              </span>
            ))}
          </div>
        </div>
 
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
 
      {/* ══ SPLIT: FORM + INFO ══ */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
 
        {/* ── FORM SIDE ── */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#e8a020]/8 rounded-bl-[80px]" />
          <div className="absolute top-4 right-4 w-3 h-3 bg-[#e8a020] rounded-full" />
 
          {!sent ? (
            <>
              <h2
                className="text-[#0f1729] text-3xl md:text-4xl font-bold mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                Send a Message
              </h2>
              <p
                className="text-gray-400 mb-10 text-sm"
                style={{ fontFamily: "'Arial', sans-serif" }}
              >
                Fill in the form — we&apos;ll get back to you within 24 hours.
              </p>
 
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${
                      focused === "name" || form.name
                        ? "-top-2.5 text-[10px] text-[#e8a020] bg-white px-1"
                        : "top-3.5 text-gray-400"
                    }`}
                    style={{ fontFamily: "'Arial', sans-serif" }}
                  >
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 pt-4 pb-3 text-[#0f1729] outline-none focus:border-[#e8a020] transition-colors duration-200 text-sm"
                    style={{ fontFamily: "'Arial', sans-serif" }}
                  />
                </div>
 
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${
                      focused === "email" || form.email
                        ? "-top-2.5 text-[10px] text-[#e8a020] bg-white px-1"
                        : "top-3.5 text-gray-400"
                    }`}
                    style={{ fontFamily: "'Arial', sans-serif" }}
                  >
                    Email Address *
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 pt-4 pb-3 text-[#0f1729] outline-none focus:border-[#e8a020] transition-colors duration-200 text-sm"
                    style={{ fontFamily: "'Arial', sans-serif" }}
                  />
                </div>
              </div>
 
              <div className="relative mb-5">
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3.5 text-[#0f1729] outline-none focus:border-[#e8a020] transition-colors duration-200 text-sm appearance-none bg-white"
                  style={{ fontFamily: "'Arial', sans-serif" }}
                >
                  <option value="">Select a topic…</option>
                  <option>Order Issue</option>
                  <option>Return &amp; Refund</option>
                  {/* ✅ FIX: & escaped as &amp; */}
                  <option>Product Question</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  ▾
                </div>
              </div>
 
              <div className="relative mb-8">
                <label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${
                    focused === "message" || form.message
                      ? "-top-2.5 text-[10px] text-[#e8a020] bg-white px-1"
                      : "top-3.5 text-gray-400"
                  }`}
                  style={{ fontFamily: "'Arial', sans-serif" }}
                >
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 pt-5 pb-3 text-[#0f1729] outline-none focus:border-[#e8a020] transition-colors duration-200 text-sm resize-none"
                  style={{ fontFamily: "'Arial', sans-serif" }}
                />
              </div>
 
              <MagneticButton
                className="w-full bg-[#0f1729] text-white py-4 rounded-2xl font-semibold text-base hover:bg-[#e8a020] hover:text-[#0f1729] transition-colors duration-300 relative overflow-hidden group"
                onClick={handleSubmit}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message
                  <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    →
                  </span>
                </span>
              </MagneticButton>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-[#e8a020]/15 flex items-center justify-center mb-6 text-4xl">
                ✓
              </div>
              <h3
                className="text-[#0f1729] text-3xl font-bold mb-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                Message Sent!
              </h3>
              <p
                className="text-gray-500 text-base max-w-xs leading-relaxed mb-8"
                style={{ fontFamily: "'Arial', sans-serif" }}
              >
                Thanks {form.name}! We&apos;ll be in touch at{" "}
                <span className="text-[#e8a020]">{form.email}</span> within 24
                hours.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
                className="text-sm text-gray-400 underline underline-offset-4 hover:text-[#0f1729] transition-colors"
                style={{ fontFamily: "'Arial', sans-serif" }}
              >
                Send another message
              </button>
            </div>
          )}
        </div>
 
        {/* ── INFO SIDE ── */}
        <div className="flex flex-col gap-6">
          {contactMethods.map((c, i) => (
            <div
              key={i}
              className="bg-[#0f1729] rounded-2xl p-7 flex items-start gap-5 group hover:bg-[#1a2a4a] transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#e8a020] opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-[#e8a020]/10 border border-[#e8a020]/20 flex items-center justify-center text-[#e8a020] text-xl flex-shrink-0 group-hover:bg-[#e8a020]/20 transition-colors duration-300">
                {c.icon}
              </div>
              <div>
                <p
                  className="text-gray-500 text-xs uppercase tracking-widest mb-1"
                  style={{ fontFamily: "'Arial', sans-serif" }}
                >
                  {c.label}
                </p>
                <p className="text-white text-base font-semibold mb-0.5">
                  {c.value}
                </p>
                <p
                  className="text-gray-500 text-xs"
                  style={{ fontFamily: "'Arial', sans-serif" }}
                >
                  {c.sub}
                </p>
              </div>
            </div>
          ))}
 
          <div className="bg-[#e8a020] rounded-2xl p-7 relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white opacity-10 rounded-full" />
            <p
              className="text-[#0f1729] text-xs uppercase tracking-widest mb-2"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              Average Response
            </p>
            <p
              className="text-[#0f1729] text-5xl font-bold leading-none mb-2"
              style={{ letterSpacing: "-0.04em" }}
            >
              &lt; 2h
            </p>
            <p
              className="text-[#0f1729]/60 text-sm"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              During business hours, we usually reply in under 2 hours.
            </p>
          </div>
        </div>
      </section>
 
      {/* ══ FAQ ══ */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
          <div>
            <p
              className="text-[#e8a020] text-xs uppercase tracking-[0.4em] mb-3"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              Quick Answers
            </p>
            <h2
              className="text-[#0f1729] text-4xl md:text-5xl font-bold leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Common
              <br />
              Questions
            </h2>
          </div>
          <p
            className="text-gray-400 max-w-sm md:mb-2 text-sm leading-relaxed"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            Can&apos;t find what you&apos;re looking for? Use the form above — we&apos;ll answer anything.
          </p>
        </div>
 
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                openFaq === i
                  ? "border-[#e8a020] bg-[#0f1729]"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="p-6 flex items-center justify-between gap-4">
                <p
                  className={`font-semibold text-base transition-colors duration-200 ${
                    openFaq === i ? "text-white" : "text-[#0f1729]"
                  }`}
                >
                  {faq.q}
                </p>
                <span
                  className={`text-xl flex-shrink-0 transition-all duration-300 ${
                    openFaq === i
                      ? "text-[#e8a020] rotate-45"
                      : "text-gray-400"
                  }`}
                >
                  +
                </span>
              </div>
              {openFaq === i && (
                <div className="px-6 pb-6">
                  <p
                    className="text-gray-400 text-sm leading-relaxed"
                    style={{ fontFamily: "'Arial', sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
 
      {/* ══ BOTTOM STRIP ══ */}
      <section className="bg-[#0f1729] py-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #e8a020 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10">
          <p
            className="text-[#e8a020] text-xs uppercase tracking-[0.4em] mb-4"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            Based in
          </p>
          <h3
            className="text-white text-3xl md:text-4xl font-bold mb-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Cairo, Egypt 🇪🇬
          </h3>
          <p
            className="text-gray-500 text-sm"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            New Cairo, 5th Settlement — shipping across Egypt &amp; beyond
          </p>
        </div>
      </section>
    </main>
  );
}