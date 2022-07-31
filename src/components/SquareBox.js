import React from 'react'
import { Link } from 'react-router-dom'

const SquareBox = ({ element }) => {
    return (
        <Link to={element.symbol.toUpperCase()}>
            <div key={element.id} className="flex justify-center items-center flex-col text-white text-lg bg-green-400 rounded-sm hover:shadow-2xl shadow-md transform hover:-translate-y-1 w-24 h-24 m-2">
                <div className="text-2xl">{element.symbol}</div>
                <div className="text-xs">{element.name}</div>
            </div>
        </Link>
    )
}

export default SquareBox