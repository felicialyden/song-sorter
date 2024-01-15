'use client'
import { useState } from "react"

const Page = () => {
    const [currentRanking, setCurrentRanking] = useState([
        'willow',
        'champagne problems',
        'gold rush',
        'tis the damn season'
    ])
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleChoice = (choice: number) => {
      if(choice === currentIndex) {
        setCurrentIndex((prev) => prev + 2)
      } else {
        const songToMove = currentRanking[choice]
        const newRanking = [...currentRanking]
        newRanking.splice(choice, 1)
        newRanking.splice(choice - 1, 0, songToMove)
        setCurrentRanking(newRanking)
        setCurrentIndex((prev) => prev + 2)
      }
    }

  return (
    <div className="flex gap-4 place-content-center">
        <button onClick={() => handleChoice(currentIndex)}>{currentRanking[currentIndex]}</button>
        <button onClick={() => handleChoice(currentIndex + 1)}>{currentRanking[currentIndex + 1]}</button>
      <div>
        {currentRanking}
      </div>
    </div>
  )
}

export default Page