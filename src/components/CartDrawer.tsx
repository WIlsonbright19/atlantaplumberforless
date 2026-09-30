import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Check, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkedOutSuccess, setCheckedOutSuccess] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeDeliveryThreshold = 75;
  const progressToFreeDelivery = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckedOutSuccess(true);
      setTimeout(() => {
        onClearCart();
        setCheckedOutSuccess(false);
        onClose();
      }, 2500);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#E2E8F0]"
          >
            {/* Top Bar */}
            <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#E05638]" />
                <h3 className="text-base font-display font-bold text-[#0F172A] tracking-wide">
                  Plumbing Hardware Cart ({items.reduce((acc, i) => acc + i.quantity, 0)})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-[#64748B] hover:text-[#0F172A] p-1.5 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Delivery Meter */}
            <div className="bg-[#EFF6FF] px-6 py-3 border-b border-[#BFDBFE] text-xs text-[#0A2540]">
              {subtotal >= freeDeliveryThreshold ? (
                <div className="flex items-center text-[#0284C7] font-bold">
                  <Check className="w-4 h-4 mr-1.5" />
                  <span>Free Local Atlanta Delivery or Tech Install Unlocked!</span>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="flex justify-between font-medium">
                    <span>Add ${(freeDeliveryThreshold - subtotal).toFixed(2)} more for Free Atlanta Delivery</span>
                    <span className="font-bold">{Math.round(progressToFreeDelivery)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#DBEAFE] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0284C7] transition-all duration-300"
                      style={{ width: `${progressToFreeDelivery}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Item List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F1F5F9] flex items-center justify-center mx-auto text-[#64748B]">
                    <ShoppingBag className="w-8 h-8 stroke-1" />
                  </div>
                  <p className="text-sm font-bold text-[#0F172A]">Your hardware cart is empty</p>
                  <p className="text-xs text-[#64748B] max-w-xs mx-auto">
                    Explore our pro-grade enzyme drain cleaners, flood sensors, and supply kits.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#E05638] hover:bg-[#C54529] text-white text-xs uppercase tracking-wider font-extrabold transition-colors cursor-pointer"
                  >
                    View Supplies
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex space-x-4 p-3 bg-white border border-[#E2E8F0] rounded-xs shadow-xs"
                  >
                    <div className="w-16 h-16 bg-[#F8FAFC] shrink-0 p-1 flex items-center justify-center rounded-xs border border-[#CBD5E1]">
                      <span className="text-[9px] font-bold text-[#0284C7] text-center leading-tight">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xs font-display font-bold text-[#0F172A]">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] text-[#64748B] tracking-wider uppercase">
                            {item.product.volume}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#E05638]">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F1F5F9]">
                        <div className="flex items-center border border-[#CBD5E1] rounded-xs">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 text-[#64748B] hover:text-[#0F172A] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-[#0F172A]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 text-[#64748B] hover:text-[#0F172A] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#94A3B8] hover:text-red-600 text-xs p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-6 bg-[#F8FAFC] border-t border-[#E2E8F0] space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[#64748B]">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)} USD</span>
                  </div>
                  <div className="flex justify-between text-[#64748B]">
                    <span>Local Atlanta Delivery</span>
                    <span>{subtotal >= freeDeliveryThreshold ? 'FREE' : '$8.50 USD'}</span>
                  </div>
                  <div className="flex justify-between text-base font-display font-bold text-[#0F172A] pt-2 border-t border-[#CBD5E1]">
                    <span>Total</span>
                    <span className="text-[#E05638]">
                      ${(subtotal >= freeDeliveryThreshold ? subtotal : subtotal + 8.5).toFixed(2)} USD
                    </span>
                  </div>
                </div>

                {checkedOutSuccess ? (
                  <div className="p-3.5 bg-[#DCFCE7] text-[#166534] text-center text-xs font-bold rounded-xs">
                    Order confirmed! Our dispatch truck will deliver or install your items.
                  </div>
                ) : (
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full py-3.5 bg-[#E05638] hover:bg-[#C54529] text-white text-xs uppercase tracking-[0.2em] font-extrabold transition-colors shadow-md flex items-center justify-center cursor-pointer"
                  >
                    {isCheckingOut ? 'PROCESSING ORDER...' : 'CHECKOUT / DISPATCH ORDER'}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
