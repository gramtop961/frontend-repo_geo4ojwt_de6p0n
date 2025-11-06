import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0a0b12] via-[#0b0f1f] to-[#0a0b12] text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_30%,rgba(94,58,255,0.35),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_85%_60%,rgba(0,212,255,0.2),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pt-24 pb-16 md:flex-row md:items-center md:pt-28 lg:px-12">
        <div className="w-full max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm backdrop-blur-md">
            <Shield className="h-4 w-4 text-cyan-300" />
            HIPAA-conscious. Always-on. Private by design.
          </div>
          <h1 className="mt-6 font-['IBM_Plex_Sans'] text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Meet <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">ChatDokter</span>
            <br />
            Your AI healthcare copilot
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Instantly triage symptoms, understand lab results, and get actionable next steps. Built with cutting-edge medical AI and human-grade clarity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              Get Early Access
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition-colors hover:bg-white/10"
            >
              <Brain className="h-4 w-4" />
              Explore Features
            </a>
          </div>
        </div>

        {/* Right side floating stat card */}
        <div className="mt-16 w-full md:mt-0 md:flex md:justify-end">
          <div className="relative w-full max-w-md">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/70">Average response time</div>
                <div className="text-xs text-emerald-300">real-time</div>
              </div>
              <div className="mt-2 text-4xl font-semibold">2.3s</div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-white/60">Languages</div>
                  <div className="text-lg font-medium">50+</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-white/60">Coverage</div>
                  <div className="text-lg font-medium">24/7</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-white/60">Satisfaction</div>
                  <div className="text-lg font-medium">98%</div>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="mt-6 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400" />
                <div>
                  <div className="text-sm font-medium">Clinical-grade insights</div>
                  <div className="text-xs text-white/60">Grounded by medical guidelines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
