import React, { useEffect, useState } from "react";

const TypingLoop: React.FC = () => {
  const words = ["Asha", "Aditya"];
  const typingSpeed = 200; // ms
  const deletingSpeed = 100; // ms
  const pauseTime = 2000; // ms pause after typing before deleting

  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex <= currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex > currentWord.length) {
      const pause = setTimeout(() => {
        setIsDeleting(true);
        setCharIndex(charIndex - 1);
      }, pauseTime);
      return () => clearTimeout(pause);
    }

    if (isDeleting && charIndex >= 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
      setCharIndex(0);
    }
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="md:text-8xl leading-tight text-5xl md:p-3 text-blue-500" style={{ textShadow: "0 2px 6px rgba(0, 0, 0, 0.5)" }}>
      {displayText}
      <span className="inline-block w-2">{showCursor ? "|" : " "}</span>
    </div>
  );
};

export default TypingLoop;
