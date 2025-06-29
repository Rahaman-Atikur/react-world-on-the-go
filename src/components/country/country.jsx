import React from "react"
import './country.css'
import './countries.css'
export default function Country({ country }) {
    return (
        <div className="country">
            <h3>Name:{country.name.common}</h3>
            <div className="counties">
                <img src={country.flags.png} alt="" />
                <p>Population:{country.population}</p>
                <button>Visited</button>
            </div>


        </div >
    )
} 