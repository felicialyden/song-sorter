"use client";
import React, { useState } from "react";
import { evermore } from "@/evermore";
import Card from "@/components/Card";
import "./sorter.scss";

const Page = () => {
  const [currentRanking, setCurrentRanking] = useState(evermore);
  const [currentIndexes, setCurrentIndexes] = useState([0, 1]);
  const [indexDiff, setIndexDiff] = useState(2);

  const handleChoice = (choice: number) => {
    console.log(choice);

    if (
      !currentRanking[currentIndexes[0] + indexDiff] &&
      !currentRanking[currentIndexes[1] + indexDiff]
    ) {
      setCurrentIndexes([0, 0 + indexDiff / 2]);
      setIndexDiff(indexDiff * 2);
    } else if (
      !currentRanking[currentIndexes[0] + indexDiff] &&
      currentRanking[currentIndexes[1] + indexDiff]
    ) {
      setCurrentIndexes([0, 0 + indexDiff / 2]);
    } else if (!currentRanking[currentIndexes[1] + indexDiff]) {
      setCurrentIndexes([currentIndexes[0] + indexDiff, 0]);
      setIndexDiff(indexDiff * 2);
    } else {
      setCurrentIndexes([
        currentIndexes[0] + indexDiff,
        currentIndexes[1] + indexDiff
      ]);
    }
    updateRanking(choice)

    console.log(currentRanking);
  };

  const updateRanking = (choice: number) => {
    if (choice === currentIndexes[0]) return;

    const songToMove = currentRanking[choice];
    const newRanking = [...currentRanking];
    newRanking.splice(choice, 1);
    newRanking.splice(choice - 1, 0, songToMove);
    setCurrentRanking(newRanking);
  }

  return (
    <div className="container mt-6 has-text-centered">
      <h2 className="title is-4">Pick your favorite song:</h2>
      <div className="columns is-justify-content-center">
        <Card
          title={currentRanking[currentIndexes[0]]}
          index={currentIndexes[0]}
          choiceHandler={handleChoice}
        />
        <Card
          title={currentRanking[currentIndexes[1]]}
          index={currentIndexes[1]}
          choiceHandler={handleChoice}
        />
      </div>
    </div>
  );
};

export default Page;
