'use client';

import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/language-context';
import { useCart } from '@/context/cart-context';

interface FloatingCartButtonProps {
  onClick: () => void;
}

export function FloatingCartButton({ onClick }: FloatingCartButtonProps) {
  const { t, isRTL } = useLanguage();
  const { totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClick}
          className={`fixed bottom-6 z-30 flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-primary-foreground shadow-lg ${isRTL ? 'left-4 right-auto flex-row-reverse' : 'left-auto right-4'}`}
        >
          <div className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              {totalItems}
            </span>
          </div>
          <span className="font-medium">{t('cart')}</span>
          <span className="rounded-lg bg-primary-foreground/20 px-2.5 py-1 text-sm font-semibold">
            {totalPrice} {t('currency')}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
