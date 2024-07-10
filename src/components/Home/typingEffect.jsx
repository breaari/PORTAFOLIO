import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting) {
      if (index > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, speed);
        return () => clearTimeout(timeoutId);
      } else {
        setIsDeleting(false);
      }
    } else {
      if (index < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeoutId);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // Esperar 2 segundos antes de comenzar a borrar
      }
    }
  }, [index, isDeleting, text, speed]);

  return (
    <span>
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingEffect;
