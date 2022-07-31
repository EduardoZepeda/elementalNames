import React from 'react'
import { useParams } from 'react-router-dom'
import ELEMENTS from '../utils/Elements'
import { Link } from 'react-router-dom'

function ElementDetail() {
    let { elementId } = useParams()

    const element = ELEMENTS[elementId]

    return (
        <div className="App min-h-1/2 text-gray-800 px-4 flex flex-row flex-wrap justify-center items-center">
            <div key={element.id} className="relative flex justify-center items-center flex-col text-white text-lg bg-green-400 rounded-sm shadow-md w-64 h-64 m-8 p-8 max-w-screen-sm">
                <div className="text-7xl">{element.symbol}</div>
                <div className="text-2xl">{element.name}</div>
                <div className="text-sm absolute bottom-4 text-xl">{element.electron_configuration_semantic}</div>
                <div className="absolute top-4 right-4 text-xl">{element.atomic_mass}</div>
                <div className="absolute top-4 left-4 text-xl">{element.number}</div>
            </div>
            <div key={element.id} className="mx-8">
                {element.summary ? <div>{element.summary}</div> : null}
                {element.appearance ? <div><strong>Appareance: </strong> {element.appearance}</div> : null}
                {element.bohr_model_image ? <div><strong>Bohr Model: </strong><img alt={`${element.symbol} bohr model`} src={element.bohr_model_image} /> </div> : null}
                {element.boil ? <div><strong>Boling point: </strong>{element.boil} K</div> : null}
                {element.melt ? <div><strong>Melting point: </strong>{element.melt} K</div> : null}
                {element.named_by ? <div><strong>Named by: </strong>{element.named_by}</div> : null}
                {element.period ? <div><strong>Period: </strong>{element.period}</div> : null}
                {element.phase ? <div><strong>Phase: </strong>{element.phase}</div> : null}
                {element.electronegativity_pauling ? <div><strong>Pauling electronegativity: </strong> {element.electronegativity_pauling}</div> : null}
                {element.source ? <div><strong>Source:</strong> <a href={element.source}><p>{element.source}</p></a></div> : null}
                <Link to="/"><button className="my-8 rounded bg-green-500 text-white p-4">Return</button></Link>
            </div>
        </div>
    )
}

export default ElementDetail