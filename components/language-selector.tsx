'use client';

import { useLanguage } from '@/context/language-context';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function LanguageSelector() {
  const { setLanguage, hasSelectedLanguage } = useLanguage();

  if (hasSelectedLanguage) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f5f0e6] px-6"
    >
      {/* Logo Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
        className="relative mb-6"
      >
        {/* Logo */}
        <div className="relative flex h-24 w-56 items-center justify-center overflow-hidden rounded-2xl shadow-lg md:h-28 md:w-64">
          <Image
            src="/images/logoo.png"
            alt="Be Chef Logo"
            width={144}
            height={144}
            className="h-full w-full object-contain p-1"
            priority
          />
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-1 text-center text-xs font-medium uppercase tracking-[0.25em] text-[#6b6b6b]"
      >
        Restaurant & Grill
      </motion.p>

      {/* Decorative Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mb-8 flex items-center gap-2"
      >
        <div className="h-px w-8 bg-[#d4cfc4]" />
        <div className="h-1.5 w-1.5 rotate-45 bg-[#8B0000]" />
        <div className="h-px w-8 bg-[#d4cfc4]" />
      </motion.div>

      {/* Language Selection Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mb-6 text-center"
      >
        <p className="text-lg font-medium text-[#1a1a1a]">
          Choisissez votre langue
        </p>
        <p 
          className="mt-1 text-sm text-[#8B0000]"
          dir="rtl"
          style={{ fontFamily: 'var(--font-cairo), sans-serif' }}
        >
          اختر لغتك
        </p>
      </motion.div>

      {/* Language Cards - Cart Style */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-sm space-y-3"
      >
        {/* French Card */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setLanguage('fr')}
          className="group flex w-full items-center gap-4 rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-[#e8e2d6] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md hover:ring-[#8B0000]/30"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f0e6]">
            <span className="text-2xl">🇫🇷</span>
          </div>
          <div className="flex-1 text-left">
            <p className="text-base font-semibold text-[#1a1a1a]">
              Francais
            </p>
            <p className="text-xs text-[#6b6b6b]">
              Continuer en francais
            </p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B0000]/10 text-[#8B0000] transition-all group-hover:bg-[#8B0000] group-hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.button>

        {/* Arabic Card */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setLanguage('ar')}
          className="group flex w-full items-center gap-4 rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-[#e8e2d6] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-md hover:ring-[#8B0000]/30"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f0e6]">
            <span className="text-2xl">🇲🇦</span>
          </div>
          <div className="flex-1 text-left">
            <p 
              className="text-base font-semibold text-[#1a1a1a]"
              style={{ fontFamily: 'var(--font-cairo), sans-serif' }}
            >
              العربية
            </p>
            <p 
              className="text-xs text-[#6b6b6b]"
              style={{ fontFamily: 'var(--font-cairo), sans-serif' }}
            >
              المتابعة بالعربية
            </p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B0000]/10 text-[#8B0000] transition-all group-hover:bg-[#8B0000] group-hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.button>
      </motion.div>

      {/* Footer Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex items-center gap-1.5"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-[#8B0000]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#8B0000]/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#8B0000]/25" />
      </motion.div>
    </motion.div>
  );
}
