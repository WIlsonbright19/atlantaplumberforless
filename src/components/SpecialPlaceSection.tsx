import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';

interface SpecialPlaceSectionProps {
  onOpenReservation: () => void;
  onOpenAbout?: () => void;
}

export const SpecialPlaceSection: React.FC<SpecialPlaceSectionProps> = ({
  onOpenReservation,
  onOpenAbout,
}) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-white py-20 lg:py-0 flex flex-col justify-center border-b border-[#E2E8F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="w-12 h-1 bg-[#E05638] mb-6 rounded-full" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-[1.18] mb-6">
              Your trusted local Atlanta plumbers — <span className="text-[#E05638]">always for less</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] font-normal leading-relaxed mb-6 max-w-xl">
              At Atlanta Plumber For Less, we believe essential home plumbing shouldn't break the bank. Based right at 2692 Harris St, Atlanta, our certified team handles everything from midnight slab leak emergencies to high-efficiency tankless water heater retrofits with uncompromising quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs font-semibold text-[#0F172A]">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>63+ Verified 5-Star Google Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Zero Hidden Dispatch or Travel Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Licensed, Bonded & Insured Pros</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Prompt Metro Atlanta Dispatch</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-8 py-4 bg-[#E05638] hover:bg-[#C54529] text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold shadow-md cursor-pointer text-center"
              >
                REQUEST AN ESTIMATE
              </button>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold cursor-pointer text-center inline-flex items-center justify-center space-x-2"
              >
                <span>VERIFIED REVIEWS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Layered Orange block with Professional Plumber photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Signature Offset Block matching video design */}
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-48 sm:w-64 h-48 sm:h-64 bg-[#E05638] rounded-xs -z-0 shadow-lg" />

              {/* Main Image Container */}
              <div className="relative z-10 overflow-hidden shadow-2xl rounded-xs aspect-4/3 bg-[#E2E8F0]">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80"
                  alt="Certified plumber performing drain camera inspection in Atlanta"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
