import React from 'react';
import { Dish } from '../types';
import { ResilientImage } from './ResilientImage';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  onAddWishlist: (dish: Dish) => void;
  onReserveDish: (dish: Dish) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddWishlist,
  onReserveDish,
}) => {
  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-md p-space-sm md:p-space-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dish-name"
    >
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-t-[3.5rem] rounded-b-3xl shadow-2xl max-h-[92vh] overflow-y-auto scrollbar-none flex flex-col">
        {/* Close Button */}
        <button
          aria-label="Close modal"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface hover:bg-surface-container hover:text-primary transition-all flex items-center justify-center shadow-md cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Hero Banner with Baby-Arc Image Window */}
        <div className="relative w-full h-64 sm:h-72 rounded-t-[3.5rem] overflow-hidden bg-surface-container shrink-0">
          <ResilientImage
            src={dish.image}
            alt={dish.imageAlt}
            fallbackLabel={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/30 to-transparent" />
          <div className="absolute top-6 left-6 flex items-center gap-space-xs pr-14">
            <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-primary font-label-md text-label-md tracking-wider uppercase shadow-md flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">
                outdoor_grill
              </span>
              <span>{dish.vessel}</span>
            </span>
          </div>
          <div className="absolute bottom-4 left-6 right-6 flex flex-col gap-0.5 text-surface">
            <div className="flex items-center gap-space-xs">
              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-semibold">
                {dish.dietaryTag}
              </span>
              <span className="font-label-md text-label-md text-surface-variant">
                {dish.spiceLevel}
              </span>
            </div>
            <div className="flex items-end justify-between gap-space-sm">
              <div>
                <h3
                  id="modal-dish-name"
                  className="font-headline-md text-headline-md text-surface leading-tight"
                >
                  {dish.name}
                </h3>
                <span className="font-body-sm text-body-sm text-secondary-container font-medium">
                  {dish.bengaliSub}
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-tertiary-fixed font-bold tabular-nums">
                ₹{dish.price}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-space-lg md:p-space-xl flex flex-col gap-space-lg text-on-surface">
          {/* Section A: Provenance & Lore */}
          <div className="flex flex-col gap-space-xs border-b border-surface-container pb-space-md">
            <div className="flex items-center gap-space-xs text-secondary">
              <span className="material-symbols-outlined text-[20px]">
                history_edu
              </span>
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider font-semibold">
                Provenance &amp; Regional Lore
              </h4>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {dish.lore}
            </p>
            <div className="inline-flex items-center gap-space-xs text-body-sm text-primary font-medium mt-1">
              <span className="material-symbols-outlined text-[16px]">
                location_on
              </span>
              <span>{dish.originPlace}</span>
            </div>
          </div>

          {/* Section B: Craft & Slow Hearth Technique */}
          <div className="flex flex-col gap-space-xs border-b border-surface-container pb-space-md">
            <div className="flex items-center gap-space-xs text-secondary">
              <span className="material-symbols-outlined text-[20px]">
                fireplace
              </span>
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider font-semibold">
                Preparation &amp; Hearth Technique
              </h4>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {dish.technique}
            </p>
          </div>

          {/* Section C: Sommelier & Beverage Pairings */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs text-secondary">
              <span className="material-symbols-outlined text-[20px]">
                wine_bar
              </span>
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider font-semibold">
                Curated Beverage &amp; Wine Pairings
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
              {/* Option 1: Artisanal Sharbat */}
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between border border-surface-container">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-body-sm font-medium text-secondary">
                    <span>Artisanal Sharbat</span>
                    <span className="material-symbols-outlined text-[18px]">
                      local_bar
                    </span>
                  </div>
                  <span className="font-title-md text-title-md text-primary font-bold">
                    {dish.sharbatPairing.name}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {dish.sharbatPairing.notes}
                  </p>
                </div>
              </div>

              {/* Option 2: Sommelier Wine Pairing */}
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between border border-surface-container">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-body-sm font-medium text-secondary">
                    <span>Sommelier Wine Cellar</span>
                    <span className="material-symbols-outlined text-[18px]">
                      wine_bar
                    </span>
                  </div>
                  <span className="font-title-md text-title-md text-primary font-bold">
                    {dish.winePairing.name}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {dish.winePairing.notes}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs mt-space-xs">
            <button
              type="button"
              onClick={() => onAddWishlist(dish)}
              className="flex-1 py-space-sm bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg transition-all shadow-md flex items-center justify-center gap-space-xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                bookmark_add
              </span>
              <span>Save to Tasting Wishlist</span>
            </button>
            <button
              type="button"
              onClick={() => onReserveDish(dish)}
              className="flex-1 py-space-sm bg-surface-container hover:bg-surface-container-high text-primary rounded-lg font-label-lg text-label-lg transition-all flex items-center justify-center gap-space-xs text-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                calendar_today
              </span>
              <span>Reserve for Experience</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
