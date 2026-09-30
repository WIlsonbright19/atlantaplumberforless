import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { TREATMENTS, BUSINESS_INFO } from '../data/spaData';

interface TreatmentsSectionProps {
  onBookService: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onBookService }) => {
  return (
    <section
      id="treatments"
      className="relative min-h-screen w-full bg-[#F8FAFC] py-20 lg:py-0 flex flex-col justify-center border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-12 h-1 bg-[#E05638] mx-auto mb-4 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4"
          >
            Take a look at our expert plumbing services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#64748B] font-normal leading-relaxed"
          >
            Fast, reliable residential and commercial plumbing throughout Greater Atlanta. Honest upfront quotes, clean workmanship, and zero hidden dispatch surcharges.
          </motion.p>
        </div>

        {/* Content Grid: Left Image with Signature Offset Block, Right 4 Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with offset safety orange graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Signature Offset Block matching video design */}
            <div className="absolute -bottom-5 -left-5 sm:-bottom-8 sm:-left-8 w-44 sm:w-60 h-44 sm:h-60 bg-[#E05638] -z-0 rounded-xs shadow-md" />

            <div className="relative z-10 overflow-hidden shadow-2xl rounded-xs aspect-4/5 bg-[#E2E8F0]">
              <img
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1000&q=80"
                alt="Licensed plumber inspecting copper plumbing pipes in Atlanta"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column: 2x2 Services Grid & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 mb-10">
              {TREATMENTS.map((treatment, idx) => (
                <motion.div
                  key={treatment.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col justify-between p-2 rounded-xs transition-colors"
                >
                  <div>
                    <span className="text-[10px] tracking-wider text-[#0284C7] uppercase font-bold block mb-1">
                      {treatment.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] mb-2 group-hover:text-[#E05638] transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs text-[#64748B] font-normal leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                  </div>
                  <button
                    onClick={onBookService}
                    className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#E05638] group-hover:text-[#C54529] transition-all cursor-pointer w-fit"
                  >
                    <span>BOOK THIS SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Bottom Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[#E2E8F0]"
            >
              <button
                onClick={onBookService}
                className="w-full sm:w-auto px-8 py-4 bg-[#E05638] hover:bg-[#C54529] text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold shadow-md cursor-pointer text-center"
              >
                SCHEDULE AN ESTIMATE
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-4 border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold cursor-pointer text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL (404) 753-9191</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
