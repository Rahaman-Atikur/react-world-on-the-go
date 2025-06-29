import { use } from "react";
import Country from "../country/country";
const  Countries =({ countriesPromise })=> {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            {
                countries.map(country => < Country key={country.cca3} country={country} ></Country>)
            }
        </div >
    );
};
export default Countries
