/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickInfoBar } from './components/QuickInfoBar';
import { TreatmentsSection } from './components/TreatmentsSection';
import { SpecialPlaceSection } from './components/SpecialPlaceSection';
import { FeelingBetterBanner } from './components/FeelingBetterBanner';
import { BookingSection } from './components/BookingSection';
import { LocationsSection } from './components/LocationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { WebflowBadge } from './components/WebflowBadge';

export default function App() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'instant' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#E05638] selection:text-white">
      {/* Navigation */}
      <Navbar
        cartCount={0}
        onOpenCart={() => handleScrollTo('booking')}
        onOpenReservation={() => handleScrollTo('booking')}
      />

      <main className="flex-1">
        {/* Section 1: Hero (100vh) */}
        <HeroSection
          onOpenReservation={() => handleScrollTo('booking')}
          onScrollToTreatments={() => handleScrollTo('treatments')}
        />

        {/* Floating Quick Info Bar */}
        <QuickInfoBar onScrollDown={() => handleScrollTo('treatments')} />

        {/* Section 2: Plumbing Services (100vh) */}
        <TreatmentsSection
          onBookService={() => handleScrollTo('booking')}
        />

        {/* Section 3: Why Choose Us (100vh) */}
        <SpecialPlaceSection
          onOpenReservation={() => handleScrollTo('booking')}
          onOpenAbout={() => handleScrollTo('locations')}
        />

        {/* Section 4: Emergency Callout Banner (100vh) */}
        <FeelingBetterBanner
          onOpenReservation={() => handleScrollTo('booking')}
        />

        {/* Section 5: Online Booking & Dispatch Section (100vh) */}
        <BookingSection />

        {/* Section 6: Metro Atlanta Service Areas (100vh) */}
        <LocationsSection
          onOpenReservation={() => handleScrollTo('booking')}
        />

        {/* Section 7: Verified Customer Reviews (100vh) */}
        <TestimonialsSection
          onOpenReservation={() => handleScrollTo('booking')}
        />

        {/* Section 8: Plumbing Guides & Tips (100vh) */}
        <ResourcesSection
          onBookService={() => handleScrollTo('booking')}
        />

        {/* Section 9: Instagram & Project Showcase (100vh) */}
        <InstagramSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => handleScrollTo('booking')}
        onNavigateSection={handleScrollTo}
      />

      {/* Verified Google Maps Floating Badge */}
      <WebflowBadge />

    </div>
  );
}
