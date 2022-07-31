import React from 'react'
import SearchInput from './SearchInput'

function Main() {
    return (
        <>
            <div className="App min-h-1/2 text-gray-800 p-4 flex justify-center items-end">
                <header className="App-header mb-8">
                    <h1 className="text-6xl mb-4">Elemental names</h1>
                    <p>This web app will use chemical elements to form words. Just tell us what word should we use.</p>
                </header>
            </div>
            <SearchInput></SearchInput>
        </>
    )
}

export default Main