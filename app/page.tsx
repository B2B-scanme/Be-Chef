'use client';

import { LanguageProvider } from '@/context/language-context';
import { CartProvider } from '@/context/cart-context';
import { LanguageSelector } from '@/components/language-selector';
import { MenuPage } from '@/components/menu-page';

export default function Home() {
  return (
    <LanguageProvider>
      <CartProvider>
        <LanguageSelector />
        <MenuPage />
      </CartProvider>
    </LanguageProvider>
  );
}
