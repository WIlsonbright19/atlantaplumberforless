import React, { useState } from 'react';
import { X, ShieldCheck, Star, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';

export const WebflowBadge: React.FC = () => {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <aside
      aria-label="Verified Atlanta Plumber"
      className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center space-x-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-sm shadow-xl border border-[#CBD5E1] text-[#0F172A] transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#0284C7] shrink-0">
        <ShieldCheck className="w-4 h-4" />
      </div>

      <div className="text-[11px] leading-tight pr-2">
        <div className="flex items-center space-x-1 text-[#F59E0B]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#F59E0B]" />
          ))}
          <span className="text-[#0F172A] font-bold ml-1 text-[10px]">4.8 (63+ Reviews)</span>
        </div>
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#E05638] hover:underline flex items-center space-x-1 mt-0.5"
        >
          <span>Atlanta Plumber For Less</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

      <button
        onClick={() => setClosed(true)}
        className="text-[#64748B] hover:text-[#0F172A] p-1 rounded-full hover:bg-slate-100 transition-colors"
        aria-label="Dismiss badge"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
