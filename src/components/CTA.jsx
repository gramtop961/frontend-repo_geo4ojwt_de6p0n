import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="relative overflow-hidden bg-[#07080e] py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_0%,rgba(88,28,235,0.15),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 shadow-2xl backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative">
            <h3 className="text-3xl font-semibold md:text-4xl">
              Ready to experience healthcare, reimagined?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Join the early access list for ChatDokter and be the first to try our AI triage, lab insights, and care guidance.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 sm:flex-row"
            >
              <div className="relative w-full">
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder-white/50 outline-none backdrop-blur-md focus:border-indigo-400"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:w-auto"
              >
                Join waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            <div className="mt-4 text-xs text-white/50">
              We care about your privacy. Unsubscribe anytime.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
