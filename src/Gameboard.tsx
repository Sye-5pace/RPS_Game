import { useState } from "react"

import  Paper  from './assets/paper-card.svg'
import  Rock  from './assets/rock-card.svg'
import  Scissors  from './assets/scissors-card.svg'

interface GameboardProps {
    setScore: React.Dispatch<React.SetStateAction<number>>
}

const Gameboard: React.FC<GameboardProps> = ({setScore}) => {
    
    const [ clicked, setClicked ] = useState<boolean>(false)
    

    return (
        <div className="flex justify-center ">
            <section className='flex flex-col items-center mt-2 relative left-[5rem]'>
                <div className='flex gap-[5rem]'>
                    <img src={Paper} alt="paper" className='w-[12.375rem] h-[12.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                    <img src={Scissors} alt="scissors" className='w-[12.375rem] h-[12.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                </div>
                <div className='flex justify-center'>
                    <img src={Rock} alt="paper" className='w-[12.375rem] h-[12.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                </div>    
            </section>
            <section className="self-end relative left-[17rem]">
                <div className=" cursor-pointer border-2 w-[8rem] h-[2.5rem] flex justify-center items-center border-white rounded-[0.8rem] ">
                    <h3 className="text-[1rem] font-semibold text-white uppercase">rules</h3>
                </div>
            </section>
        </div>
    );
}

export default Gameboard