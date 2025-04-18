import React, { useEffect, useState } from "react";

const TypingLoop: React.FC = () => {
  const words = ["Asha", "Aditya"];
  const typingSpeed = 100; // ms
  const deletingSpeed = 100; // ms
  const pauseTime = 3000; // ms pause after typing before deleting

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <div className="md:text-8xl leading-tight text-5xl md:p-3 text-blue-500" style={{ textShadow: "0 2px 6px rgba(0, 0, 0, 0.5)" }}>
      {text}
      <span className="inline-block w-2">{showCursor ? "|" : " "}</span>
    </div>
  );
};

export default TypingLoop;
