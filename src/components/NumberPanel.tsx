import { useState, useEffect, useRef, memo } from 'react';
import { NUMBER_PANEL_CONFIG } from '../constants/lotteryConfig';

interface NumberPanelProps {
  number: number;
  isSpinning: boolean;
  panelIndex: number;
}

const { HEIGHT: NUMBER_HEIGHT, NUMBERS_TO_RENDER, SCROLL_SPEED } = NUMBER_PANEL_CONFIG;

const NumberPanel: React.FC<NumberPanelProps> = ({ number, isSpinning, panelIndex }) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (isSpinning) {
      const animate = () => {
        setScrollOffset((prev) => {
          const newOffset = prev + SCROLL_SPEED;
          return newOffset % (10 * NUMBER_HEIGHT);
        });
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setScrollOffset(number * NUMBER_HEIGHT);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isSpinning, number]);

  const currentScroll = isSpinning ? scrollOffset : number * NUMBER_HEIGHT;
  const startIndex = Math.floor(currentScroll / NUMBER_HEIGHT);

  // Memoize number elements to avoid re-rendering
  const numberElements = Array.from({ length: NUMBERS_TO_RENDER }, (_, i) => {
    const displayNum = (startIndex + i) % 10;
    return (
      <div
        key={`${panelIndex}-${startIndex}-${i}`}
        className="text-5xl md:text-6xl font-bold text-cyan-400 drop-shadow-lg flex items-center justify-center"
        style={{
          textShadow: '0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.6)',
          height: `${NUMBER_HEIGHT}px`,
          width: '100%',
        }}
      >
        {displayNum}
      </div>
    );
  });

  return (
    <div className="relative w-20 h-32 md:w-24 md:h-40">
      {/* Panel Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-lg border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/20">
        <div className="absolute inset-0 rounded-lg border-2 border-cyan-400/30 blur-sm"></div>
      </div>


      {/* Number Display */}
      <div className="relative z-10 h-full flex items-center justify-center overflow-hidden rounded-lg">
        <div
          className="flex flex-col items-center"
          style={{
            transform: `translateY(${-currentScroll + NUMBER_HEIGHT / 2}px)`,
            transition: isSpinning ? 'none' : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {numberElements}
        </div>
      </div>
    </div>
  );
};

export default memo(NumberPanel);

