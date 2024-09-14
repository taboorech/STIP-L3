import { useState, useEffect } from 'react';
import './AnimatedText.scss';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 400);

    return () => clearInterval(interval);
  }, [text.length]);

  useEffect(() => {
    setActiveIndex(0);
  }, [text]);

  return (
    <div className="animated-text">
      {[...text].map((char, index) => (
        <span
          key={index}
          className={`animated-char ${index === activeIndex ? 'active' : ''}`}
        >
          {char === " " ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;