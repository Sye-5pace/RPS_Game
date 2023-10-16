import { useState } from "react"

import  Paper  from './assets/paper-card.svg'
import  Rock  from './assets/rock-card.svg'
import  Scissors  from './assets/scissors-card.svg'
import  Close from './assets/combined-shape.svg'
import  Rules from './assets/rps-rules.jpg'
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
    const [ clicked, setClicked ] = useState<boolean>(false)
        
    

    return (
        <div className="flex gap-2 justify-center">
            <section className='flex flex-col items-center  relative left-[1rem]'>
                <div className={`flex flex-col items-center mt-2 relative ] ${ playerSelected ? 'hidden':'flex'}`}  onClick={()=>(console.log('A card is selected'),  setPlayerSelected(!playerSelected))}>
                    <div className='flex gap-[5rem]'>
                        <img onClick={() => play('paper')} src={Paper} alt="paper" className='w-[11.375rem] h-[11.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                        <img onClick={() => play('scissors')} src={Scissors} alt="scissors" className='w-[11.375rem] h-[11.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                    </div>
                    <div className='flex justify-center'>
                        <img onClick={() => play('rock')} src={Rock} alt="paper" className='w-[11.375rem] h-[11.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                    </div>
                </div> 
                <section className={` w-full ${ playerSelected ? 'block':'hidden'} flex gap-8 items-center  `}>
                    <div className="flex flex-col gap-y-[2.9375rem] items-center">
                        <p className="text-shadow-md text-white text-[1.5rem] font-barlow font-bold tracking-wide">YOU PICKED</p>
                        { playerChoice  && <img src={cards[playerChoice].image} alt={cards[playerChoice].name} className="w-[16.3125rem] h-[16.75rem]"/>}
                    </div>
                    <div className="flex flex-col">
                        <p className="text-shadow-md text-white text-[3.5rem] font-barlow font-bold tracking-wide text-center">{result}</p>
                        <button className="hover:text-[#DB2E4D] bg-gradient-to-r from-gray-300 to-white h-[3rem] text-[1rem] font-semibold text-[#3b4262] tracking-wide rounded-[0.5rem] w-[13.75rem]" onClick={() => (reset() , setPlayerSelected(!playerSelected))}>Play Again</button>
                    </div>
                    <div className="flex flex-col gap-y-[2.9375rem] items-center">
                        <p className="text-shadow-md text-white text-[1.5rem] font-barlow font-bold tracking-wide">THE HOUSE PICKED</p>
                        {computerChoice && <img src={cards[computerChoice].image} alt={cards[computerChoice].name} className="w-[16.3125rem] h-[16.75rem]" />}
                    </div>
                </section>
            </section>

            {/* //Rules modal */}
            <section className="absolute left-[68rem] self-end top-[34.5rem]">
                <div onClick={() => setClicked(!clicked)} className=" cursor-pointer border-2 w-[8rem] h-[2.5rem] flex justify-center items-center border-white rounded-[0.8rem] ">
                    <h3 className="text-[1rem] font-semibold text-white uppercase">rules</h3>
                </div>
            </section>
            <section className={` flex justify-center items-center absolute bg-[#000]  w-full min-h-screen bg-opacity-50 inset-0 ${ clicked ? 'block' : 'hidden' }`}>
                <div className="px-[2.7rem] py-[2rem] flex flex-col justify-center gap-y-[2.5rem] bg-white rounded-[0.5rem] w-[25rem] h-[25.9375rem]">
                    <div className="flex justify-between">
                        <h2 className="font-bold leading-[2rem] text-[#3b4262] text-[2rem]">RULES</h2>
                        <img src={Close} onClick={() => setClicked(!clicked)}  className="cursor-pointer w-[1.1875rem] h-[1.1875rem]" alt="close"/>
                    </div>
                    <img src={Rules}  className="w-[19.0625rem] h-[16.9375rem]" alt="close"/>
                </div>
            </section>
            {/* <section className={`absolute inset-0 `}></section> */}
        </div>
    );
}

export default Gameboard

