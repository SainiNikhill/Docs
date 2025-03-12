import React from 'react'
import BGC from "./components/Background"
import FBC from "./components/Foreground"

const App = () => {
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
     <BGC/>
     <FBC/>
     
    </div>
  )
}

export default App