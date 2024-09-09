'use client';
import '@/app/animated-text.css';
interface AnimatedTextProps {
  text: string;
  classname?: string;
}
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  classname,
}) => {
  return (
    <div className={`animation-container ${classname}`}>
      <p className={`animate-pulse animation-typed`}>{text}</p>
    </div>
  );
};
