import React from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';
import { ARTICLES } from '../data/spaData';

interface ResourcesSectionProps {
  onBookService: () => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onBookService }) => {
  return (
    <section
      id="news"
      className="relative min-h-screen w-full bg-[#F8FAFC] py-20 lg:py-0 flex flex-col justify-center border-b border-[#E2E8F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-14 gap-6">
          <div>
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
              Plumbing Guides & Maintenance Tips
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={onBookService}
              className="px-8 py-3.5 border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold cursor-pointer inline-flex items-center space-x-2"
            >
              <CalendarDays className="w-4 h-4" />
              <span>BOOK A SERVICE</span>
            </button>
          </motion.div>
        </div>

        {/* 2 Featured Plumbing Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-white p-6 rounded-xs border border-[#E2E8F0] shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Image with signature offset block behind */}
              <div className="relative mb-6">
                <div className="absolute -bottom-3 -left-3 w-40 sm:w-56 h-40 sm:h-56 bg-[#E05638] rounded-xs -z-0 transition-transform duration-500 group-hover:scale-105 shadow-sm" />
                <div className="relative z-10 overflow-hidden rounded-xs shadow-md aspect-16/10 bg-[#E2E8F0]">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#E05638] transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-xs text-[#64748B] font-normal leading-relaxed mb-4 line-clamp-2">
                {article.excerpt}
              </p>

              {/* Date & Read More */}
              <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
                <span className="text-[11px] font-bold tracking-[0.18em] text-[#64748B] uppercase">
                  {article.date}
                </span>
                <button
                  type="button"
                  onClick={onBookService}
                  className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#E05638] group-hover:text-[#C54529] transition-all"
                >
                  <span>BOOK A SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
