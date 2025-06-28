import { use } from "react";
import Country from "../country/country";
const  Countries =({ countriesPromise })=> {
    const countries = use(countriesPromise);
    return (
        <div>
            {
                countries.map(country => < Country country={country} ></Country>)
            }
        </div >
    );
};

export default Countries
