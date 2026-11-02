import React from 'react';
import { Dish } from '../types';
import { ResilientImage } from './ResilientImage';

interface DishCardProps {
  dish: Dish;
  onOpenLore: (dish: Dish) => void;
  onAddWishlist: (dish: Dish) => void;
  inWishlistQty?: number;
}

export const DishCard: React.FC<DishCardProps> = ({
  dish,
  onOpenLore,
  onAddWishlist,
  inWishlistQty = 0,
}) => {
  return (
    <div
      onClick={() => onOpenLore(dish)}
      className="dish-card group rounded-t-[3.5rem] rounded-b-2xl bg-surface-container-lowest p-3 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        <div className="relative w-full aspect-[4/3] rounded-t-[3rem] rounded-b-xl overflow-hidden bg-surface-container mb-space-md">
          <ResilientImage
            src={dish.image}
            alt={dish.imageAlt}
            fallbackLabel={dish.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span
            className={`absolute top-3 right-3 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 font-label-md text-label-md uppercase tracking-wider font-semibold shadow-sm ${
              dish.badgeTone === 'primary' ? 'text-primary' : 'text-secondary'
            }`}
          >
            {dish.badgeText}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenLore(dish);
            }}
            className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-primary font-label-md text-label-md uppercase tracking-wider font-semibold shadow-md flex items-center gap-1 hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">
              history_edu
            </span>
            <span>View Lore &amp; Pairings</span>
          </button>
        </div>

        <div className="px-2">
          <div className="flex items-start justify-between gap-space-xs mb-1">
            <div>
              <h4 className="font-headline-sm text-headline-sm text-primary leading-tight group-hover:text-primary-container transition-colors">
                {dish.name}
              </h4>
              <span className="font-body-sm text-body-sm text-secondary block font-medium">
                {dish.bengaliSub}
              </span>
            </div>
            <span className="font-title-lg text-title-lg text-primary font-bold tabular-nums">
              ₹{dish.price}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-2">
            {dish.description}
          </p>
        </div>
      </div>

      <div className="pt-space-md px-2 flex items-center justify-between gap-2">
        <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider">
          {dish.bottomTag}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onAddWishlist(dish);
          }}
          className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1 shadow-sm cursor-pointer whitespace-nowrap shrink-0 ${
            inWishlistQty > 0
              ? 'bg-secondary-container text-primary font-bold hover:bg-primary hover:text-on-primary'
              : 'bg-surface-container hover:bg-primary hover:text-on-primary text-primary'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">
            {inWishlistQty > 0 ? 'bookmark_added' : 'bookmark_add'}
          </span>
          <span>
            {inWishlistQty > 0
              ? `Saved (${inWishlistQty})`
              : 'Taste Wishlist'}
          </span>
        </button>
      </div>
    </div>
  );
};
