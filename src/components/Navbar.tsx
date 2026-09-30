import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/spaData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'instant' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-header py-3.5 shadow-sm border-b border-[#E2E8F0] text-[#0F172A]'
            : 'bg-gradient-to-b from-black/75 via-black/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Navigation (Desktop Only) */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.18em] font-bold uppercase">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-[#E05638] transition-colors cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-[#E05638] transition-colors cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollTo('treatments')}
              className="hover:text-[#E05638] transition-colors cursor-pointer"
            >
              SERVICES
            </button>
          </nav>

          {/* Center Brand Logo */}
          <div
            onClick={() => scrollTo('hero')}
            className="flex items-center cursor-pointer group"
          >
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-wide uppercase font-display leading-tight">
                ATLANTA PLUMBER
              </span>
            </div>
          </div>

          {/* Right Navigation (Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-7 text-xs tracking-[0.18em] font-bold uppercase">
            {/* Book Service Button */}
            <button
              onClick={() => scrollTo('booking')}
              className="px-4 py-2 bg-[#E05638] hover:bg-[#C54529] text-white rounded-xs text-[11px] font-extrabold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
            >
              BOOK ONLINE
            </button>
          </div>

          {/* Mobile & Tablet Right Icons */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 text-[#E05638]"
              aria-label="Call Atlanta Plumber"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F8FAFC] pt-24 px-8 sm:px-16 flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="max-w-md w-full mx-auto flex flex-col space-y-5 text-sm tracking-wider uppercase font-bold text-[#0F172A]">
              <button
                onClick={() => scrollTo('hero')}
                className="text-left py-2 border-b border-[#E2E8F0] hover:text-[#E05638]"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="text-left py-2 border-b border-[#E2E8F0] hover:text-[#E05638]"
              >
                About Our Company
              </button>
              <button
                onClick={() => scrollTo('treatments')}
                className="text-left py-2 border-b border-[#E2E8F0] hover:text-[#E05638]"
              >
                Plumbing Services
              </button>
              <button
                onClick={() => scrollTo('booking')}
                className="text-left py-2 border-b border-[#E2E8F0] text-[#E05638] font-bold"
              >
                Book Service Online
              </button>
              <button
                onClick={() => scrollTo('locations')}
                className="text-left py-2 border-b border-[#E2E8F0] hover:text-[#E05638]"
              >
                Service Areas in Atlanta
              </button>
              <button
                onClick={() => scrollTo('testimonials')}
                className="text-left py-2 border-b border-[#E2E8F0] hover:text-[#E05638]"
              >
                Customer Reviews
              </button>
              <button
                onClick={() => scrollTo('news')}
                className="text-left py-2 border-b border-[#E2E8F0] hover:text-[#E05638]"
              >
                Plumbing Tips
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-left py-2 border-b border-[#E2E8F0] hover:text-[#E05638]"
              >
                Contact & Address
              </button>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full bg-[#E05638] text-white py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-[#C54529] transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (404) 753-9191</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full bg-[#0A2540] text-white py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-[#0F172A] transition-colors"
                >
                  Schedule Service / Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
