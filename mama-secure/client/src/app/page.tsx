'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import HowItWorksCard from "./components/HowItWorksCard";
import StyledHowItWorksWrapper from "./components/StyledHowItWorksWrapper";
import Lottie from "lottie-react";
import scanAnimation from "@/animations/scan.json";
import trustAnimation from "@/animations/trust.json";
// ✅ Correct version with real Lucide icons
import { ClipboardType, BrainCircuit, ShieldCheck } from "lucide-react";
import ParticleBackground from "./components/ParticleBackground";
import RedesignedTestimonials from "./components/RedesignedTestimonials";







export default function Home() {

  useEffect(() => {
  AOS.init({
    once: true,        // Only animate once
    duration: 800,     // Animation duration
    delay: 100,        // Base delay
    easing: 'ease-in-out'
  });
}, []);

  return (
    <main className="bg-gradient-to-br from-[#0f172a] to-[#000000] text-white font-sans">
      {/* Hero Section */}
      <section className=" min-h-screen   py-28 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1
  className="text-5xl font-bold leading-tight mb-6"
  data-aos="fade-right"
>
  AI-Powered Scam Detection<br />
  <span className="text-green-400">
    For the <span className="glitch" data-glitch="Digital">Digital</span> Age
  </span>
</h1>
            <p className="text-lg text-gray-300 mb-6">
              Paste any message or suspicious link. MamaSecure tells you if it’s a scam — instantly.
            </p>
            <a href="/scanner" className="inline-block px-6 py-3 bg-green-400 text-black font-bold rounded-xl hover:scale-105 transition">
              Start Scanning
            </a>
          </div>
          <div className="mt-10 md:mt-0 w-full max-w-md" data-aos="fade-left">
  <Lottie animationData={scanAnimation} loop className="w-full max-w-xl h-96" />
</div>
        </div>
      </section>

      {/* How It Works Section */}
<StyledHowItWorksWrapper>
  <section className=" bg-[#0b1221] text-white     py-28 px-6 md:px-20">
    <div className="max-w-6xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-10 text-green-400">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 justify-center">
          {[
  {
    title: "Paste Suspicious Content",
    icon: <ClipboardType className="w-8 h-8" />,
    description: "Copy and paste any text or link you find suspicious.",
  },
  {
    title: "AI Analyzes It",
    icon: <BrainCircuit className="w-8 h-8" />,
    description: "Our system scans for scam patterns in real-time.",
  },
  {
    title: "You Get a Scam Risk Result",
    icon: <ShieldCheck className="w-8 h-8" />,
    description: "Instantly see whether it’s safe or dangerous.",
  },

        ].map((card) => (
          <HowItWorksCard
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  </section>
</StyledHowItWorksWrapper>

{/* AI Results Trust Section */}
<section className="py-24 px-6 bg-black/60 backdrop-blur-lg">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Text Block */}
    <div className="bg-[#0f172a]/50 border border-green-400/10 rounded-2xl p-8 shadow-lg backdrop-blur-md transition-all"
  data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-green-400 mb-6 tracking-tight">
        Why Trust <span className="text-white">MamaSecure</span>?
      </h2>
      <ul className="space-y-5 text-lg text-gray-300">
        <li className="flex items-start gap-3">
          <span className="text-green-400 text-xl animate-float">🧠</span>
          <span>94% AI-powered scam detection accuracy</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-400 text-xl animate-float">⚡</span>
          <span>Real-time scanning with lightning speed</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-400 text-xl animate-float">🔍</span>
          <span>Built using verified, constantly updated scam data</span>
        </li>
      </ul>
    </div>

    {/* Animation Block */}
    <div className="bg-[#0f172a]/40 border border-green-400/10 rounded-2xl p-6 shadow-inner backdrop-blur-md">
      <Lottie animationData={trustAnimation} loop className="w-full max-w-xl h-[26rem]" />
    </div>
  </div>
</section>


      {/* Recent Scam Alerts */}
      <section className="py-16 bg-black/60 backdrop-blur-lg">
  <div className="flex flex-wrap justify-center gap-8 text-left">
    {[1, 2, 3].map((i) => (
  <div
    key={i}
    className="relative bg-[#0f172a]/60 backdrop-blur-md p-6 rounded-xl border border-green-400/30 shadow-lg hover:shadow-green-400/40 transition duration-300 hover:scale-[1.03]"
    data-aos="zoom-in"
    data-aos-delay={i * 200}
  >
        <div className="absolute top-2 right-2 text-xs bg-green-400 text-black px-2 py-1 rounded shadow z-10">
          NEW
        </div>
        <h4 className="text-2xl font-bold text-green-300 mb-2">Phishing Email</h4>
        <p className="text-sm text-red-400 mb-1">Risk Level: <strong>High</strong></p>
        <p className="text-gray-400 text-xs">Detected: 2 hours ago</p>
      </div>
    ))}
  </div>
</section>

      {/* Dashboard Sneak Peek */}
      <section className=" bg-[#0f172a]    py-28 px-6 md:px-20">
  <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
    <h2 className="text-4xl font-bold text-green-400 mb-4">
      Your Scam Radar Command Center
    </h2>
    <p className="text-gray-400 max-w-xl mx-auto mb-8">
      Visualize real-time scam trends, threat activity, and detection data — all in one analyst-focused dashboard.
    </p>

    <div className="relative max-w-4xl mx-auto" data-aos="zoom-in">
      {/* Image with blur transition */}
      <img
        src="/dashboard-preview.png"
        alt="Dashboard Preview"
        className="w-full rounded-xl shadow-lg blur-sm hover:blur-none transition duration-500"
      />

      {/* Floating Live Metric: Scam Surge */}
      <div className="absolute top-4 left-4 bg-red-500/90 text-white text-xs px-3 py-1 rounded shadow-lg animate-float-slow z-20">
        Scam Surge: +42%
      </div>

      {/* Floating Metric: Active Threats */}
      <div className="absolute bottom-6 right-8 bg-yellow-400/90 text-black text-xs px-3 py-1 rounded shadow animate-float-slower z-20">
        ⚠️ 187 Active Threats
      </div>

      {/* Floating Tooltip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full bg-white/90 text-black text-[11px] px-2 py-1 rounded shadow-lg animate-pulse-slow z-20">
        Real-Time Monitoring Enabled
      </div>
    </div>

    <a
      href="#"
      className="inline-block mt-10 px-8 py-3 bg-cyan-400 text-black font-bold rounded-xl hover:scale-105 transition"
    >
      Request Analyst Access
    </a>
  </div>
</section>




      {/* Testimonials */}
      <RedesignedTestimonials />


      {/* Join the Mission */}
      <section className="py-28 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">  Join the Mission</h2>
            <p className="text-gray-300 mb-6">MamaSecure is built to empower everyday Nigerians to stay safe.</p>
          </div>
          <form className="bg-[#1a2236] p-6 rounded-lg shadow">
            <input
  type="text"
  aria-label="Your name"
  placeholder="Name"
  className="w-full p-2 mb-4 rounded bg-[#0f172a] text-white"
/>
<input
  type="email"
  aria-label="Your email"
  placeholder="Email"
  className="w-full p-2 mb-4 rounded bg-[#0f172a] text-white"
/>
<textarea
  aria-label="Reason for joining"
  placeholder="Reason for Joining (Optional)"
  className="w-full p-2 mb-4 rounded bg-[#0f172a] text-white"
/>

            <button
  type="submit"
  aria-label="Submit Join Form"
  className="w-full py-2 bg-green-400 text-black font-bold rounded hover:scale-105 transition"
>
  Join Our Mission
</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-center text-gray-400 py-6">
        <p>&copy; 2025 MamaSecure. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-white">Home</a>
          <a href="#" className="mx-2 hover:text-white">How It Works</a>
          <a href="#" className="mx-2 hover:text-white">Contact</a>
          <a href="#" className="mx-2 hover:text-white">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
