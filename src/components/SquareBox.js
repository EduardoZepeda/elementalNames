import React from 'react'

const SquareBox = ({element}) =>{
    return (
        <div className="flex justify-center items-center flex-col text-white text-lg bg-green-400 rounded-sm shadow-md w-24 h-24 m-2">
            <div className="text-2xl">{element[1]}</div>
            <div className="text-xs">{element[0]}</div>
        </div>
    )
}

export default SquareBox