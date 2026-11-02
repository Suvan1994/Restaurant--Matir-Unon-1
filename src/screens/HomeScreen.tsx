import React, { useState } from 'react';
import { DishCard } from '../components/DishCard';
import { ReservationModule } from '../components/ReservationModule';
import { ResilientImage } from '../components/ResilientImage';
import { DISHES, IMAGES, TRANSLATIONS } from '../data/restaurantData';
import {
  Dish,
  DishCategory,
  Language,
  PageRoute,
  ReservationRecord,
  ReviewItem,
  WishlistItem,
} from '../types';

interface HomeScreenProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
  onNavigate: (route: PageRoute) => void;
  onOpenLore: (dish: Dish) => void;
  onAddWishlist: (dish: Dish) => void;
  wishlist: WishlistItem[];
  onConfirmReservation: (record: ReservationRecord) => void;
  reviews: ReviewItem[];
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  lang,
  onLangChange,
  onNavigate,
  onOpenLore,
  onAddWishlist,
  wishlist,
  onConfirmReservation,
  reviews,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<DishCategory>('all');
  const t = TRANSLATIONS[lang];

  const filteredDishes =
    selectedCategory === 'all'
      ? DISHES
      : DISHES.filter((d) => d.category === selectedCategory);

  const getWishlistQty = (id: string) =>
    wishlist.find((w) => w.id === id)?.quantity || 0;

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full px-margin lg:px-margin-desktop py-space-xl lg:py-24 bg-surface overflow-hidden">
        {/* Ambient Warm Hearth Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Left Column: Editorial & Multilingual Narratives */}
          <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
            {/* In-page Live Language Bar Switcher */}
            <div className="inline-flex items-center self-start gap-space-xs p-1 bg-surface-container rounded-full shadow-inner mb-space-xs">
              <span className="font-label-md text-label-md text-on-surface-variant px-2">
                Language:
              </span>
              {(
                [
                  { code: 'en', label: 'EN' },
                  { code: 'bn', label: 'বাংলা' },
                  { code: 'hi', label: 'हिन्दी' },
                ] as const
              ).map((option) => {
                const isActive = lang === option.code;
                return (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => onLangChange(option.code)}
                    className={`px-3 py-1 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                      isActive
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'text-on-surface hover:text-primary'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            {/* Overline Tag */}
            <div className="flex items-center gap-space-xs text-secondary">
              <span className="material-symbols-outlined text-[18px]">
                local_fire_department
              </span>
              <span className="font-label-lg text-label-lg uppercase tracking-widest">
                {t.heroBadge}
              </span>
            </div>

            {/* Headline with Scaled Presence */}
            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-primary tracking-tight text-balance">
              {t.heroHeadline}
            </h1>

            {/* Subheading Paragraph */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {t.heroSubtext}
            </p>

            {/* Quick Detail Meta Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs pb-space-sm">
              <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  schedule
                </span>
                <div>
                  <span className="block font-label-md text-label-md uppercase text-on-surface-variant">
                    {t.timingTitle}
                  </span>
                  <span className="font-title-md text-title-md text-on-surface tabular-nums">
                    12:00 PM – 11:00 PM
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  phone_in_talk
                </span>
                <div>
                  <span className="block font-label-md text-label-md uppercase text-on-surface-variant">
                    {t.hotlineTitle}
                  </span>
                  <span className="font-title-md text-title-md text-on-surface tabular-nums">
                    +91 98300 12345
                  </span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a
                href="#reservations-section"
                className="px-space-lg py-space-sm bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-space-xs"
              >
                <span>{t.ctaBook}</span>
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
              </a>
              <a
                href="#menu-showcase"
                className="px-space-lg py-space-sm bg-surface-container-lowest hover:bg-surface-container text-primary rounded-lg font-label-lg text-label-lg transition-all flex items-center gap-space-xs shadow-sm"
              >
                <span>{t.ctaMenu}</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_downward
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Grand Parabolic Baby-Arc Architectural Window */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Golden Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-t from-primary/20 to-secondary/30 rounded-t-[5.5rem] rounded-b-3xl blur-xl" />

              {/* Baby Arc Architectural Image Container */}
              <div className="relative rounded-t-[5rem] rounded-b-2xl overflow-hidden bg-surface-container-highest shadow-2xl aspect-[4/5] flex items-center justify-center group">
                <ResilientImage
                  src={IMAGES.heroHearth}
                  alt="Authentic rural Bengali woman in blue sari cooking with an earthen mud stove clay handi pot, golden smoke billows, rustic village courtyard setting"
                  fallbackLabel="Matir Unun Wood-Fired Clay Hearth"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Scrim Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-black/20" />

                {/* Floating Top Inset Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-md text-label-md tracking-wider uppercase shadow-md">
                    Est. Heritage 1928
                  </span>
                  <span className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[20px]">
                      outdoor_grill
                    </span>
                  </span>
                </div>

                {/* Bottom Floating Terracotta Card */}
                <div className="absolute bottom-6 left-6 right-6 p-space-md rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-xl flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">
                      soup_kitchen
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-primary leading-tight">
                      100% Woodfire &amp; Clay Handi
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      No pressure cookers • Slow embers only
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HERITAGE & PHILOSOPHY (BENTO STORY) */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-sm">
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold">
                  01. আমাদের ঐতিহ্য
                </span>
                <span className="w-12 h-0.5 bg-secondary-container" />
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                {t.heritageHeading}
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-space-xs max-w-md">
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t.heritageIntro}
              </p>
              <button
                type="button"
                onClick={() => onNavigate('our-story')}
                className="font-headline-sm text-sm italic text-primary hover:text-primary-container border-b border-brass pb-0.5 transition-colors cursor-pointer"
              >
                Read the 1928 Hearth Chronicle →
              </button>
            </div>
          </div>

          {/* Bento Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Feature 1: The Craft Arc Card */}
            <div className="md:col-span-4 rounded-t-[4rem] rounded-b-2xl bg-surface-container-lowest p-space-lg flex flex-col justify-between shadow-md hover:shadow-xl transition-all">
              <div className="flex flex-col gap-space-md">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">
                    fireplace
                  </span>
                </div>
                <div>
                  <span className="font-label-md text-label-md text-secondary block mb-1">
                    মাটির হাঁড়িতে রান্না
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    {t.badgeClayTitle}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {t.badgeClayDesc}
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container-low/60 rounded-xl p-space-sm flex items-center gap-space-xs text-body-sm font-medium text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  eco
                </span>
                <span>100% Organic Gangetic Clay Pots</span>
              </div>
            </div>

            {/* Feature 2: Large Centerpiece Feast Showcase */}
            <div
              onClick={() => onNavigate('specialties')}
              className="md:col-span-8 rounded-2xl overflow-hidden bg-surface-container-highest relative min-h-[380px] shadow-lg group cursor-pointer"
            >
              <ResilientImage
                src={IMAGES.kansaFeast}
                alt="Grand Bengali feast served in traditional Kansa bell-metal plates, Daab Chingri in fresh green coconut, Ilish Paturi wrapped in banana leaves, aromatic Gobindobhog rice"
                fallbackLabel="Served Exclusively in Hand-Beaten Kansa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent p-space-lg md:p-space-xl flex flex-col justify-end">
                <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-space-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    stars
                  </span>
                  <span>Heirloom Bell-Metal Feasts</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-surface mb-space-xs">
                  Served Exclusively in Hand-Beaten Kansa
                </h3>
                <p className="font-body-md text-body-md text-surface-variant max-w-xl">
                  According to ancient Ayurvedic principles, dining from
                  bell-metal (কাঁসার বাসন) balances gut pH, enhances subtle
                  digestive juices, and honors centuries of Bengal nobility.
                </p>
              </div>
            </div>

            {/* Feature 3: Sheel Nora Spices */}
            <div className="md:col-span-6 rounded-2xl bg-surface-container-lowest p-space-lg shadow-md flex flex-col sm:flex-row gap-space-md items-center">
              <div className="w-20 h-20 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[36px]">
                  blender
                </span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-secondary block mb-1">
                  বাটা মশলার জাদু
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1">
                  {t.badgeSpiceTitle}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {t.badgeSpiceDesc}
                </p>
              </div>
            </div>

            {/* Feature 4: Sustainable Riverside Sourcing */}
            <div className="md:col-span-6 rounded-2xl bg-surface-container-lowest p-space-lg shadow-md flex flex-col sm:flex-row gap-space-md items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[36px]">
                  water
                </span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-secondary block mb-1">
                  নদী ও খামার থেকে সরাসরি
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1">
                  Riverside Morning Catch
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Padma and Rupnarayan river Hilsa, freshwater gold prawns from
                  Sundarban creeks, and heirloom Gobindobhog rice procured
                  straight from Burdwan paddy fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE DYNAMIC MENU SHOWCASE */}
      <section
        id="menu-showcase"
        className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-24 bg-surface"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
              ঐতিহ্যবাহী রসনা তৃপ্তি • Signature Degustation
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              {t.menuTitle}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t.menuSubtitle}
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center justify-start md:justify-center overflow-x-auto gap-space-xs pb-space-sm pt-space-xs scrollbar-none">
            {(
              [
                { id: 'all', label: t.filterAll },
                { id: 'fish', label: t.filterFish },
                { id: 'meat', label: t.filterMeat },
                { id: 'veg', label: t.filterVeg },
                { id: 'dessert', label: t.filterDessert },
              ] as const
            ).map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    active
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Menu Grid of Baby Arc Dish Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {filteredDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onOpenLore={onOpenLore}
                onAddWishlist={onAddWishlist}
                inWishlistQty={getWishlistQty(dish.id)}
              />
            ))}
          </div>

          {/* Link to Full Menu & Kansa Thali Degustations */}
          <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
            <button
              type="button"
              onClick={() => onNavigate('menu')}
              className="px-space-lg py-space-sm rounded-lg border border-brass text-primary hover:bg-secondary-container/25 font-label-lg text-label-lg transition-all cursor-pointer flex items-center gap-space-xs"
            >
              <span>View Complete À La Carte &amp; Sharbats</span>
              <span className="material-symbols-outlined text-[18px]">
                restaurant_menu
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('specialties')}
              className="px-space-lg py-space-sm rounded-lg bg-charcoal-hearth text-parchment hover:bg-inverse-surface font-label-lg text-label-lg transition-all cursor-pointer flex items-center gap-space-xs border border-mustard-gold/50"
            >
              <span>Explore Royal Kansa Thalis</span>
              <span className="material-symbols-outlined text-[18px] text-mustard-gold">
                stars
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: TABLE RESERVATION & FEAST BOOKING MODULE */}
      <section
        id="reservations-section"
        className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low relative"
      >
        <ReservationModule
          lang={lang}
          wishlist={wishlist}
          onConfirmReservation={onConfirmReservation}
        />
      </section>

      {/* SECTION 5: VERIFIED PATRON REVIEWS & AMBIENCE */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          {/* Section Title */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
                অতিথি প্রশংসা • Guest Chronicles
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Voices of Satisfied Diners
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('reviews')}
              className="flex items-center gap-space-xs bg-surface-container hover:bg-surface-container-high px-space-md py-space-xs rounded-full transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined material-fill text-secondary text-[20px]">
                star
              </span>
              <span className="font-title-md text-title-md text-on-surface font-bold tabular-nums">
                4.9 / 5.0
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                (1,480+ Reviews across Kolkata)
              </span>
            </button>
          </div>

          {/* Testimonial Grid (First 3 Featured Reviews) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {reviews.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="rounded-t-[3.5rem] rounded-b-2xl bg-surface-container-lowest p-space-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-secondary mb-space-sm">
                    {Array.from({ length: rev.rating }).map((_, idx) => (
                      <span
                        key={idx}
                        className="material-symbols-outlined material-fill text-[18px]"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-headline-sm text-headline-sm text-primary mb-space-sm italic">
                    {rev.quote}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {rev.body}
                  </p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-md mt-space-md border-t border-surface-container">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${
                      rev.avatarTone === 'secondary'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : rev.avatarTone === 'primary'
                          ? 'bg-primary-fixed text-primary'
                          : 'bg-secondary-fixed text-on-secondary-container'
                    }`}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface block leading-none">
                      {rev.author}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {rev.roleLocation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: AMBIENT HEARTH EXPERIENCE SHOWCASE */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-lg bg-surface-container-low">
        <div className="max-w-7xl mx-auto rounded-3xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-lg flex flex-col lg:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
              Live Rural Atmosphere
            </span>
            <h3 className="font-headline-md text-headline-md text-primary">
              Experience the Live Woodfire Kitchen
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Guests are warmly welcome to step into our courtyard kitchen
              alcove before lunch to watch our master cooks stoke the dried
              tamarind logs and seal the clay handis with dough.
            </p>
          </div>
          <div className="flex items-center gap-space-md shrink-0">
            <div className="flex -space-x-3 overflow-hidden">
              <div className="inline-block h-12 w-12 rounded-full ring-2 ring-surface bg-secondary-container flex items-center justify-center font-bold text-primary">
                ১
              </div>
              <div className="inline-block h-12 w-12 rounded-full ring-2 ring-surface bg-primary-fixed flex items-center justify-center font-bold text-primary">
                ২
              </div>
              <div className="inline-block h-12 w-12 rounded-full ring-2 ring-surface bg-tertiary-fixed flex items-center justify-center font-bold text-primary">
                ৩
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-title-md text-title-md text-on-surface">
                Kitchen Walkthrough
              </span>
              <span className="font-body-sm text-body-sm text-secondary">
                Every day at 12:15 PM &amp; 7:15 PM
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
