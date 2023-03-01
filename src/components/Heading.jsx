import React, { useState, useEffect } from 'react';

const WORDS = ['Palliative Care', 'Ear Care', 'Mental Health'];

const Heading = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((currentWordIndex + 1) % WORDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentWordIndex])

  return (
    <div className="flex justify-center items-baseline max-h-40 overflow-hidden">
      <h1 className="text-xl text-center font-bold pr-8">Get your care for</h1>
      <div className="relative">
        {WORDS.map((word, index) => (
          <div
            key={index}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Heading