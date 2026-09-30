import React from 'react';

interface ProductMockupProps {
  id: string;
  name: string;
}

export const ProductMockup: React.FC<ProductMockupProps> = ({ id, name }) => {
  switch (id) {
    case 'hands-cream':
      // Eco-Enzyme Bio Drain Care bottle
      return (
        <div className="relative w-44 h-44 flex items-center justify-center">
          <div className="absolute bottom-4 w-28 h-4 bg-black/10 rounded-full blur-xs" />
          <div className="relative flex flex-col items-center">
            {/* Measuring Cap */}
            <div className="w-8 h-7 bg-[#E05638] rounded-t-sm shadow-xs border-b border-[#B9381E]" />
            {/* Bottle Body */}
            <div className="w-24 h-28 bg-gradient-to-b from-[#FFFFFF] to-[#EFF6FF] border border-[#CBD5E1] rounded-b-md shadow-md flex flex-col items-center justify-center p-2 text-center">
              <div className="w-6 h-6 rounded-full border border-[#0284C7] bg-[#E0F2FE] flex items-center justify-center mb-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <span className="text-[7.5px] tracking-wider text-[#0A2540] uppercase font-bold">
                ATL PLUMBER
              </span>
              <span className="text-[6.5px] tracking-widest text-[#0284C7] font-semibold uppercase">
                BIO-ENZYME
              </span>
              <span className="text-[6px] text-[#64748B] mt-0.5">32 OZ SAFE</span>
            </div>
          </div>
        </div>
      );

    case 'eye-cream':
      // Smart Flood & Leak Sensor disc
      return (
        <div className="relative w-44 h-44 flex items-center justify-center">
          <div className="absolute bottom-3 w-32 h-4 bg-black/10 rounded-full blur-xs" />
          <div className="w-28 h-28 rounded-full bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#E2E8F0] border-2 border-[#CBD5E1] shadow-lg flex flex-col items-center justify-center p-2 relative">
            {/* WiFi Wave SVG */}
            <div className="w-8 h-8 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12.01" y2="20" />
              </svg>
            </div>
            <span className="text-[7.5px] tracking-widest text-[#0A2540] font-bold uppercase">
              SMART SENSOR
            </span>
            <span className="text-[6.5px] text-[#E05638] font-semibold mt-0.5">WIFI ALARM</span>
            {/* Dual contact probes indicators */}
            <div className="absolute bottom-2 flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            </div>
          </div>
        </div>
      );

    case 'day-facial-tonic':
      // Brass Pressure Regulator
      return (
        <div className="relative w-44 h-44 flex items-center justify-center">
          <div className="absolute bottom-3 w-28 h-4 bg-black/10 rounded-full blur-xs" />
          <div className="flex flex-col items-center">
            {/* Top adjustment bolt */}
            <div className="w-5 h-6 bg-gradient-to-b from-[#B45309] to-[#D97706] rounded-t-xs" />
            {/* Bell housing */}
            <div className="w-16 h-12 bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#B45309] rounded-t-lg shadow-sm border border-[#92400E] flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#78350F]">50 PSI</span>
            </div>
            {/* Brass Pipe T-Junction */}
            <div className="w-28 h-8 bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#92400E] rounded-xs shadow-md flex items-center justify-between px-2 text-[#78350F] text-[7px] font-bold">
              <span>IN</span>
              <span>3/4" BRASS</span>
              <span>OUT</span>
            </div>
          </div>
        </div>
      );

    case 'facial-cleaner':
      // Tankless Descale Flush Kit Bucket & Pump
      return (
        <div className="relative w-44 h-44 flex items-center justify-center">
          <div className="absolute bottom-3 w-32 h-4 bg-black/10 rounded-full blur-xs" />
          <div className="flex flex-col items-center">
            {/* Bucket Handle */}
            <div className="w-24 h-6 border-t-2 border-x-2 border-[#64748B] rounded-t-lg" />
            {/* Commercial Flush Bucket */}
            <div className="w-28 h-24 bg-gradient-to-b from-[#E05638] to-[#991B1B] rounded-b-lg shadow-md border border-[#7F1D1D] flex flex-col items-center justify-center p-2 text-white text-center">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mb-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-white">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <span className="text-[7.5px] font-bold tracking-wider uppercase">
                FLUSH KIT
              </span>
              <span className="text-[6.5px] text-white/80">PUMP & HOSES</span>
            </div>
          </div>
        </div>
      );

    case 'face-cream':
      // Stainless Steel Braided Supply Lines
      return (
        <div className="relative w-44 h-44 flex items-center justify-center">
          <div className="absolute bottom-4 w-32 h-4 bg-black/10 rounded-full blur-xs" />
          <div className="relative w-28 h-28 rounded-full border-8 border-dashed border-[#94A3B8] shadow-md flex items-center justify-center bg-[#F1F5F9]">
            {/* Brass fitting ends */}
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-5 h-5 rounded-full bg-[#F59E0B] border border-[#B45309] mb-1" />
              <span className="text-[7px] font-bold text-[#0F172A] tracking-wider uppercase">
                304 BRAIDED
              </span>
              <span className="text-[6px] text-[#0284C7] font-semibold">BURST-PROOF</span>
            </div>
          </div>
        </div>
      );

    default:
      // High-Torque Disposal Tool & Tabs
      return (
        <div className="relative w-44 h-44 flex items-center justify-center">
          <div className="absolute bottom-4 w-28 h-4 bg-black/10 rounded-full blur-xs" />
          <div className="flex flex-col items-center">
            {/* Chrome Hex Wrench */}
            <div className="w-16 h-3 bg-gradient-to-r from-[#94A3B8] via-[#E2E8F0] to-[#64748B] rounded-xs shadow-xs mb-2 transform -rotate-12" />
            <div className="w-22 h-20 bg-gradient-to-b from-[#0F172A] to-[#1E293B] rounded-md shadow-md border border-[#334155] flex flex-col items-center justify-center p-2 text-white text-center">
              <span className="text-[7.5px] font-bold text-[#E05638] uppercase tracking-wider">
                DISPOSAL KIT
              </span>
              <span className="text-[6.5px] text-white/70 mt-0.5">UNJAM & CLEAN</span>
            </div>
          </div>
        </div>
      );
  }
};
