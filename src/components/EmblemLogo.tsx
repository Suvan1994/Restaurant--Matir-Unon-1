import React, { useState } from 'react';
import { IMAGES } from '../data/restaurantData';

interface EmblemLogoProps {
  className?: string;
}

export const EmblemLogo: React.FC<EmblemLogoProps> = ({ className = 'h-9 w-9' }) => {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        alt="Matir Unun Clay Oven Emblem"
        className={`${className} object-contain shrink-0`}
        src={IMAGES.emblem}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className={`${className} rounded-full bg-primary/10 border border-brass/50 flex items-center justify-center shrink-0 shadow-xs`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        {/* Parabolic Bengali Temple Arch */}
        <path
          d="M7 33V19C7 11.5 12.8 6 20 6C27.2 6 33 11.5 33 19V33"
          stroke="#8B3A2B"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Rising Hearth Flame / Steam */}
        <path
          d="M20 11C18.5 13 21.5 14.5 20 16.8"
          stroke="#D4A373"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M16.5 13C15.5 14.5 17.5 15.5 16.5 17"
          stroke="#D4A373"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M23.5 13C22.5 14.5 24.5 15.5 23.5 17"
          stroke="#D4A373"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        {/* Clay Handi Pot */}
        <path
          d="M14 20.5H26L24.5 22.5C26.8 24 27 27.8 24.2 29.5H15.8C13 27.8 13.2 24 15.5 22.5L14 20.5Z"
          fill="#6D2417"
          stroke="#D4A373"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        {/* Earthen Unun Base */}
        <path
          d="M11 32.5H29"
          stroke="#6D2417"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
