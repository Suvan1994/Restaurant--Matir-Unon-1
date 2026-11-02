import React from 'react';
import { DishCard } from '../components/DishCard';
import { ResilientImage } from '../components/ResilientImage';
import { DISHES, ROYAL_THALIS } from '../data/restaurantData';
import { Dish, PageRoute, ThaliExperience, WishlistItem } from '../types';

interface SpecialtiesScreenProps {
  onAddThaliWishlist: (thali: ThaliExperience) => void;
  onReserveThali: (thali: ThaliExperience) => void;
  onOpenLore: (dish: Dish) => void;
  onAddDishWishlist: (dish: Dish) => void;
  wishlist: WishlistItem[];
  onNavigate: (route: PageRoute) => void;
}

export const SpecialtiesScreen: React.FC<SpecialtiesScreenProps> = ({
  onAddThaliWishlist,
  onReserveThali,
  onOpenLore,
  onAddDishWishlist,
  wishlist,
  onNavigate,
}) => {
  const crownDishes = DISHES.slice(0, 4);

  const getQty = (id: string) =>
    wishlist.find((w) => w.id === id)?.quantity || 0;

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Header Banner */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="max-w-2xl flex flex-col gap-space-xs">
            <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest">
              রাজকীয় কাঁসার থালি • Heirloom Bell-Metal Degustations
            </span>
            <h1 className="font-display-hero text-display-hero-mobile lg:text-headline-lg text-primary text-balance">
              Ceremonial Multi-Course Kansa Thalis
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Structured according to Bengal&apos;s classical gastronomic
              progression—moving gracefully from cooling bitters (
              <em>Shukto</em>) and crisp fritters to rich river harvest, clay
              handi meats, and warm palm-jaggery sweets.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('reservations')}
            className="self-start md:self-auto px-space-lg py-space-sm bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Reserve a Thali Table
          </button>
        </div>
      </section>

      {/* Inverted Smoked Charcoal Heirloom Thali Cards (per DESIGN.md) */}
      <section className="w-full px-margin lg:px-margin-desktop pb-space-xl bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          {ROYAL_THALIS.map((thali) => {
            const savedCount = getQty(thali.id);
            return (
              <div
                key={thali.id}
                className="rounded-3xl bg-charcoal-hearth text-parchment border-t-2 border-mustard-gold shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Left Arch Visual Showcase */}
                <div className="lg:col-span-5 p-space-lg flex flex-col justify-between bg-black/20">
                  <div>
                    <div className="rounded-t-[4rem] rounded-b-2xl overflow-hidden aspect-[4/3] mb-space-md border border-brass/30 relative">
                      <ResilientImage
                        src={thali.image}
                        alt={thali.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-hearth/90 text-mustard-gold font-label-md text-label-md uppercase tracking-wider border border-mustard-gold/40">
                        {thali.badge}
                      </span>
                    </div>

                    <span className="font-body-md text-brass font-medium block mb-1">
                      {thali.bengaliTitle}
                    </span>
                    <h2 className="font-headline-md text-headline-md text-parchment mb-space-xs">
                      {thali.title}
                    </h2>
                    <p className="font-body-md text-body-md text-parchment/80">
                      {thali.subtitle}
                    </p>
                  </div>

                  <div className="pt-space-lg mt-space-lg border-t border-brass/25 flex flex-col gap-space-sm">
                    <div className="flex items-baseline justify-between">
                      <span className="font-body-sm text-brass">
                        {thali.serves}
                      </span>
                      <span className="font-headline-md text-headline-md text-mustard-gold font-bold tabular-nums">
                        ₹{thali.price}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-space-sm">
                      <button
                        type="button"
                        onClick={() => onAddThaliWishlist(thali)}
                        className="flex-1 py-space-sm px-space-md rounded-lg bg-primary-container hover:bg-terracotta-hover text-parchment border border-brass/50 font-label-lg text-label-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {savedCount > 0 ? 'bookmark_added' : 'bookmark_add'}
                        </span>
                        <span>
                          {savedCount > 0
                            ? `In Wishlist (${savedCount})`
                            : 'Add to Tasting Wishlist'}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onReserveThali(thali)}
                        className="py-space-sm px-space-md rounded-lg border border-mustard-gold/60 text-mustard-gold hover:bg-mustard-gold/10 font-label-lg text-label-lg transition-all cursor-pointer"
                      >
                        Book Feast
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Course-by-Course Progression */}
                <div className="lg:col-span-7 p-space-lg md:p-space-xl flex flex-col justify-center gap-space-md">
                  <div className="flex items-center justify-between border-b border-brass/25 pb-space-xs">
                    <span className="font-label-lg text-label-lg uppercase tracking-widest text-mustard-gold">
                      Ceremonial Course Progression
                    </span>
                    <span className="font-label-md text-label-md text-brass">
                      Kansa Service • কাঁসার থালা
                    </span>
                  </div>

                  <div className="flex flex-col gap-space-md">
                    {thali.courses.map((course) => (
                      <div
                        key={course.courseLabel}
                        className="flex flex-col gap-0.5 border-b border-dotted border-brass/30 pb-space-sm last:border-none last:pb-0"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <span className="font-label-md text-label-md text-mustard-gold uppercase tracking-wider">
                            {course.courseLabel}
                          </span>
                          <span className="font-body-sm text-body-sm text-brass">
                            {course.bengaliName}
                          </span>
                        </div>
                        <h4 className="font-headline-sm text-lg text-parchment">
                          {course.itemName}
                        </h4>
                        <p className="font-body-sm text-body-sm text-parchment/70">
                          {course.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Crown Individual Hearth Treasures */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
            <div>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                উনুনের শ্রেষ্ঠ রত্ন • Signature Hearth Icons
              </span>
              <h2 className="font-headline-md text-headline-md text-primary">
                Click Any Dish for Historical Lore &amp; Sommelier Pairings
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('menu')}
              className="font-label-lg text-label-lg text-primary hover:underline cursor-pointer self-start sm:self-auto"
            >
              Browse Complete Menu →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {crownDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onOpenLore={onOpenLore}
                onAddWishlist={onAddDishWishlist}
                inWishlistQty={getQty(dish.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
