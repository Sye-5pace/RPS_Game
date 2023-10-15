import { useState } from "react"

import  Paper  from './assets/paper-card.svg'
import  Rock  from './assets/rock-card.svg'
import  Scissors  from './assets/scissors-card.svg'
import useRPSGame from "./GameHook"

const cards = {
    rock: {
      name: 'Rock',
      image: Rock,
    },
    paper: {
      name: 'Paper',
      image: Paper,
    },
    scissors: {
      name: 'Scissors',
      image: Scissors,
    },
  };


interface GameboardProps {
    setScore: React.Dispatch<React.SetStateAction<number>>
}

const Gameboard: React.FC<GameboardProps> = ({setScore}) => {
    const { playerChoice, computerChoice, result, play, reset } = useRPSGame(setScore);
    const [ playerSelected, setPlayerSelected ] = useState<boolean>(false)
    // const [ clicked, setClicked ] = useState<boolean>(false)
        
    

    return (
        <div className="flex gap-2 justify-center">
            <section className='flex flex-col items-center mt-2 relative left-[1rem]'>
                <div className={`flex flex-col items-center mt-2 relative left-[1rem] ${ playerSelected ? 'hidden':'flex'}`}  onClick={()=>(console.log('A card is selected'),  setPlayerSelected(!playerSelected))}>
                    <div className='flex gap-[5rem]'>
                        <img onClick={() => play('paper')} src={Paper} alt="paper" className='w-[12.375rem] h-[12.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                        <img onClick={() => play('scissors')} src={Scissors} alt="scissors" className='w-[12.375rem] h-[12.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                    </div>
                    <div className='flex justify-center'>
                        <img onClick={() => play('rock')} src={Rock} alt="paper" className='w-[12.375rem] h-[12.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                    </div>
                </div> 
                <section className={` w-full ${ playerSelected ? 'block':'hidden'} flex gap-8 items-center  `}>
                    <div className="flex flex-col gap-y-[2.9375rem] items-center">
                        <p className="text-shadow-md text-white text-[1.5rem] font-barlow font-bold tracking-wide">YOU PICKED</p>
                        { playerChoice  && <img src={cards[playerChoice].image} alt={cards[playerChoice].name} className="w-[17.3125rem] h-[17.75rem]"/>}
                    </div>
                    <div className="flex flex-col">
                        <p className="text-shadow-md text-white text-[3.5rem] font-barlow font-bold tracking-wide text-center">{result}</p>
                        <button className="hover:text-[#DB2E4D] bg-gradient-to-r from-gray-300 to-white h-[3rem] text-[1rem] font-semibold text-[#3b4262] tracking-wide rounded-[0.5rem] w-[13.75rem]" onClick={() => (reset() , setPlayerSelected(!playerSelected))}>Play Again</button>
                    </div>
                    <div className="flex flex-col gap-y-[2.9375rem] items-center">
                        <p className="text-shadow-md text-white text-[1.5rem] font-barlow font-bold tracking-wide">THE HOUSE PICKED</p>
                        {computerChoice && <img src={cards[computerChoice].image} alt={cards[computerChoice].name} className="w-[17.3125rem] h-[17.75rem]" />}
                    </div>
                </section>
            </section>

            {/* //Rules modal */}
            <section className="absolute left-[75rem] self-end top-[38.5rem]">
                <div className=" cursor-pointer border-2 w-[8rem] h-[2.5rem] flex justify-center items-center border-white rounded-[0.8rem] ">
                    <h3 className="text-[1rem] font-semibold text-white uppercase">rules</h3>
                </div>
            </section>
            {/* <section className={`absolute inset-0 `}></section> */}
        </div>
    );
}

export default Gameboard

