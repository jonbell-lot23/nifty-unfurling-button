"use client";
import React, { useState } from "react";
import styles from "./List-1.module.css";

const BackArrowIcon = () => (
  <svg className={styles.MessageIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M19.5012 3C18.6769 3 18.0025 3.675 18.0025 4.5V19.5C18.0025 20.325 18.6769 21 19.5012 21C20.3256 21 21 20.325 21 19.5V4.5C21 3.675 20.3256 3 19.5012 3ZM14.0158 13.23L5.36805 19.335C4.3788 20.04 3 19.32 3 18.105V5.895C3 4.68 4.3638 3.975 5.36805 4.665L14.0158 10.77C14.8701 11.37 14.8701 12.63 14.0158 13.23Z"></path>
  </svg>
);

// Helper function to generate random phrases
const generateRandomPhrases = (wordList: string[], numberOfPhrases: number) => {
  const phrases = [];
  for (let i = 0; i < numberOfPhrases; i++) {
    const shuffled = [...wordList].sort(() => 0.5 - Math.random());
    phrases.push(
      shuffled.slice(0, Math.ceil(Math.random() * wordList.length)).join(" ")
    );
  }
  return phrases;
};

interface ListProps {
  listNumber: number;
}

// HoverButton component
const HoverButton: React.FC = () => {
  const [showText, setShowText] = useState(false);

  return (
    <button
      className={`${styles.button}`}
      onMouseOver={() => setShowText(true)}
      onMouseOut={() => setShowText(false)}
    >
      <div className={styles.flexContainer}>
        <BackArrowIcon />
        {showText && <span> Time travel</span>}
      </div>
    </button>
  );
};

const List: React.FC<ListProps> = ({ listNumber }) => {
  const words = [
    "allocate",
    "buffer",
    "compile",
    "deploy",
    "execute",
    "iterate",
    "query",
    "resolve",
    "transform",
    "validate",
  ];

  const items = generateRandomPhrases(words, 10).map((content, id) => ({
    id,
    content,
  }));

  const listClass = `list-${listNumber}`;

  return (
    <div className={`${styles.listContainer} ${styles[listClass]}`}>
      {items.map((item) => (
        <div key={item.id} className={styles.row}>
          <HoverButton />
          <div className={styles.content}>{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
