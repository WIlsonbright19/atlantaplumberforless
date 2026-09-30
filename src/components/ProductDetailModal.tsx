import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { ProductMockup } from './ProductMockup';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-xs shadow-2xl border border-[#E2E8F0] overflow-hidden z-10 my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-[#64748B] hover:text-[#0F172A] p-2 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Product Mockup */}
            <div className="bg-[#F8FAFC] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E2E8F0]">
              <ProductMockup id={product.id} name={product.name} />
            </div>

            {/* Right: Info */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#0284C7] uppercase block mb-1">
                  {product.category} • {product.volume}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] mb-1">
                  {product.name}
                </h3>
                <div className="text-lg font-bold text-[#E05638] mb-3">
                  ${product.price.toFixed(2)} USD
                </div>

                <p className="text-xs text-[#64748B] font-normal leading-relaxed mb-4">
                  {product.details}
                </p>

                <div className="border-t border-[#E2E8F0] pt-3">
                  <h4 className="text-[10px] font-bold tracking-[0.18em] text-[#64748B] uppercase mb-1">
                    Specifications & Material
                  </h4>
                  <p className="text-[11px] text-[#0F172A] font-medium leading-relaxed">
                    {product.ingredients}
                  </p>
                </div>
              </div>

              {/* Quantity Selector & Add to Cart */}
              <div className="space-y-3 pt-3 border-t border-[#E2E8F0]">
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-[#CBD5E1] rounded-xs bg-[#F8FAFC]">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 text-[#64748B] hover:text-[#0F172A]"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-[#0F172A]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1.5 text-[#64748B] hover:text-[#0F172A]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={addedAnimation}
                  className="w-full py-3.5 bg-[#E05638] hover:bg-[#C54529] text-white text-xs uppercase tracking-[0.2em] font-extrabold transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO CART!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO CART • ${(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
