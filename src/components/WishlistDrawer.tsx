import React from 'react';
import { ReservationRecord, WishlistItem } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: WishlistItem[];
  reservations: ReservationRecord[];
  onUpdateQty: (id: string, delta: number) => void;
  onClearWishlist: () => void;
  onProceedToReserve: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  reservations,
  onUpdateQty,
  onClearWishlist,
  onProceedToReserve,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-inverse-surface/55 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Guest Tasting Wishlist and Reservations"
    >
      <div className="w-full max-w-md bg-surface-container-lowest h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Drawer Header */}
        <div className="p-space-lg bg-primary text-on-primary flex items-center justify-between">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary-container block">
              অতিথি তালিকা • Guest Folio
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-primary">
              Tasting Wishlist &amp; Bookings
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Guest Folio"
            className="w-9 h-9 rounded-full bg-primary-container hover:bg-surface-container-lowest hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-space-lg flex flex-col gap-space-lg">
          {/* Tasting Wishlist Section */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-semibold">
                Saved Hearth Dishes ({items.reduce((s, i) => s + i.quantity, 0)})
              </h4>
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={onClearWishlist}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-error transition-colors cursor-pointer"
                >
                  Clear All
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <div className="p-space-lg rounded-2xl bg-surface-container-low text-center flex flex-col items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[28px]">
                  bookmark_add
                </span>
                <p className="font-title-md text-title-md text-primary">
                  Your Tasting Wishlist is Empty
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Save slow-simmered dishes or Kansa thalis while browsing so our
                  hearth cooks can prepare your table&apos;s portions in advance.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-space-sm">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between gap-space-sm"
                  >
                    <div className="min-w-0">
                      <span className="font-title-md text-title-md text-primary block truncate">
                        {item.name}
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary block truncate">
                        {item.bengaliSub}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant tabular-nums">
                        ₹{item.price} × {item.quantity} = ₹
                        {item.price * item.quantity}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-surface-container-lowest rounded-lg p-1 shadow-xs shrink-0">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.id, -1)}
                        aria-label={`Decrease ${item.name}`}
                        className="w-7 h-7 rounded-md hover:bg-surface-container flex items-center justify-center text-primary font-bold cursor-pointer"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-title-md text-sm tabular-nums text-on-surface">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.id, 1)}
                        aria-label={`Increase ${item.name}`}
                        className="w-7 h-7 rounded-md hover:bg-surface-container flex items-center justify-center text-primary font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                <div className="p-space-md rounded-xl bg-secondary-container/35 flex items-center justify-between">
                  <span className="font-label-lg text-label-lg text-primary uppercase">
                    Estimated Feast Value
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">
                    ₹{subtotal}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Confirmed Reservations in Session */}
          {reservations.length > 0 && (
            <div className="flex flex-col gap-space-sm pt-space-md border-t border-surface-container">
              <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-semibold">
                Confirmed Table Reservations ({reservations.length})
              </h4>
              {reservations.map((res) => (
                <div
                  key={res.refId}
                  className="p-space-md rounded-xl bg-surface-container-low border border-brass/30 flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-primary tabular-nums">
                      {res.refId}
                    </span>
                    <span className="font-label-md text-label-md text-secondary uppercase">
                      Confirmed
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    {res.guestName} • {res.guests}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {res.date} at {res.slot}
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    {res.seatingStyle}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="p-space-lg border-t border-surface-container bg-surface-container-lowest">
          <button
            type="button"
            onClick={onProceedToReserve}
            className="w-full py-space-sm bg-primary hover:bg-primary-container text-on-primary rounded-xl font-title-md text-title-md shadow-lg transition-all flex items-center justify-center gap-space-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">
              table_bar
            </span>
            <span>
              {items.length > 0
                ? 'Reserve Table with Wishlist'
                : 'Book a Hearth Table'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
