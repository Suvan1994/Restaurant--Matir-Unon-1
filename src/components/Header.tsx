import React, { useState } from 'react';
import { TRANSLATIONS } from '../data/restaurantData';
import { Language, PageRoute } from '../types';
import { EmblemLogo } from './EmblemLogo';

interface HeaderProps {
  activeRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
  wishlistCount: number;
  reservationsCount: number;
  onOpenWishlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeRoute,
  onNavigate,
  lang,
  onLangChange,
  wishlistCount,
  reservationsCount,
  onOpenWishlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navItems: { route: PageRoute; label: string }[] = [
    { route: 'home', label: t.navHome },
    { route: 'our-story', label: t.navStory },
    { route: 'specialties', label: t.navSpecialties },
    { route: 'menu', label: t.navMenu },
    { route: 'reservations', label: t.navReservations },
    { route: 'reviews', label: t.navReviews },
    { route: 'contact', label: t.navContact },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  const totalBadge = wishlistCount + reservationsCount;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(109,36,23,0.06)]">
      <div className="h-20 w-full px-margin lg:px-margin-desktop flex items-center justify-between gap-space-md">
        {/* Brand Identity */}
        <div className="flex items-center gap-space-md shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-space-sm group text-left cursor-pointer"
          >
            <EmblemLogo className="h-9 w-9" />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-none group-hover:text-primary-container transition-colors whitespace-nowrap">
                মাটির উনুন
              </span>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-0.5 whitespace-nowrap">
                Matir Unun • The Clay Oven
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Segmented Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-space-xs p-1 bg-surface-container-low rounded-xl"
        >
          {navItems.map((item) => {
            const isActive = activeRoute === item.route;
            return (
              <button
                key={item.route}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                onClick={() => handleNavClick(item.route)}
                className={`px-space-md py-space-xs whitespace-nowrap shrink-0 transition-all cursor-pointer font-label-lg text-label-lg ${
                  isActive
                    ? 'bg-secondary-container text-on-secondary-container font-semibold rounded-lg shadow-sm'
                    : 'rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Language Switcher + Reserve CTA + Guest Folio + Mobile Menu */}
        <div className="flex items-center gap-space-sm shrink-0">
          <div
            className="hidden sm:flex items-center bg-surface-container-high p-0.5 rounded-full"
            role="group"
            aria-label="Language Switcher"
          >
            {(
              [
                { code: 'en', label: 'EN' },
                { code: 'bn', label: 'বাংলা' },
                { code: 'hi', label: 'हिन्दी' },
              ] as const
            ).map((option) => {
              const active = lang === option.code;
              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => onLangChange(option.code)}
                  className={`px-space-sm py-0.5 rounded-full font-label-md text-label-md transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => handleNavClick('reservations')}
            className="hidden md:inline-flex items-center justify-center px-space-md py-space-sm bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg shadow-[0_4px_16px_rgba(109,36,23,0.18)] hover:bg-primary transition-all text-center cursor-pointer whitespace-nowrap"
          >
            <span className="flex flex-col text-left">
              <span className="leading-none">{t.reserveCtaTop}</span>
              <span className="font-label-md text-label-md text-on-primary-container leading-tight mt-0.5">
                {t.reserveCtaSub}
              </span>
            </span>
          </button>

          {/* Guest Tasting Wishlist & Reservation Folio Button */}
          <button
            type="button"
            onClick={onOpenWishlist}
            aria-label="Open Tasting Wishlist and Guest Folio"
            title="Tasting Wishlist & Bookings"
            className="relative w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center ml-space-xs transition-all cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">
              {wishlistCount > 0 ? 'bookmarks' : 'person'}
            </span>
            {totalBadge > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-secondary-container text-primary font-label-md text-[10px] font-bold flex items-center justify-center shadow-sm">
                {totalBadge}
              </span>
            )}
          </button>

          {/* Mobile & Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="xl:hidden w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/98 backdrop-blur-xl border-t border-surface-container px-margin py-space-md shadow-xl">
          <div className="flex flex-col gap-space-xs">
            {navItems.map((item) => {
              const isActive = activeRoute === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-space-md py-space-sm rounded-lg font-label-lg text-label-lg flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? 'bg-secondary-container text-on-secondary-container font-semibold'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-space-md pt-space-md border-t border-surface-container flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center bg-surface-container-high p-0.5 rounded-full">
              {(
                [
                  { code: 'en', label: 'EN' },
                  { code: 'bn', label: 'বাংলা' },
                  { code: 'hi', label: 'हिन्दी' },
                ] as const
              ).map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => onLangChange(option.code)}
                  className={`px-space-sm py-1 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                    lang === option.code
                      ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                      : 'text-on-surface-variant'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('reservations')}
              className="px-space-md py-space-xs bg-primary text-on-primary rounded-lg font-label-lg text-label-lg cursor-pointer"
            >
              {t.reserveCtaTop}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
