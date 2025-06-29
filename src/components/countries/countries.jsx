import { use, useState } from "react";
import Country from "../country/country";
const  Countries =({ countriesPromise })=> {
    const countries = use(countriesPromise);
    const [visitedCountries,setVisitedCoutries] = useState([]);
    console.log(countries);
    const handleVisitedCountries = (){
        console.log('country visited clicked to be added');
    }
    return (
        <>
         <h3>Travelled So Far</h3>
        <div>
            {
                countries.map(country => < Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country} ></Country>)
            }
        </div >
        </>
       
    );
};
export default Countries
