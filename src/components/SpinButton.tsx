import { memo } from 'react';

interface SpinButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const SpinButton: React.FC<SpinButtonProps> = ({ onClick, disabled }) => {
  return (
    <div className="mb-8">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`spin-button relative px-12 py-5 text-2xl font-bold transform transition-all duration-200 ${
          disabled
            ? 'opacity-70 cursor-not-allowed'
            : 'hover:scale-105 active:scale-95'
        }`}
        aria-label="Spin the lottery"
      >
        <span className="relative z-10 text-yellow-400">SPIN</span>
      </button>
    </div>
  );
};

export default memo(SpinButton);

