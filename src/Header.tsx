import React from 'react'
import Logo from './assets/rps_logo.svg'


const Header: React.FC = ({score}) => {

    
    return(
        <section className='self-center px-6 flex items-center justify-between w-[43.75rem] h-[9rem] border-[0.19rem] rounded-[0.9375rem] border-opacity-30'>
            <img src={Logo} alt="rps_logo" />

            <div className='score-card h-[7.125rem] w-[9.375rem] flex flex-col items-center justify-center'>
                <p className='text-[#2A45C2] tracking-[0.15rem] text-[1rem] font-semibold'>score</p>
                <h1 className='text-[#565468] text-[4rem] leading-[4rem] font-bold'>{score}</h1>
            </div>
        </section>
    );
}

export default Header