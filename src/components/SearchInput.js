import React, { useState } from 'react'
import elementalForms from '../utils/ElementalNamesGenerator'
import ElementContainer from './ElementContainer'
import Tip from './Tip'

const SearchInput = () => {
    const [word, setWord] = useState('')
    const [elements, setElements] = useState([])
    const removeNumbersAndSpecialCharacters = (word) => {
        return word.replace(/[^a-zA-Z]/g, '')
    }

    const handleChange = (event) => {
        let cleanedWord = removeNumbersAndSpecialCharacters(event.target.value)
        setWord(cleanedWord)
        if (cleanedWord) { setElements(elementalForms(cleanedWord)) } else { setWord(''); setElements([]) }

    }
    return (
        <>
            <div className="mx-2 mb-4 text-gray-800 flex flex-col content-center items-center">
                <form autoComplete="off">
                    <input autoComplete="false" className="h-12 text-xl xs:w-full px-4 rounded-md border border-green-600 focus:outline-none mb-4"
                        placeholder="Your word here, only letters"
                        name="q"
                        value={word}
                        onChange={handleChange}
                        type="text" />
                </form>
                <div className="py-8">
                    {elements.length > 0 ? elements.map((arrayOfElements) => <ElementContainer key={arrayOfElements.map((element) => element.name).join()} arrayOfElements={arrayOfElements} />) : !word.length > 0 ?
                        "Try writing something" : <Tip />}
                </div>
            </div>
        </>)
}

export default SearchInput