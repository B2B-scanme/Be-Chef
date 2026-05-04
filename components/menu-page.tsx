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
import { HorizontalImageScroller } from '@/components/horizontal-image-scroller';
import { Input } from '@/components/ui/input';

const defaultCategoryGallery = [
  { src: '/images/1.jpeg', alt: 'Restaurant specialty dish' },
  { src: '/images/4.jpeg', alt: 'Freshly prepared meal' },
  { src: '/images/test.jpeg', alt: 'Chef special close up' },
];

const categoryGalleryById: Record<string, typeof defaultCategoryGallery> = {
  pizza: [
    { src: '/images/food/Pizza1.jpeg', alt: 'Pizza and table setting' },
    { src: '/images/neapolitan.jpeg', alt: 'Pizza and table setting' },
    { src: '/images/food/Pizza.jpeg', alt: 'Warm restaurant interior' },
  ],
  entrees: [
    { src: '/images/food/Salade.jpeg', alt: 'Starter plate in the restaurant' },
    { src: '/images/food/Entrees.jpeg', alt: 'Entree close up with garnish' },
    { src: '/images/food/Cassolette-de-Gambas.png', alt: 'Entree close up with garnish' },

  ],
  burgers: [
    { src: '/images/food/Burgers.jpg', alt: 'Burger style presentation' },
    { src: '/images/food/Burgers2.png', alt: 'Side and burger style serving' },
    { src: '/images/food/Burgers1.jpeg', alt: 'Restaurant burger atmosphere' },
  ],
  tacos: [
    { src: '/images/food/tacos.jpeg', alt: 'Tacos style colorful plate' },
    { src: '/images/food/tacos1.jpeg', alt: 'Tacos close up' },
  ],
  pasticcio: [
    { src: '/images/food/Pasticcio.png', alt: 'Pasticcio serving style' },
    { src: '/images/food/pasticcio.jpeg', alt: 'Hot baked pasta style plate' },
  ],
  sandwichs: [
    { src: '/images/food/sandwich.jpeg', alt: 'Sandwich style close up' },
    { src: '/images/food/sandwichs.jpeg', alt: 'Sandwich meal on table' },
  ],
  baguetto: [
    { src: '/images/food/Baguetto1.jpeg', alt: 'Baguette sandwich style photo' },
    { src: '/images/food/Baguetto.jpeg', alt: 'Baguette filling close up' },
    { src: '/images/food/Baguetto2.jpeg', alt: 'Baguette meal atmosphere' },
  ],
  burritos: [
    { src: '/images/food/Burritos.jpeg', alt: 'Burrito style plating' },
    { src: '/images/food/burritos1.jpeg', alt: 'Burrito with sides' },
  ],
  pates: [
    { src: '/images/food/pate.jpeg', alt: 'Pasta presentation on table' },
    { src: '/images/food/pate1.jpeg', alt: 'Pasta presentation on table' },
    { src: '/images/food/pates.jpeg', alt: 'Pasta close up with sauce' },
  ],
  plats: [
    { src: '/images/food/plates2.jpeg', alt: 'Main dish close up' },
    { src: '/images/food/Cordon-Bleu.jpeg', alt: 'Main course in restaurant' },
    { src: '/images/food/plats.jpeg', alt: 'Main dish close up' },
  ],
};

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

            <HorizontalImageScroller
              images={categoryGalleryById[categoryId] ?? defaultCategoryGallery}
              className="mb-6"
              cardClassName="h-44 sm:h-48"
              sizes="(max-width: 640px) 78vw, 320px"
            />

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
