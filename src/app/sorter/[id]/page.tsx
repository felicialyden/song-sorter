"use client";
import React, { useState } from "react";
import { evermore } from "@/evermore";
import Card from "@/components/Card";
import './sorter.scss'

const Page = () => {
  const [currentRanking, setCurrentRanking] = useState(evermore);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChoice = (choice: number) => {
    console.log(choice)
    if (choice === currentIndex) {
      setCurrentIndex((prev) => prev + 2);
    } else {
      const songToMove = currentRanking[choice];
      const newRanking = [...currentRanking];
      newRanking.splice(choice, 1);
      newRanking.splice(choice - 1, 0, songToMove);
      setCurrentRanking(newRanking);
      setCurrentIndex((prev) => prev + 2);
    }
    console.log(currentRanking)
  };

  return (
    <div className="container mt-6 has-text-centered">
      <h2 className="title is-4">Pick your favorite song:</h2>
      <div className="columns is-justify-content-center">
        <Card title={currentRanking[currentIndex]} index={currentIndex} choiceHandler={handleChoice}/>
        <Card title={currentRanking[currentIndex + 1]} index={currentIndex + 1} choiceHandler={handleChoice}/>
      </div>
    </div>
  );
};

export default Page;
