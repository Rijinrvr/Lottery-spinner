import { memo } from "react";
import { congratulationsImage } from "../assets";

interface CongratulationsMessageProps {
  show: boolean;
}

const CongratulationsMessage: React.FC<CongratulationsMessageProps> = ({
  show,
}) => {
  if (!show) return null;

  return (
    <div className="text-center mt-8 animate-fade-in">
      <img src={congratulationsImage} alt="Congratulations" />

      <h2 className="text-4xl md:text-6xl font-bold animate-color-switch">
        1ST PRIZE
      </h2>
    </div>
  );
};

export default memo(CongratulationsMessage);
