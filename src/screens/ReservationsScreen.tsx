import React, { useState } from 'react';
import { ReservationModule } from '../components/ReservationModule';
import {
  Language,
  ReservationRecord,
  WishlistItem,
} from '../types';

interface ReservationsScreenProps {
  lang: Language;
  wishlist: WishlistItem[];
  reservations: ReservationRecord[];
  onConfirmReservation: (record: ReservationRecord) => void;
}

export const ReservationsScreen: React.FC<ReservationsScreenProps> = ({
  lang,
  wishlist,
  reservations,
  onConfirmReservation,
}) => {
  const [selectedSeating, setSelectedSeating] = useState(
    'Traditional Low Seating (বৈঠক)'
  );

  const seatingSpaces = [
    {
      value: 'Traditional Low Seating (বৈঠক)',
      bengali: 'পিঁড়ি ও আলপনা বৈঠক',
      title: 'Traditional Low Pirhi Seating',
      capacity: '2 – 6 Guests per Alcove',
      desc: 'Hand-carved jackfruit-wood low pirhis arranged over cool red-oxide terracotta floors painted with fresh rice-paste alpana motifs.',
      icon: 'self_improvement',
    },
    {
      value: 'Standard Heritage Table',
      bengali: 'বার্মা সেগুন কাঠের কক্ষ',
      title: 'Burma Teak Heritage Dining Hall',
      capacity: '2 – 8 Guests per Table',
      desc: 'Louvered colonial shutters, cane-back armchairs, and heirloom Burma teak tables illuminated by warm brass hurricane lamps.',
      icon: 'table_restaurant',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Intro & Seating Architecture Selector */}
      <section className="w-full px-margin lg:px-margin-desktop pt-space-xl pb-space-lg bg-surface">
        <div className="max-w-5xl mx-auto flex flex-col gap-space-lg">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest">
              আসন সংরক্ষণ ও আতিথেয়তা • Ballygunge Hearth Estate
            </span>
            <h1 className="font-display-hero text-display-hero-mobile lg:text-headline-lg text-primary">
              Reserve Your Earthen Hearth Experience
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Choose between our traditional floor-seated <em>Pirhi Baithak</em>{' '}
              alcoves or our Burma teak dining salon below, then confirm your
              preferred lunch or dinner simmering cycle.
            </p>
          </div>

          {/* Interactive Seating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {seatingSpaces.map((space) => {
              const active = selectedSeating === space.value;
              return (
                <button
                  key={space.value}
                  type="button"
                  onClick={() => setSelectedSeating(space.value)}
                  className={`text-left rounded-t-[3rem] rounded-b-2xl p-space-lg transition-all cursor-pointer border ${
                    active
                      ? 'bg-surface-container-lowest border-primary shadow-xl ring-1 ring-primary/30'
                      : 'bg-surface-container-low border-brass/25 hover:bg-surface-container-lowest shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]">
                        {space.icon}
                      </span>
                    </div>
                    <span className="font-label-md text-label-md text-secondary uppercase">
                      {space.capacity}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary font-medium block">
                    {space.bengali}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                    {space.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {space.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Reservation Module */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
        <ReservationModule
          lang={lang}
          wishlist={wishlist}
          preselectedSeating={selectedSeating}
          onConfirmReservation={onConfirmReservation}
        />
      </section>

      {/* Active Reservations in Current Session */}
      {reservations.length > 0 && (
        <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface">
          <div className="max-w-5xl mx-auto flex flex-col gap-space-md">
            <h2 className="font-headline-md text-headline-md text-primary">
              Your Confirmed Hearth Bookings ({reservations.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {reservations.map((res) => (
                <div
                  key={res.refId}
                  className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md border border-brass/35 flex flex-col gap-space-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-primary tabular-nums">
                      {res.refId}
                    </span>
                    <span className="font-label-md text-secondary uppercase">
                      Confirmed • {res.createdAt}
                    </span>
                  </div>
                  <p className="font-title-md text-on-surface">
                    {res.guestName} ({res.guests})
                  </p>
                  <p className="font-body-sm text-on-surface-variant">
                    {res.date} • {res.slot} • {res.seatingStyle}
                  </p>
                  {res.wishlistSummary && res.wishlistSummary.length > 0 && (
                    <p className="font-body-sm text-primary pt-1 border-t border-surface-container">
                      Pre-noted Dishes: {res.wishlistSummary.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
