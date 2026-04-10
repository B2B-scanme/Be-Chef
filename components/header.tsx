'use client';

import { ShoppingBag, Globe } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { useCart } from '@/context/cart-context';
import Image from 'next/image';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { totalItems } = useCart();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[#e8e2d6] bg-[#f5f0e6]/95 backdrop-blur-md">
      <div className={`mx-auto flex max-w-4xl items-center justify-between px-4 py-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
        {/* Brand Image */}
        <div className="relative h-12 w-44 sm:w-52">
          <Image
            src="/images/logoo.png"
            alt="Be Chef"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Actions */}
        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-[#d4cfc4] bg-white px-3 py-2 text-sm font-medium text-[#1a1a1a] shadow-sm transition-all duration-200 hover:border-[#8B0000] hover:shadow-md"
          >
            <Globe className="h-4 w-4 text-[#8B0000]" />
            <span>{language === 'fr' ? 'AR' : 'FR'}</span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 rounded-full bg-[#8B0000] px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-[#6B0000] hover:shadow-lg"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>{t('cart')}</span>
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4a574] text-xs font-bold text-[#1a1a1a] ring-2 ring-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
