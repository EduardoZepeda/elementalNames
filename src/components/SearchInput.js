import React, { useState } from 'react'
import elementalForms from '../utils/ElementalNamesGenerator'

const SearchInput = () =>{
    const [word, setWord] = useState('')
    const [elements, setElements] = useState([])

    const handleChange = (event) => {
        setWord(event.target.value)
        if(event.target.value){setElements(elementalForms(event.target.value))}
        
    }

    return (
        <>
        <input value={word} onChange={handleChange} type="text"/>
        {elements.map((array)=>array.map((element)=><p key={element}>{element}</p>))}
        </>)
}

export default SearchInput