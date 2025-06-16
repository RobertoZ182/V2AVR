import React, { useState, useEffect, useRef } from 'react';

interface CarouselItem {
  id: number;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number | null>(null);


  useEffect(() => {
    if (!autoPlay) return;

    // Progress animation
    setProgress(0);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / interval) * 100, 100);
      setProgress(percent);
    }, 50);

    const slideTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => {
      clearTimeout(slideTimer);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, autoPlay, interval, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Slide content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0">
            {item.content}
          </div>
        ))}
      </div>


      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-0">
        <div
          className="h-full bg-orange-500 transition-all duration-100 linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>


      {/* Dots */}
      {showDots && (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
