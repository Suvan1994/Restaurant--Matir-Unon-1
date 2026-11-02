import React from 'react';
import { ResilientImage } from '../components/ResilientImage';
import { IMAGES } from '../data/restaurantData';
import { PageRoute } from '../types';

interface OurStoryScreenProps {
  onNavigate: (route: PageRoute) => void;
}

export const OurStoryScreen: React.FC<OurStoryScreenProps> = ({
  onNavigate,
}) => {
  const dailyRituals = [
    {
      time: '05:30 AM',
      bengali: 'ভোরের ঘাট ও বাজার',
      title: 'Riverbank Harvest Arrival',
      desc: 'Silver Hilsa from Kolaghat & Diamond Harbour docks, Sundarban creek scampi, and tender banana blossoms reach our courtyard gate before sunrise.',
      icon: 'water',
    },
    {
      time: '07:00 AM',
      bengali: 'শিল-নোড়ায় বাটা মশলা',
      title: 'Wet Stone Sheel-Nora Grinding',
      desc: 'Black & yellow mustard, white Bankura poppy seeds, ginger root, and turmeric rhizomes are hand-crushed wet on heavy basalt slabs—preserving volatile oils.',
      icon: 'blender',
    },
    {
      time: '08:30 AM',
      bengali: 'তেঁতুল কাঠের উনুন প্রজ্বলন',
      title: 'Lighting the Tamarind Wood Unun',
      desc: 'Sun-cured tamarind and sal logs are lit inside hand-plastered Gangetic mud stoves, building a steady bed of smokeless glowing embers.',
      icon: 'local_fire_department',
    },
    {
      time: '12:15 PM',
      bengali: 'অতিথি পরিক্রমা ও পরিবেশন',
      title: 'Dough-Sealed Handi Opening',
      desc: 'Patrons step into the courtyard alcove as wheat-dough seals are cracked open and steaming delicacies are ladled onto hand-beaten Kansa platters.',
      icon: 'soup_kitchen',
    },
  ];

  const custodians = [
    {
      name: 'Thakurma Soudamini Devi (1904–1992)',
      role: 'Founding Matriarch • Burdwan Courtyard, 1928',
      bio: 'Established the original mud-walled festive kitchen in Kalna, Burdwan, insisting that neither aluminum vessels nor powdered market spices ever cross her threshold.',
    },
    {
      name: 'ostad Nitai Pada Mondal',
      role: 'Head Unun Karigar • 34 Years at the Hearth',
      bio: 'Master of thermal clay control who judges the internal simmer of a sealed Kosha Mangsho handi purely by the scent escaping its wheat-flour rim.',
    },
    {
      name: 'Subhankar & Mallika Sen',
      role: 'Third-Generation Custodians & Culinary Archivists',
      bio: 'Spent eight years documenting vanishing zamindari and riverside recipes across Nadia, Bishnupur, and Barisal to bring Matir Unun to Ballygunge.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Editorial Story Hero */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl lg:py-20 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest">
              আমাদের শিকড় ও দর্শন • Heritage Chronicle Since 1928
            </span>
            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-primary text-balance">
              Before Gas Burners &amp; Haste, There Was Only Earth and Fire.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Matir Unun began in 1928 in an ancestral courtyard in Kalna,
              Burdwan, where slow-burning tamarind logs and unglazed Gangetic
              clay pots dictated the rhythm of every feast. Today at Sarat Bose
              Road, we safeguard those exact pre-industrial culinary laws.
            </p>
            <div className="grid grid-cols-3 gap-space-md pt-space-sm border-t border-brass/30 max-w-xl">
              <div>
                <span className="font-headline-md text-headline-md text-primary block tabular-nums">
                  1928
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Ancestral Burdwan Hearth
                </span>
              </div>
              <div>
                <span className="font-headline-md text-headline-md text-primary block tabular-nums">
                  0%
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Pressure Cookers or Dry Mixers
                </span>
              </div>
              <div>
                <span className="font-headline-md text-headline-md text-primary block tabular-nums">
                  4 Hrs
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Slow Clay Handi Cycle
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-t-[5rem] rounded-b-2xl overflow-hidden shadow-2xl border border-brass/35 bg-surface-container-lowest p-3">
              <div className="rounded-t-[4.4rem] rounded-b-xl overflow-hidden aspect-[4/5] relative">
                <ResilientImage
                  src={IMAGES.heroHearth}
                  alt="Traditional Bengali clay oven cooking with woodfire smoke"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent flex flex-col justify-end p-space-lg">
                  <span className="font-headline-sm text-headline-sm text-surface italic">
                    &ldquo;A clay pot breathes with the fire; metal merely
                    fights it.&rdquo;
                  </span>
                  <span className="font-label-md text-label-md text-secondary-container uppercase mt-1">
                    — Soudamini Devi, Kalna Estate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Kitchen Cadence Timeline */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">
              দৈনিক রান্নাঘরের ছন্দ • The Daily Ritual
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-1">
              Four Hours of Preparation Before the First Guest Arrives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {dailyRituals.map((step) => (
              <div
                key={step.time}
                className="rounded-t-[3.5rem] rounded-b-2xl bg-surface-container-lowest p-space-lg shadow-md border border-brass/25 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-primary font-bold tabular-nums">
                      {step.time}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-secondary-container/60 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">
                        {step.icon}
                      </span>
                    </div>
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary font-medium">
                    {step.bengali}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kansa Bell-Metal & Culinary Custodians */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl aspect-[16/10]">
              <ResilientImage
                src={IMAGES.kansaFeast}
                alt="Hand-beaten Kansa bell-metal thali from Bishnupur artisans"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                কাঁসার ঐতিহ্য • Bell-Metal Craftsmanship
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-md text-primary">
                Forged by Kansaris of Bankura &amp; Kharar
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every thali, water goblet, and katori on our tables is forged
                from a sacred 78:22 alloy of pure copper and tin—heated over
                charcoal and hand-hammered in unison by four master artisans.
                In classical Bengali households, Kansa is treasured as{' '}
                <em>Shuddha Dhatu</em> (pure healing metal) that keeps rice
                steaming warm while soothing acidity.
              </p>
              <div className="flex flex-wrap gap-space-sm pt-space-xs">
                <button
                  type="button"
                  onClick={() => onNavigate('specialties')}
                  className="px-space-lg py-space-sm bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg transition-all cursor-pointer"
                >
                  Explore Kansa Thali Feasts
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('reservations')}
                  className="px-space-lg py-space-sm border border-brass text-primary hover:bg-secondary-container/25 rounded-lg font-label-lg text-label-lg transition-all cursor-pointer"
                >
                  Book Kitchen Walkthrough
                </button>
              </div>
            </div>
          </div>

          {/* Custodians Row */}
          <div className="pt-space-lg border-t border-surface-container">
            <h3 className="font-headline-md text-headline-md text-primary mb-space-lg">
              Custodians of the Earthen Hearth
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {custodians.map((person) => (
                <div
                  key={person.name}
                  className="p-space-lg rounded-2xl bg-surface-container-low border border-brass/25 flex flex-col gap-space-xs"
                >
                  <span className="font-label-md text-label-md text-secondary uppercase">
                    {person.role}
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    {person.name}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {person.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
