import React from "react";
import styles from "./List.module.css";

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
  listNumber: number; // Added prop for list number
}

const List: React.FC<ListProps> = ({ listNumber }) => {
  // Updated to use the new prop
  // Array of 10 words to create random phrases
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

  const listClass = `list-${listNumber}`; // Construct class name based on listNumber

  return (
    <div className={`${styles.listContainer} ${styles[listClass]}`}>
      {" "}
      {items.map((item) => (
        <div key={item.id} className={styles.row}>
          <button className={styles.button}>Jump</button>{" "}
          <div className={styles.content}>{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
