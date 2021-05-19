import React from 'react'
import SquareBox from './SquareBox'

const ElementContainer = ({arrayOfElements}) =>{
    return (
        <div className="flex justify-center my-8 flex-wrap">
            {arrayOfElements.map((element)=><SquareBox element={element}/>)}
        </div>
    )
}

export default ElementContainer