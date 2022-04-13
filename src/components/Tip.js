import React from 'react'

const Tip = () => {

    const tips = [
        "Did you know that the letter 'J' doesn't exist in the IUPAC periodic table?",
        "Why don't you try with 'beach' or 'snack'?",
        "Try 'acceptance'",
        "Have you tried with 'biblical'?",
        "How about 'agnostic'?",
        "'hallucination' is a complicated word",
        "Did you know that some elements are named after famous scientists, planets, or mythological figures?",
        "According to Richard Feynman the number 137 defines the table's outer limit",
        "Have you considered that the periodic table is a giant cheatsheet?",
    ]

    return (
        <div className="bg-green-500 py-2 px-4 text-white rounded-sm">Tip: {tips[~~(Math.random() * tips.length)]}</div>
    )
}

export default Tip