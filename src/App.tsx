import { useState } from 'react'
import './index.css'
import Header from './Header'
import Gameboard from './Gameboard'
// import Footer from './Footer'

const  App: React.FC = () => {
  const [ score, setScore ] = useState<number>(0)

  return (
    <div className='radial-bg w-full min-h-screen flex justify-center p-0 m-0 border-box'>
      <div className='w-full flex flex-col gap-y-[3rem]  pt-[2rem]  font-barlow'>
        <Header score={score}/>
        <Gameboard  setScore={setScore}/>
      </div>
    </div>
  )
}

export default App
