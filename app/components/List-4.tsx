"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./List-3.module.css";

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

const HoverButton: React.FC<{
  banana: boolean;
  onMouseOver: () => void;
  onMouseOut: () => void;
}> = ({ banana, onMouseOver, onMouseOut }) => {
  const [showText, setShowText] = useState(false);

  const buttonStyles = banana
    ? `${styles.button} ${styles.buttonNoHover}`
    : styles.button;

  return (
    <button
      className={buttonStyles}
      onMouseOver={() => {
        setShowText(true);
        onMouseOver();
      }}
      onMouseOut={() => {
        setShowText(false);
        onMouseOut();
      }}
    >
      <div className={styles.iconContainer}>
        <BackArrowIcon />
      </div>
      {showText && (
        <div className={styles.textContainer}>
          <span>Time travel</span>
        </div>
      )}
    </button>
  );
};

interface Item {
  id: number;
  content: string;
}

const List: React.FC<ListProps> = ({ listNumber }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [banana, setBanana] = useState(false);
  const mouseOutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const listClass = `list-${listNumber}`;

  useEffect(() => {
    const phrases = generateRandomPhrases(
      [
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
      ],
      10
    ).map((content, id) => ({ id, content }));
    setItems(phrases as any);

    // Clean up the timeout when the component unmounts
    return () => {
      if (mouseOutTimeoutRef.current) {
        clearTimeout(mouseOutTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseOver = () => {
    // Clear any existing timeout
    if (mouseOutTimeoutRef.current) {
      clearTimeout(mouseOutTimeoutRef.current);
    }

    setBanana(true);
    console.log(`Mouse over at ${new Date().toISOString()}`);
  };

  const handleMouseOut = () => {
    // Set a timeout to delay setting banana to false
    mouseOutTimeoutRef.current = setTimeout(() => {
      setBanana(false);
      console.log(`Mouse out at ${new Date().toISOString()}`);
    }, 1000); // Delay of 1 second
  };

  return (
    <div
      className={`${styles.listContainer} ${styles[listClass]}`}
      onMouseLeave={handleMouseOut}
    >
      {items.map((item, index) => (
        <div key={index} className={styles.row}>
          <HoverButton
            banana={banana}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          <div className={styles.content}>{item?.content || ""}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
