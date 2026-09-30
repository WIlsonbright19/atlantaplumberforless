import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone, Calendar, Clock, MapPin, Wrench } from 'lucide-react';
import { TREATMENTS, BUSINESS_INFO } from '../data/spaData';

export const BookingSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState(TREATMENTS[0].title);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [timePreference, setTimePreference] = useState('Morning');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) return;
    setIsSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="relative min-h-screen lg:h-screen w-full bg-[#F8FAFC] py-20 lg:py-0 flex flex-col justify-center border-b border-[#E2E8F0] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full my-auto">
        {/* Minimalist Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-10 h-1 bg-[#E05638] mx-auto mb-3.5 rounded-full"
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.22em] text-[#0284C7] uppercase block mb-2"
          >
            DISPATCH & ESTIMATES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0F172A] tracking-tight mb-3"
          >
            Book your service in seconds
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#64748B] font-normal max-w-lg mx-auto leading-relaxed"
          >
            Choose your service and time. Our licensed Atlanta technicians will confirm your appointment without delay.
          </motion.p>
        </div>

        {/* Minimalist Card Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="bg-white rounded-xs border border-[#E2E8F0] shadow-xl p-7 sm:p-10 relative"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Minimalist Service Selector Pills */}
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.16em] text-[#64748B] uppercase mb-2.5">
                    Select Plumbing Service
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {TREATMENTS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedService(t.title)}
                        className={`py-2.5 px-3 text-xs font-semibold rounded-xs border transition-all cursor-pointer text-center truncate ${
                          selectedService === t.title
                            ? 'bg-[#0A2540] border-[#0A2540] text-white shadow-xs'
                            : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#334155] hover:border-[#CBD5E1]'
                        }`}
                      >
                        {t.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields: Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.16em] text-[#64748B] uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs py-3 px-3.5 rounded-xs focus:bg-white focus:outline-hidden focus:border-[#E05638] text-[#0F172A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.16em] text-[#64748B] uppercase mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(404) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs py-3 px-3.5 rounded-xs focus:bg-white focus:outline-hidden focus:border-[#E05638] text-[#0F172A] transition-colors"
                    />
                  </div>
                </div>

                {/* Form Fields: Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-6">
                    <label className="block text-[11px] font-bold tracking-[0.16em] text-[#64748B] uppercase mb-1.5">
                      Atlanta Service Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street address in Metro Atlanta"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs py-3 px-3.5 rounded-xs focus:bg-white focus:outline-hidden focus:border-[#E05638] text-[#0F172A] transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-[11px] font-bold tracking-[0.16em] text-[#64748B] uppercase mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs py-2.5 px-3 rounded-xs focus:bg-white focus:outline-hidden focus:border-[#E05638] text-[#0F172A] transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-[11px] font-bold tracking-[0.16em] text-[#64748B] uppercase mb-1.5">
                      Window
                    </label>
                    <select
                      value={timePreference}
                      onChange={(e) => setTimePreference(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs py-2.5 px-3 rounded-xs focus:bg-white focus:outline-hidden focus:border-[#E05638] text-[#0F172A] transition-colors font-medium"
                    >
                      <option value="Morning">Morning (8am-12pm)</option>
                      <option value="Midday">Midday (12pm-3pm)</option>
                      <option value="Afternoon">Afternoon (3pm-6pm)</option>
                      <option value="ASAP Emergency">Earliest / ASAP</option>
                    </select>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E05638] hover:bg-[#C54529] text-white text-xs uppercase tracking-[0.22em] font-extrabold transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>CONFIRM PLUMBING APPOINTMENT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-[#0F172A]">
                  Appointment Booked, {name}!
                </h3>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto leading-relaxed">
                  We have queued your request for <strong>{selectedService}</strong> at <strong>{address}</strong>. A dispatch coordinator will call <strong>{phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-[#0284C7] hover:underline uppercase tracking-wider"
                  >
                    ← Book another appointment
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Minimalist Trust Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#64748B] font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
            Direct Dispatch: <strong>2692 Harris St</strong>
          </span>
          <span>•</span>
          <span>No Surprise Trip Fees</span>
          <span>•</span>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="text-[#E05638] hover:underline font-bold"
          >
            Emergency Call: (404) 753-9191
          </a>
        </div>
      </div>
    </section>
  );
};
