import { useState , useEffect } from 'react';
import  Paper  from './assets/paper-card.svg'
import  Rock  from './assets/rock-card.svg'
import  Scissors  from './assets/scissors-card.svg' 

//player's choice
const choices = ['rock','paper','scissors']


//Conditional statement to determine winner

//#3 attempt to determine Winner: Switch statement handles multiple conditions correctly
const winner = (playerChoice:string ,computerChoice:string): string => {
    switch(playerChoice){
        case computerChoice:
            return "It's a tie";
            
        case 'rock':
            return computerChoice === 'scissors' ? 'You win' : 'You lose';

        case 'paper':
            return computerChoice === 'rock' ? 'You win' : 'You lose';
        
        case 'scissors':
            return computerChoice === 'paper' ? 'You win' : 'You lose';

        default:
            return 'Invalid choice';
    }
}




//Custom Hooks
const useRPSGame = (setScore) => {
    const [playerChoice, setPlayerChoice] = useState<string | null>(null)
    const [computerChoice, setComputerChoice] = useState<string | null>(null)
    const [result, setResult] = useState<string | null>(null)

    useEffect(()=> {
        const computerChoiceIndex = Math.floor(Math.random() * choices.length)
        const randomComputerChoice = choices[computerChoiceIndex]
        console.log("computer choice rand:" + choices[computerChoiceIndex])
        setComputerChoice(randomComputerChoice)
        
        if (playerChoice){
            const gameResult = winner(playerChoice, randomComputerChoice)
            setResult(gameResult)

            if(gameResult === 'You win'){
                setScore((prevScore) => prevScore + 1);
            }else if( gameResult === 'You lose'){
                setScore((prevScore) => prevScore - 1)
            }
        }
    },[playerChoice, setScore])

    const play = (choice) => {
        console.log("Player choice pick:" + choice)
        setPlayerChoice(choice)
    }

    const reset = ()=> {
        setPlayerChoice(null)
        setComputerChoice(null)
        setResult(null)
    }

    return {
        playerChoice,
        computerChoice,
        result,
        play,
        reset,
    };
}

export default useRPSGame