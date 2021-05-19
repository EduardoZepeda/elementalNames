import React, { useState } from 'react'
import elementalForms from '../utils/ElementalNamesGenerator'
import ElementContainer from './ElementContainer'

const SearchInput = () =>{
    const [word, setWord] = useState('')
    const [elements, setElements] = useState([])

    const handleChange = (event) => {
        setWord(event.target.value)
        if(event.target.value){setElements(elementalForms(event.target.value))}
        
    }

    return (
        <>
            <div className="mb-4">
                <input className="h-12 text-2xl text-gray-800 px-4 rounded-md border border-green-600"  value={word} onChange={handleChange} type="text"/>  
            </div>
            <div>
                {elements.length>0? elements.map((arrayOfElements)=><ElementContainer arrayOfElements={arrayOfElements}/>): "Try typing something"}
            </div>  
        </>)
}

export default SearchInput