import { useState, useEffect } from 'react';
import { useLotterySpin } from '../hooks/useLotterySpin';
import { LOTTERY_CONFIG } from '../constants/lotteryConfig';
import NumberPanel from './NumberPanel';
import CongratulationsMessage from './CongratulationsMessage';
import SpinButton from './SpinButton';
import BackgroundEffects from './BackgroundEffects';

const { FINAL_NUMBERS, WIN_MESSAGE_DELAY } = LOTTERY_CONFIG;

const LotterySpin: React.FC = () => {
  const [showWinMessage, setShowWinMessage] = useState(false);

  const handleSpinComplete = () => {
    setTimeout(() => {
      setShowWinMessage(true);
    }, WIN_MESSAGE_DELAY);
  };

  const { isSpinning, displayNumbers, startSpin, cleanup } = useLotterySpin({
    finalNumbers: FINAL_NUMBERS,
    onComplete: handleSpinComplete,
  });

  const handleSpin = () => {
    setShowWinMessage(false);
    startSpin();
  };

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between p-6 md:p-8">
        <CongratulationsMessage show={showWinMessage} />

        {/* Six Number Panels */}
        <div className="flex-1 flex items-center justify-center gap-3 md:gap-6 my-8">
          {displayNumbers.map((num, index) => (
            <NumberPanel
              key={index}
              number={num}
              isSpinning={isSpinning}
              panelIndex={index}
            />
          ))}
        </div>

        <SpinButton onClick={handleSpin} disabled={isSpinning} />
      </div>
    </div>
  );
};

export default LotterySpin;
