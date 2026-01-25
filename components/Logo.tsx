interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  showText?: boolean;
}

export default function Logo({ size = 'large', showText = true }: LogoProps) {
  const dimensions = {
    small: { icon: 64, text: 'text-xl', tagline: 'text-sm' },
    medium: { icon: 96, text: 'text-3xl', tagline: 'text-base' },
    large: { icon: 128, text: 'text-4xl', tagline: 'text-lg' },
    xlarge: { icon: 160, text: 'text-5xl', tagline: 'text-xl' }
  };

  const dim = dimensions[size];

  return (
    <div className="flex items-center gap-6">
      {/* SVG Logo Icon - Donkey vs Elephant Boxing Match */}
      <svg
        width={dim.icon}
        height={dim.icon}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 drop-shadow-xl"
        style={{ filter: 'drop-shadow(0 4px 8px rgba(30, 58, 138, 0.3))' }}
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
          </linearGradient>

          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#b91c1c', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Left Side - Blue Donkey (Democrat) - Boxing Stance */}
        <g transform="translate(5, 20)">
          {/* Donkey Body - leaning forward */}
          <ellipse cx="18" cy="40" rx="12" ry="16" fill="url(#blueGradient)" stroke="#1e3a8a" strokeWidth="2" />

          {/* Donkey Head - aggressive forward tilt */}
          <ellipse cx="28" cy="25" rx="10" ry="11" fill="url(#blueGradient)" stroke="#1e3a8a" strokeWidth="2" />

          {/* Donkey Snout - snarling */}
          <ellipse cx="35" cy="27" rx="5" ry="4" fill="url(#blueGradient)" stroke="#1e3a8a" strokeWidth="2" />

          {/* Donkey Ears (flattened back in anger) */}
          <ellipse cx="24" cy="16" rx="2.5" ry="7" fill="url(#blueGradient)" stroke="#1e3a8a" strokeWidth="1.5" transform="rotate(-30 24 16)" />
          <ellipse cx="30" cy="15" rx="2.5" ry="7" fill="url(#blueGradient)" stroke="#1e3a8a" strokeWidth="1.5" transform="rotate(-10 30 15)" />

          {/* Intense Eye */}
          <ellipse cx="31" cy="23" rx="2.5" ry="2" fill="#ffffff" stroke="#000000" strokeWidth="1" />
          <circle cx="32" cy="23" r="1.5" fill="#000000" />

          {/* Angry Eyebrow (heavily angled) */}
          <line x1="28" y1="20" x2="34" y2="21" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" />

          {/* Flared Nostril */}
          <circle cx="37" cy="26" r="1.2" fill="#1e3a8a" />

          {/* Gritted teeth/snarl */}
          <path d="M 35 30 L 38 30" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />

          {/* FRONT LEFT LEG - RAISED IN PUNCH! */}
          <rect x="24" y="32" width="4" height="10" fill="url(#blueGradient)" stroke="#1e3a8a" strokeWidth="1.5" rx="2" transform="rotate(-45 26 32)" />

          {/* Front Right Leg - planted */}
          <rect x="16" y="48" width="4" height="10" fill="url(#blueGradient)" stroke="#1e3a8a" strokeWidth="1.5" rx="2" />

          {/* Back Legs */}
          <rect x="10" y="50" width="4" height="8" fill="url(#blueGradient)" stroke="#1e3a8a" strokeWidth="1.5" rx="2" />

          {/* Tail - swishing in anger */}
          <path d="M 8 42 Q 3 40 2 37 Q 1 34 3 32" stroke="#1e3a8a" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* Right Side - Red Elephant (Republican) - Boxing Stance */}
        <g transform="translate(72, 20)">
          {/* Elephant Body - leaning forward */}
          <ellipse cx="25" cy="40" rx="12" ry="16" fill="url(#redGradient)" stroke="#7f1d1d" strokeWidth="2" />

          {/* Elephant Head - aggressive forward */}
          <ellipse cx="15" cy="25" rx="10" ry="11" fill="url(#redGradient)" stroke="#7f1d1d" strokeWidth="2" />

          {/* Elephant Trunk - raised and curved aggressively */}
          <path d="M 8 28 Q 2 26 1 22 Q 0 18 2 15" stroke="#7f1d1d" strokeWidth="6" fill="none" strokeLinecap="round" />

          {/* Elephant Ears (fanned out aggressively) */}
          <ellipse cx="18" cy="18" rx="7" ry="10" fill="url(#redGradient)" stroke="#7f1d1d" strokeWidth="1.5" transform="rotate(35 18 18)" opacity="0.9" />
          <ellipse cx="11" cy="17" rx="6" ry="9" fill="url(#redGradient)" stroke="#7f1d1d" strokeWidth="1.5" transform="rotate(-25 11 17)" opacity="0.9" />

          {/* Intense Eye */}
          <ellipse cx="12" cy="23" rx="2.5" ry="2" fill="#ffffff" stroke="#000000" strokeWidth="1" />
          <circle cx="11" cy="23" r="1.5" fill="#000000" />

          {/* Angry Eyebrow (heavily angled toward donkey) */}
          <line x1="9" y1="21" x2="15" y2="20" stroke="#7f1d1d" strokeWidth="2.5" strokeLinecap="round" />

          {/* Tusks (pointing forward menacingly) */}
          <path d="M 5 28 L 2 26" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 5 30 L 2 32" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />

          {/* FRONT RIGHT LEG - RAISED IN PUNCH! */}
          <rect x="15" y="32" width="4" height="10" fill="url(#redGradient)" stroke="#7f1d1d" strokeWidth="1.5" rx="2" transform="rotate(45 17 32)" />

          {/* Front Left Leg - planted */}
          <rect x="23" y="48" width="4" height="10" fill="url(#redGradient)" stroke="#7f1d1d" strokeWidth="1.5" rx="2" />

          {/* Back Legs */}
          <rect x="29" y="50" width="4" height="8" fill="url(#redGradient)" stroke="#7f1d1d" strokeWidth="1.5" rx="2" />

          {/* Tail - swishing in anger */}
          <path d="M 35 42 Q 40 40 41 37 Q 42 34 40 32" stroke="#7f1d1d" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* Impact/Action Lines showing the fight */}
        <g opacity="0.6">
          {/* Punch impact lines from donkey */}
          <line x1="42" y1="42" x2="50" y2="40" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="46" x2="48" y2="44" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />

          {/* Punch impact lines from elephant */}
          <line x1="78" y1="42" x2="70" y2="40" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
          <line x1="80" y1="46" x2="72" y2="44" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />

          {/* Clash effects in middle */}
          <circle cx="60" cy="42" r="3" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.7" />
          <circle cx="60" cy="42" r="6" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.5" />

          {/* Motion blur lines */}
          <line x1="45" y1="38" x2="55" y2="38" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          <line x1="65" y1="38" x2="75" y2="38" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        </g>

        {/* "VS" text */}
        <text
          x="60"
          y="72"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="14"
          fontWeight="900"
          fill="#1e3a8a"
          textAnchor="middle"
          opacity="0.8"
        >
          VS
        </text>

        {/* MP Initials at bottom */}
        <text
          x="60"
          y="92"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="18"
          fontWeight="900"
          fill="#1e3a8a"
          textAnchor="middle"
          letterSpacing="1"
        >
          MP
        </text>
      </svg>

      {/* Logo Text */}
      {showText && (
        <div>
          <div className={`${dim.text} font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent leading-tight`}>
            The Moderate Populist
          </div>
          <div className={`${dim.tagline} text-gray-500 font-medium`}>Where Moderates Drive Change</div>
        </div>
      )}
    </div>
  );
}
