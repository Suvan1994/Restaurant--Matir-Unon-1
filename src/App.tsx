/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { BookingModal } from './components/BookingModal';
import { DishDetailModal } from './components/DishDetailModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { WishlistDrawer } from './components/WishlistDrawer';
import { INITIAL_REVIEWS, TRANSLATIONS } from './data/restaurantData';
import { ContactScreen } from './screens/ContactScreen';
import { HomeScreen } from './screens/HomeScreen';
import { MenuScreen } from './screens/MenuScreen';
import { OurStoryScreen } from './screens/OurStoryScreen';
import { ReservationsScreen } from './screens/ReservationsScreen';
import { ReviewsScreen } from './screens/ReviewsScreen';
import { SpecialtiesScreen } from './screens/SpecialtiesScreen';
import {
  ClassicMenuItem,
  Dish,
  Language,
  PageRoute,
  ReservationRecord,
  ReviewItem,
  ThaliExperience,
  WishlistItem,
} from './types';

export default function App() {
  const [activeRoute, setActiveRoute] = useState<PageRoute>('home');
  const [lang, setLang] = useState<Language>('en');
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [reservations, setReservations] = useState<ReservationRecord[]>([]);
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);

  const [selectedDishModal, setSelectedDishModal] = useState<Dish | null>(null);
  const [confirmedBookingModal, setConfirmedBookingModal] =
    useState<ReservationRecord | null>(null);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 3400);
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setActiveRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const upsertWishlist = (
    id: string,
    name: string,
    bengaliSub: string,
    price: number,
    type: 'dish' | 'thali'
  ) => {
    let nextTotalCount = 0;
    setWishlist((prev) => {
      const existing = prev.find((i) => i.id === id);
      const updated = existing
        ? prev.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { id, name, bengaliSub, price, quantity: 1, type }];
      nextTotalCount = updated.reduce((acc, item) => acc + item.quantity, 0);
      return updated;
    });

    const t = TRANSLATIONS[lang];
    // Compute immediate count for toast display
    const currentCount =
      wishlist.reduce((acc, item) => acc + item.quantity, 0) + 1;
    const countToDisplay = nextTotalCount || currentCount;
    showToast(`${name} (₹${price}) ${t.toastAdded} [${countToDisplay}]`);
  };

  const handleAddDishWishlist = (dish: Dish) => {
    upsertWishlist(dish.id, dish.name, dish.bengaliSub, dish.price, 'dish');
  };

  const handleAddThaliWishlist = (thali: ThaliExperience) => {
    upsertWishlist(
      thali.id,
      thali.title,
      thali.bengaliTitle,
      thali.price,
      'thali'
    );
  };

  const handleAddClassicWishlist = (item: ClassicMenuItem) => {
    upsertWishlist(item.id, item.name, item.bengaliName, item.price, 'dish');
  };

  const handleUpdateWishlistQty = (id: string, delta: number) => {
    setWishlist((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleReserveDishFromModal = (dish: Dish) => {
    if (!wishlist.some((w) => w.id === dish.id)) {
      handleAddDishWishlist(dish);
    }
    setSelectedDishModal(null);
    if (activeRoute === 'home') {
      const el = document.getElementById('reservations-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleNavigate('reservations');
  };

  const handleReserveThali = (thali: ThaliExperience) => {
    if (!wishlist.some((w) => w.id === thali.id)) {
      handleAddThaliWishlist(thali);
    }
    handleNavigate('reservations');
  };

  const handleConfirmReservation = (record: ReservationRecord) => {
    setReservations((prev) => [record, ...prev]);
    setConfirmedBookingModal(record);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  const totalWishlistItems = wishlist.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-on-surface antialiased">
      <Header
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
        lang={lang}
        onLangChange={setLang}
        wishlistCount={totalWishlistItems}
        reservationsCount={reservations.length}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
      />

      <main className="flex-1 w-full pt-20 bg-surface">
        {activeRoute === 'home' && (
          <HomeScreen
            lang={lang}
            onLangChange={setLang}
            onNavigate={handleNavigate}
            onOpenLore={(dish) => setSelectedDishModal(dish)}
            onAddWishlist={handleAddDishWishlist}
            wishlist={wishlist}
            onConfirmReservation={handleConfirmReservation}
            reviews={reviews}
          />
        )}

        {activeRoute === 'our-story' && (
          <OurStoryScreen onNavigate={handleNavigate} />
        )}

        {activeRoute === 'specialties' && (
          <SpecialtiesScreen
            onAddThaliWishlist={handleAddThaliWishlist}
            onReserveThali={handleReserveThali}
            onOpenLore={(dish) => setSelectedDishModal(dish)}
            onAddDishWishlist={handleAddDishWishlist}
            wishlist={wishlist}
            onNavigate={handleNavigate}
          />
        )}

        {activeRoute === 'menu' && (
          <MenuScreen
            lang={lang}
            onOpenLore={(dish) => setSelectedDishModal(dish)}
            onAddDishWishlist={handleAddDishWishlist}
            onAddClassicWishlist={handleAddClassicWishlist}
            wishlist={wishlist}
          />
        )}

        {activeRoute === 'reservations' && (
          <ReservationsScreen
            lang={lang}
            wishlist={wishlist}
            reservations={reservations}
            onConfirmReservation={handleConfirmReservation}
          />
        )}

        {activeRoute === 'reviews' && (
          <ReviewsScreen reviews={reviews} onAddReview={handleAddReview} />
        )}

        {activeRoute === 'contact' && (
          <ContactScreen onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Interactive Toast Notification Floating Pill */}
      <button
        type="button"
        onClick={() => setWishlistDrawerOpen(true)}
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 flex items-center gap-space-sm px-space-md py-space-sm bg-primary text-on-primary rounded-xl shadow-2xl cursor-pointer ${
          toastMessage
            ? 'translate-y-0 opacity-100'
            : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
          check_circle
        </span>
        <span className="font-label-lg text-label-lg">{toastMessage}</span>
      </button>

      {/* Recipe Origins & Sommelier Pairing Modal */}
      <DishDetailModal
        dish={selectedDishModal}
        onClose={() => setSelectedDishModal(null)}
        onAddWishlist={handleAddDishWishlist}
        onReserveDish={handleReserveDishFromModal}
      />

      {/* Booking Confirmation Modal */}
      <BookingModal
        reservation={confirmedBookingModal}
        onClose={() => setConfirmedBookingModal(null)}
      />

      {/* Guest Folio & Tasting Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        items={wishlist}
        reservations={reservations}
        onUpdateQty={handleUpdateWishlistQty}
        onClearWishlist={() => setWishlist([])}
        onProceedToReserve={() => {
          setWishlistDrawerOpen(false);
          if (activeRoute === 'home') {
            const el = document.getElementById('reservations-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              return;
            }
          }
          handleNavigate('reservations');
        }}
      />
    </div>
  );
}
