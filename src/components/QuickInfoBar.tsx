import React from 'react';
import { Phone, MapPin, Clock, ChevronDown, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/spaData';

interface QuickInfoBarProps {
  onScrollDown: () => void;
}

export const QuickInfoBar: React.FC<QuickInfoBarProps> = ({ onScrollDown }) => {
  return (
    <div id="contact-bar" className="relative w-full bg-white border-b border-[#E2E8F0] py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-12 pr-0 lg:pr-24 items-start">
          {/* Column 1: Contact */}
          <div className="flex items-start space-x-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#E05638] flex items-center justify-center shrink-0 border border-orange-100 shadow-2xs mt-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-extrabold tracking-[0.22em] text-slate-400 uppercase block mb-1">
                DISPATCH & SUPPORT
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="block text-base font-extrabold font-display text-[#0A2540] hover:text-[#E05638] transition-colors leading-tight mb-1"
              >
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="block text-xs text-slate-500 hover:text-[#0A2540] font-medium transition-colors mb-2 truncate"
              >
                {BUSINESS_INFO.email}
              </a>
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200/70 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Same-Day Atlanta Service Ready
              </span>
            </div>
          </div>

          {/* Column 2: Location */}
          <div className="flex items-start space-x-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#0A2540] flex items-center justify-center shrink-0 border border-slate-200/80 shadow-2xs mt-0.5">
              <MapPin className="w-4 h-4 text-[#E05638]" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-extrabold tracking-[0.22em] text-slate-400 uppercase block mb-1">
                PRIMARY OFFICE & DISPATCH
              </span>
              <p className="text-xs font-semibold text-[#0A2540] leading-snug mb-0.5">
                2692 Harris St
              </p>
              <p className="text-xs text-slate-500 font-medium leading-snug mb-2">
                Atlanta, GA 30344, United States
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E05638] hover:text-[#C54529] hover:underline transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 3: Hours */}
          <div className="flex items-start space-x-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#0A2540] flex items-center justify-center shrink-0 border border-slate-200/80 shadow-2xs mt-0.5">
              <Clock className="w-4 h-4 text-[#0A2540]" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-extrabold tracking-[0.22em] text-slate-400 uppercase block mb-1.5">
                OPERATING HOURS
              </span>
              <div className="space-y-1.5 text-xs max-w-xs">
                <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Mon – Fri:</span>
                  <span className="font-semibold text-[#0A2540]">{BUSINESS_INFO.hours.weekdays}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Saturday:</span>
                  <span className="font-semibold text-[#0A2540]">{BUSINESS_INFO.hours.saturday}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] pt-0.5">
                  <span className="text-slate-500 font-medium">Sunday:</span>
                  <span className="font-bold text-[#E05638] uppercase tracking-wider">{BUSINESS_INFO.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Round Down Arrow Button from Video */}
        <motion.button
          onClick={onScrollDown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-6 w-14 h-14 rounded-full bg-[#E05638] hover:bg-[#C54529] text-white items-center justify-center shadow-lg transition-colors cursor-pointer group"
          aria-label="Scroll to services"
        >
          <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-0.5" />
        </motion.button>
      </div>
    </div>
  );
};
