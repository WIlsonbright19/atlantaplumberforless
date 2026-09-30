import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';

interface FooterProps {
  onOpenReservation: () => void;
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onNavigateSection }) => {
  return (
    <footer id="contact" className="w-full bg-[#0A2540] text-white">
      {/* Pre-Footer Quick Info Bar */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-[#E05638] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase block mb-1.5">
                  PHONE & DISPATCH
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="block text-[#E05638] hover:underline text-base font-bold mb-1"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="block text-white/70 hover:text-white text-xs font-normal mb-0.5"
                >
                  {BUSINESS_INFO.email}
                </a>
                <span className="text-[10px] text-[#22C55E] font-bold">
                  Emergency Service Line Open
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-[#0284C7] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase block mb-1.5">
                  ATLANTA HEADQUARTERS
                </span>
                <p className="text-white/90 text-sm font-normal leading-relaxed mb-1">
                  2692 Harris St,
                  <br />
                  Atlanta, GA 30344, United States
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs text-[#0284C7] hover:underline font-semibold"
                >
                  <span>Google Maps Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-white shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="w-full">
                <span className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase block mb-1.5">
                  SERVICE HOURS
                </span>
                <div className="space-y-1 text-xs text-white/80 font-normal">
                  <div className="flex justify-between max-w-xs">
                    <span>Mon to Fri</span>
                    <span className="text-white font-medium">{BUSINESS_INFO.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Saturday</span>
                    <span className="text-white font-medium">{BUSINESS_INFO.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Sunday</span>
                    <span className="text-[#E05638] font-bold">{BUSINESS_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-16 md:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Column 1: Brand & Mission */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                <div
                  onClick={() => onNavigateSection('hero')}
                  className="flex items-center space-x-3 cursor-pointer mb-5 group w-fit"
                >
                  <div className="w-9 h-9 rounded-full bg-[#E05638] flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-display font-extrabold tracking-wide uppercase">
                      ATLANTA PLUMBER
                    </span>
                    <span className="text-[10px] tracking-[0.25em] text-[#E05638] font-extrabold uppercase">
                      FOR LESS
                    </span>
                  </div>
                </div>

                <p className="text-xs text-white/70 font-normal leading-relaxed max-w-sm mb-6">
                  Providing Atlanta homeowners and businesses with honest, transparent, and top-tier plumbing solutions. Fast response times, upfront flat rates, and zero gimmicks.
                </p>

                <div className="flex items-center space-x-3 text-xs text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#E05638]" />
                  <span>Licensed Plumber in Georgia • 63+ Verified Reviews</span>
                </div>
              </div>
            </div>

            {/* Column 2: Service Areas & Info */}
            <div className="md:col-span-6">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-5">
                METRO ATLANTA COVERAGE
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70">
                <li>
                  <button onClick={() => onNavigateSection('locations')} className="hover:text-[#E05638] transition-colors">
                    Atlanta (Central & Downtown)
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigateSection('locations')} className="hover:text-[#E05638] transition-colors">
                    East Point & College Park
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigateSection('locations')} className="hover:text-[#E05638] transition-colors">
                    Buckhead & Midtown Atlanta
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigateSection('locations')} className="hover:text-[#E05638] transition-colors">
                    Decatur & Sandy Springs
                  </button>
                </li>
                <li>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E05638] font-bold hover:underline inline-block mt-2"
                  >
                    Google Maps Business Profile (CID: 11045371731168607137)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-8 bg-[#071B2F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/60 font-normal gap-4">
          <p>
            Copyright © {new Date().getFullYear()} Atlanta Plumber For Less | 2692 Harris St, Atlanta, GA 30344 | (404) 753-9191
          </p>
          <div className="flex items-center space-x-6 text-[10px] tracking-wider uppercase">
            <span className="hover:text-[#E05638] cursor-pointer">Licensed & Insured</span>
            <span>•</span>
            <span className="hover:text-[#E05638] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#E05638] cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
