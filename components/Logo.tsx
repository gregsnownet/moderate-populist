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
      {/* SVG Logo Icon - Classic Donkey & Elephant */}
      <svg
        width={dim.icon}
        height={dim.icon}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 drop-shadow-xl"
        style={{ filter: 'drop-shadow(0 4px 8px rgba(30, 58, 138, 0.3))' }}
      >
        {/* Left Side - Democratic Donkey */}
        <g transform="translate(0, 15)">
          {/* Donkey silhouette - blue top with stars, red bottom */}

          {/* Blue top section */}
          <path
            d="M 8 25 L 12 18 L 14 12 L 12 8 L 10 10 L 8 6 L 6 10 L 4 12 L 6 18 L 2 25 Z"
            fill="#1e40af"
          />
          <ellipse cx="10" cy="28" rx="11" ry="8" fill="#1e40af" />

          {/* Red bottom section */}
          <ellipse cx="10" cy="36" rx="11" ry="10" fill="#dc2626" />
          <rect x="6" y="45" width="3" height="12" fill="#dc2626" rx="1.5" />
          <rect x="13" y="45" width="3" height="12" fill="#dc2626" rx="1.5" />
          <path d="M 2 38 Q 0 42 1 46" stroke="#dc2626" strokeWidth="2.5" fill="none" />

          {/* White stars on blue section */}
          <circle cx="5" cy="22" r="1.5" fill="white" />
          <circle cx="10" cy="20" r="1.5" fill="white" />
          <circle cx="15" cy="22" r="1.5" fill="white" />
          <circle cx="10" cy="28" r="1.5" fill="white" />
        </g>

        {/* Right Side - Republican Elephant */}
        <g transform="translate(70, 15)">
          {/* Elephant silhouette - blue top with stars, red bottom */}

          {/* Blue top section with head */}
          <ellipse cx="20" cy="20" rx="12" ry="10" fill="#1e40af" />
          <ellipse cx="14" cy="18" rx="6" ry="9" fill="#1e40af" transform="rotate(-20 14 18)" />

          {/* Red bottom section */}
          <ellipse cx="20" cy="35" rx="13" ry="12" fill="#dc2626" />
          <rect x="14" y="45" width="3.5" height="12" fill="#dc2626" rx="1.5" />
          <rect x="22" y="45" width="3.5" height="12" fill="#dc2626" rx="1.5" />

          {/* Trunk - red */}
          <path d="M 10 22 Q 6 24 5 28 Q 4 32 6 35" stroke="#dc2626" strokeWidth="4" fill="none" strokeLinecap="round" />

          {/* Tail - red */}
          <path d="M 32 38 Q 36 40 38 44" stroke="#dc2626" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* White stars on blue section */}
          <circle cx="16" cy="16" r="1.8" fill="white" />
          <circle cx="22" cy="14" r="1.8" fill="white" />
          <circle cx="28" cy="16" r="1.8" fill="white" />
        </g>

        {/* Center divider line */}
        <line x1="60" y1="20" x2="60" y2="75" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />

        {/* MP Initials at bottom */}
        <text
          x="60"
          y="92"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="20"
          fontWeight="900"
          fill="#1e3a8a"
          textAnchor="middle"
          letterSpacing="2"
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
          <div className={`${dim.tagline} text-gray-500 font-medium`}>Where Americans Find Common Ground Over Party Lines</div>
        </div>
      )}
    </div>
  );
}
