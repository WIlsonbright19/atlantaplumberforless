import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onScrollToTreatments: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onScrollToTreatments,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image of professional plumbing service */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/85 via-[#0A2540]/75 to-[#0A2540]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white mt-12 md:mt-8">
        {/* Verified Rating Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-white/20"
        >
          <div className="flex text-[#F59E0B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
            ))}
          </div>
          <span className="text-white/90">
            {BUSINESS_INFO.rating} Rating • 63+ Verified Google Reviews
          </span>
        </motion.div>

        {/* Small Safety Orange Accent Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-14 h-1.5 bg-[#E05638] mx-auto mb-6 rounded-full"
        />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.15] mb-6"
        >
          Quality Plumbing Done Right — <span className="text-[#E05638]">For Less</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="text-sm md:text-base text-white/85 font-normal max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Licensed and insured plumbers serving Greater Atlanta, East Point, and Fulton County.
          Emergency leak repairs, drain jetting, water heaters & repiping at honest upfront prices.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-9 py-4 bg-[#E05638] hover:bg-[#C54529] text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold shadow-xl cursor-pointer"
          >
            SCHEDULE SERVICE / ESTIMATE
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-9 py-4 border-2 border-white/80 text-white hover:bg-white hover:text-[#0A2540] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold backdrop-blur-xs cursor-pointer text-center"
          >
            CALL (404) 753-9191
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[11px] text-white/70 uppercase tracking-widest font-semibold"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#E05638]" /> Licensed & Insured
          </span>
          <span>•</span>
          <span>Upfront Flat Rates</span>
          <span>•</span>
          <span>No Hidden Dispatch Surprises</span>
        </motion.div>
      </div>
    </section>
  );
};
