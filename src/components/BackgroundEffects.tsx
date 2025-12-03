import { memo } from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-blue-900/30"></div>
      
      {/* Circuit board patterns */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 L100,50 M50,0 L50,100" stroke="#00f0ff" strokeWidth="0.5" fill="none"/>
              <circle cx="50" cy="50" r="2" fill="#00f0ff"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Light rays from top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-blue-400/20 via-transparent to-transparent"></div>
    </>
  );
};

export default memo(BackgroundEffects);

