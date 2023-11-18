import React,{ useState,useEffect } from "react"

import  Paper  from './assets/paper-card.svg'
import  Rock  from './assets/rock-card.svg'
import  Scissors  from './assets/scissors-card.svg'
import  Close from './assets/combined-shape.svg'
import  Rules from './assets/rps-rules.jpg'
import useRPSGame from "./GameHook"

const cards: Record<string,{ name: string,image: string}> = {
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
    //return values of the CustomHook named GameHook
    const { playerChoice, computerChoice, result, play, reset } = useRPSGame(setScore);

    //State variables for Dynamic interactions
    const [ playerSelected, setPlayerSelected ] = useState<boolean>(false)
    const [ clicked, setClicked ] = useState<boolean>(false)
    const [ playerWin, setPlayerWin ] = useState<boolean>(false)
    const [ computerWin, setComputerWin ] = useState<boolean>(false)
    const [ tieWin, setTieWin ] = useState<boolean>(false) 
    
    //Conditionals handling results effects
    useEffect(() => {
        if (result === 'You win') {
          setPlayerWin(true);
          setComputerWin(false);
          setTieWin(false)
        } 
        if(result === 'You lose') {
          setPlayerWin(false);
          setComputerWin(true);
          setTieWin(false)
        }
        if(result === "It's a tie"){
            setPlayerWin(false);
            setComputerWin(false);
            setTieWin(true)
        }
    }, [result]);

    return (
        <div className="flex gap-2 justify-center ">
            <section className='flex flex-col items-center  relative left-[1rem]'>
                <div className={`flex flex-col items-center mt-2 relative ] ${ playerSelected ? 'hidden':'flex'}`}  >
                    <div className='flex gap-[5rem]'>
                        <img onClick={() => (play('paper') , setPlayerSelected(!playerSelected))} src={Paper} alt="paper" className='w-[11.375rem] h-[11.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                        <img onClick={() =>( play('scissors'), setPlayerSelected(!playerSelected) )} src={Scissors} alt="scissors" className='w-[11.375rem] h-[11.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                    </div>
                    <div className='flex justify-center'>
                        <img onClick={() =>( play('rock'), setPlayerSelected(!playerSelected))} src={Rock} alt="paper" className='w-[11.375rem] h-[11.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                    </div>
                </div> 
                <section className={` w-full ${ playerSelected ? 'block':'hidden'} flex gap-8 items-center  overflow-hidden`}>
                    <div className="flex flex-col gap-y-[2.9375rem] items-center border">
                        <p className="text-shadow-md text-white text-[1.5rem] font-barlow font-bold tracking-wide border">YOU PICKED</p>
                        <div className="flex flex-col items-center justify-center ">
                            { playerChoice  && <div  className={`left-[2.5rem] w-[11.3125rem] h-[11.75rem] absolute inset-0 top-[6.5rem]  ${ playerWin ? 'bg-white rounded-full opacity-75 animate-ping':''}`}></div>}
                            { playerChoice  && <div  className={`left-[1.8rem] w-[12.5rem] h-[13rem] absolute inset-0 top-[6rem]  ${ playerWin ? 'bg-white rounded-full opacity-75 animate-ping':''}`}></div>}
                            { playerChoice  && <div  className={`w-[14.3125rem] h-[14.75rem] left-[1rem] absolute inset-0 top-[5rem]  ${ playerWin ? 'bg-white rounded-full opacity-75 animate-ping':''}`}></div>}
                            { playerChoice  && <img src={cards[playerChoice].image} alt={cards[playerChoice].name} className="w-[16.3125rem] h-[16.75rem] z-[9]"/>}
                        </div> 
                    </div>
                    <div className="flex flex-col">
                        <p className={`text-shadow-md text-white text-[3.5rem] font-barlow font-bold tracking-wide text-center `}>{result}</p>
                        <div className="flex flex-col justify-center items-center">
                            {/* <div className={` absolute inset-0 left-[21rem] top-[9.7rem] bg-gradient-to-r from-gray-300 to-white h-[2.75rem] text-[1rem] font-semibold text-[#3b4262] tracking-wide rounded-[0.5rem] w-[8.75rem] ${ tieWin ? 'animate-ping':''}`} ></div> */}
                            <button className="hover:text-[#DB2E4D] bg-gradient-to-r from-gray-300 to-white h-[3rem] text-[1rem] font-semibold text-[#3b4262] tracking-wide rounded-[0.5rem] w-[13.75rem] z-[9]" onClick={() => (reset() , setPlayerSelected(!playerSelected))}>Play Again</button>
                        </div>
                    </div>
                        <div className="text-shadow-md text-white text-[1.5rem] font-barlow font-bold tracking-wide border left-[36.8rem] top-[0.2rem] absolute  text-center w-[14.25rem]">THE HOUSE PICKED</div>
                    <div className="absolute rounded-full z-0 top-[6rem] left-[35.3rem] ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="225" height="225" viewBox="0 0 225 225" fill="none">
                            <circle cx="112.306" cy="112.305" r="112.315" fill="black" fill-opacity="0.1"/>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-6 ">
                        <div className="flex flex-col gap-y-[2.9375rem] items-center mt-[5rem]">
                            {/* { computerChoice  && <div  className={`left-[37rem] w-[11.3125rem] h-[11.75rem] absolute inset-0 top-[6.5rem]  ${computerWin ? 'bg-white rounded-full opacity-75 animate-ping':''}`}></div>} */}
                            {/* { computerChoice  && <div  className={`left-[36.5rem] w-[12.5rem] h-[13rem] absolute inset-0 top-[6rem]  ${ computerWin ? 'bg-white rounded-full opacity-75 animate-ping':''}`}></div>} */}
                            {/* { computerChoice  && <div  className={`w-[14.3125rem] h-[14.75rem] left-[35.5rem] absolute inset-0 top-[5rem]  ${ computerWin ? 'bg-white rounded-full opacity-75 animate-ping':''}`}></div>} */}
                            { computerChoice  && <img src={cards[computerChoice].image} alt={cards[computerChoice].name} className="w-[16.3125rem] h-[16.75rem] z-[9] "/>}
                        </div>
                    </div>
                </section>
            </section>

            {/* //Rules modal */}
            <section className="absolute left-[68rem] self-end top-[34.5rem]">
                <div onClick={() => setClicked(!clicked)} className=" cursor-pointer border-2 w-[8rem] h-[2.5rem] flex justify-center items-center border-white rounded-[0.8rem] ">
                    <h3 className="text-[1rem] font-semibold text-white uppercase">rules</h3>
                </div>
            </section>
            <section className={` flex justify-center items-center absolute bg-[#000] z-[999] w-full min-h-screen bg-opacity-50 inset-0 ${ clicked ? 'block' : 'hidden' }`}>
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

