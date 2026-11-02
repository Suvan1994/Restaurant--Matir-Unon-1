import React, { useState } from 'react';
import { ReviewItem } from '../types';

interface ReviewsScreenProps {
  reviews: ReviewItem[];
  onAddReview: (review: ReviewItem) => void;
}

export const ReviewsScreen: React.FC<ReviewsScreenProps> = ({
  reviews,
  onAddReview,
}) => {
  const [filterTag, setFilterTag] = useState<string>('All');
  const [author, setAuthor] = useState('');
  const [roleLocation, setRoleLocation] = useState('');
  const [experienceTag, setExperienceTag] =
    useState<ReviewItem['experienceTag']>('Hilsa & Seafood');
  const [quote, setQuote] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState(5);
  const [submittedBanner, setSubmittedBanner] = useState(false);

  const tags = [
    'All',
    'Hilsa & Seafood',
    'Clay Handi Meats',
    'Low Pirhi Seating',
    'Sattvic & Family Bhoj',
  ];

  const visibleReviews =
    filterTag === 'All'
      ? reviews
      : reviews.filter((r) => r.experienceTag === filterTag);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !quote.trim() || !body.trim()) return;

    const parts = author.trim().split(/\s+/);
    const initials =
      parts.length >= 2
        ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
        : author.trim().slice(0, 2).toUpperCase();

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      quote: quote.startsWith('"') ? quote.trim() : `"${quote.trim()}"`,
      body: body.trim(),
      initials,
      avatarTone: 'secondary',
      author: author.trim(),
      roleLocation: roleLocation.trim() || 'Verified Hearth Guest, Kolkata',
      rating,
      experienceTag,
      dateLabel: 'November 2026',
    };

    onAddReview(newRev);
    setAuthor('');
    setRoleLocation('');
    setQuote('');
    setBody('');
    setSubmittedBanner(true);
    setTimeout(() => setSubmittedBanner(false), 4000);
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Header & Aggregate Rating */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="max-w-2xl">
              <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest">
                অতিথি প্রশংসা ও আর্কাইভ • Verified Guest Chronicles
              </span>
              <h1 className="font-display-hero text-display-hero-mobile lg:text-headline-lg text-primary mt-1">
                Voices from the Earthen Hearth
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Reflections from food historians, families, and travellers who
                have gathered around our bell-metal platters at Sarat Bose Road.
              </p>
            </div>

            <div className="p-space-md rounded-2xl bg-surface-container-low border border-brass/30 flex items-center gap-space-md">
              <div className="text-center pr-space-md border-r border-brass/30">
                <span className="font-headline-lg text-3xl text-primary font-bold tabular-nums block">
                  4.9
                </span>
                <span className="font-label-md text-secondary uppercase">
                  Out of 5.0
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-secondary">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className="material-symbols-outlined material-fill text-[18px]"
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="font-body-sm text-on-surface font-medium">
                  1,480+ Verified Patron Chronicles
                </span>
                <span className="font-body-sm text-on-surface-variant">
                  Ballygunge Heritage Enclave
                </span>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center overflow-x-auto gap-space-xs pb-1 scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilterTag(tag)}
                className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  filterTag === tag
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {visibleReviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-t-[3.5rem] rounded-b-2xl bg-surface-container-lowest p-space-lg shadow-md border border-brass/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="flex items-center gap-0.5 text-secondary">
                      {Array.from({ length: rev.rating }).map((_, idx) => (
                        <span
                          key={idx}
                          className="material-symbols-outlined material-fill text-[18px]"
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {rev.experienceTag} · {rev.dateLabel}
                    </span>
                  </div>
                  <p className="font-headline-sm text-headline-sm text-primary mb-space-sm italic">
                    {rev.quote}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {rev.body}
                  </p>
                </div>

                <div className="flex items-center gap-space-sm pt-space-md mt-space-md border-t border-surface-container">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${
                      rev.avatarTone === 'secondary'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : rev.avatarTone === 'primary'
                          ? 'bg-primary-fixed text-primary'
                          : 'bg-secondary-fixed text-on-secondary-container'
                    }`}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface block leading-none">
                      {rev.author}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {rev.roleLocation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Guest Chronicle Form */}
      <section className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
        <div className="max-w-3xl mx-auto rounded-3xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-xl border border-brass/25">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
            মতামত জানান • Guest Ledger Entry
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1 mb-space-md">
            Inscribe Your Dining Memory
          </h2>

          {submittedBanner && (
            <div className="mb-space-md p-space-md rounded-xl bg-secondary-container/40 text-primary font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">
                check_circle
              </span>
              <span>
                ধন্যবাদ! Your chronicle has been inscribed into the Matir Unun
                Guest Ledger above.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-1">
                <label className="font-label-lg text-label-lg text-on-surface">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Rituparna Sengupta"
                  className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-lg text-label-lg text-on-surface">
                  Neighbourhood / Profession
                </label>
                <input
                  type="text"
                  value={roleLocation}
                  onChange={(e) => setRoleLocation(e.target.value)}
                  placeholder="e.g. Patron, Southern Avenue"
                  className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-1">
                <label className="font-label-lg text-label-lg text-on-surface">
                  Dining Highlight
                </label>
                <select
                  value={experienceTag}
                  onChange={(e) =>
                    setExperienceTag(
                      e.target.value as ReviewItem['experienceTag']
                    )
                  }
                  className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="Hilsa & Seafood">Hilsa &amp; Seafood</option>
                  <option value="Clay Handi Meats">Clay Handi Meats</option>
                  <option value="Low Pirhi Seating">Low Pirhi Seating</option>
                  <option value="Sattvic & Family Bhoj">
                    Sattvic &amp; Family Bhoj
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-lg text-label-lg text-on-surface">
                  Star Rating
                </label>
                <div className="flex items-center gap-2 py-space-xs">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="text-secondary hover:scale-110 transition-transform cursor-pointer"
                    >
                      <span
                        className={`material-symbols-outlined text-[26px] ${
                          star <= rating ? 'material-fill text-secondary' : 'text-outline-variant'
                        }`}
                      >
                        star
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-label-lg text-label-lg text-on-surface">
                Headline Quote
              </label>
              <input
                type="text"
                required
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="e.g. Unforgettable smoky Ilish Paturi and warm hospitality."
                className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-label-lg text-label-lg text-on-surface">
                Your Experience
              </label>
              <textarea
                rows={3}
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Tell fellow diners about the flavours, Kansa service, or woodfire aroma..."
                className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="self-start px-space-xl py-space-sm rounded-xl bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md shadow-md transition-all cursor-pointer"
            >
              Publish Guest Chronicle
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
