import React, { useState } from "react"
import './country.css'
import './countries.css'
export default function Country({ country, handleVisitedCountries }) {
    const [visited, setVisited] = useState(false);
    console.log(handleVisitedCountries);
    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries();
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name:{country.name.common}</h3>
            <div className="counties">
                <img src={country.flags.png} alt="" />
                <p>Population:{country.population}</p>
                <button className={visited ? 'btn-visited':'btn-not-visited' } onClick={handleVisited}>{visted ? 'visited' : 'Not visited'}</button>
                <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Visited Flag</button>
            </div>
        </div >
    )
} 