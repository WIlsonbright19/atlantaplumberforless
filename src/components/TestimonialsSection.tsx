import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/spaData';

interface TestimonialsSectionProps {
  onOpenReservation: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen w-full bg-white py-20 lg:py-0 flex flex-col justify-center border-b border-[#E2E8F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-12 h-1 bg-[#E05638] mb-4 rounded-full"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight"
            >
              What Atlanta Homeowners Say About Us
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col text-xs sm:text-sm text-[#64748B] font-normal leading-relaxed max-w-sm"
          >
            <div className="flex items-center space-x-1.5 text-[#F59E0B] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
              ))}
              <span className="font-bold text-[#0F172A] ml-1">4.8 / 5.0 Rating</span>
            </div>
            <span>63+ authentic, verified Google Maps reviews from residential & commercial clients.</span>
          </motion.div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-14">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              {/* Photo with Orange Offset Layering matching video */}
              <div className="relative mb-6">
                <div className="absolute -top-3 -left-3 w-full h-full bg-[#E05638] rounded-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 shadow-sm" />
                <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-xs shadow-md bg-[#E2E8F0]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-[#F59E0B] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                ))}
              </div>

              {/* Name & City */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] mb-1">
                {t.name}
              </h3>
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#0284C7] uppercase mb-4 block">
                {t.location}
              </span>

              {/* Testimonial Quote */}
              <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed italic">
                {t.quote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-9 py-4 bg-[#E05638] hover:bg-[#C54529] text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold shadow-md cursor-pointer"
          >
            REQUEST AN ESTIMATE
          </button>
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all text-xs uppercase tracking-[0.2em] font-extrabold cursor-pointer inline-flex items-center justify-center space-x-2"
          >
            <span>READ ALL GOOGLE REVIEWS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
