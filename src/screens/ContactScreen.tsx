import React, { useState } from 'react';
import { PageRoute } from '../types';

interface ContactScreenProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onNavigate }) => {
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryPhone, setEnquiryPhone] = useState('');
  const [eventType, setEventType] = useState('Annaprashan / Rice Ceremony');
  const [guestCount, setGuestCount] = useState('15 – 25 Guests');
  const [message, setMessage] = useState('');
  const [enquirySent, setEnquirySent] = useState(false);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
    setEnquiryName('');
    setEnquiryPhone('');
    setMessage('');
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Estate Address, Timings & Directions */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          {/* Left Column: Estate Details */}
          <div className="lg:col-span-6 flex flex-col gap-space-lg">
            <div>
              <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest">
                ঠিকানা ও যোগাযোগ • Kolkata Hearth Estate
              </span>
              <h1 className="font-display-hero text-display-hero-mobile lg:text-headline-lg text-primary mt-1">
                Visit Our Ballygunge Courtyard
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Tucked inside a restored 1930s red-brick mansion off Sarat Bose
                Road, featuring a shaded mango-tree courtyard, live mud-oven
                alcove, and valet carriage porch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="p-space-lg rounded-2xl bg-surface-container-low border border-brass/25 flex flex-col gap-1">
                <span className="material-symbols-outlined text-primary text-[24px] mb-1">
                  location_on
                </span>
                <h3 className="font-title-md text-primary">Estate Address</h3>
                <p className="font-body-sm text-on-surface-variant">
                  Heritage Enclave, 14 Sarat Bose Road,
                  <br />
                  Ballygunge, Kolkata 700020
                  <br />
                  (200m south of Minto Park Crossing)
                </p>
              </div>

              <div className="p-space-lg rounded-2xl bg-surface-container-low border border-brass/25 flex flex-col gap-1">
                <span className="material-symbols-outlined text-primary text-[24px] mb-1">
                  call
                </span>
                <h3 className="font-title-md text-primary">
                  Direct Concierge Desk
                </h3>
                <p className="font-body-sm text-on-surface-variant tabular-nums">
                  Mobile / WhatsApp: +91 98300 12345
                  <br />
                  Landline: +91 33 2475 9811
                  <br />
                  atithi@matirunun.in
                </p>
              </div>
            </div>

            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md border border-brass/25 flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-primary">
                Hearth Hours &amp; Weekly Resting Ritual
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1 font-body-sm">
                <div>
                  <span className="font-semibold text-on-surface block">
                    Lunch Simmer (Tue – Sun)
                  </span>
                  <span className="text-on-surface-variant">
                    12:30 PM – 3:45 PM (Walkthrough at 12:15 PM)
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-on-surface block">
                    Dinner Simmer (Tue – Sun)
                  </span>
                  <span className="text-on-surface-variant">
                    7:00 PM – 11:30 PM (Walkthrough at 7:15 PM)
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-error font-medium pt-2 border-t border-surface-container">
                Closed every Monday so our karigars can re-plaster the Gangetic
                mud ovens with fresh river clay.
              </p>
            </div>

            {/* Architectural Courtyard Map Card */}
            <div className="p-space-lg rounded-2xl bg-charcoal-hearth text-parchment border border-mustard-gold/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-1">
                <span className="font-label-md text-mustard-gold uppercase tracking-widest">
                  Arrival &amp; Valet Notes
                </span>
                <span className="font-headline-sm text-lg text-parchment">
                  Complimentary Estate Valet &amp; Wheelchair Ramp
                </span>
                <span className="font-body-sm text-parchment/75">
                  Nearest Metro: Rabindra Sadan (6 mins drive) • Private courtyard
                  drop-off
                </span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('reservations')}
                className="px-space-md py-space-sm rounded-lg bg-mustard-gold text-charcoal-hearth font-label-lg text-label-lg font-bold shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
              >
                Book Table
              </button>
            </div>
          </div>

          {/* Right Column: Private Banquets & Ceremonial Bhoj Enquiry */}
          <div className="lg:col-span-6">
            <div className="rounded-t-[4rem] rounded-b-3xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-2xl border border-brass/30">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-1">
                পারিবারিক অনুষ্ঠান • Private Feast Chambers
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mb-space-xs">
                Host a Private Zamindari Bhoj
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                From intimate <em>Annaprashan</em> (first-rice ceremonies) and{' '}
                <em>Aiburobhat</em> blessings to diplomatic dinners, our upstairs
                Zamindari Hall seats up to 36 guests on bespoke Kansa service.
              </p>

              {enquirySent ? (
                <div className="p-space-lg rounded-2xl bg-secondary-container/35 border border-brass/40 text-center flex flex-col items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[36px]">
                    mark_email_read
                  </span>
                  <h3 className="font-headline-sm text-primary">
                    Banquet Concierge Notified
                  </h3>
                  <p className="font-body-sm text-on-surface-variant">
                    Our Senior Bhoj Curator will reach out within 4 hours with
                    custom seasonal Kansa menu manuscripts and floral alpana
                    arrangements.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnquirySent(false)}
                    className="mt-2 px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md uppercase cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleEnquiry}
                  className="flex flex-col gap-space-md"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        Host Name
                      </label>
                      <input
                        type="text"
                        required
                        value={enquiryName}
                        onChange={(e) => setEnquiryName(e.target.value)}
                        placeholder="e.g. Subrata Mukherjee"
                        className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={enquiryPhone}
                        onChange={(e) => setEnquiryPhone(e.target.value)}
                        placeholder="+91 98300 00000"
                        className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        Occasion Type
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option>Annaprashan / Rice Ceremony</option>
                        <option>Aiburobhat / Pre-Wedding Bhoj</option>
                        <option>Family Anniversary / Birthday</option>
                        <option>Corporate / Diplomatic Degustation</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        Estimated Guests
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option>8 – 14 Guests (Private Alcove)</option>
                        <option>15 – 25 Guests (Zamindari Salon)</option>
                        <option>26 – 40 Guests (Full Upper Courtyard)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-label-lg text-label-lg text-on-surface">
                      Preferred Dates &amp; Custom Dish Requests
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Looking for whole Bekti Paturi, pure Sattvic counters for elders, and live shehnai..."
                      className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-space-md rounded-xl bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md shadow-lg transition-all cursor-pointer"
                  >
                    Request Private Bhoj Proposal
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
