// src/components/MemoryGame.js
import React, { useState } from "react";
import "../App.css";

const cards = [
  "images/patolino.png",
  "images/patolino.png",
  "images/tio-patinhas.webp",
  "images/tio-patinhas.webp",
  "images/donald.png",
  "images/donald.png",
  "images/sobrinhos.webp",
  "images/sobrinhos.webp",
];

const MemoryGame = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const flipCard = (index) => {
    if (lockBoard) return;
    if (flippedCards.includes(index)) return;

    setFlippedCards((prev) => [...prev, index]);

    if (flippedCards.length === 1) {
      setLockBoard(true);
      setTimeout(() => {
        const [firstIndex, secondIndex] = flippedCards;
        if (cards[firstIndex] === cards[index]) {
          setMatchedCards((prev) => [...prev, firstIndex, index]);
        }
        setFlippedCards([]);
        setLockBoard(false);
      }, 1000);
    }
  };

  const resetGame = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    shuffle(cards);
  };

  return (
    <div className="container-game">
      <h1>Jogo da Memória</h1>
      <div className="game-board">
        {cards.map((card, index) => (
          <img
            key={index}
            src={flippedCards.includes(index) || matchedCards.includes(index) ? card : ""}
            alt="Card"
            className="card"
            onClick={() => flipCard(index)}
          />
        ))}
      </div>
      <button
        id="reset-button"
        style={{ backgroundColor: "var(--blue)", color: "var(--pink)" }}
        onClick={resetGame}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default MemoryGame;
