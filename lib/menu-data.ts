export type Language = 'fr' | 'ar';
export type PizzaSize = 'm' | 'g';

export interface LocalizedText {
  fr: string;
  ar: string;
}

export interface MenuItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  price: number;
  sizePrices?: Record<PizzaSize, number>;
  category: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: LocalizedText;
  icon: string;
}

export const categories: Category[] = [
  { id: 'pizza', name: { fr: 'Pizza', ar: 'بيتزا' }, icon: '🍕' },
  { id: 'entrees', name: { fr: 'Entrées', ar: 'المقبلات' }, icon: '🥗' },
  { id: 'burgers', name: { fr: 'Burgers', ar: 'برغر' }, icon: '🍔' },
  { id: 'tacos', name: { fr: 'Tacos', ar: 'تاكوس' }, icon: '🌮' },
  { id: 'pasticcio', name: { fr: 'Pasticcio', ar: 'باستيتشيو' }, icon: '🍝' },
  { id: 'sandwichs', name: { fr: 'Sandwichs', ar: 'ساندويتشات' }, icon: '🥪' },
  { id: 'baguetto', name: { fr: 'Baguetto', ar: 'باجيتو' }, icon: '🥖' },
  { id: 'burritos', name: { fr: 'Burritos', ar: 'بوريتو' }, icon: '🌯' },
  { id: 'pates', name: { fr: 'Pâtes', ar: 'معكرونة' }, icon: '🍝' },
  { id: 'plats', name: { fr: 'Plats', ar: 'الأطباق الرئيسية' }, icon: '🍽️' },
];

export const menuItems: MenuItem[] = [
  // Pizza
  {
    id: 'pizza-margarita',
    name: { fr: 'Margarita', ar: 'مارغريتا' },
    description: { 
      fr: 'Sauce tomate, mozzarella, parmesan, basilic', 
      ar: 'صلصة طماطم، موزاريلا، بارميزان، ريحان' 
    },
    price: 27,
    sizePrices: { m: 27, g: 39 },
    category: 'pizza',
    isPopular: true,
  },
  {
    id: 'pizza-tonno',
    name: { fr: 'Al Tonno', ar: 'التونة' },
    description: { 
      fr: 'Sauce tomate, mozzarella, thon, olives noires, oignon, origan', 
      ar: 'صلصة طماطم، موزاريلا، تونة، زيتون أسود، بصل، أوريغانو' 
    },
    price: 39,
    sizePrices: { m: 39, g: 50 },
    category: 'pizza',
  },
  {
    id: 'pizza-pollo',
    name: { fr: 'Al Pollo', ar: 'الدجاج' },
    description: { 
      fr: 'Sauce tomate, mozzarella, poulet, champignons, poivron', 
      ar: 'صلصة طماطم، موزاريلا، دجاج، فطر، فلفل' 
    },
    price: 39,
    sizePrices: { m: 39, g: 50 },
    category: 'pizza',
  },
  {
    id: 'pizza-vegetarienne',
    name: { fr: 'Végétarienne', ar: 'نباتية' },
    description: { 
      fr: 'Sauce tomate, mozzarella, légumes grillés, tomates cerises, champignon', 
      ar: 'صلصة طماطم، موزاريلا، خضار مشوية، طماطم كرزية، فطر' 
    },
    price: 39,
    sizePrices: { m: 39, g: 49 },
    category: 'pizza',
  },
  {
    id: 'pizza-carbonara',
    name: { fr: 'Carbonara', ar: 'كاربونارا' },
    description: { 
      fr: 'Sauce blanche, mozzarella, parmesan, jambon, jaune d\'œuf', 
      ar: 'صلصة بيضاء، موزاريلا، بارميزان، لحم مقدد، صفار بيض' 
    },
    price: 39,
    sizePrices: { m: 39, g: 50 },
    category: 'pizza',
  },
  {
    id: 'pizza-bolognaise',
    name: { fr: 'Bolognaise', ar: 'بولونيز' },
    description: { 
      fr: 'Sauce tomate, mozzarella, viande hachée, poivron, champignon', 
      ar: 'صلصة طماطم، موزاريلا، لحم مفروم، فلفل، فطر' 
    },
    price: 44,
    sizePrices: { m: 44, g: 55 },
    category: 'pizza',
    isPopular: true,
  },
  {
    id: 'pizza-4-fromages',
    name: { fr: '4 Fromages', ar: '4 أجبان' },
    description: { 
      fr: 'Sauce blanche, mozzarella, emmental, roquefort, parmesan', 
      ar: 'صلصة بيضاء، موزاريلا، إيمنتال، روكفور، بارميزان' 
    },
    price: 44,
    sizePrices: { m: 44, g: 55 },
    category: 'pizza',
    isPopular: true,
  },
  {
    id: 'pizza-4-saisons',
    name: { fr: '4 Saisons', ar: '4 مواسم' },
    description: { 
      fr: 'Sauce tomate, mozzarella, poulet, viande hachée, fruits de mer, thon, champignon, poivron', 
      ar: 'صلصة طماطم، موزاريلا، دجاج، لحم مفروم، ثمار البحر، تونة، فطر، فلفل' 
    },
    price: 49,
    sizePrices: { m: 49, g: 60 },
    category: 'pizza',
  },
  {
    id: 'pizza-fruits-de-mer',
    name: { fr: 'Fruits de Mer', ar: 'ثمار البحر' },
    description: { 
      fr: 'Sauce tomate, mozzarella, calamars, gambas, moules, champignon, poivron', 
      ar: 'صلصة طماطم، موزاريلا، كاليماري، جمبري، بلح البحر، فطر، فلفل' 
    },
    price: 49,
    sizePrices: { m: 49, g: 66 },
    category: 'pizza',
  },
  {
    id: 'pizza-saumon',
    name: { fr: 'Al Salamon', ar: 'السلمون' },
    description: { 
      fr: 'Sauce blanche, saumon fumé, roquette, tomates cerises, stracciatella', 
      ar: 'صلصة بيضاء، سلمون مدخن، جرجير، طماطم كرزية، ستراتشياتيلا' 
    },
    price: 49,
    sizePrices: { m: 49, g: 60 },
    category: 'pizza',
  },

  // Entrées
  {
    id: 'salade-cesar',
    name: { fr: 'Salade César', ar: 'سلطة سيزر' },
    description: { 
      fr: 'Salade romaine, poulet pané, tomate cerise, œuf, croûton, parmesan, sauce César, anchois', 
      ar: 'خس روماني، دجاج مقلي، طماطم كرزية، بيض، خبز محمص، بارميزان، صلصة سيزر، أنشوجة' 
    },
    price: 35,
    category: 'entrees',
    isPopular: true,
  },
  {
    id: 'salade-gourmande',
    name: { fr: 'Salade Gourmande', ar: 'سلطة شهية' },
    description: { 
      fr: 'Mesclun, concombre, olive noirs, tomates cerises, œuf, mozzarella, pomme de terre, riz, haricots vert, thon, maïs', 
      ar: 'خضار مشكلة، خيار، زيتون أسود، طماطم كرزية، بيض، موزاريلا، بطاطس، أرز، فاصوليا خضراء، تونة، ذرة' 
    },
    price: 35,
    category: 'entrees',
  },
  {
    id: 'salade-be-chef',
    name: { fr: 'Salade Be Chef', ar: 'سلطة بي شيف' },
    description: { 
      fr: 'Mesclun, poulet, mozzarella fraîche, avocats, mangue, tomate, concombre, oignons', 
      ar: 'خضار مشكلة، دجاج، موزاريلا طازجة، أفوكادو، مانجو، طماطم، خيار، بصل' 
    },
    price: 45,
    category: 'entrees',
  },
  {
    id: 'salade-quinoa',
    name: { fr: 'Salade Quinoa', ar: 'سلطة الكينوا' },
    description: { 
      fr: 'Quinoa, crevette, mangue, avocat, concombre, salade', 
      ar: 'كينوا، جمبري، مانجو، أفوكادو، خيار، سلطة' 
    },
    price: 49,
    category: 'entrees',
  },
  {
    id: 'salade-fruits-de-mer',
    name: { fr: 'Salade Fruits de Mer', ar: 'سلطة ثمار البحر' },
    description: { 
      fr: 'Gambas, calamar, moules, avocat, tomates cerises, maïs', 
      ar: 'جمبري، كاليماري، بلح البحر، أفوكادو، طماطم كرزية، ذرة' 
    },
    price: 55,
    category: 'entrees',
  },
  {
    id: 'mozzarella-sticks',
    name: { fr: 'Mozzarella Sticks', ar: 'أصابع الموزاريلا' },
    description: { 
      fr: 'Mozzarella panée, sauce tomate napolitaine', 
      ar: 'موزاريلا مقلية، صلصة طماطم نابوليتان' 
    },
    price: 25,
    category: 'entrees',
  },
  {
    id: 'parmigiana',
    name: { fr: 'La Parmigiana', ar: 'البارميجيانا' },
    description: { 
      fr: 'Aubergine, sauce tomate, mozzarella, parmesan, basilic', 
      ar: 'باذنجان، صلصة طماطم، موزاريلا، بارميزان، ريحان' 
    },
    price: 30,
    category: 'entrees',
  },
  {
    id: 'cassolette-gambas',
    name: { fr: 'Cassolette de Gambas', ar: 'طاجن الجمبري' },
    description: { 
      fr: 'Gambas, pomme de terre, tomates cerises, olive noir, basilic, piment fort, sauce provençale', 
      ar: 'جمبري، بطاطس، طماطم كرزية، زيتون أسود، ريحان، فلفل حار، صلصة بروفانسال' 
    },
    price: 35,
    category: 'entrees',
  },

  // Burgers
  {
    id: 'cheese-burger',
    name: { fr: 'Cheese Burger', ar: 'تشيز برغر' },
    description: { 
      fr: 'Steak haché, cheddar, sauce cocktail, salade, tomate, oignon, cornichon', 
      ar: 'ستيك مفروم، شيدر، صلصة كوكتيل، سلطة، طماطم، بصل، مخلل' 
    },
    price: 39,
    category: 'burgers',
    isPopular: true,
  },
  {
    id: 'caprese-burger',
    name: { fr: 'Caprese Burger', ar: 'برغر كابريزي' },
    description: { 
      fr: 'Pesto, steak haché, mozzarella fraîche, tomate, crème balsamique', 
      ar: 'بيستو، ستيك مفروم، موزاريلا طازجة، طماطم، كريمة بلسمية' 
    },
    price: 49,
    category: 'burgers',
  },
  {
    id: 'burger-be-chef',
    name: { fr: 'Burger Be Chef', ar: 'برغر بي شيف' },
    description: { 
      fr: 'Steak haché, cheddar, sauce maison, oignons caramélisés, jambon de bœuf, oignons crispy', 
      ar: 'ستيك مفروم، شيدر، صلصة خاصة، بصل مكرمل، لحم بقري، بصل مقرمش' 
    },
    price: 45,
    category: 'burgers',
    isPopular: true,
  },
  {
    id: 'fries-chicken-burger',
    name: { fr: 'Fries Chicken Burger', ar: 'برغر الدجاج المقلي' },
    description: { 
      fr: 'Poulet crispy, cheddar, sauce maison, salade, tomate, cornichon, oignons crispy', 
      ar: 'دجاج مقرمش، شيدر، صلصة خاصة، سلطة، طماطم، مخلل، بصل مقرمش' 
    },
    price: 49,
    category: 'burgers',
  },
  {
    id: 'dragon-burger',
    name: { fr: 'Dragon Burger', ar: 'برغر التنين' },
    description: { 
      fr: 'Poulet crispy, mozza stick, salade, tomate, oignon, sauce honey master', 
      ar: 'دجاج مقرمش، أصابع موزاريلا، سلطة، طماطم، بصل، صلصة العسل' 
    },
    price: 46,
    category: 'burgers',
  },
  {
    id: 'dynamite-dragon-burger',
    name: { fr: 'Dynamite Dragon Burger', ar: 'برغر التنين الديناميت' },
    description: { 
      fr: 'Poulet Dynamite, cheddar, sauce dynamite, coleslaw, jalapeño, jambon de bœuf, oignons crispy', 
      ar: 'دجاج ديناميت، شيدر، صلصة ديناميت، كول سلو، هالابينو، لحم بقري، بصل مقرمش' 
    },
    price: 52,
    category: 'burgers',
  },
  {
    id: 'double-cheese-burger',
    name: { fr: 'Double Cheese Burger', ar: 'دابل تشيز برغر' },
    description: { 
      fr: 'Double steak haché, 2 cheddar, sauce cocktail, salade, tomate, oignon, cornichon', 
      ar: 'ستيك مفروم مزدوج، 2 شيدر، صلصة كوكتيل، سلطة، طماطم، بصل، مخلل' 
    },
    price: 53,
    category: 'burgers',
  },

  // Tacos
  {
    id: 'tacos-nuggets',
    name: { fr: 'Tacos Nuggets', ar: 'تاكوس ناغتس' },
    description: { 
      fr: 'Nuggets, frites, fromage', 
      ar: 'ناغتس، بطاطس مقلية، جبن' 
    },
    price: 35,
    category: 'tacos',
  },
  {
    id: 'tacos-french',
    name: { fr: 'Tacos French', ar: 'تاكوس فرنسي' },
    description: { 
      fr: 'Poulet mariné, frites, fromage, sauce curry', 
      ar: 'دجاج متبل، بطاطس مقلية، جبن، صلصة كاري' 
    },
    price: 36,
    category: 'tacos',
    isPopular: true,
  },
  {
    id: 'tacos-viande-hachee',
    name: { fr: 'Tacos Viande Hachée', ar: 'تاكوس لحم مفروم' },
    description: { 
      fr: 'Viande hachée, frites, fromage', 
      ar: 'لحم مفروم، بطاطس مقلية، جبن' 
    },
    price: 40,
    category: 'tacos',
  },
  {
    id: 'tacos-special',
    name: { fr: 'Tacos Spécial', ar: 'تاكوس خاص' },
    description: { 
      fr: 'Poulet mariné, champignon, frites, sauce fromagère', 
      ar: 'دجاج متبل، فطر، بطاطس مقلية، صلصة جبن' 
    },
    price: 40,
    category: 'tacos',
  },
  {
    id: 'tacos-crispy',
    name: { fr: 'Tacos Crispy', ar: 'تاكوس كريسبي' },
    description: { 
      fr: 'Poulet crispy, frites, fromage', 
      ar: 'دجاج مقرمش، بطاطس مقلية، جبن' 
    },
    price: 42,
    category: 'tacos',
  },
  {
    id: 'tacos-cordon-bleu',
    name: { fr: 'Tacos Cordon Bleu', ar: 'تاكوس كوردون بلو' },
    description: { 
      fr: 'Cordon bleu, frites, fromage', 
      ar: 'كوردون بلو، بطاطس مقلية، جبن' 
    },
    price: 45,
    category: 'tacos',
  },
  {
    id: 'tacos-mixte',
    name: { fr: 'Tacos Mixte', ar: 'تاكوس ميكس' },
    description: { 
      fr: 'Poulet mariné, viande hachée, frites, fromage', 
      ar: 'دجاج متبل، لحم مفروم، بطاطس مقلية، جبن' 
    },
    price: 45,
    category: 'tacos',
    isPopular: true,
  },
  {
    id: 'tacos-gratinee',
    name: { fr: 'Tacos Gratinée', ar: 'تاكوس غراتان' },
    description: { 
      fr: 'Poulet crispy, frites, fromage, dinde fumée, mozzarella', 
      ar: 'دجاج مقرمش، بطاطس مقلية، جبن، ديك رومي مدخن، موزاريلا' 
    },
    price: 45,
    category: 'tacos',
  },
  {
    id: 'tacos-be-chef',
    name: { fr: 'Tacos Be Chef', ar: 'تاكوس بي شيف' },
    description: { 
      fr: 'Cordon bleu, viande hachée, frites, fromage', 
      ar: 'كوردون بلو، لحم مفروم، بطاطس مقلية، جبن' 
    },
    price: 49,
    category: 'tacos',
  },

  // Pasticcio
  {
    id: 'pasticcio-poulet',
    name: { fr: 'Pasticcio Poulet', ar: 'باستيتشيو دجاج' },
    description: { 
      fr: 'Poulet, frites, champignon, mozzarella, crème fraîche', 
      ar: 'دجاج، بطاطس مقلية، فطر، موزاريلا، كريمة طازجة' 
    },
    price: 36,
    category: 'pasticcio',
    isPopular: true,
  },
  {
    id: 'pasticcio-charcuterie',
    name: { fr: 'Pasticcio Charcuterie', ar: 'باستيتشيو شاركوتري' },
    description: { 
      fr: 'Dinde fumée, frites, champignon, mozzarella, crème fraîche', 
      ar: 'ديك رومي مدخن، بطاطس مقلية، فطر، موزاريلا، كريمة طازجة' 
    },
    price: 36,
    category: 'pasticcio',
  },
  {
    id: 'pasticcio-viande-hachee',
    name: { fr: 'Pasticcio Viande Hachée', ar: 'باستيتشيو لحم مفروم' },
    description: { 
      fr: 'Viande hachée, frites, champignon, mozzarella, crème fraîche', 
      ar: 'لحم مفروم، بطاطس مقلية، فطر، موزاريلا، كريمة طازجة' 
    },
    price: 40,
    category: 'pasticcio',
  },
  {
    id: 'pasticcio-mixte',
    name: { fr: 'Pasticcio Mixte', ar: 'باستيتشيو ميكس' },
    description: { 
      fr: 'Poulet, viande hachée, frites, champignons, mozzarella, crème fraîche', 
      ar: 'دجاج، لحم مفروم، بطاطس مقلية، فطر، موزاريلا، كريمة طازجة' 
    },
    price: 44,
    category: 'pasticcio',
  },
  {
    id: 'pasticcio-fruits-de-mer',
    name: { fr: 'Pasticcio Fruits de Mer', ar: 'باستيتشيو ثمار البحر' },
    description: { 
      fr: 'Crevette, calamar, moule, frites, champignon, mozzarella, crème fraîche', 
      ar: 'جمبري، كاليماري، بلح البحر، بطاطس مقلية، فطر، موزاريلا، كريمة طازجة' 
    },
    price: 50,
    category: 'pasticcio',
  },

  // Sandwichs
  {
    id: 'chicken-cheese',
    name: { fr: 'Chicken Cheese', ar: 'تشيكن تشيز' },
    description: { 
      fr: 'Poulet mariné, mozzarella, poivron sauté, tomate, oignon, sauce maison', 
      ar: 'دجاج متبل، موزاريلا، فلفل مشوي، طماطم، بصل، صلصة خاصة' 
    },
    price: 36,
    category: 'sandwichs',
  },
  {
    id: 'mixte-cheese',
    name: { fr: 'Mixte Cheese', ar: 'ميكس تشيز' },
    description: { 
      fr: 'Poulet, viande hachée, mozzarella, poivron sauté, tomate, oignon, sauce maison', 
      ar: 'دجاج، لحم مفروم، موزاريلا، فلفل مشوي، طماطم، بصل، صلصة خاصة' 
    },
    price: 40,
    category: 'sandwichs',
  },
  {
    id: 'crispy-sandwich',
    name: { fr: 'Crispy', ar: 'كريسبي' },
    description: { 
      fr: 'Poulet crispy, oignon crispy, cheddar, tomate, salade, sauce cheddar', 
      ar: 'دجاج مقرمش، بصل مقرمش، شيدر، طماطم، سلطة، صلصة شيدر' 
    },
    price: 40,
    category: 'sandwichs',
  },
  {
    id: 'signature',
    name: { fr: 'Signature', ar: 'سيجناتشر' },
    description: { 
      fr: 'Viande hachée, dinde fumée, cheddar, oignon caramélisé, oignon crispy, sauce maison', 
      ar: 'لحم مفروم، ديك رومي مدخن، شيدر، بصل مكرمل، بصل مقرمش، صلصة خاصة' 
    },
    price: 45,
    category: 'sandwichs',
  },
  {
    id: 'croustydwitch',
    name: { fr: 'Croustydwitch', ar: 'كرستيدويتش' },
    description: { 
      fr: 'Viande hachée, galette de pomme de terre, fromage, tomate, salade, oignon, sauce maison', 
      ar: 'لحم مفروم، قرص بطاطس، جبن، طماطم، سلطة، بصل، صلصة خاصة' 
    },
    price: 46,
    category: 'sandwichs',
  },
  {
    id: 'radical',
    name: { fr: 'Radical', ar: 'راديكال' },
    description: { 
      fr: 'Cordon bleu, viande hachée, sauce cheddar, tomate, salade, oignon, sauce maison', 
      ar: 'كوردون بلو، لحم مفروم، صلصة شيدر، طماطم، سلطة، بصل، صلصة خاصة' 
    },
    price: 48,
    category: 'sandwichs',
  },

  // Burritos
  {
    id: 'burrito-poulet',
    name: { fr: 'Burrito Poulet', ar: 'بوريتو دجاج' },
    description: { 
      fr: 'Poulet mariné, fromage, sauce maison, tomate, oignons, poivrons, maïs, riz', 
      ar: 'دجاج متبل، جبن، صلصة خاصة، طماطم، بصل، فلفل، ذرة، أرز' 
    },
    price: 39,
    category: 'burritos',
    isPopular: true,
  },
  {
    id: 'burrito-mixte',
    name: { fr: 'Burrito Mixte', ar: 'بوريتو ميكس' },
    description: { 
      fr: 'Poulet mariné, steak haché, sauce maison, salade, tomate, oignons, fromage, maïs, riz', 
      ar: 'دجاج متبل، ستيك مفروم، صلصة خاصة، سلطة، طماطم، بصل، جبن، ذرة، أرز' 
    },
    price: 40,
    category: 'burritos',
  },
  {
    id: 'fries-chicken-burrito',
    name: { fr: 'Fries Chicken Burrito', ar: 'بوريتو دجاج مقلي' },
    description: { 
      fr: 'Tendres crispy, sauce maison, salade, tomate, oignons, fromage, maïs, riz', 
      ar: 'دجاج مقرمش، صلصة خاصة، سلطة، طماطم، بصل، جبن، ذرة، أرز' 
    },
    price: 42,
    category: 'burritos',
  },
  {
    id: 'burrito-boeuf',
    name: { fr: 'Burrito Bœuf', ar: 'بوريتو لحم بقري' },
    description: { 
      fr: 'Steak haché, sauce maison, oignons, tomate, poivron, fromage, maïs, riz', 
      ar: 'ستيك مفروم، صلصة خاصة، بصل، طماطم، فلفل، جبن، ذرة، أرز' 
    },
    price: 45,
    category: 'burritos',
  },

  // Baguettos
  {
    id: 'baguetto-poulet',
    name: { fr: 'Baguetto Poulet', ar: 'باجيتو دجاج' },
    description: { 
      fr: 'Poulet, mozzarella, poivron, sauce maison', 
      ar: 'دجاج، موزاريلا، فلفل، صلصة خاصة' 
    },
    price: 39,
    category: 'baguetto',
  },
  {
    id: 'baguetto-viande-hachee',
    name: { fr: 'Baguetto Viande Hachée', ar: 'باجيتو لحم مفروم' },
    description: { 
      fr: 'Viande hachée, mozzarella, poivron, sauce maison', 
      ar: 'لحم مفروم، موزاريلا، فلفل، صلصة خاصة' 
    },
    price: 45,
    category: 'baguetto',
  },
  {
    id: 'baguetto-cordon-bleu',
    name: { fr: 'Baguetto Cordon Bleu', ar: 'باجيتو كوردون بلو' },
    description: { 
      fr: 'Cordon bleu, mozzarella, poivron, sauce maison', 
      ar: 'كوردون بلو، موزاريلا، فلفل، صلصة خاصة' 
    },
    price: 47,
    category: 'baguetto',
  },
  {
    id: 'baguetto-be-chef',
    name: { fr: 'Baguetto Be Chef', ar: 'باجيتو بي شيف' },
    description: { 
      fr: 'Poulet crispy, viande hachée, dinde fumée, mozzarella, poivron', 
      ar: 'دجاج مقرمش، لحم مفروم، ديك رومي مدخن، موزاريلا، فلفل' 
    },
    price: 49,
    category: 'baguetto',
  },

  // Pâtes
  {
    id: 'spaghetti-tonno',
    name: { fr: 'Spaghetti Al Tonno', ar: 'سباغيتي التونة' },
    description: { 
      fr: 'Sauce tomate, thon, olive, câpres, parmesan, origan', 
      ar: 'صلصة طماطم، تونة، زيتون، كبر، بارميزان، أوريغانو' 
    },
    price: 40,
    category: 'pates',
  },
  {
    id: 'penne-pollo',
    name: { fr: 'Penne Al Pollo', ar: 'بيني الدجاج' },
    description: { 
      fr: 'Sauce blanche, poulet, champignon, parmesan', 
      ar: 'صلصة بيضاء، دجاج، فطر، بارميزان' 
    },
    price: 40,
    category: 'pates',
  },
  {
    id: 'spaghetti-bolognaise',
    name: { fr: 'Spaghetti Bolognaise', ar: 'سباغيتي بولونيز' },
    description: { 
      fr: 'Sauce tomate, viande hachée, parmesan, basilic', 
      ar: 'صلصة طماطم، لحم مفروم، بارميزان، ريحان' 
    },
    price: 45,
    category: 'pates',
    isPopular: true,
  },
  {
    id: 'penne-carbonara',
    name: { fr: 'Penne Carbonara', ar: 'بيني كاربونارا' },
    description: { 
      fr: 'Sauce blanche, jambon, jaune d\'œuf, origan, parmesan', 
      ar: 'صلصة بيضاء، لحم مقدد، صفار بيض، أوريغانو، بارميزان' 
    },
    price: 45,
    category: 'pates',
  },
  {
    id: 'tagliatelles-saumon',
    name: { fr: 'Tagliatelles Saumon Fumé', ar: 'تالياتيلي السلمون المدخن' },
    description: { 
      fr: 'Sauce rosée, saumon fumé, parmesan', 
      ar: 'صلصة وردية، سلمون مدخن، بارميزان' 
    },
    price: 55,
    category: 'pates',
  },
  {
    id: 'risotto-fruits-de-mer',
    name: { fr: 'Risotto Fruits de Mer', ar: 'ريزوتو ثمار البحر' },
    description: { 
      fr: 'Riz, fruits de mer, crème, bisque, champignon de Paris', 
      ar: 'أرز، ثمار البحر، كريمة، بيسك، فطر باريسي' 
    },
    price: 59,
    category: 'pates',
  },
  {
    id: 'tagliatelles-fruits-de-mer',
    name: { fr: 'Tagliatelles Fruits de Mer', ar: 'تالياتيلي ثمار البحر' },
    description: { 
      fr: 'Sauce blanche, bisque, gambas, moules, calamar, champignon', 
      ar: 'صلصة بيضاء، بيسك، جمبري، بلح البحر، كاليماري، فطر' 
    },
    price: 60,
    category: 'pates',
  },

  // Plats
  {
    id: 'poulet-signature',
    name: { fr: 'Poulet Signature', ar: 'دجاج سيجناتشر' },
    description: { 
      fr: 'Escalope marinée, poivrons, champignons, épinards, mozzarella', 
      ar: 'إسكالوب متبل، فلفل، فطر، سبانخ، موزاريلا' 
    },
    price: 55,
    category: 'plats',
  },
  {
    id: 'cordon-bleu-plat',
    name: { fr: 'Cordon Bleu', ar: 'كوردون بلو' },
    description: { 
      fr: 'Poulet, haché, bacon de bœuf, cheddar, sauce fromage', 
      ar: 'دجاج، لحم مفروم، لحم بقري، شيدر، صلصة جبن' 
    },
    price: 59,
    category: 'plats',
  },
  {
    id: 'poulet-parmigiana',
    name: { fr: 'Poulet à la Parmigiana', ar: 'دجاج بارميجيانا' },
    description: { 
      fr: 'Escalope milanaise, sauce tomate, mozzarella, basilic, parmesan, origan, sauce pesto', 
      ar: 'إسكالوب ميلانيز، صلصة طماطم، موزاريلا، ريحان، بارميزان، أوريغانو، صلصة بيستو' 
    },
    price: 55,
    category: 'plats',
    isPopular: true,
  },
  {
    id: 'poulet-creme-champignon',
    name: { fr: 'Poulet Crème Champignon', ar: 'دجاج بكريمة الفطر' },
    description: { 
      fr: 'Blanc de poulet, sauce champignon, purée mousseline', 
      ar: 'صدر دجاج، صلصة فطر، بوريه موسلين' 
    },
    price: 59,
    category: 'plats',
  },
];

export const translations = {
  fr: {
    restaurantName: 'Be Chef',
    tagline: 'Restaurant & Grill',
    menu: 'Menu',
    cart: 'Panier',
    emptyCart: 'Votre panier est vide',
    total: 'Total',
    currency: 'DH',
    addToCart: 'Ajouter',
    orderViaWhatsApp: 'Commander via WhatsApp',
    chooseLanguage: 'Choisissez votre langue',
    popular: 'Populaire',
    all: 'Tout',
    orderMessage: 'Bonjour, je veux commander:',
    totalMessage: 'Total',
    close: 'Fermer',
    items: 'articles',
    removeItem: 'Retirer',
    size: 'Format',
    searchPlaceholder: 'Rechercher par catégorie, nom, description ou prix...',
    noResults: 'Aucun plat ne correspond à votre recherche.',
    clearSearch: 'Effacer la recherche',
  },
  ar: {
    restaurantName: 'بي شيف',
    tagline: 'مطعم ومشويات',
    menu: 'القائمة',
    cart: 'السلة',
    emptyCart: 'سلتك فارغة',
    total: 'المجموع',
    currency: 'درهم',
    addToCart: 'أضف',
    orderViaWhatsApp: 'اطلب عبر واتساب',
    chooseLanguage: 'اختر لغتك',
    popular: 'شائع',
    all: 'الكل',
    orderMessage: 'مرحبا، أريد طلب:',
    totalMessage: 'المجموع',
    close: 'إغلاق',
    items: 'عناصر',
    removeItem: 'إزالة',
    size: 'الحجم',
    searchPlaceholder: 'ابحث بالفئة أو الاسم أو الوصف أو السعر...',
    noResults: 'لا توجد وجبات تطابق بحثك.',
    clearSearch: 'مسح البحث',
  },
};

export const WHATSAPP_PHONE = '212649321580';
