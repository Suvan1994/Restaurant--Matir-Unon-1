import React, { useEffect, useState } from 'react';
import { TRANSLATIONS } from '../data/restaurantData';
import { Language, ReservationRecord, WishlistItem } from '../types';

interface ReservationModuleProps {
  lang: Language;
  wishlist: WishlistItem[];
  preselectedSeating?: string;
  onConfirmReservation: (record: ReservationRecord) => void;
}

export const ReservationModule: React.FC<ReservationModuleProps> = ({
  lang,
  wishlist,
  preselectedSeating,
  onConfirmReservation,
}) => {
  const t = TRANSLATIONS[lang];

  const getTomorrowIso = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(getTomorrowIso);
  const [slot, setSlot] = useState('12:30 PM');
  const [guests, setGuests] = useState('2 Persons');
  const [seatingStyle, setSeatingStyle] = useState(
    preselectedSeating || 'Traditional Low Seating (বৈঠক)'
  );
  const [notes, setNotes] = useState('');
  const [includeWishlist, setIncludeWishlist] = useState(true);
  const [kitchenWalkthrough, setKitchenWalkthrough] = useState(false);

  useEffect(() => {
    if (preselectedSeating) {
      setSeatingStyle(preselectedSeating);
    }
  }, [preselectedSeating]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `#MU-${Math.floor(1000 + Math.random() * 9000)}`;
    const wishlistSummary =
      includeWishlist && wishlist.length > 0
        ? wishlist.map((item) => `${item.name} ×${item.quantity}`)
        : undefined;

    onConfirmReservation({
      refId: randomRef,
      guestName: guestName.trim() || 'Debashis Roy',
      phone: phone.trim() || '+91 98300 12345',
      date,
      slot,
      guests,
      seatingStyle,
      notes: notes.trim(),
      kitchenWalkthrough,
      wishlistSummary,
      createdAt: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    });

    setGuestName('');
    setPhone('');
    setNotes('');
  };

  return (
    <div className="max-w-5xl mx-auto rounded-3xl bg-surface-container-lowest shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      {/* Left Editorial Context Banner */}
      <div className="lg:col-span-5 bg-primary p-space-lg md:p-space-xl text-on-primary flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-primary-container/40 pointer-events-none" />
        <div>
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary-container block mb-space-xs">
            টেবিল সংরক্ষণ
          </span>
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-space-sm text-on-primary">
            {t.bookingLeftTitle}
          </h3>
          <p className="font-body-md text-body-md text-primary-fixed mb-space-md">
            {t.bookingLeftDesc}
          </p>
          <div className="flex flex-col gap-space-sm pt-space-xs">
            <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-primary-fixed">
              <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
                check_circle
              </span>
              <span>Complimentary Welcoming Aam Pora Shorbot</span>
            </div>
            <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-primary-fixed">
              <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
                check_circle
              </span>
              <span>Traditional Bell-Metal Kansa Service</span>
            </div>
            <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-primary-fixed">
              <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
                check_circle
              </span>
              <span>No synthetic coloring or artificial additives</span>
            </div>
          </div>
        </div>

        <div className="mt-space-lg pt-space-md border-t border-primary-container relative z-10">
          <div className="text-body-sm text-primary-fixed">
            Need assistance for large family gatherings?
          </div>
          <a
            className="font-title-md text-title-md text-secondary-container hover:underline flex items-center gap-1 mt-1"
            href="tel:+919830012345"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>+91 98300 12345 (9 AM – 9 PM)</span>
          </a>
        </div>
      </div>

      {/* Right Form Controls Container */}
      <div className="lg:col-span-7 p-space-lg md:p-space-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="guest-name"
                className="font-label-lg text-label-lg text-on-surface font-medium"
              >
                {t.formName}
              </label>
              <input
                id="guest-name"
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Debashis Roy"
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-container focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="guest-phone"
                className="font-label-lg text-label-lg text-on-surface font-medium"
              >
                {t.formPhone}
              </label>
              <input
                id="guest-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98300 00000"
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-container focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="book-date"
                className="font-label-lg text-label-lg text-on-surface font-medium"
              >
                {t.formDate}
              </label>
              <input
                id="book-date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:bg-surface-container focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="book-slot"
                className="font-label-lg text-label-lg text-on-surface font-medium"
              >
                {t.formSlot}
              </label>
              <select
                id="book-slot"
                required
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:bg-surface-container focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              >
                <option value="12:30 PM">12:30 PM (Lunch)</option>
                <option value="1:45 PM">1:45 PM (Lunch)</option>
                <option value="2:45 PM">2:45 PM (Late Lunch)</option>
                <option value="7:30 PM">7:30 PM (Dinner)</option>
                <option value="8:45 PM">8:45 PM (Dinner)</option>
                <option value="10:00 PM">10:00 PM (Late Dinner)</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="book-guests"
                className="font-label-lg text-label-lg text-on-surface font-medium"
              >
                {t.formGuests}
              </label>
              <select
                id="book-guests"
                required
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:bg-surface-container focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              >
                <option value="1 Person">1 Guest</option>
                <option value="2 Persons">2 Guests</option>
                <option value="4 Persons">4 Guests</option>
                <option value="6 Persons">6 Guests</option>
                <option value="8+ Persons">8+ Royal Feast</option>
              </select>
            </div>
          </div>

          {/* Seating Style Preference Choice */}
          <div className="flex flex-col gap-space-xs pt-1">
            <span className="font-label-lg text-label-lg text-on-surface font-medium">
              Seating Style Preference
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <label
                className={`cursor-pointer flex items-center gap-space-sm p-space-sm rounded-xl transition-all ${
                  seatingStyle.includes('Low Seating')
                    ? 'bg-secondary-container/45 ring-1 ring-primary/40'
                    : 'bg-surface-container-low hover:bg-surface-container'
                }`}
              >
                <input
                  type="radio"
                  name="seating_style"
                  value="Traditional Low Seating (বৈঠক)"
                  checked={seatingStyle === 'Traditional Low Seating (বৈঠক)'}
                  onChange={(e) => setSeatingStyle(e.target.value)}
                  className="accent-primary"
                />
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-surface leading-tight">
                    Low Seating (পিঁড়ি / বৈঠক)
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Classic wooden seat on terracotta floor
                  </span>
                </div>
              </label>

              <label
                className={`cursor-pointer flex items-center gap-space-sm p-space-sm rounded-xl transition-all ${
                  seatingStyle === 'Standard Heritage Table'
                    ? 'bg-secondary-container/45 ring-1 ring-primary/40'
                    : 'bg-surface-container-low hover:bg-surface-container'
                }`}
              >
                <input
                  type="radio"
                  name="seating_style"
                  value="Standard Heritage Table"
                  checked={seatingStyle === 'Standard Heritage Table'}
                  onChange={(e) => setSeatingStyle(e.target.value)}
                  className="accent-primary"
                />
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-surface leading-tight">
                    Standard Table
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Polished Burma teak dining table
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Pre-saved Wishlist Attachment & Courtyard Walkthrough */}
          {wishlist.length > 0 && (
            <label className="cursor-pointer flex items-start gap-space-sm p-space-sm rounded-xl bg-secondary-container/30 border border-brass/30">
              <input
                type="checkbox"
                checked={includeWishlist}
                onChange={(e) => setIncludeWishlist(e.target.checked)}
                className="mt-1 accent-primary"
              />
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-primary">
                  Pre-notify Kitchen with Tasting Wishlist ({wishlist.length}{' '}
                  selection{wishlist.length > 1 ? 's' : ''})
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {wishlist.map((w) => `${w.name} ×${w.quantity}`).join(' • ')}
                </span>
              </div>
            </label>
          )}

          <label className="cursor-pointer flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
            <input
              type="checkbox"
              checked={kitchenWalkthrough}
              onChange={(e) => setKitchenWalkthrough(e.target.checked)}
              className="accent-primary"
            />
            <span className="font-body-sm text-body-sm text-on-surface">
              Join the complimentary 15-min{' '}
              <strong className="text-primary font-semibold">
                Live Woodfire Kitchen Walkthrough
              </strong>{' '}
              before seating
            </span>
          </label>

          {/* Special Notes */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="book-notes"
              className="font-label-lg text-label-lg text-on-surface font-medium"
            >
              Special Requests or Dietary Observances
            </label>
            <textarea
              id="book-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Pure Sattvic (No onion-garlic), Birthday celebration, mild spice..."
              className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface-container focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-space-md rounded-xl bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-space-sm mt-space-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">
              table_bar
            </span>
            <span>{t.formCta}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
