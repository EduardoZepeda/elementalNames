import React from 'react'
import SquareBox from './SquareBox'

const ElementContainer = ({ arrayOfElements }) => {
    return (
        <div className="flex justify-center my-8 flex-wrap">
            {arrayOfElements.map((element, index) => <SquareBox key={`${element.name}${index}`} element={element} />)}
        </div>
    )
}

export default ElementContainer