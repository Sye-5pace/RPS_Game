import { useState , useEffect,useCallback } from 'react';


//choices
const choices = ['rock','paper','scissors']

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
    const makeComputerChoice = useCallback(() => {
        const computerChoiceIndex = Math.floor(Math.random() * choices.length)
        const randomComputerChoice = choices[computerChoiceIndex]
        setComputerChoice(randomComputerChoice) 

        if (playerChoice){
            const gameResult = winner(playerChoice, randomComputerChoice)
            setResult(gameResult)

            if(gameResult === 'You win'){
                setScore((prevScore: number) => prevScore + 1);
            }else if( gameResult === 'You lose'){
                setScore((prevScore: number) => prevScore - 1)
            }
        }
    },[playerChoice,setScore])

    useEffect(()=> {
        if (playerChoice){
            const gameTimer = 400000;
            const winTimer = setTimeout(makeComputerChoice, gameTimer)
            return () => clearTimeout(winTimer)
        }
    },[playerChoice, setScore,makeComputerChoice])

    const play = (choice: string) => {
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