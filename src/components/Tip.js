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
        "According to Richard Feynman the number 137 defines the table's outer limit"
    ]

    return (
        <div className="">{tips[~~(Math.random() * tips.length)]}</div>
    )
}

export default Tip