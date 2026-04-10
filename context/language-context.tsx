'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Language } from '@/lib/menu-data';
import { translations } from '@/lib/menu-data';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.fr) => string;
  isRTL: boolean;
  hasSelectedLanguage: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'bechef-language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'ar')) {
      setLanguageState(savedLanguage);
      setHasSelectedLanguage(true);
    }
    setIsHydrated(true);
  }, []);

  // Update document direction and language
  useEffect(() => {
    if (isHydrated) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language, isHydrated]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setHasSelectedLanguage(true);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }, []);

  const t = useCallback(
    (key: keyof typeof translations.fr) => {
      return translations[language][key];
    },
    [language]
  );

  const isRTL = language === 'ar';

  // Don't render children until hydrated
  if (!isHydrated) {
    return null;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isRTL,
        hasSelectedLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
