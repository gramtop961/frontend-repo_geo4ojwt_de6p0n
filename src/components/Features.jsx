import React from 'react';
import { Stethoscope, HeartPulse, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Symptom Triage',
    desc: 'Describe what you feel. Get safe, structured guidance and likely causes in seconds.',
    glow: 'from-violet-500/30 to-blue-500/20',
  },
  {
    icon: HeartPulse,
    title: 'Lab Insight',
    desc: 'Upload labs and receive plain-language explanations with actionable next steps.',
    glow: 'from-cyan-400/30 to-indigo-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy First',
    desc: 'End-to-end encryption in transit, data minimization by default, and access controls.',
    glow: 'from-indigo-400/30 to-fuchsia-500/20',
  },
  {
    icon: Sparkles,
    title: 'Human Clarity',
    desc: 'Answers tailored to your tone and health literacy level. No jargon, just help.',
    glow: 'from-purple-400/30 to-blue-500/20',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#080910] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_350px_at_20%_20%,rgba(104,64,255,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_70%,rgba(0,180,255,0.15),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Built for care. Designed for trust.</h2>
          <p className="mt-4 text-white/70">
            ChatDokter blends medical-grade reasoning with delightful UX to guide you from question to clarity.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc, glow }, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-transform hover:scale-[1.02]"
            >
              <div className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${glow} blur-3xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
