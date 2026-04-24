"use client";

import { useState } from "react";
import "./accordion.css";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="acc-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.title} className={`acc ${isOpen ? "open" : ""}`}>
            <button
              type="button"
              className="acc-trig"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span className="acc-trig-title">{item.title}</span>
              <span className="acc-arr">▼</span>
            </button>

            <div className="acc-body">
              <div className="acc-body-in">
                <p>{item.content}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}