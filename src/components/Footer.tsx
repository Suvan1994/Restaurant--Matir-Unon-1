import React from 'react';
import { PageRoute } from '../types';
import { EmblemLogo } from './EmblemLogo';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop mb-space-xl">
        {/* Column 1: Brand & Concierge */}
        <div className="flex flex-col gap-space-sm">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-space-sm text-left cursor-pointer group self-start"
          >
            <EmblemLogo className="h-8 w-8" />
            <span className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
              মাটির উনুন
            </span>
          </button>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Crafting timeless earthen flavours from Bengal&apos;s riverbanks and
            wood-fired hearths. A sanctuary of slow gastronomic heritage.
          </p>
          <div className="flex items-center gap-space-sm pt-space-xs">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-lowest text-secondary rounded-full font-label-md text-label-md shadow-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>WhatsApp Concierge</span>
            </button>
          </div>
        </div>

        {/* Column 2: Dining Hours */}
        <div className="flex flex-col gap-space-sm">
          <h4 className="font-title-md text-title-md text-primary">
            Dining Hours • সময়সূচি
          </h4>
          <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <div>
              <span className="font-semibold text-on-surface">
                Lunch / মধ্যাহ্নভোজ:
              </span>
              <br />
              Tuesday – Sunday: 12:30 PM – 3:45 PM
            </div>
            <div>
              <span className="font-semibold text-on-surface">
                Dinner / নৈশভোজ:
              </span>
              <br />
              Tuesday – Sunday: 7:00 PM – 11:30 PM
            </div>
            <div className="text-error font-medium">
              Closed Mondays for traditional kitchen resting
            </div>
          </div>
        </div>

        {/* Column 3: Address & Estate Map Card */}
        <div className="flex flex-col gap-space-sm">
          <h4 className="font-title-md text-title-md text-primary">
            Heirloom Dining • ঠিকানা
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Heritage Enclave, 14 Sarat Bose Road,
            <br />
            Ballygunge, Kolkata, West Bengal 700020
            <br />
            Contact: +91 33 2475 9811
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="h-28 w-full rounded-lg overflow-hidden bg-surface-container hover:bg-surface-container-high relative flex items-center justify-center transition-colors cursor-pointer group"
          >
            <div className="text-center p-space-xs">
              <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors text-[24px]">
                map
              </span>
              <span className="block font-label-md text-label-md text-on-surface-variant group-hover:text-on-surface">
                Kolkata Hearth Estate • Interactive Map
              </span>
            </div>
          </button>
        </div>

        {/* Column 4: Explore Links */}
        <div className="flex flex-col gap-space-sm">
          <h4 className="font-title-md text-title-md text-primary">
            Explore • অন্বেষণ
          </h4>
          <div className="flex flex-col gap-space-xs font-body-sm text-body-sm items-start">
            <button
              type="button"
              onClick={() => onNavigate('specialties')}
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Kansa Degustation Menu
            </button>
            <button
              type="button"
              onClick={() => onNavigate('our-story')}
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              The Clay Oven Philosophy
            </button>
            <button
              type="button"
              onClick={() => onNavigate('reservations')}
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Private Feast Chambers
            </button>
            <button
              type="button"
              onClick={() => onNavigate('reviews')}
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Patron Testimonials
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Private Banquets &amp; Enquiries
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop pt-space-md border-t border-surface-container-high flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex flex-col md:flex-row items-center gap-space-xs md:gap-space-md font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
          <span>
            © 2026 মাটির উনুন | Matir Unun Gastronomy Pvt. Ltd. All rights
            reserved.
          </span>
          <span className="hidden md:inline">•</span>
          <span>সর্বস্বত্ব সংরক্ষিত</span>
        </div>
        <div className="flex items-center gap-space-md font-label-md text-label-md text-on-surface-variant">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Terms of Hospitality
          </button>
          <button
            type="button"
            onClick={() => onNavigate('reviews')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Press &amp; Archives
          </button>
        </div>
      </div>
    </footer>
  );
};
