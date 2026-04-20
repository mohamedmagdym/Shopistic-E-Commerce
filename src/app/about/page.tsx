"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "10K+", label: "Products Listed" },
  { value: "6", label: "Categories" },
  { value: "99%", label: "Satisfaction Rate" },
];

const team = [
  {
    name: "Layla Hassan",
    role: "CEO & Co-Founder",
    bio: "Visionary behind ShopSphere, passionate about connecting people with the products they love.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Omar Khaled",
    role: "CTO & Co-Founder",
    bio: "Tech architect who built ShopSphere from the ground up with performance and scale in mind.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nour El-Din",
    role: "Head of Design",
    bio: "Obsessed with pixel-perfect interfaces that make shopping feel effortless and delightful.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sara Mahmoud",
    role: "Head of Operations",
    bio: "Ensures every order, every delivery, and every customer interaction exceeds expectations.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const values = [
  {
    icon: "✦",
    title: "Customer First",
    desc: "Every decision we make starts with one question: does this make life better for our customers?",
  },
  {
    icon: "◈",
    title: "Radical Transparency",
    desc: "No hidden fees, no dark patterns. Just honest pricing and clear communication — always.",
  },
  {
    icon: "⬡",
    title: "Quality Over Quantity",
    desc: "We curate carefully. Every product on ShopSphere earns its place through quality and trust.",
  },
  {
    icon: "⟳",
    title: "Continuous Growth",
    desc: "We never stop improving. Feedback drives us, and iteration is how we get better every day.",
  },
];

function AnimatedCounter({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numeric = parseInt(target.replace(/\D/g, ""));
          const suffix = target.replace(/[0-9]/g, "");
          let current = 0;
          const steps = 60;
          const increment = numeric / steps;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numeric) {
              setDisplay(target);
              clearInterval(timer);
            } else {
              setDisplay(Math.floor(current) + suffix);
            }
          }, 25);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{display}</div>;
}

export default function About() {
  return (
    <main
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      className="bg-[#eef0f4] text-[#1a1a2e] overflow-x-hidden"
    >
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#0f1729]">
        {/* decorative grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#e8a020 1px, transparent 1px), linear-gradient(90deg, #e8a020 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* glow blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-[#e8a020] opacity-10 blur-[120px]" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[380px] h-[380px] rounded-full bg-[#3b5bdb] opacity-15 blur-[120px]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p
            className="text-[#e8a020] uppercase tracking-[0.35em] text-sm mb-6"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            Our Story
          </p>
          <h1
            className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8"
            style={{ letterSpacing: "-0.02em" }}
          >
            We Built Shop{" "}
            <span className="text-[#e8a020]">Sphere</span>
            <br />
            For You.
          </h1>
          <p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Arial', sans-serif", fontWeight: 300 }}
          >
            A marketplace where every product is handpicked, every experience is
            designed with care, and every customer feels at home — from Men's
            Fashion to Baby Toys to Books.
          </p>

          {/* scroll indicator */}
          <div className="mt-14 flex flex-col items-center gap-2 animate-bounce">
            <span
              className="text-gray-500 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-[#e8a020] to-transparent" />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#e8a020] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-[#0f1729] text-4xl md:text-5xl font-bold mb-1"
                style={{ letterSpacing: "-0.03em" }}
              >
                <AnimatedCounter target={s.value} />
              </div>
              <div
                className="text-[#0f1729] text-sm uppercase tracking-widest opacity-70"
                style={{ fontFamily: "'Arial', sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* text */}
          <div>
            <p
              className="text-[#e8a020] uppercase tracking-[0.3em] text-xs mb-5"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              Our Mission
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0f1729] leading-tight mb-7"
              style={{ letterSpacing: "-0.02em" }}
            >
              Shopping that{" "}
              <span className="italic text-[#3b5bdb]">feels human.</span>
            </h2>
            <p
              className="text-gray-600 text-lg leading-relaxed mb-5"
              style={{ fontFamily: "'Arial', sans-serif", fontWeight: 300 }}
            >
              ShopSphere was born from a simple frustration: online shopping
              felt cold, cluttered, and overwhelming. We set out to build
              something different — a place where you discover products that
              genuinely match your lifestyle, not just what an algorithm wants
              to push.
            </p>
            <p
              className="text-gray-600 text-lg leading-relaxed"
              style={{ fontFamily: "'Arial', sans-serif", fontWeight: 300 }}
            >
              From a single laptop in Cairo to a platform serving tens of
              thousands, our mission has never changed: make shopping feel
              personal, joyful, and trustworthy again.
            </p>
          </div>

          {/* visual card */}
          <div className="relative">
            <div className="bg-[#0f1729] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#e8a020] opacity-10 rounded-full blur-3xl" />
              <div
                className="text-[#e8a020] text-6xl font-bold mb-4 leading-none"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                "
              </div>
              <p
                className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-200"
                style={{ fontStyle: "italic" }}
              >
                We didn't just want to sell products. We wanted to build a
                place people actually love coming back to.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Layla Hassan"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#e8a020]"
                />
                <div>
                  <div className="font-semibold text-white">Layla Hassan</div>
                  <div
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: "'Arial', sans-serif" }}
                  >
                    CEO & Co-Founder
                  </div>
                </div>
              </div>
            </div>
            {/* decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#e8a020] rounded-2xl z-[-1]" />
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#0f1729] py-28 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e8a020 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#e8a020] uppercase tracking-[0.3em] text-xs mb-4"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              What Drives Us
            </p>
            <h2
              className="text-white text-4xl md:text-5xl font-bold"
              style={{ letterSpacing: "-0.02em" }}
            >
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-2xl p-8 hover:border-[#e8a020]/50 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="text-[#e8a020] text-3xl mb-5 group-hover:scale-110 transition-transform inline-block">
                  {v.icon}
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {v.title}
                </h3>
                <p
                  className="text-gray-400 leading-relaxed"
                  style={{ fontFamily: "'Arial', sans-serif", fontWeight: 300 }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#e8a020] uppercase tracking-[0.3em] text-xs mb-4"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              The People Behind It
            </p>
            <h2
              className="text-[#0f1729] text-4xl md:text-5xl font-bold"
              style={{ letterSpacing: "-0.02em" }}
            >
              Meet the Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 rounded-2xl object-cover mx-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#e8a020] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <h3 className="text-[#0f1729] text-lg font-bold mb-1">
                  {member.name}
                </h3>
                <p
                  className="text-[#e8a020] text-sm uppercase tracking-wider mb-3"
                  style={{ fontFamily: "'Arial', sans-serif" }}
                >
                  {member.role}
                </p>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  style={{ fontFamily: "'Arial', sans-serif", fontWeight: 300 }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#e8a020] py-20 px-6 text-center">
        <h2
          className="text-[#0f1729] text-4xl md:text-5xl font-bold mb-6"
          style={{ letterSpacing: "-0.02em" }}
        >
          Ready to Explore?
        </h2>
        <p
          className="text-[#0f1729]/70 text-lg mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "'Arial', sans-serif" }}
        >
          Thousands of curated products, one seamless experience. Start
          discovering what ShopSphere has in store for you.
        </p>
        <a
          href="/products"
          className="inline-block bg-[#0f1729] text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-[#1a2a4a] transition-colors duration-200"
          style={{ fontFamily: "'Arial', sans-serif", letterSpacing: "0.05em" }}
        >
          Shop Now →
        </a>
      </section>
    </main>
  );
}
