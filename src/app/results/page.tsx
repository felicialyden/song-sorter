'use client'

import Results from "@/components/Results"
import './results.scss'

const page = () => {
    const storedRanking = JSON.parse(localStorage.getItem('ranking') as string)

  return (
    <div className="columns is-flex is-justify-content-center">
        <Results ranking={storedRanking}/>
    </div>
  )
}

export default page