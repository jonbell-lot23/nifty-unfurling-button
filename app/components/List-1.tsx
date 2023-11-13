"use client";
import React, { useState } from "react";
import styles from "./List-1.module.css";

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
  const [text, setText] = useState("⬅️");
  const buttonClass = `button`;

  return (
    <button
      className={`${styles.button} ${styles[buttonClass]}`}
      onMouseOver={() => setText("Rewind")}
      onMouseOut={() => setText("⬅️")}
    >
      {text}
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
