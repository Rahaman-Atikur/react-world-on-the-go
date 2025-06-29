import { use, useState } from "react";
import Country from "../country/country";
const  Countries =({ countriesPromise })=> {
    const countries = use(countriesPromise);
    const [visitedCountries,setVisitedCoutries] = useState([]);
    console.log(countries);
    const handleVisitedCountries = (){
        console.log('country visited clicked to be added',country);
        const newVisitedCountries = [...visitedCountries];
        setVisitedCoutries(newVisitedCountries);
    }
    return (
        <>
         <h3>Travelled So Far</h3>
         <ol>
            {
                visitedCountries.map = (country => <li>{country.name.common}</li>)
            }
         </ol>
        <div>
            {
                countries.map(country => < Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country} ></Country>)
            }
        </div >
        </>
       
    );
};
export default Countries
