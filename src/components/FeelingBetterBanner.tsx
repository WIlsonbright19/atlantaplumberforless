import React from 'react';
import { motion } from 'motion/react';
import { Phone, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';

interface FeelingBetterBannerProps {
  onOpenReservation: () => void;
}

export const FeelingBetterBanner: React.FC<FeelingBetterBannerProps> = ({
  onOpenReservation,
}) => {
  return (
    <section
      className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/90 via-[#0A2540]/80 to-[#0A2540]/95" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        {/* Emergency Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 bg-[#E05638]/20 border border-[#E05638] px-4 py-1.5 rounded-full text-xs font-bold text-[#E05638] uppercase tracking-wider mb-6"
        >
          <AlertCircle className="w-4 h-4" />
          <span>Same-Day & Emergency On-Call Plumbing</span>
        </motion.div>

        {/* Accent Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-14 h-1.5 bg-[#E05638] mx-auto mb-6 rounded-full"
        />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6"
        >
          Plumbing Emergency in Atlanta? We're Ready to Roll.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base text-white/85 font-normal leading-relaxed max-w-xl mx-auto mb-10"
        >
          Flooded basement, broken water line, or sewer backing up into your fixtures?
          Don't wait for minor issues to turn into thousands in structural damage. Call our direct line now for fast assistance.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-9 py-4 bg-[#E05638] hover:bg-[#C54529] text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold shadow-xl cursor-pointer flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>CALL (404) 753-9191 NOW</span>
          </a>
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-9 py-4 bg-white text-[#0A2540] hover:bg-slate-100 transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold shadow-xl cursor-pointer"
          >
            REQUEST EMERGENCY CALL-BACK
          </button>
        </motion.div>
      </div>
    </section>
  );
};
