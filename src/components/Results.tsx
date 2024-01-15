import React from 'react'

type ResultsProps = {
    ranking: string[]
}

const Results = ({ranking}: ResultsProps) => {
  return (
    <ul>
        {ranking.map((song, index) => <li key={index}>{song}</li>)}
    </ul>
  )
}

export default Results