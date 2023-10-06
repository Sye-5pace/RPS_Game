import { useState } from "react"


const Footer = () => {
    const [ clicked, setClicked ] = useState<boolean>(false)
    
    return(
        <section className="self-end mr-8">
            <div className="border-2 w-[8rem] h-[2.5rem] flex justify-center items-center border-white rounded-[0.8rem]">
                <h3 className="text-[1rem] font-semibold text-white uppercase">rules</h3>
            </div>
        </section>
    )
}

export default Footer 