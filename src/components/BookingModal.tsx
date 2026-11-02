import React from 'react';
import { ReservationRecord } from '../types';

interface BookingModalProps {
  reservation: ReservationRecord | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  reservation,
  onClose,
}) => {
  if (!reservation) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-md p-space-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-confirmed-title"
    >
      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl p-space-lg md:p-space-xl overflow-hidden">
        <div className="w-16 h-16 mx-auto mb-space-md rounded-full bg-secondary-container flex items-center justify-center text-primary">
          <span className="material-symbols-outlined material-fill text-[36px]">
            restaurant
          </span>
        </div>

        <div className="text-center mb-space-lg">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary block mb-space-xs">
            ধন্যবাদ • Reservation Confirmed
          </span>
          <h3
            id="booking-confirmed-title"
            className="font-headline-md text-headline-md text-primary mb-space-xs"
          >
            Welcome to Matir Unun
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Your earthen hearth table has been reserved. A confirmation SMS
            &amp; WhatsApp notice has been dispatched to {reservation.phone}.
          </p>
        </div>

        <div className="bg-surface-container-low rounded-xl p-space-md mb-space-lg flex flex-col gap-space-xs text-on-surface">
          <div className="flex justify-between items-center text-body-sm font-body-sm">
            <span className="text-on-surface-variant">Booking Reference:</span>
            <span className="font-title-md text-title-md text-primary tabular-nums">
              {reservation.refId}
            </span>
          </div>
          <div className="flex justify-between items-center text-body-sm font-body-sm">
            <span className="text-on-surface-variant">Guest Name:</span>
            <span className="font-medium text-on-surface">
              {reservation.guestName}
            </span>
          </div>
          <div className="flex justify-between items-center text-body-sm font-body-sm">
            <span className="text-on-surface-variant">Date &amp; Slot:</span>
            <span className="font-medium text-on-surface">
              {reservation.date}, {reservation.slot} ({reservation.guests})
            </span>
          </div>
          <div className="flex justify-between items-center text-body-sm font-body-sm">
            <span className="text-on-surface-variant">Seating Style:</span>
            <span className="font-medium text-secondary text-right">
              {reservation.seatingStyle}
            </span>
          </div>
          {reservation.kitchenWalkthrough && (
            <div className="flex justify-between items-center text-body-sm font-body-sm pt-1 border-t border-surface-container">
              <span className="text-on-surface-variant">Courtyard Alcove:</span>
              <span className="font-medium text-primary">
                Live Woodfire Walkthrough Included
              </span>
            </div>
          )}
          {reservation.wishlistSummary &&
            reservation.wishlistSummary.length > 0 && (
              <div className="pt-2 mt-1 border-t border-surface-container flex flex-col gap-1">
                <span className="text-body-sm text-on-surface-variant">
                  Pre-Noted Hearth Dishes:
                </span>
                <span className="font-body-sm text-primary font-medium">
                  {reservation.wishlistSummary.join(' • ')}
                </span>
              </div>
            )}
        </div>

        <div className="flex items-center gap-space-sm">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-space-sm bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg transition-all shadow-md cursor-pointer"
          >
            Dismiss &amp; Return
          </button>
        </div>
      </div>
    </div>
  );
};
