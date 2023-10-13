import { useState } from "react"

import  Paper  from './assets/paper-card.svg'
import  Rock  from './assets/rock-card.svg'
import  Scissors  from './assets/scissors-card.svg'
import useRPSGame from "./GameHook"

const choices = {
    rock:{
        name: 'Rock',
        image: Rock,
    },
    paper:{
        name: 'Paper',
        image: Paper
    },
    scissors:{
        name: 'Scissors',
        image: Scissors
    }
}

interface GameboardProps {
    setScore: React.Dispatch<React.SetStateAction<number>>
}

const Gameboard: React.FC<GameboardProps> = ({setScore}) => {
    const { playerChoice, computerChoice, result, play, reset } = useRPSGame();
    // const [ clicked, setClicked ] = useState<boolean>(false)
    
    // const getPlayerChoiceImage = () => {
    //     if(playerChoice){
    //         return choices[playerChoice].image
    //     }
    //     return null;
    // }
    
    // const getComputerChoiceImage = () => {
    //     if(computerChoice){
    //         return choices[computerChoice].image
    //     }
    //     return null;
    // }


    return (
        <div className="flex justify-center ">
            <section className='flex flex-col items-center mt-2 relative left-[5rem]'>
                <div className='flex flex-col items-center mt-2 relative left-[5rem]'>
                    <div className='flex gap-[5rem]'>
                        <img onClick={() => play('paper')} src={Paper} alt="paper" className='w-[12.375rem] h-[12.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                        <img onClick={() => play('scissors')} src={Scissors} alt="scissors" className='w-[12.375rem] h-[12.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                    </div>
                    <div className='flex justify-center'>
                        <img onClick={() => play('rock')} src={Rock} alt="paper" className='w-[12.375rem] h-[12.6875rem] cursor-pointer transition-transform transform hover:-translate-y-2'/>
                    </div>
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

// {playerChoice && computerChoice &&
//     (
//         <section className="flex">
//             <div>
//                 <p>Your choice: {choices[playerChoice].name}</p>
//                 {/* {console.log(choices[playerChoice].name)} */}
//                 <img src={getPlayerChoiceImage()} alt={choices[playerChoice]}/>
//             </div>
//             <div>
//                 <p>{result}</p>
//                 <button onClick={reset}>Play Again</button>
//             </div>
//             <div>
//                 <p>Computer's choice: {choices[computerChoice].name}</p>
//                 <img src={getComputerChoiceImage()} alt={choices[computerChoice].name}/>
//             </div>
//         </section>
//     )
// }  