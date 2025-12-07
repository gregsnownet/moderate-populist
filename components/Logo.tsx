interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  showText?: boolean;
}

export default function Logo({ size = 'large', showText = true }: LogoProps) {
  const dimensions = {
    small: { icon: 40, text: 'text-lg', tagline: 'text-xs' },
    medium: { icon: 56, text: 'text-2xl', tagline: 'text-sm' },
    large: { icon: 72, text: 'text-3xl', tagline: 'text-base' },
    xlarge: { icon: 96, text: 'text-4xl', tagline: 'text-lg' }
  };

  const dim = dimensions[size];

  return (
    <div className="flex items-center gap-4">
      {/* SVG Logo Icon - Donkey vs Elephant */}
      <svg
        width={dim.icon}
        height={dim.icon}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(124, 58, 237, 0.2))' }}
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

        {/* Left Side - Blue Donkey (Democrat) - Facing Right, Angry */}
        <g transform="translate(5, 25)">
          {/* Donkey Body */}
          <ellipse cx="20" cy="35" rx="14" ry="18" fill="url(#blueGradient)" />

          {/* Donkey Head */}
          <ellipse cx="30" cy="20" rx="11" ry="13" fill="url(#blueGradient)" />

          {/* Donkey Snout */}
          <ellipse cx="38" cy="22" rx="6" ry="5" fill="url(#blueGradient)" />

          {/* Donkey Ears (long) */}
          <ellipse cx="26" cy="8" rx="3" ry="9" fill="url(#blueGradient)" transform="rotate(-20 26 8)" />
          <ellipse cx="32" cy="6" rx="3" ry="9" fill="url(#blueGradient)" transform="rotate(15 32 6)" />

          {/* Angry Eye */}
          <ellipse cx="33" cy="18" rx="2.5" ry="2" fill="#ffffff" />
          <circle cx="34" cy="18" r="1.5" fill="#000000" />

          {/* Angry Eyebrow (angled down) */}
          <line x1="30" y1="15" x2="36" y2="16" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />

          {/* Angry Nostril */}
          <circle cx="40" cy="21" r="1.2" fill="#1e40af" />

          {/* Angry Mouth */}
          <path d="M 38 25 Q 40 27 42 25" stroke="#1e40af" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Front Legs */}
          <rect x="26" y="45" width="4" height="12" fill="url(#blueGradient)" rx="2" />
          <rect x="18" y="45" width="4" height="12" fill="url(#blueGradient)" rx="2" />

          {/* Tail */}
          <path d="M 10 40 Q 5 38 4 35 Q 3 33 4 31" stroke="url(#blueGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Right Side - Red Elephant (Republican) - Facing Left, Angry */}
        <g transform="translate(70, 25)">
          {/* Elephant Body */}
          <ellipse cx="25" cy="35" rx="14" ry="18" fill="url(#redGradient)" />

          {/* Elephant Head */}
          <ellipse cx="15" cy="20" rx="11" ry="13" fill="url(#redGradient)" />

          {/* Elephant Trunk (curved, angry position) */}
          <path d="M 8 25 Q 2 28 1 32 Q 0 35 2 38" stroke="url(#redGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />

          {/* Elephant Ears (large, fanned back in anger) */}
          <ellipse cx="18" cy="14" rx="8" ry="11" fill="url(#redGradient)" transform="rotate(25 18 14)" opacity="0.9" />
          <ellipse cx="12" cy="12" rx="7" ry="10" fill="url(#redGradient)" transform="rotate(-15 12 12)" opacity="0.9" />

          {/* Angry Eye */}
          <ellipse cx="12" cy="18" rx="2.5" ry="2" fill="#ffffff" />
          <circle cx="11" cy="18" r="1.5" fill="#000000" />

          {/* Angry Eyebrow (angled down toward center) */}
          <line x1="9" y1="16" x2="15" y2="15" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />

          {/* Tusks (small, pointing forward aggressively) */}
          <path d="M 6 26 L 3 28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M 6 28 L 3 30" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

          {/* Front Legs */}
          <rect x="13" y="45" width="4" height="12" fill="url(#redGradient)" rx="2" />
          <rect x="21" y="45" width="4" height="12" fill="url(#redGradient)" rx="2" />

          {/* Tail */}
          <path d="M 35 40 Q 40 38 41 35 Q 42 33 41 31" stroke="url(#redGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Tension/Conflict Lines in the Middle */}
        <g opacity="0.4">
          <line x1="48" y1="40" x2="52" y2="40" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
          <line x1="47" y1="45" x2="53" y2="45" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
          <line x1="48" y1="50" x2="52" y2="50" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
          <line x1="46" y1="35" x2="54" y2="35" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="46" y1="55" x2="54" y2="55" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* "VS" or dividing line */}
        <text
          x="60"
          y="48"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="12"
          fontWeight="900"
          fill="#7c3aed"
          textAnchor="middle"
          opacity="0.6"
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
          fill="#7c3aed"
          textAnchor="middle"
          letterSpacing="1"
        >
          MP
        </text>
      </svg>

      {/* Logo Text */}
      {showText && (
        <div>
          <div className={`${dim.text} font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent leading-tight`}>
            The Moderate Populist
          </div>
          <div className={`${dim.tagline} text-gray-500 font-medium`}>Where Moderates Drive Change</div>
        </div>
      )}
    </div>
  );
}
