'use client'

import Results from "@/components/Results"

const page = () => {
    const storedRanking = JSON.parse(localStorage.getItem('ranking') as string)

  return (
    <div>
        <Results ranking={storedRanking}/>
    </div>
  )
}

export default page