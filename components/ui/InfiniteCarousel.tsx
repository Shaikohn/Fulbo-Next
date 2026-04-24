"use client";

import { useEffect, useRef, useState } from "react";
import "./infiniteCarousel.css";

type CarouselItem = {
  title: string;
  description: string;
};

type InfiniteCarouselProps = {
  items: CarouselItem[];
  variant?: "game" | "beta";
};

export default function InfiniteCarousel({
  items,
  trackId,
  variant = "game",
}: InfiniteCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(items.length);
  const [isAnimating, setIsAnimating] = useState(false);

  const clonedItems = [...items, ...items, ...items];

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 0;

    const firstCard = track.querySelector<HTMLElement>(".c-card");
    if (!firstCard) return 0;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 16;
    return cardWidth + gap;
  };

  const setPosition = (animated: boolean, customIndex = index) => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transition = animated
      ? "transform .5s cubic-bezier(.4,0,.2,1)"
      : "none";

    track.style.transform = `translateX(-${customIndex * getStep()}px)`;
  };

  useEffect(() => {
    setPosition(false, items.length);
    setIndex(items.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  useEffect(() => {
    const handleResize = () => {
      setPosition(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const slide = (dir: -1 | 1) => {
    if (isAnimating) return;

    const nextIndex = index + dir;
    setIsAnimating(true);
    setIndex(nextIndex);

    requestAnimationFrame(() => {
      setPosition(true, nextIndex);
    });
  };

  const handleTransitionEnd = () => {
    let newIndex = index;

    if (index >= items.length * 2) {
      newIndex = items.length;
    } else if (index < items.length) {
      newIndex = items.length * 2 - 1;
    }

    if (newIndex !== index) {
      setIndex(newIndex);
      setPosition(false, newIndex);
    }

    setIsAnimating(false);
  };

  return (
    <div className={`car-wrap ${variant === "beta" ? "beta-track-wrap" : ""}`}>
      <div
        ref={trackRef}
        id={trackId}
        className={`car-track ${variant === "beta" ? "beta-track" : ""}`}
        onTransitionEnd={handleTransitionEnd}
      >
        {clonedItems.map((item, idx) => (
          <article
            key={`${item.title}-${idx}`}
            className="c-card gc"
            aria-hidden={idx < items.length || idx >= items.length * 2}
          >
            <div className="c-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="car-ctrls">
        <button
          type="button"
          className="c-arr"
          aria-label="Previous"
          onClick={() => slide(-1)}
        >
          ←
        </button>
        <button
          type="button"
          className="c-arr"
          aria-label="Next"
          onClick={() => slide(1)}
        >
          →
        </button>
      </div>
    </div>
  );
}