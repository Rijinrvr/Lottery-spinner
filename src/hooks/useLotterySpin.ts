import { useState, useRef, useCallback } from "react";
import { LOTTERY_CONFIG } from "../constants/lotteryConfig";

interface UseLotterySpinOptions {
  spinDuration?: number;
  initialNumbers?: number[];
  onComplete?: (finalNumbers: number[]) => void;
}

const {
  SPIN_DURATION: DEFAULT_SPIN_DURATION,
  FINAL_NUMBERS: DEFAULT_FINAL_NUMBERS,
  SLOT_COUNT,
  STAGGER_DELAY,
} = LOTTERY_CONFIG;

export const useLotterySpin = ({
  spinDuration = DEFAULT_SPIN_DURATION,
  initialNumbers = [...DEFAULT_FINAL_NUMBERS],
  onComplete,
}: UseLotterySpinOptions = {}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [displayNumbers, setDisplayNumbers] =
    useState<number[]>(initialNumbers);

  const animationRefs = useRef<(number | null)[]>(Array(SLOT_COUNT).fill(null));
  const startTimeRefs = useRef<(number | null)[]>(Array(SLOT_COUNT).fill(null));


  const finalNumbersRef = useRef<number[]>([...initialNumbers]);

  const startSpin = useCallback(
    (nextNumbers?: number[]) => {
      if (isSpinning) return;

      const targetNumbers =
        nextNumbers && nextNumbers.length === SLOT_COUNT
          ? [...nextNumbers]
          : [...initialNumbers];

      finalNumbersRef.current = targetNumbers;

      setIsSpinning(true);
      setDisplayNumbers(Array(SLOT_COUNT).fill(0));

      let completedCount = 0;

      const checkCompletion = () => {
        completedCount++;
        if (completedCount === SLOT_COUNT) {
          setIsSpinning(false);
          onComplete?.([...finalNumbersRef.current]);
        }
      };

    
      for (let i = 0; i < SLOT_COUNT; i++) {
        const slotIndex = i;
        const delay = i * STAGGER_DELAY;

        setTimeout(() => {
          startTimeRefs.current[slotIndex] = Date.now();

          const animate = () => {
            if (!startTimeRefs.current[slotIndex]) return;

            const elapsed = Date.now() - startTimeRefs.current[slotIndex]!;
            const progress = Math.min(elapsed / spinDuration, 1);

            const easeOut = 1 - Math.pow(1 - progress, 3);

            const baseScrolls = 5 + Math.random() * 2;
            const finalNumber = finalNumbersRef.current[slotIndex];
            const totalNumbers = baseScrolls * 10 + finalNumber;

            const currentNumber = Math.floor(totalNumbers * easeOut) % 10;

            setDisplayNumbers((prev) => {
              const newNumbers = [...prev];
              newNumbers[slotIndex] = currentNumber;
              return newNumbers;
            });

            if (progress < 1) {
              animationRefs.current[slotIndex] = requestAnimationFrame(animate);
            } else {
        
              setDisplayNumbers((prev) => {
                const newNumbers = [...prev];
                newNumbers[slotIndex] = finalNumber;
                return newNumbers;
              });
              checkCompletion();
            }
          };

          animationRefs.current[slotIndex] = requestAnimationFrame(animate);
        }, delay);
      }
    },
    [initialNumbers, isSpinning, onComplete, spinDuration]
  );


  const cleanup = useCallback(() => {
    animationRefs.current.forEach((ref) => {
      if (ref) cancelAnimationFrame(ref);
    });
  }, []);

  return {
    isSpinning,
    displayNumbers,
    startSpin,
    cleanup,
  };
};
