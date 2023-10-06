import  Paper  from './assets/paper-card.svg'
import  Rock  from './assets/rock-card.svg'
import  Scissors  from './assets/scissors-card.svg'

const Gameboard = () => {
    

    return (
        <section className='flex flex-col items-center'>
            <div className='flex gap-[5rem]'>
                <img src={Paper} alt="paper" className='w-[12.375rem] h-[12.6875rem]'/>
                <img src={Scissors} alt="scissors" className='w-[12.375rem] h-[12.6875rem]'/>
            </div>
            <div className='flex justify-center'>
                <img src={Rock} alt="paper" className='w-[12.375rem] h-[12.6875rem]'/>
            </div>    
        </section>
    );
}

export default Gameboard