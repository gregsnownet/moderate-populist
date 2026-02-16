import Image from 'next/image';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  showTagline?: boolean;
}

export default function Logo({ size = 'large', showTagline = true }: LogoProps) {
  const dimensions = {
    small: { width: 180, height: 81, tagline: 'text-xs' },
    medium: { width: 240, height: 108, tagline: 'text-sm' },
    large: { width: 300, height: 135, tagline: 'text-base' },
    xlarge: { width: 360, height: 162, tagline: 'text-lg' }
  };

  const dim = dimensions[size];

  return (
    <div className="flex flex-col items-center gap-2">
      {/* New SVG Logo */}
      <Image
        src="/logo.svg"
        alt="The Moderate Populist"
        width={dim.width}
        height={dim.height}
        priority
        className="drop-shadow-lg"
      />

      {/* Tagline */}
      {showTagline && (
        <div className={`${dim.tagline} text-gray-600 font-medium text-center max-w-md`}>
          Where Americans Find Common Ground Over Party Lines
        </div>
      )}
    </div>
  );
}
