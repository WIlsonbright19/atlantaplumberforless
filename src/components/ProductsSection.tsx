import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/spaData';
import { Product } from '../types';
import { ProductMockup } from './ProductMockup';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section
      id="products"
      className="relative min-h-screen w-full bg-[#FDFBF7] py-20 lg:py-0 flex flex-col justify-center border-b border-[#EFEBE6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        {/* Section Top Bar: Title on left, Carousel controls on right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-10 h-0.5 bg-[#E07A5F] mb-4"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-3"
            >
              Pro-grade plumbing hardware & maintenance kits
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm text-[#64748B] font-normal leading-relaxed"
            >
              Protect your home's pipes, water heaters, and drains from mineral scale, high pressure spikes, and unexpected leaks.
            </motion.p>
          </div>

          {/* Carousel Arrows matching video styling at 00:13 */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'border-[#E07A5F] bg-[#E07A5F] text-white hover:bg-[#C25E45]'
                  : 'border-[#D9D3CC] text-[#7A746E] hover:border-[#242220]'
              }`}
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-[#E07A5F] bg-[#E07A5F] text-white hover:bg-[#C25E45] flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Products Slider */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-6 px-6 md:-mx-12 md:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="shrink-0 w-72 sm:w-80 snap-start group flex flex-col justify-between"
            >
              {/* Product Card with Clean White Background & Coral Price Badge */}
              <div className="relative bg-white border border-[#EFEBE6] rounded-xs p-6 mb-5 aspect-square flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#E07A5F]/40 group-hover:shadow-lg">
                {/* Terracotta Price Badge matching video */}
                <div className="absolute top-4 right-4 bg-[#FBEFEA] text-[#E07A5F] px-3 py-1 text-[11px] font-semibold tracking-wider rounded-xs">
                  ${product.price.toFixed(2)} USD
                </div>

                {/* Branded Packaging Mockup */}
                <div className="transition-transform duration-500 group-hover:scale-105">
                  <ProductMockup id={product.id} name={product.name} />
                </div>

                {/* Quick Add Overlay on hover */}
                <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 bg-[#242220] hover:bg-[#E07A5F] text-white py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors shadow-md"
                  >
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-xl font-display font-medium text-[#242220] mb-1 group-hover:text-[#E07A5F] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[#7A746E] font-light leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                <button
                  onClick={() => onSelectProduct(product)}
                  className="inline-flex items-center space-x-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#E07A5F] group-hover:text-[#C25E45] transition-all cursor-pointer"
                >
                  <span>VIEW PRODUCT</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Browse Products Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }}
            className="px-9 py-4 border border-[#242220] text-[#242220] hover:bg-[#242220] hover:text-white transition-all duration-300 text-xs uppercase tracking-[0.25em] font-semibold cursor-pointer"
          >
            BROWSE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

