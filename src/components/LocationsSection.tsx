import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, MapPin } from 'lucide-react';
import { LOCATIONS, BUSINESS_INFO } from '../data/spaData';

interface LocationsSectionProps {
  onOpenReservation: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="locations"
      className="relative min-h-screen w-full bg-[#F8FAFC] py-20 lg:py-0 flex flex-col justify-center border-b border-[#E2E8F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
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
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-3"
          >
            Our Metro Atlanta Service Areas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#64748B] font-normal leading-relaxed"
          >
            Headquartered at 2692 Harris St, Atlanta, GA 30344. Our certified plumbing technicians are strategically dispatched across Fulton County and Metro Atlanta for fast response times.
          </motion.p>
        </div>

        {/* 3 City / District Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 text-center md:text-left">
          {LOCATIONS.map((loc, idx) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col bg-white p-6 rounded-xs border border-[#E2E8F0] shadow-xs"
            >
              <div className="flex items-center space-x-2 mb-2 text-[#E05638]">
                <MapPin className="w-4 h-4 shrink-0" />
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#0F172A]">
                  {loc.city}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] font-normal leading-relaxed mb-3">
                {loc.address}
              </p>
              <a
                href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                className="text-xs sm:text-sm text-[#E05638] hover:underline font-bold mb-1 block"
              >
                {loc.phone}
              </a>
              <a
                href={`mailto:${loc.email}`}
                className="text-xs text-[#64748B] hover:text-[#0284C7] font-medium transition-colors block"
              >
                {loc.email}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Panoramic Plumbing Work Photo with Accent from Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto mb-8"
        >
          <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-[#E05638]/20 rounded-xs -z-0" />

          <div className="relative z-10 overflow-hidden shadow-xl rounded-xs aspect-16/7 sm:aspect-16/6 bg-[#E2E8F0]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
              alt="Plumbing service vehicle and clean installation in Atlanta"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Centered Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-9 py-4 bg-[#E05638] hover:bg-[#C54529] text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold shadow-md cursor-pointer"
          >
            SCHEDULE SERVICE AT YOUR ADDRESS
          </button>
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-slate-50 transition-all text-xs uppercase tracking-[0.2em] font-extrabold cursor-pointer inline-flex items-center justify-center space-x-2 shadow-xs"
          >
            <MapPin className="w-4 h-4 text-[#E05638]" />
            <span>OPEN IN GOOGLE MAPS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
