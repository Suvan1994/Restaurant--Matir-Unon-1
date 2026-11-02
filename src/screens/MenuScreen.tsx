import React, { useState } from 'react';
import { DishCard } from '../components/DishCard';
import {
  CLASSIC_MENU_ITEMS,
  DISHES,
  TRANSLATIONS,
} from '../data/restaurantData';
import {
  ClassicMenuItem,
  Dish,
  DishCategory,
  Language,
  WishlistItem,
} from '../types';

interface MenuScreenProps {
  lang: Language;
  onOpenLore: (dish: Dish) => void;
  onAddDishWishlist: (dish: Dish) => void;
  onAddClassicWishlist: (item: ClassicMenuItem) => void;
  wishlist: WishlistItem[];
}

export const MenuScreen: React.FC<MenuScreenProps> = ({
  lang,
  onOpenLore,
  onAddDishWishlist,
  onAddClassicWishlist,
  wishlist,
}) => {
  const [category, setCategory] = useState<DishCategory>('all');
  const [sattvicOnly, setSattvicOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const t = TRANSLATIONS[lang];

  const getQty = (id: string) =>
    wishlist.find((w) => w.id === id)?.quantity || 0;

  const filteredDishes = DISHES.filter((dish) => {
    const matchesCat = category === 'all' || dish.category === category;
    const matchesSattvic = !sattvicOnly || Boolean(dish.isSattvic);
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      dish.name.toLowerCase().includes(q) ||
      dish.description.toLowerCase().includes(q) ||
      dish.bengaliSub.toLowerCase().includes(q);
    return matchesCat && matchesSattvic && matchesSearch;
  });

  const filteredClassic = CLASSIC_MENU_ITEMS.filter((item) => {
    const matchesSattvic = !sattvicOnly || Boolean(item.isSattvic);
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.bengaliName.toLowerCase().includes(q);
    return matchesSattvic && matchesSearch;
  });

  const classicSections: {
    key: ClassicMenuItem['section'];
    title: string;
    bengali: string;
  }[] = [
    {
      key: 'shukto-bhaja',
      title: '01. Palate Openers, Shukto & Crisps',
      bengali: 'শুক্তো ও ভাজাভুজি',
    },
    {
      key: 'river-harvest',
      title: '02. Bengal River & Creek Harvest',
      bengali: 'নদীর তাজা মাছ',
    },
    {
      key: 'hearth-curries',
      title: '03. Clay Handi Mains & Heirloom Grains',
      bengali: 'হাঁড়ির ব্যঞ্জন ও অন্ন',
    },
    {
      key: 'sharbats-mishti',
      title: '04. Artisanal Sharbats & Terracotta Sweets',
      bengali: 'শরবত ও মিষ্টান্ন',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Header & Interactive Controls */}
      <section className="w-full px-margin lg:px-margin-desktop pt-space-xl pb-space-lg bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="max-w-2xl flex flex-col gap-space-xs">
              <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest">
                সম্পূর্ণ খাদ্যতালিকা • Complete Hearth Archive
              </span>
              <h1 className="font-display-hero text-display-hero-mobile lg:text-headline-lg text-primary">
                {t.menuTitle}
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every curry is ground fresh on stone sheel-nora at daybreak and
                simmered over cured tamarind embers. Click any signature dish
                card to inspect its regional provenance and wine pairings.
              </p>
            </div>

            {/* Search & Sattvic Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
              <div className="relative">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px] absolute left-3 top-1/2 -translate-y-1/2">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Hilsa, Posto, Sattvic..."
                  className="pl-9 pr-4 py-2 rounded-lg bg-surface-container-low border border-brass/35 text-body-sm text-on-surface focus:outline-none focus:border-primary w-full sm:w-64"
                />
              </div>

              <button
                type="button"
                onClick={() => setSattvicOnly((prev) => !prev)}
                className={`px-space-md py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider border transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  sattvicOnly
                    ? 'bg-primary text-on-primary border-primary shadow-sm'
                    : 'bg-surface-container-lowest text-secondary border-brass/40 hover:border-primary'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  spa
                </span>
                <span>Pure Sattvic (No Onion-Garlic)</span>
              </button>
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="flex items-center overflow-x-auto gap-space-xs pb-1 scrollbar-none">
            {(
              [
                { id: 'all', label: t.filterAll },
                { id: 'fish', label: t.filterFish },
                { id: 'meat', label: t.filterMeat },
                { id: 'veg', label: t.filterVeg },
                { id: 'dessert', label: t.filterDessert },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCategory(tab.id)}
                className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  category === tab.id
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Visual Baby-Arc Signature Dish Grid */}
          {filteredDishes.length === 0 ? (
            <div className="p-space-xl rounded-2xl bg-surface-container-low text-center">
              <p className="font-headline-sm text-primary mb-1">
                No signature showcase dishes match your current filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategory('all');
                  setSattvicOnly(false);
                  setSearchQuery('');
                }}
                className="font-label-lg text-secondary underline cursor-pointer"
              >
                Reset Menu Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {filteredDishes.map((dish) => (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  onOpenLore={onOpenLore}
                  onAddWishlist={onAddDishWishlist}
                  inWishlistQty={getQty(dish.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Editorial Two-Column À La Carte & Artisanal Sharbats with Dotted Brass Leaders */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
              ঐতিহ্যবাহী সূচি • Extended Kitchen &amp; Sharbat Cellar
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-1">
              À La Carte Hearth &amp; Beverage Ledger
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop">
            {classicSections.map((sec) => {
              const items = filteredClassic.filter(
                (i) => i.section === sec.key
              );
              if (items.length === 0) return null;

              return (
                <div
                  key={sec.key}
                  className="p-space-lg md:p-space-xl rounded-2xl bg-surface-container-lowest shadow-md border border-brass/25 flex flex-col gap-space-md"
                >
                  <div className="flex items-baseline justify-between border-b border-brass/30 pb-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      {sec.title}
                    </h3>
                    <span className="font-body-sm text-body-sm text-secondary font-medium">
                      {sec.bengali}
                    </span>
                  </div>

                  <div className="flex flex-col gap-space-md">
                    {items.map((item) => {
                      const qty = getQty(item.id);
                      return (
                        <div key={item.id} className="flex flex-col gap-1">
                          <div className="flex items-baseline gap-2">
                            <h4 className="font-headline-sm text-lg text-primary shrink-0">
                              {item.name}
                            </h4>
                            <div className="flex-1 border-b border-dotted border-brass/70 mb-1" />
                            <span className="font-title-md text-title-md text-primary font-bold tabular-nums shrink-0">
                              ₹{item.price}
                            </span>
                          </div>

                          <div className="flex items-center justify-between gap-2">
                            <span className="font-body-sm text-body-sm text-secondary font-medium">
                              {item.bengaliName}
                              {item.isSattvic ? ' · Pure Sattvic' : ''}
                              {item.tag ? ` · ${item.tag}` : ''}
                            </span>
                            <button
                              type="button"
                              onClick={() => onAddClassicWishlist(item)}
                              className="px-2.5 py-1 rounded-md bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md transition-colors cursor-pointer shrink-0"
                            >
                              {qty > 0 ? `+ Saved (${qty})` : '+ Wishlist'}
                            </button>
                          </div>

                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
