import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Card = ({ title, children, index }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 text-white shadow-2xl backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
      <h4 className="text-xl font-semibold">{title}</h4>
      <div className="mt-3 text-white/70">{children}</div>
    </motion.div>
  );
};

const ParallaxShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#07080e] py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_70%_30%,rgba(124,58,237,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 text-white lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Engineered for flow</h2>
          <p className="mt-3 text-white/70">
            Seamless from first question to follow-up. Smooth animations, minimal steps, and delightful microinteractions.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div style={{ y: y1 }}>
            <Card title="Natural chat">
              Ask in your own words. Our model adapts to context and tone, keeping your conversation coherent.
            </Card>
          </motion.div>
          <motion.div style={{ y: y2 }}>
            <Card title="Intelligent guidance">
              Clear next steps, red-flag detection, and suggested follow-ups tailored to your profile.
            </Card>
          </motion.div>
          <motion.div style={{ y: y3 }}>
            <Card title="Continuity of care">
              Securely store transcripts and summaries you can share with your clinician.
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;
