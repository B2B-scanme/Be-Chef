'use client';

import { X, Minus, Plus, Trash2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/language-context';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { language, t, isRTL } = useLanguage();
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
  const WHATSAPP_PHONE = '212670239965';

  const getSizeSuffix = (size?: string) => (size ? ` (${size.toUpperCase()})` : '');

  const generateWhatsAppMessage = () => {
    let message = 'Bonjour, je veux commander:' + '\n\n';
    items.forEach((item) => {
      message += `- ${item.name.fr}${getSizeSuffix(item.size)} x${item.quantity} = ${item.price * item.quantity} DH\n`;
    });
    message += `\nTotal: ${totalPrice} DH`;
    return message;
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed inset-x-0 bottom-0 z-50 max-h-[85vh] rounded-t-3xl bg-card shadow-2xl ${isRTL ? 'rtl' : 'ltr'}`}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3">
              <div className="h-1.5 w-12 rounded-full bg-muted-foreground/30" />
            </div>

            {/* Header */}
            <div className={`flex items-center justify-between border-b border-border px-6 py-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h2 className="font-serif text-xl font-semibold text-foreground">{t('cart')}</h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="max-h-[50vh] overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 rounded-full bg-muted p-4">
                    <MessageCircle className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground">{t('emptyCart')}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className={`flex items-center gap-4 rounded-xl bg-muted/50 p-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <h4 className="font-medium text-foreground">
                          {item.name[language]}
                        </h4>
                        {item.size && (
                          <p className="text-xs text-muted-foreground">
                            {t('size')}: {item.size.toUpperCase()}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {item.price} {t('currency')}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-semibold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className={`w-20 font-semibold text-primary ${isRTL ? 'text-left' : 'text-right'}`}>
                        {item.price * item.quantity} {t('currency')}
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="rounded-full p-2 text-destructive transition-colors hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-4">
                {/* Total */}
                <div className={`mb-4 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-lg font-medium text-foreground">{t('total')}</span>
                  <span className="text-2xl font-bold text-primary">
                    {totalPrice} {t('currency')}
                  </span>
                </div>

                {/* WhatsApp Button */}
                <Button
                  onClick={handleWhatsAppOrder}
                  className={`w-full gap-3 bg-[#25D366] text-white hover:bg-[#128C7E] ${isRTL ? 'flex-row-reverse' : ''}`}
                  size="lg"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t('orderViaWhatsApp')}
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

