import { useState , useEffect } from 'react';

//player's choice
const choices = ['rock','paper','scissors']

//Conditional statement to determine winner

//#3 attempt to determine Winner: Switch statement handles multiple conditions correctly
const winner = (playerChoice:string ,computerChoice:string): string => {
    switch(playerChoice){
        case computerChoice:
            return "It's a tie";
            
        case 'rock':
            return computerChoice === 'scissors' ? 'You win' : 'Computer wins';

        case 'paper':
            return computerChoice === 'rock' ? 'You win' : 'Computer wins';
        
        case 'scissors':
            return computerChoice === 'paper' ? 'You win' : 'Computer wins';

        default:
            return 'Invalid choice';
    }
}




//Custom Hooks
const useRPSGame = () => {
    const [playerChoice, setPlayerChoice] = useState<string | null>(null)
    const [computerChoice, setComputerChoice] = useState<string | null>(null)
    const [result, setResult] = useState<string | null>(null)

    useEffect(()=> {
        const computerChoiceIndex = Math.floor(Math.random() * choices.length)
        const randomComputerChoice = choices[computerChoiceIndex]
        // console.log("computer choice index:" + computerChoiceIndex)
        console.log("computer choice rand:" + choices[computerChoiceIndex])
        setComputerChoice(randomComputerChoice)
        
        if (playerChoice){
            const gameResult = winner(playerChoice, randomComputerChoice)
            setResult(gameResult)
            console.log("Computer choice pick: " + randomComputerChoice)
            console.log("Game result: " + gameResult)
        }
    },[playerChoice])

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