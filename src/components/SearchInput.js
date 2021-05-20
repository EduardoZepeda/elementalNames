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
            <div className="mx-2 mb-4 text-gray-800 flex flex-col content-center items-center">
                <input className="h-12 text-xl lg:w-1/3 md:w-2/3 xs:w-full px-4 rounded-md border border-green-600 focus:outline-none mb-4" 
                        placeholder="Your word here, only letters"
                        name="q" 
                        value={word} 
                        onChange={handleChange} 
                        type="text"/>
                <div>
                    {elements.length>0? elements.map((arrayOfElements)=><ElementContainer key={arrayOfElements.join()} arrayOfElements={arrayOfElements}/>): !word.length>0? "Try writing something":"That word can't be formed using elements. Why don't you try something else?"}
                </div>
            </div>
        </>)
}

export default SearchInput