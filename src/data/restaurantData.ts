import { ClassicMenuItem, Dish, Language, ReviewItem, ThaliExperience } from '../types';

export const IMAGES = {
  emblem:
    'https://lh3.googleusercontent.com/aida/AEtjO1XGHdWXEQYO0L_FCcE0b26Z_8k7uI3rIUXBr4MWm5RUX7fCY-7AQcSDG46u2myy8Un_5Q_Rc2pUafeA9TEoPaxaxOs36E63jiBdi5G7DtUlMFGC3Bjfx3orxX2xsDRKGnlzHqUgR67eVPbpHUlYh1_P-n6WDMoImrDLALdSSxmAb1FA-Faszr2zrNt3b4EUcZ7p903UdBhiFCowtRmROwOH4-CkvzUnPNjmSTIj8m3S',
  heroHearth:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCA9y_y4LiiMNZMG-fNuci2ir7DlvGFil_K1FM9DzV9aUPqUQofRi1SGPJ2TyR-OkKZO3DRQ1c2B7bAUxWz5Ac0vK9k_hGIhxVUYBGphW_Q2USxK3h--7c_BSem607agjOE7xCuxIZny4mQ52QQl942JYVGgWBQzMbLWpyP6StTeA2Hhirsm6oAog-aZCsAU4q27y6_81yWMXiAlYOrA3Z-ptTmvHgMEVCI_7QQ4P8',
  kansaFeast:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCEC-fFQUlW6I9gsflTpPBvc5UY6HPAN_en36mjsB8yLwthwLm8LrJ3zizhkxMNfSEH3gFoMVRSoT97cqd1XnqJc8amUaFx0aRwDOTC-rc7hvDpuzLU_Q0I1qyTKrQJg6tRuQgwuBsCrxJmo9PIpNjH1Pz4ZeZNA6tEeYIpmOlW3Q6TmRzYQtG6anaQoEx4_N4hS6VPwuNCNjOQYS-AcYytdX4cne8btSXYkMXEb7s',
  ilishPaturi:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDudCxe0ARvAwYimKbn4ta42cGa4j5xCHzgG_zCHZoK-mOS1Tox2znsz97Xc5aZdyS55S8TiTDowvvL0H0igGOlW180sB33hVxRj4Kd1_fY6rmbDEp4AN4JTS49zVGRUAHw4KEgKuT_7woNBx2cGkbKuMGqXuFaTaZ3zFc1Cjh8nEFewjL2bBz-lg8BDvMQXNyY0HwOLSelAyT1FAg6V-bc6TCrCQqkbgfmM3mxyDI',
  daabChingri:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDXlNdjPzGaaLEyJDsWPFF71kqvFrSb7B8B09PY_L6A0ZQ6HhVdYExM8jLHRMyX0ayLNWT1YeGR3jLRErTAKZVARSnYDo2pZmPnC6XEHKYwSPIoGixK_ewEQps-eH9q6aiTCbwmgJc2fekc7IHJedLRlrelPCnPhfPTQOJwZoGgT3XNGWlkirzzK-VaFE5A-r8Vw_gxL-vmvi-Hf0Gs98HfWS4cuMyBt57zjzfxnwQ',
  koshaMangsho:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA09tvXT0kccTsEvoj57Mm1Yob2hplFFctaiTL55zMbvpisQ-DGcN-k-U1az0vS-AAYEy2BcosT3SsOo0ncMnoDXWXPz0fZc12lua7Fuu_EWl9gDdbE5DSR38Qwf4D-d9aEfsG3weMaFYbLI_VVfmUoREFLtiI-rp1pFai_JKMrGzc7CSLBQkeS8c7MTpa0EF9d35emXcCnqUQJR_J2GqoVuVpkcb1oL-i6uLjykio',
  mocharGhonto:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBMRQ-uP042MfpWcEa6Oq3pBS7RWK3wTsiA-yDqTuQ_X47kn79Zz32mTkcLWV3Zu1liFSf7jcE_k8D7WOzuGA79hfY8EtdZ5EsESmGMbOfebFEbELKwK-RzhrnbXVArnueBxev4og_6y8mEhYM7iGSz05LK21QNIc0s156jfYYI7RJrL_qmnyxlgiYFtUXbb13B-H8oZZwHlhiBF7Wdri65q45PGCdYR8P-wxFSLnU',
  chanarDalna:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8Y1bDM486d4ZIteHPivYrTVNd8GR_WCUNh2R3V5RhMPTjBO8nBscRx-IeCedRQPXMsKYCcur6wt4E8DeFum76GqgtnFu1cN-umfskBV1mb53LenMId7TsUIwfctC42Ga4up9WX6ZQrs15gpdinyVOPTMsomR1HUis5LzDV3l2o79HCoFFtAN-LYaCHxtCMZIry72yN0Oc9TCoZ_oAEX0QKjoQIa7y9_rOv0F9jM',
  gondhorajChicken:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCCTn111fl0cFM2jlN2JiZpEvh2bTKBdnAmuwl9YG8WndddBNWTwbDesZkQq6LZIw3Ki2RCgiQ3sozBj9458wTDqFfcdpCa4jW7pW3hUbFrHb87yYMd4oP2D_3SBGFb4BCgh5_XUiUIN3PM3VpgVydUBW6403mXqbFF6o16WuWsLMlqykYtxOfizK-RKFeVxwC3gMK1oSQcWFjzw3ohbkbmq-UWAl416EB0oHeoPFY',
  jhuriAlooDal:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuChOJC0ckYRoqVf0CJf70xzYnXhlIZ1FzeMXHDx4N0orSwltOPJ5eHj6oGCNyY9nQw8SpioEEA3InJNkIwUM8X175jT_mDPJruNqeTxehqANMQidgW9s_DUHXBvYgi3PeKuN6FdBNqQSh66eQydpYPw0KAnnu63mAUP3sj6XWGU1clGhiQsU-eBvIU6wXDWpcWziheiNpfAP3rqJJ_S7wawM4ujYCsXMdpXVguyt5g',
  nolenRosogolla:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD0xxV3RJX27zY1dZCAujxjdwZMEYAkQcB3-XhXFr6rv84uiS4OinO6TDVp9SuxqNXLgTUBaEr49wUbTYBbpytI5ipwEaNCdloaqVv6HDqfj0kXIBU1mvgVGFqSS0VXRIY--4rRjO4ZI9wsyTlCIzcarvoaG1Q771NaEHopbSb_cHeXokuyoZ43dl9Hxk3i8oWd-SToOYEm5xeYLra0S-bpqfjmVjFLamfiFuIOjXQ',
};

export interface TranslationStrings {
  navHome: string;
  navStory: string;
  navSpecialties: string;
  navMenu: string;
  navReservations: string;
  navReviews: string;
  navContact: string;
  reserveCtaTop: string;
  reserveCtaSub: string;
  heroBadge: string;
  heroHeadline: string;
  heroSubtext: string;
  timingTitle: string;
  hotlineTitle: string;
  ctaBook: string;
  ctaMenu: string;
  heritageHeading: string;
  heritageIntro: string;
  badgeClayTitle: string;
  badgeClayDesc: string;
  badgeSpiceTitle: string;
  badgeSpiceDesc: string;
  menuTitle: string;
  menuSubtitle: string;
  filterAll: string;
  filterFish: string;
  filterMeat: string;
  filterVeg: string;
  filterDessert: string;
  bookingLeftTitle: string;
  bookingLeftDesc: string;
  formName: string;
  formPhone: string;
  formDate: string;
  formSlot: string;
  formGuests: string;
  formCta: string;
  toastAdded: string;
}

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  en: {
    navHome: 'Home',
    navStory: 'Our Story',
    navSpecialties: 'Specialties',
    navMenu: 'Menu',
    navReservations: 'Reservations',
    navReviews: 'Reviews',
    navContact: 'Contact',
    reserveCtaTop: 'Reserve a Table',
    reserveCtaSub: 'টেবিল বুকিং',
    heroBadge: 'Pristine Wood-Fired Hearth Tradition',
    heroHeadline: 'The Soul of Bengal, Cooked on Earthen Fires.',
    heroSubtext:
      'Enter an intimate sanctuary of slow rural culinary art. Wood-fired mud ovens, hand-ground sheel-nora spices, and royal Kansa bell-metal thalis reconnect you with forgotten Bengal recipes.',
    timingTitle: 'Daily Hearth Timings',
    hotlineTitle: 'Direct Table Concierge',
    ctaBook: 'Book a Hearth Table',
    ctaMenu: 'Explore Thali & À La Carte',
    heritageHeading: 'The Clay Oven Philosophy',
    heritageIntro:
      'In an age of haste, we embrace patience. Food at Matir Unun is governed by the cadence of dried tamarind wood fire, terracotta porosity, and pure cold-pressed mustard oil.',
    badgeClayTitle: 'Clay Handi Porosity',
    badgeClayDesc:
      'The micro-pores in our unglazed terracotta pots circulate alkaline moisture evenly, preserving delicate natural fats and infusing an unforgettable earthy aroma.',
    badgeSpiceTitle: 'Sheel-Nora Ground Spices',
    badgeSpiceDesc:
      'No electric dry grinding. Every mustard seed, postho (poppy), and ginger root is stone-crushed wet by hand at daybreak to unlock volatile essential oils.',
    menuTitle: 'Gastronomic Hearth Offerings',
    menuSubtitle:
      'Handcrafted dishes cooked over wood embers. Select a culinary movement to explore our slow-cooked treasures.',
    filterAll: 'All Dishes',
    filterFish: 'Seafood & Fish',
    filterMeat: 'Slow-Cooked Meats',
    filterVeg: 'Vegetarian Delights',
    filterDessert: 'Sweets & Starters',
    bookingLeftTitle: 'Reserve Your Hearth Table',
    bookingLeftDesc:
      'Because our wood-fired clay ovens operate on slow 4-hour simmering cycles, tables fill early. Reserve in advance to ensure hand-ground curries and fresh catch portions.',
    formName: 'Guest Full Name',
    formPhone: 'Phone (with WhatsApp)',
    formDate: 'Dining Date',
    formSlot: 'Meal Time',
    formGuests: 'Guests',
    formCta: 'Confirm Hearth Reservation',
    toastAdded: 'added to Tasting Wishlist',
  },
  bn: {
    navHome: 'মূল পাতা',
    navStory: 'আমাদের কথা',
    navSpecialties: 'বিশেষ থালি',
    navMenu: 'মেনু',
    navReservations: 'বুকিং',
    navReviews: 'প্রশংসা',
    navContact: 'যোগাযোগ',
    reserveCtaTop: 'টেবিল বুকিং',
    reserveCtaSub: 'আসন সংরক্ষণ',
    heroBadge: 'মাটির সোঁদা সুবাস ও কাঠের উনুন',
    heroHeadline: 'মাটির সোঁদা গন্ধে বাংলার খাঁটি স্বাদ।',
    heroSubtext:
      'গ্রামীণ রান্নার চিরন্তন ঐতিহ্য। মাটির হাঁড়ি, শিল-নোড়ায় বাটা তাজা মশলা, আর ঐতিহ্যবাহী কাঁসার থালায় পরিবেশিত খাঁটি বাঙালিয়ানা।',
    timingTitle: 'রান্নাঘর ও বসার সময়সূচি',
    hotlineTitle: 'সরাসরি টেবিল বুকিং ফোন',
    ctaBook: 'টেবিল বুক করুন',
    ctaMenu: 'মেনু ও থালি দেখুন',
    heritageHeading: 'মাটির উনুনের শিকড় ও ঐতিহ্য',
    heritageIntro:
      'যন্ত্রের যুগে আমরা বেছে নিয়েছি ধীর লয়ের রান্না। খাঁটি তেঁতুল কাঠের আঁচ, পোড়া মাটির হাঁড়ির বাষ্প আর খাঁটি ঘানিভাঙা সরষের তেলই আমাদের মূল শক্তি।',
    badgeClayTitle: 'মাটির হাঁড়ির মহিমা',
    badgeClayDesc:
      'পোড়ামাটির ছিদ্র দিয়ে বাতাস চলাচল করে খাবার ভেতর থেকে নরম ও সুস্বাদু করে তোলে, খাবারের খাঁটি পুষ্টি অটুট থাকে।',
    badgeSpiceTitle: 'শিল-নোড়ার বাটা মশলা',
    badgeSpiceDesc:
      'কোনো গুঁড়ো মশলা নয়। সূর্য ওঠার সাথে সাথে খাঁটি সরষে, পোস্ত, ও আদা হাতে বেটে তৈরি হয় প্রতিটি পদের মশলা।',
    menuTitle: 'উনুন থেকে পরিবেশিত পদসমূহ',
    menuSubtitle:
      'কাঠের আঁচে তৈরি ঐতিহ্যবাহী সব বাঙালি ব্যঞ্জন। আপনার পছন্দের স্বাদ বেছে নিন।',
    filterAll: 'সব পদ',
    filterFish: 'মাছ ও চিংড়ি',
    filterMeat: 'কষা মাংস',
    filterVeg: 'নিরামিষ পদ',
    filterDessert: 'মিষ্টি ও ভাজাভুজি',
    bookingLeftTitle: 'আপনার আসন সংরক্ষণ করুন',
    bookingLeftDesc:
      'আমাদের মাটির উনুনে ৪ ঘণ্টা ধরে ধিমে আঁচে রান্না হয়, তাই আসন দ্রুত পূর্ণ হয়। আপনার প্রিয় পদের নিশ্চিত স্বাদের জন্য আগেই বুকিং করুন।',
    formName: 'অতিথির পূর্ণ নাম',
    formPhone: 'ফোন নম্বর (হোয়াটসঅ্যাপ সহ)',
    formDate: 'ভোজনের তারিখ',
    formSlot: 'আগমনের সময়',
    formGuests: 'অতিথি সংখ্যা',
    formCta: 'বুকিং নিশ্চিত করুন',
    toastAdded: 'পছন্দের তালিকায় যুক্ত হয়েছে',
  },
  hi: {
    navHome: 'मुख्य पृष्ठ',
    navStory: 'हमारी विरासत',
    navSpecialties: 'खास थाली',
    navMenu: 'व्यंजन सूची',
    navReservations: 'बुकिंग',
    navReviews: 'समीक्षाएं',
    navContact: 'संपर्क',
    reserveCtaTop: 'टेबल बुक करें',
    reserveCtaSub: 'आसन आरक्षण',
    heroBadge: 'पारंपरिक मिट्टी के चूल्हे का स्वाद',
    heroHeadline: 'मिट्टी की सौंधी खुशबू, बंगाल का असली स्वाद।',
    heroSubtext:
      'गांव के पारंपरिक चूल्हे की धीमी आंच, सिल-बट्टे पर पिसे ताजे मसाले, और कांसी के बर्तनों में परोसा जाने वाला बंगाल का शाही भोजन।',
    timingTitle: 'भोजन का दैनिक समय',
    hotlineTitle: 'सीधी टेबल बुकिंग सेवा',
    ctaBook: 'टेबल बुक करें',
    ctaMenu: 'व्यंजन सूची देखें',
    heritageHeading: 'माटिर उनुन की परंपरा',
    heritageIntro:
      'मशीनों के दौर में हम धीमी आंच के सुकून पर विश्वास करते हैं। इमली की लकड़ी की आंच, मिट्टी की हांडी और सरसों का शुद्ध तेल हमारी पहचान हैं।',
    badgeClayTitle: 'मिट्टी की हांडी की खूबी',
    badgeClayDesc:
      'मिट्टी के सूक्ष्म छिद्र नमी को संतुलित रखते हैं, जिससे भोजन का असली रस और सोंधापन बरकरार रहता है।',
    badgeSpiceTitle: 'सिल-बट्टे का ताजा मसाला',
    badgeSpiceDesc:
      'कोई रेडीमेड पाउडर नहीं। हर सुबह सरसों, पोस्तो और अदरक को पत्थर पर पीसकर शुद्ध रूप से तैयार किया जाता है।',
    menuTitle: 'चूल्हे के खास व्यंजन',
    menuSubtitle:
      'धीमी आंच पर तैयार बंगाल के अनमोल व्यंजन। अपनी पसंद का स्वाद चुनें।',
    filterAll: 'सभी व्यंजन',
    filterFish: 'मछली व झींगा',
    filterMeat: 'धीमी आंच के मीट',
    filterVeg: 'शाकाहारी व्यंजन',
    filterDessert: 'मिष्ठान व स्टार्टर',
    bookingLeftTitle: 'अपनी टेबल अभी सुरक्षित करें',
    bookingLeftDesc:
      'हमारी मिट्टी की हांडी में 4 घंटे धीमी आंच पर खाना पकता है। ताजे स्वाद का आनंद लेने के लिए पहले से रिजर्व करें।',
    formName: 'अतिथि का पूरा नाम',
    formPhone: 'फ़ोन नंबर (व्हाट्सएप सहित)',
    formDate: 'आगमन की तारीख',
    formSlot: 'भोजन का समय',
    formGuests: 'अतिथियों की संख्या',
    formCta: 'बुकिंग पक्की करें',
    toastAdded: 'विशलिस्ट में जोड़ा गया',
  },
};

export const DISHES: Dish[] = [
  {
    id: 'dish-ilish',
    name: 'Ilish Paturi',
    bengaliSub: 'ইলিশ পাতুড়ি • সরষে ভাপানো',
    price: 640,
    category: 'fish',
    badgeText: 'Non-Veg • 🌶️🌶️',
    badgeTone: 'primary',
    bottomTag: 'Mustard Embers',
    description:
      'Prime Padma Hilsa marinated in stone-ground mustard paste, wrapped in smoked banana leaf and gently roasted on wood charcoal embers.',
    image: IMAGES.ilishPaturi,
    imageAlt:
      'Bengali Ilish Paturi delicacy, premium Hilsa fish fillet coated in pungent yellow mustard and green chili paste, wrapped in fresh smoked banana leaf parcel tied with thread',
    vessel: 'Smoked Banana Leaf & Clay Tawa',
    dietaryTag: 'Non-Veg',
    spiceLevel: 'Pungency: Brisk Mustard',
    lore: 'Originating along the monsoon-swollen banks of the Padma and Meghna rivers, Paturi ("wrapped in leaf") was perfected in riverside zamindari kitchens to lock every drop of silver Hilsa oil inside tender young plantain leaves.',
    originPlace: 'Padma-Meghna Riverine Belt, East Bengal',
    technique:
      'Equal measures of black and yellow mustard seeds are stone-ground on a sheel-nora with green chilies and rock salt to prevent bitterness, slathered generously on centre-cut Hilsa steaks, tied in fire-wilted banana leaf with cotton twine, and blistered over dying tamarind embers.',
    sharbatPairing: {
      name: 'Gondhoraj Lebur Ghol',
      notes: 'Chilled churned buttermilk infused with fragrant King Lime zest cools the nasal warmth of cold-pressed mustard oil.',
    },
    winePairing: {
      name: 'Domaine Vacheron Sancerre Blanc',
      notes: 'Crisp Loire Valley Sauvignon Blanc with flinty minerality cuts effortlessly through rich Hilsa omega oils.',
    },
  },
  {
    id: 'dish-daab',
    name: 'Daab Chingri',
    bengaliSub: 'ডাব চিংড়ি • নারকেল ভাপানো',
    price: 590,
    category: 'fish',
    badgeText: 'Non-Veg • 🌶️',
    badgeTone: 'primary',
    bottomTag: 'Clay Oven Steamed',
    description:
      'Jumbo river prawns braised inside green tender coconut husk with crushed mustard, tender coconut pulp, and fragrant mustard oil.',
    image: IMAGES.daabChingri,
    imageAlt:
      'Traditional Daab Chingri served inside a whole carved tender coconut, gigantic river prawns cooked in silky coconut cream, mustard, and green chili gravy',
    vessel: 'Whole Sealed Tender Coconut (Daab)',
    dietaryTag: 'Non-Veg',
    spiceLevel: 'Pungency: Silky & Mild',
    lore: 'A celebrated ceremonial centrepiece of colonial-era North Kolkata merchant mansions, Daab Chingri transforms a whole green tender coconut into a natural pressure-steaming vessel over glowing hearth ash.',
    originPlace: 'Sovabazar & Sundarban Delta, West Bengal',
    technique:
      'Freshwater golda chingri (scampi) are marinated in silky tender coconut malai, stone-crushed white poppy seeds, and yellow mustard, tucked back into the green husk, sealed with wheat-flour dough, and buried beside tamarind wood coals for 45 minutes.',
    sharbatPairing: {
      name: 'Kacha Aam Pora Shorbot',
      notes: 'Char-roasted green mango nectar with black salt and roasted cumin provides a bright, smoky counterpoint to sweet coconut cream.',
    },
    winePairing: {
      name: 'Trimbach Riesling Alsace Reserve',
      notes: 'Off-dry stone-fruit aromatics mirror the natural sweetness of river scampi and tender coconut water.',
    },
  },
  {
    id: 'dish-kosha',
    name: 'Kosha Mangsho',
    bengaliSub: 'কষা মাংস • মাটির হাঁড়ি',
    price: 550,
    category: 'meat',
    badgeText: 'Non-Veg • 🌶️🌶️🌶️',
    badgeTone: 'primary',
    bottomTag: '4-Hour Slow Simmer',
    description:
      'Bengal country goat meat slow-simmered for 4 hours in earthen clay pots with caramelised shallots, whole spices, and handi warmth.',
    image: IMAGES.koshaMangsho,
    imageAlt:
      'Clay handi filled with slow-cooked Kosha Mangsho rich dark goat curry, infused with caramelised onions, mustard oil gloss, baby potatoes, fresh green chilies',
    vessel: 'Dough-Sealed Gangetic Clay Handi',
    dietaryTag: 'Non-Veg',
    spiceLevel: 'Pungency: Rich & Peppery',
    lore: 'The undisputed Sunday ritual of Bengali households from Shyambazar to Burdwan. "Kosha" refers to the meditative technique of endlessly caramelising onions, yogurt, and spices until the gravy turns mahogany-black without adding water.',
    originPlace: 'Burdwan & North Kolkata Heritage Kitchens',
    technique:
      'Riyazi country goat cuts are marinated overnight in hung curd, ghani mustard oil, and crushed nutmeg-mace, then patient-braised for four hours over low tamarind wood fire inside unglazed terracotta handis with golden chandramukhi potatoes.',
    sharbatPairing: {
      name: 'Bel Panna & Roasted Fennel Cooler',
      notes: 'Velvety wood-apple nectar with crushed Mauri (fennel) soothes the palate between richly spiced mahogany bites.',
    },
    winePairing: {
      name: 'Châteauneuf-du-Pape Rouge (Grenache-Syrah)',
      notes: 'Warm garrigue herbs, black pepper, and supple tannins stand shoulder-to-shoulder with 4-hour caramelised shallots and cloves.',
    },
  },
  {
    id: 'dish-mocha',
    name: 'Mochar Ghonto',
    bengaliSub: 'মোচার ঘণ্ট • নারকেল কোরা',
    price: 320,
    category: 'veg',
    badgeText: 'Vegetarian • Pure',
    badgeTone: 'secondary',
    bottomTag: 'Heritage Heirloom',
    description:
      'Delicately chopped banana blossom stir-cooked with freshly scraped coconut, crispy lentil sun-dried bori, and aromatic Bengali garam masala.',
    image: IMAGES.mocharGhonto,
    imageAlt:
      'Traditional Bengali vegetarian Mochar Ghonto banana blossom stir fry with coconut shavings and fried bori lentil dumplings, presented in authentic bell metal kansa bowl',
    isSattvic: true,
    vessel: 'Heavy Bell-Metal Korai & Clay Pot',
    dietaryTag: 'Vegetarian • Pure Sattvic',
    spiceLevel: 'Pungency: Warm & Aromatic',
    lore: 'Born out of the ingenious zero-waste temple and widow-kitchen traditions of medieval Bengal, Mochar Ghonto elevates humble orchard banana blossoms into an intricate, labour-of-love delicacy.',
    originPlace: 'Nadia & Bishnupur Temple Kitchens',
    technique:
      'Each crimson bract of the banana flower is hand-peeled and de-stemmed at dawn, finely minced, parboiled with turmeric, and slow-folded with jharna ghee, grated coconut, boiled kala chana, and crushed crispy urad-dal bori.',
    sharbatPairing: {
      name: 'Anaras ও বিট নুন Shorbot',
      notes: 'Slow-pressed Baruipur queen pineapple with toasted cumin and rock salt lifts the earthy iron richness of banana blossom.',
    },
    winePairing: {
      name: 'Louis Jadot Bourgogne Chardonnay',
      notes: 'Subtle nutty oak and creamy lees echo the toasted coconut, clarified butter, and cinnamon-cardamom finish.',
    },
  },
  {
    id: 'dish-chana',
    name: 'Chanar Dalna',
    bengaliSub: 'ছানার ডালনা • আদা জিরে বাটা',
    price: 310,
    category: 'veg',
    badgeText: 'Vegetarian • Sattvic',
    badgeTone: 'secondary',
    bottomTag: 'No Onion-Garlic',
    description:
      'Hand-kneaded fresh cottage cheese cakes simmered in golden cumin-ginger gravy with country potatoes and aromatic pure cow ghee.',
    image: IMAGES.chanarDalna,
    imageAlt:
      'Traditional Bengali Chanar Dalna fresh hand-kneaded cottage cheese kofta cakes cooked in gentle cumin ginger gravy with golden fried potatoes in clay serving bowl',
    isSattvic: true,
    vessel: 'Terracotta Simmering Handi',
    dietaryTag: 'Vegetarian • Pure Sattvic',
    spiceLevel: 'Pungency: Gentle Ginger-Cumin',
    lore: 'While much of India shunned curdling milk as inauspicious, Bengal embraced fresh chhena (cottage cheese) and turned it into temple-worthy savoury medallions bathed in golden Sattvic gravy.',
    originPlace: 'Hooghly & Krishnanagar Dairy Belt',
    technique:
      'Morning cow milk is split gently with sour whey, hand-kneaded on a brass platter until feather-light, shaped into pillowy medallions, pan-seared in cow ghee, and simmered in stone-ground ginger, roasted cumin, and tejpatta broth—strictly without onion or garlic.',
    sharbatPairing: {
      name: 'Golap ও এলাচ ডাবের জল',
      notes: 'Chilled tender coconut water scented with Kannauj rose petals and green cardamom honours the pure Sattvic profile.',
    },
    winePairing: {
      name: ' Elena Walch Pinot Grigio Alto Adige',
      notes: 'Delicate pear and white almond notes respect the subtle dairy sweetness and aromatic ghee finish.',
    },
  },
  {
    id: 'dish-gondhoraj',
    name: 'Gondhoraj Chicken Fry',
    bengaliSub: 'গন্ধরাজ চিকেন ফ্রাই • কাসুন্দি',
    price: 380,
    category: 'dessert',
    badgeText: 'Non-Veg Starter',
    badgeTone: 'primary',
    bottomTag: 'Crisp Starter',
    description:
      'Succulent poultry cutlets infused with the floral zest of royal Gondhoraj King Lime, fried crisp and accompanied by pungent Kasundi mustard dip.',
    image: IMAGES.gondhorajChicken,
    imageAlt:
      'Crispy golden Bengali Gondhoraj Chicken Fry cutlets served on banana leaf with freshly sliced aromatic Gondhoraj lime wedges and pungent mustard Kasundi dip',
    vessel: 'Banana Leaf Platter & Clay Kasundi Cup',
    dietaryTag: 'Non-Veg Starter',
    spiceLevel: 'Pungency: Zesty & Crisp',
    lore: 'Inspired by Kolkata’s storied cabin-style fry houses along College Street, reimagined with the intoxicating perfume of Bengal’s indigenous Gondhoraj ("King of Fragrance") lime.',
    originPlace: 'College Street & Ballygunge Cabin Heritage',
    technique:
      'Free-range chicken fillets are pounded thin, steeped in green Gondhoraj lime zest, ginger juice, and cracked black pepper, crumb-coated, fried crisp over steady wood flame, and served with sun-fermented mango Kasundi.',
    sharbatPairing: {
      name: 'Smoked Tamarind & Jaggery Fizz',
      notes: 'Tangy tetul pulp balanced with palm jaggery sharpens the crunchy cutlet crust and mustard kasundi.',
    },
    winePairing: {
      name: 'Billecart-Salmon Brut Réserve Champagne',
      notes: 'Fine effervescence and citrus brioche notes elevate the golden crumb and floral Gondhoraj lime oils.',
    },
  },
  {
    id: 'dish-jhuri',
    name: 'Jhuri Aloo Bhaja & Dal',
    bengaliSub: 'ঝুরি আলু ভাজা ও সোনা মুগ ডাল',
    price: 240,
    category: 'veg',
    badgeText: 'Vegetarian • Classic',
    badgeTone: 'secondary',
    bottomTag: 'Soul Comfort',
    description:
      'Crispy hand-shredded potato matchsticks paired with slow-roasted golden Sona Moong lentil soup tempered with cumin and bay leaf.',
    image: IMAGES.jhuriAlooDal,
    imageAlt:
      'Traditional Bengali comforting plate of golden roasted Sona Moog Dal in brass katoris paired with ultra crisp matchstick Jhuri Aloo Bhaja potato shoestrings and green chilies',
    isSattvic: true,
    vessel: 'Hand-Beaten Kansa Katori',
    dietaryTag: 'Vegetarian • Pure Sattvic',
    spiceLevel: 'Pungency: Mild & Nutty',
    lore: 'In every traditional Bengali bhoj (feast), harmony begins with texture: velvety dry-roasted heirloom Sona Moong lentils married to lace-thin, audible crunch of Jhuri Aloo Bhaja.',
    originPlace: 'Bankura & Birbhum Agrarian Hearths',
    technique:
      'Tiny aromatic Sona Moong lentils are dry-roasted in an earthen khola until nutty golden before slow boiling and tempering with whole cumin, dried red chili, and ginger juliennes; served alongside bonti-shredded chandramukhi potato shoestrings.',
    sharbatPairing: {
      name: ' Pudina ও কাঁচা আম জলজিরা',
      notes: 'Garden mint and raw mango digestive tonic awakens the appetite at the opening of a multi-course Kansa meal.',
    },
    winePairing: {
      name: 'Hugel Gentil Alsace White Blend',
      notes: 'Clean floral dry white wine complements roasted lentil nuttiness and crisp salted potato threads.',
    },
  },
  {
    id: 'dish-rosogolla',
    name: 'Nolen Gurer Rosogolla',
    bengaliSub: 'নলেন গুড়ের রসগোল্লা • মাটির ভাঁড়',
    price: 160,
    category: 'dessert',
    badgeText: 'Dessert • Seasonal',
    badgeTone: 'secondary',
    bottomTag: 'Served Warm In Clay',
    description:
      'Spongy hand-rolled cottage cheese spheres steeped in warm, aromatic date-palm jaggery sap straight from rural Nadia orchards.',
    image: IMAGES.nolenRosogolla,
    imageAlt:
      'Clay kulhar bowl filled with warm Nolen Gurer Rosogolla, spongy soft chhena cheese balls soaked in caramel amber wild date palm jaggery syrup',
    isSattvic: true,
    vessel: 'Unglazed Terracotta Kulhar (মাটির ভাঁড়)',
    dietaryTag: 'Dessert • Pure Vegetarian',
    spiceLevel: 'Sweetness: Smoky Caramel',
    lore: 'Every winter dawn in rural Nadia and Jessore, shiuli tappers climb wild silver date palms to collect first-drop sap, boiling it over palm fronds into liquid gold Nolen Gur.',
    originPlace: 'Nadia Orchards & Bagbazar Sweetmeat Guilds',
    technique:
      'Feather-light chhena spheres—bound with zero semolina or flour—are poached directly in bubbling amber date-palm jaggery syrup over wood embers and ladled steaming warm into porous clay bhar cups.',
    sharbatPairing: {
      name: 'Darjeeling First Flush Cold Brew',
      notes: 'Unadulterated muscatel tea astringency cleanses the palate after smoky caramel palm jaggery.',
    },
    winePairing: {
      name: 'Royal Tokaji Late Harvest 5 Puttonyos',
      notes: 'Apricot marmalade and honeyed acidity harmonize gloriously with warm smoky date-palm molasses.',
    },
  },
];

export const ROYAL_THALIS: ThaliExperience[] = [
  {
    id: 'thali-zamindari',
    title: 'Zamindari Rajbari Maha-Bhoj',
    bengaliTitle: 'জমিদারি রাজবাড়ি মহাভোজ থালি',
    subtitle:
      'Our flagship 9-course ceremonial feast presented on a 1.8 kg heirloom hand-beaten Kansa bell-metal platter with seven surrounding katoris.',
    price: 1650,
    serves: '1 Royal Diner (Generous 9-Course Progression)',
    badge: 'Signature Ceremonial Thali',
    image: IMAGES.kansaFeast,
    courses: [
      {
        courseLabel: '01. Prarambhik (Welcome)',
        itemName: 'Char-Roasted Kacha Aam Pora Shorbot',
        bengaliName: 'আম পোড়া শরবত',
        detail: 'Served in porous terracotta cup with Himalayan black salt & bhaja masala',
      },
      {
        courseLabel: '02. Teto & Bhaja (Bitters & Crisps)',
        itemName: 'Dudh Shukto & Beguni-Jhuri Aloo Bhaja',
        bengaliName: 'দুধ শুক্তো ও বেগুনি-ঝুরি আলু ভাজা',
        detail: 'Traditional Ayurvedic bitter-sweet palate opener followed by crisp brinjal fritters',
      },
      {
        courseLabel: '03. Dal & Shaak (Grain & Lentil)',
        itemName: 'Heirloom Gobindobhog Rice, Jharna Ghee & Sona Moog Dal',
        bengaliName: 'গোবিন্দভোগ অন্ন ও সোনা মুগ ডাল',
        detail: 'Burdwan short-grain rice topped with Gondhoraj lime wedge and green chili',
      },
      {
        courseLabel: '04. Niramish Ratna (Orchard Gem)',
        itemName: 'Mochar Ghonto with Sun-Dried Bori',
        bengaliName: 'মোচার ঘণ্ট',
        detail: 'Hand-minced banana blossom folded with grated coconut and ghee',
      },
      {
        courseLabel: '05. Nadi-Matir Rajotte (River Crown)',
        itemName: 'Daab Chingri OR Smoked Banana-Leaf Ilish Paturi',
        bengaliName: 'ডাব চিংড়ি অথবা ইলিশ পাতুড়ি',
        detail: 'Guest’s choice of Sundarban river scampi in coconut or Padma Hilsa parcel',
      },
      {
        courseLabel: '06. Ununer Pradhan (Hearth Finale)',
        itemName: '4-Hour Clay Handi Kosha Mangsho & Lucchi',
        bengaliName: 'মাটির হাঁড়ির কষা মাংস ও ফুলকো লুচি',
        detail: 'Slow-braised country goat curry paired with two puffed golden luchis',
      },
      {
        courseLabel: '07. Madhur সমাপ্তি (Sweet Epilogue)',
        itemName: 'Khejur Gurer Amsotto Chutney, Mishti Doi & Warm Nolen Rosogolla',
        bengaliName: 'খেজুর গুড়ের চাটনি, মিষ্টি দই ও নলেন গুড়ের রসগোল্লা',
        detail: 'Followed by fragrant Maghai Paan wrapped in silvered betel leaf',
      },
    ],
  },
  {
    id: 'thali-ilish',
    title: 'Padma-Rupnarayan Ilish Parbon Thali',
    bengaliTitle: 'পদ্মা-রূপনারায়ণ ইলিশ পার্বণ থালি',
    subtitle:
      'An ode to the silver monarch of Bengal’s rivers—celebrating four distinct woodfire & mustard preparations of prized Hilsa.',
    price: 1890,
    serves: '1 Connoisseur Diner (Seasonal River Catch)',
    badge: 'Monsoon & Winter Archive',
    image: IMAGES.ilishPaturi,
    courses: [
      {
        courseLabel: '01. Prothom (First Pour)',
        itemName: 'Ilish Machher Tel & Gorom Gobindobhog Bhat',
        bengaliName: 'ইলিশ মাছের তেল ও গরম ভাত',
        detail: 'Aromatic golden Hilsa rendering drizzled over steaming rice with charred dry chili',
      },
      {
        courseLabel: '02. Bhaja (Crisp Roe & Cut)',
        itemName: 'Ilish Machher Dim Bhaja & Begun Bhaja',
        bengaliName: 'ইলিশ মাছের ডিম ভাজা ও বেগুন ভাজা',
        detail: 'Pan-seared Hilsa roe medallion alongside mustard-fried country aubergine',
      },
      {
        courseLabel: '03. Paturi (Ember Parcel)',
        itemName: 'Smoked Banana-Leaf Ilish Paturi',
        bengaliName: 'কলাপাতায় মোড়া ইলিশ পাতুড়ি',
        detail: 'Sheel-nora ground yellow & black mustard paste slow-roasted over wood coals',
      },
      {
        courseLabel: '04. Jhol (Light Hearth Broth)',
        itemName: 'Kalo Jeere কাঁচালঙ্কা ইলিশের পাতলা ঝোল',
        bengaliName: 'কালোজিরে ইলিশের ঝোল',
        detail: 'Delicate nigella-seed and slitted green chili broth to honour pure Hilsa sweetness',
      },
      {
        courseLabel: '05. Mishtiমুখ (Dessert)',
        itemName: 'Anaras Chutney & Baked Clay-Cup Bhapa Sandesh',
        bengaliName: 'আনারসের চাটনি ও ভাপা সন্দেশ',
        detail: 'Steamed chhena fudge scented with green cardamom',
      },
    ],
  },
  {
    id: 'thali-sattvic',
    title: 'Thakurbarir Pure Sattvic Bhoj',
    bengaliTitle: 'ঠাকুরবাড়ির শুদ্ধ সাত্ত্বিক নিরামিষ থালি',
    subtitle:
      'Prepared in dedicated earthenware without onion or garlic—honouring Bishnupur temple kitchens and Jorasanko heirloom manuscripts.',
    price: 1180,
    serves: '1 Diner (100% Pure Vegetarian • No Onion-Garlic)',
    badge: 'Pure Sattvic • সাত্ত্বিক',
    isSattvic: true,
    image: IMAGES.chanarDalna,
    courses: [
      {
        courseLabel: '01. Shuddha Shuru (Opening)',
        itemName: 'Golap-Elach Daaber Jol & Dudh Shukto',
        bengaliName: 'গোলাপ ডাবের জল ও দুধ শুক্তো',
        detail: 'Rose-scented tender coconut water and classic radhuni-tempered bitter vegetable medley',
      },
      {
        courseLabel: '02. Bhaja ও ডাল (Crisps & Lentils)',
        itemName: 'Postor Bora, Jhuri Aloo Bhaja & Narkel Cholar Dal',
        bengaliName: 'পোস্তর বড়া ও নারকেল ছোলার ডাল',
        detail: 'Poppy-seed crusted fritters alongside Bengal gram dal studded with fried coconut',
      },
      {
        courseLabel: '03. Pradhanya (Heirloom Mains)',
        itemName: 'Mochar Ghonto, Chanar Dalna & Dhokar Dalna',
        bengaliName: 'মোচার ঘণ্ট, ছানার ডালনা ও ধোকার ডালনা',
        detail: 'Served with Hing-scented Koraishutir Kochuri and Gobindobhog Pulao',
      },
      {
        courseLabel: '04. Somapti (Sweet Finale)',
        itemName: 'Nolen Gurer Payesh & Warm Clay-Cup Rosogolla',
        bengaliName: 'নলেন গুড়ের পায়েস ও রসগোল্লা',
        detail: 'Slow-reduced Gobindobhog rice kheer sweetened with Nadia date-palm jaggery',
      },
    ],
  },
];

export const CLASSIC_MENU_ITEMS: ClassicMenuItem[] = [
  {
    id: 'cm-1',
    name: 'Zamindari Dudh Shukto',
    bengaliName: 'জমিদারি দুধ শুক্তো',
    description: 'Bitter gourd, green banana, drumstick, and sweet potato simmered in stone-ground poppy-mustard milk with wild radhuni.',
    price: 290,
    section: 'shukto-bhaja',
    isSattvic: true,
    tag: 'Palate Opener',
  },
  {
    id: 'cm-2',
    name: 'Bankura Postor Bora (4 pcs)',
    bengaliName: 'বাঁকুড়ার খাঁটি পোস্তর বড়া',
    description: 'Thick stone-crushed white poppy seed patties pan-seared crisp in cold-pressed ghani mustard oil.',
    price: 340,
    section: 'shukto-bhaja',
    isSattvic: true,
    tag: 'Heirloom Crisp',
  },
  {
    id: 'cm-3',
    name: 'Kolkata Cabin Vetki Fish Fry',
    bengaliName: 'কোলকাতা কেবিন ভেটকি ফিশ ফ্রাই',
    description: 'Diamond-cut river Bhetki fillet marinated in coriander-mint paste, double-crumbed, served with aged mango Kasundi.',
    price: 460,
    section: 'shukto-bhaja',
    tag: 'Signature Cutlet',
  },
  {
    id: 'cm-4',
    name: 'Chital Machher Muitha',
    bengaliName: 'চিতল মাছের মুইঠ্যা',
    description: 'Hand-scraped featherback river fish dumplings poached and simmered in rich ginger-cumin-ghee kaliya gravy.',
    price: 620,
    section: 'river-harvest',
    tag: 'Lost Recipe',
  },
  {
    id: 'cm-5',
    name: 'Sorshe Pabda Jhal',
    bengaliName: 'সরষে পাবদা ঝাল',
    description: 'Whole delicate freshwater butterfish bathed in freshly ground yellow-black mustard emulsion with nigella and green chilies.',
    price: 490,
    section: 'river-harvest',
    tag: 'River Catch',
  },
  {
    id: 'cm-6',
    name: 'BurdwanSitabhog & Basanti Pulao',
    bengaliName: 'বাসন্তী পোলাও • কাজু কিশমিশ',
    description: 'Aged Gobindobhog rice slow-steamed in clay handi with saffron, pure cow ghee, cashews, raisins, and warm whole spices.',
    price: 310,
    section: 'hearth-curries',
    isSattvic: true,
    tag: 'Saffron & Ghee',
  },
  {
    id: 'cm-7',
    name: 'Goalondo Steamer Boat Chicken Curry',
    bengaliName: 'গোয়ালন্দ স্টিমার চিকেন কারি',
    description: 'Historic Padma riverboat country chicken curry cooked over woodfire with coarse-pounded garlic, dried red chilies, and mustard oil.',
    price: 470,
    section: 'hearth-curries',
    tag: '1890s Riverboat Lore',
  },
  {
    id: 'cm-8',
    name: 'Dhokar Dalna (Spiced Lentil Cakes)',
    bengaliName: 'ধোকার ডালনা • হিং আদা ফোড়ন',
    description: 'Steamed & diamond-cut chana dal cakes simmered in aromatic hing, ginger, and roasted cumin gravy.',
    price: 295,
    section: 'hearth-curries',
    isSattvic: true,
    tag: 'Sattvic Classic',
  },
  {
    id: 'cm-9',
    name: 'Char-Roasted Aam Pora Shorbot',
    bengaliName: 'কাঠের আঁচে আম পোড়া শরবত',
    description: 'Whole green mangoes blistered directly in wood hearth embers, hand-pulped with roasted cumin and black salt.',
    price: 165,
    section: 'sharbats-mishti',
    isSattvic: true,
    tag: 'Hearth Sharbat',
  },
  {
    id: 'cm-10',
    name: 'Gondhoraj Lebur Ghol',
    bengaliName: 'গন্ধরাজ লেবুর ঘোল',
    description: 'Hand-churned artisanal buttermilk infused with crushed King Lime leaves, zest, and rock salt in an earthen kulhar.',
    price: 150,
    section: 'sharbats-mishti',
    isSattvic: true,
    tag: 'Digestif',
  },
  {
    id: 'cm-11',
    name: 'Lal Mishti Doi in Clay হাঁড়ি',
    bengaliName: 'লাল মিষ্টি দই • মাটির সরা',
    description: 'Thick caramelised cow-milk yogurt set overnight in porous terracotta dishes for dense, sliceable creaminess.',
    price: 170,
    section: 'sharbats-mishti',
    isSattvic: true,
    tag: 'Terracotta Set',
  },
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    quote: '"The aroma of woodsmoke took me straight to my Didima\'s kitchen in Burdwan."',
    body: 'The Kosha Mangsho in the clay handi is unrivaled anywhere in modern Kolkata. The subtle char from tamarind wood and bell-metal plates elevate the whole meal into ritual.',
    initials: 'SG',
    avatarTone: 'secondary',
    author: 'Soumitra Ganguly',
    roleLocation: 'Heritage Food Historian, Ballygunge',
    rating: 5,
    experienceTag: 'Clay Handi Meats',
    dateLabel: 'October 2026',
  },
  {
    id: 'rev-2',
    quote: '"The Daab Chingri in pure tender coconut has zero rivals."',
    body: 'You can instantly tell when spices are wet-ground on sheel-nora rather than blitzed in electric blenders. The mustard pungency has sharpness without burning the palate.',
    initials: 'AM',
    avatarTone: 'primary',
    author: 'Ananya Mukherjee',
    roleLocation: 'Gastronomy Journalist, Salt Lake',
    rating: 5,
    experienceTag: 'Hilsa & Seafood',
    dateLabel: 'October 2026',
  },
  {
    id: 'rev-3',
    quote: '"Sitting on the low wooden pirhi reminds us what dining used to feel like."',
    body: 'The low seating area is calm and beautifully designed. Mochar Ghonto and warm Nolen Gurer Rosogolla in earthen cups completed an unforgettable Sunday lunch with family.',
    initials: 'PB',
    avatarTone: 'gold',
    author: 'Pradipta Bose',
    roleLocation: 'Architect & Patron, Alipore',
    rating: 5,
    experienceTag: 'Low Pirhi Seating',
    dateLabel: 'September 2026',
  },
  {
    id: 'rev-4',
    quote: '"Rarely does a fine dining room treat Sattvic vegetarian dishes with such reverence."',
    body: 'My grandmother observes strict nirāmish dining, and the Thakurbarir Sattvic Thali brought tears to her eyes. Dedicated earthen pots, pure cow ghee, and extraordinary Chanar Dalna.',
    initials: 'DR',
    avatarTone: 'secondary',
    author: 'Debjani Roychowdhury',
    roleLocation: 'Classical Vocalist, Dover Lane',
    rating: 5,
    experienceTag: 'Sattvic & Family Bhoj',
    dateLabel: 'September 2026',
  },
  {
    id: 'rev-5',
    quote: '"Stepping into the 12:15 PM courtyard kitchen walkthrough is pure theatre of authenticity."',
    body: 'Watching the head karigar seal clay handis with wheat dough over glowing tamarind logs before lunch made us appreciate every spoonful of the Ilish Paturi.',
    initials: 'KS',
    avatarTone: 'primary',
    author: 'Kunal Sen',
    roleLocation: 'Restaurateur & Traveller, New Delhi',
    rating: 5,
    experienceTag: 'Hilsa & Seafood',
    dateLabel: 'August 2026',
  },
  {
    id: 'rev-6',
    quote: '"1.8 kilos of gleaming hand-beaten Kansa and zero shortcuts in the kitchen."',
    body: 'Hosted an intimate 8-guest anniversary in the Zamindari Feast Chamber. From the welcome Aam Pora Shorbot to the steaming Nolen Gurer Rosogolla, hospitality felt deeply personal.',
    initials: 'NB',
    avatarTone: 'gold',
    author: 'Nilanjana Chatterjee',
    roleLocation: 'Textile Curator, Hindustan Park',
    rating: 5,
    experienceTag: 'Sattvic & Family Bhoj',
    dateLabel: 'August 2026',
  },
];
