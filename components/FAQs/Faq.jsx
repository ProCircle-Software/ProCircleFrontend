"use client";
import React, { useState } from "react";
import "./faq.css";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const faqQuestions = [
  {
    question: "How often are meetings held?",
    answer:
      "Meetings are typically held weekly or biweekly, depending on member preferences decided during the first session. We also host monthly workshops and social events to ensure flexibility and inclusivity.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "ProCircle is completely free to join, with no hidden fees or contributions. We’re committed to accessible growth for all professionals, and all resources, workshops, and events are fully funded by our community partnerships and dedicated leadership team.",
  },
  {
    question: "How are accountability partners assigned?",
    answer:
      "Partners are matched based on shared goals, industries, and personalities to ensure alignment. Members can also request adjustments or self-select partners after the initial pairing.",
  },
  {
    question: "Can I propose new activities for the group?",
    answer:
      "Absolutely! We thrive on member input. Share your ideas with our Event & Activities Planner or submit suggestions through our community feedback form.",
  },
  {
    question: "What if I miss a meeting?",
    answer:
      "No worries! Meetings are recorded for later viewing, and summaries are shared in our group chat. You can also catch up with your accountability partner for updates.",
  },
];

const FaqCard = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-card">
      <div className="faq-card__question" onClick={onClick} role="button">
        <h4>{question}</h4>
        {isOpen ? <RxCaretUp /> : <RxCaretDown />}
      </div>
      <div className={`faq-card__answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-heading">
        <span>Got Questions?</span>
        <h1>Here’s Everything You Need to Know</h1>
      </div>
      <div className="faq-questions">
        {faqQuestions.map((member, index) => (
          <FaqCard
            key={index}
            question={member.question}
            answer={member.answer}
            isOpen={openIndex === index}
            onClick={() => toggleQuestion(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
