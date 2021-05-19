import ELEMENTS from './Elements'

function findElementsInWord(word){
    word = word.toLowerCase()
    let symbols = []
    for(let symbol in ELEMENTS){
        if(word.includes(symbol.toLowerCase()))
        symbols.push(symbol)
    }
    return symbols
}

function getCombinationsOfElementsForWord(word, elements){
    let result = []
    function backtrack(wordSection, currentArray, element){
        if(element){currentArray.push(element)}
        if(currentArray && word===currentArray.join("").toLowerCase()){
            result.push(currentArray)
            return
        }
        for(let element of elements){
            if(wordSection.startsWith(element.toLowerCase())){
                backtrack(wordSection.slice(element.length), [...currentArray], element)
            }
        }
        return
    }
    backtrack(word, [])
    return result

}


function elementalForms(word) {
   if(!word){return []}
   word = word.toLowerCase()
   let result = getCombinationsOfElementsForWord(word, findElementsInWord(word))
   return result.map((array)=>array.map((symbol)=>`${ ELEMENTS[symbol] } (${ symbol })`))
}

export default elementalForms