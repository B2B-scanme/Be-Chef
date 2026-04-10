'use client';

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/context/language-context';
import { categories } from '@/lib/menu-data';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  const { language, t, isRTL } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Scroll active category into view
  useEffect(() => {
    const activeButton = buttonRefs.current.get(activeCategory);
    if (activeButton && scrollRef.current) {
      const container = scrollRef.current;
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (buttonRect.left < containerRect.left || buttonRect.right > containerRect.right) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-[61px] z-20 border-b border-border bg-card/95 backdrop-blur-md">
      <div
        ref={scrollRef}
        className={`mx-auto flex max-w-4xl gap-2 overflow-x-auto px-4 py-3 scrollbar-hide ${isRTL ? 'flex-row-reverse' : ''}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* All Category */}
        <button
          ref={(el) => {
            if (el) buttonRefs.current.set('all', el);
          }}
          onClick={() => onCategoryChange('all')}
          className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
          } ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <span>🍽️</span>
          <span>{t('all')}</span>
        </button>

        {/* Categories */}
        {categories.map((category) => (
          <button
            key={category.id}
            ref={(el) => {
              if (el) buttonRefs.current.set(category.id, el);
            }}
            onClick={() => onCategoryChange(category.id)}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            } ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <span>{category.icon}</span>
            <span>{category.name[language]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
