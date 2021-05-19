import React, { useState } from 'react'
import elementalForms from '../utils/ElementalNamesGenerator'
import ElementContainer from './ElementContainer'

const SearchInput = () =>{
    const [word, setWord] = useState('')
    const [elements, setElements] = useState([])

    const removeNumbersAndSpecialCharacters = (word) => {
        return word.replace(/[^a-zA-Z]/g, '')
    }

    const handleChange = (event) => {
        let cleanedWord = removeNumbersAndSpecialCharacters(event.target.value)
        setWord(cleanedWord)
        if(cleanedWord){setElements(elementalForms(cleanedWord))}else{setWord('');setElements([])}
        
    }

    return (
        <>
            <div className="mb-4 flex flex-col content-center items-center">
                <input className="h-12 text-xl text-gray-800 lg:w-1/3 md:w-2/3 xs:w-full px-4 rounded-md border border-green-600 mb-4" 
                        placeholder="Your word here, only letters"
                        name="q" 
                        value={word} 
                        onChange={handleChange} 
                        type="text"/>
                {elements.length>0? elements.map((arrayOfElements)=><ElementContainer arrayOfElements={arrayOfElements}/>): !word.length>0? "Try writing something":"That word can't be formed using elements. Why don't you try something else?"}
            </div>
        </>)
}

export default SearchInput