import React, { useState } from 'react';
import { Heart, Instagram, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { INSTAGRAM_POSTS } from '../data/spaData';

export const InstagramSection: React.FC = () => {
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleFollow = () => {
    navigator.clipboard?.writeText('@atlantaplumberforless');
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <section
      id="instagram"
      className="relative min-h-screen w-full bg-white py-20 lg:py-0 flex flex-col justify-center border-b border-[#E2E8F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="w-12 h-1 bg-[#E05638] mb-6 rounded-full" />

            <div className="flex items-center space-x-2 text-[#0284C7] font-bold text-xs uppercase tracking-widest mb-2">
              <Camera className="w-4 h-4" />
              <span>Project Gallery & Field Updates</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-[1.18] mb-6">
              Recent plumbing projects in Atlanta
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] font-normal leading-relaxed mb-8 max-w-md">
              From emergency PEX pipe repair in East Point to tankless water heater retrofits in Buckhead, see the clean, code-compliant craftsmanship our plumbers deliver every single day.
            </p>

            <div>
              <button
                onClick={handleFollow}
                className="px-9 py-4 bg-[#E05638] hover:bg-[#C54529] text-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-extrabold shadow-md cursor-pointer inline-flex items-center space-x-2.5"
              >
                <Instagram className="w-4 h-4" />
                <span>FOLLOW @ATLANTA_PLUMBER</span>
              </button>
              {copiedNotification && (
                <span className="block mt-2 text-xs text-[#0284C7] font-bold animate-pulse">
                  Handle copied: @atlantaplumberforless
                </span>
              )}
            </div>
          </motion.div>

          {/* Right Column: 2x2 Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5 max-w-lg mx-auto lg:max-w-none">
              {INSTAGRAM_POSTS.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group aspect-square rounded-xs overflow-hidden shadow-sm bg-[#E2E8F0] cursor-pointer"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay with Heart & Caption */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <Heart className="w-7 h-7 text-[#E05638] fill-[#E05638] mb-1.5 transform group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold tracking-wider">{post.likes}</span>
                    <span className="text-[10px] text-white/90 line-clamp-2 text-center mt-2 font-normal leading-relaxed">
                      {post.caption}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
