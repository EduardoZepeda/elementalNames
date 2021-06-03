import React, { useState } from 'react'

const Credits = () =>{
    const [openCredits, toggleOpenCredits] = useState(false)

    const toggleCredits = () => {
        toggleOpenCredits(!openCredits)
    }

    return (
        <div onClick={toggleCredits} 
            className={"px-4 py-2 transform fixed bottom-0 -left-40 bg-gradient-to-r from-red-400 to-red-500 font-bold transition duration-700 whitespace-nowrap overflow-hidden text-sm" + (openCredits? " translate-x-40 text-white" : " text-red-500")}>
            Credits: <a href="https://coffeebytes.dev">Eduardo Zepeda</a> 
        </div>
    )
}

export default Credits