"use client";
import React, { useState } from "react";
import FaqItem from "../home/FaqItem";
import faqsData from "@/../public/json/faqs.json";

const FaqsList = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <>
      <ul>
        {faqsData.map((faq, index) => (
          <FaqItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isActive={activeFaq === index}
            toggleFaq={() => toggleFaq(index)}
          />
        ))}
      </ul>
    </>
  );
};

export default FaqsList;
