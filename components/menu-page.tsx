'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { menuItems, categories } from '@/lib/menu-data';
import { Header } from '@/components/header';
import { CategoryNav } from '@/components/category-nav';
import { MenuItem } from '@/components/menu-item';
import { CartDrawer } from '@/components/cart-drawer';
import { FloatingCartButton } from '@/components/floating-cart-button';
import { Input } from '@/components/ui/input';

export function MenuPage() {
  const { language, t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const normalizedNumber = Number(normalizedQuery.replace(',', '.'));
    const hasNumericQuery = normalizedQuery.length > 0 && !Number.isNaN(normalizedNumber);

    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const itemCategory = categories.find((cat) => cat.id === item.category);
      const textToSearch = [
        item.name.fr,
        item.name.ar,
        item.description.fr,
        item.description.ar,
        item.category,
        itemCategory?.name.fr || '',
        itemCategory?.name.ar || '',
      ]
        .join(' ')
        .toLowerCase();

      const matchesText = textToSearch.includes(normalizedQuery);
      const priceValues = item.sizePrices
        ? [item.sizePrices.m, item.sizePrices.g]
        : [item.price];
      const matchesPrice = priceValues.some(
        (price) =>
          price.toString().includes(normalizedQuery) ||
          (hasNumericQuery && price === normalizedNumber)
      );

      return matchesText || matchesPrice;
    });
  }, [activeCategory, searchQuery]);

  const groupedItems = useMemo(() => {
    if (activeCategory !== 'all') {
      return { [activeCategory]: filteredItems };
    }
    
    const groups: Record<string, typeof menuItems> = {};
    categories.forEach((cat) => {
      const items = filteredItems.filter((item) => item.category === cat.id);
      if (items.length > 0) {
        groups[cat.id] = items;
      }
    });
    return groups;
  }, [activeCategory, filteredItems]);

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category?.name[language] || categoryId;
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category?.icon || '🍽️';
  };

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header onCartClick={() => setIsCartOpen(true)} />
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="mx-auto max-w-4xl px-4 pb-24 pt-6">
        <div className="mb-6">
          <div className="relative">
            <Search className={`pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
            <Input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={t('searchPlaceholder')}
              className={`h-11 rounded-xl border-border bg-card shadow-sm ${isRTL ? 'pr-9 pl-10 text-right' : 'pl-9 pr-10'}`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label={t('clearSearch')}
                className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground ${isRTL ? 'left-3' : 'right-3'}`}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {Object.entries(groupedItems).map(([categoryId, items]) => (
          <motion.section
            key={categoryId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-10"
          >
            {/* Category Header */}
            <div className={`mb-6 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-3xl">{getCategoryIcon(categoryId)}</span>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {getCategoryName(categoryId)}
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Menu Items Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <MenuItem item={item} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {filteredItems.length === 0 && (
          <div className={`rounded-xl border border-border bg-card p-8 text-center text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('noResults')}
          </div>
        )}
      </main>

      <FloatingCartButton onClick={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
