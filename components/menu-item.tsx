'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/language-context';
import { useCart } from '@/context/cart-context';
import type { MenuItem as MenuItemType, PizzaSize } from '@/lib/menu-data';
import { Button } from '@/components/ui/button';

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  const { language, t, isRTL } = useLanguage();
  const { addItem } = useCart();
  const pizzaSizePrices = item.category === 'pizza' ? item.sizePrices : undefined;
  const hasPizzaSizes = !!pizzaSizePrices;
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('m');

  const selectedPrice = pizzaSizePrices ? pizzaSizePrices[selectedSize] : item.price;

  const handleAddToCart = () => {
    addItem({
      id: hasPizzaSizes ? `${item.id}-${selectedSize}` : item.id,
      name: item.name,
      price: selectedPrice,
      size: hasPizzaSizes ? selectedSize : undefined,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md"
    >
      {/* Popular Badge */}
      {item.isPopular && (
        <span className="absolute -top-2 rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground ltr:right-3 rtl:left-3">
          {t('popular')}
        </span>
      )}

      <div className="flex flex-1 flex-col">
        {/* Name and Price */}
        <div className={`mb-2 flex items-start justify-between gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h3 className={`font-serif text-lg font-semibold text-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
            {item.name[language]}
          </h3>
          <span className="shrink-0 rounded-lg bg-primary/10 px-2.5 py-1 font-semibold text-primary">
            {selectedPrice} {t('currency')}
          </span>
        </div>

        {/* Description */}
        <p className={`mb-4 flex-1 text-sm leading-relaxed text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
          {item.description[language]}
        </p>

        {hasPizzaSizes && (
          <div className={`mb-4 space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {t('size')}
            </p>
            <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                type="button"
                onClick={() => setSelectedSize('m')}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm transition-colors ${
                  selectedSize === 'm'
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground hover:border-primary/50'
                }`}
              >
                M {pizzaSizePrices?.m ?? item.price} {t('currency')}
              </button>
              <button
                type="button"
                onClick={() => setSelectedSize('g')}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm transition-colors ${
                  selectedSize === 'g'
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground hover:border-primary/50'
                }`}
              >
                G {pizzaSizePrices?.g ?? item.price} {t('currency')}
              </button>
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          variant="outline"
          size="sm"
          className={`w-full gap-2 border-primary/30 text-primary transition-colors hover:bg-primary hover:text-primary-foreground ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <Plus className="h-4 w-4" />
          {t('addToCart')}
        </Button>
      </div>
    </motion.div>
  );
}
