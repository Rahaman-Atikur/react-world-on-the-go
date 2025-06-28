import { use } from "react";

export default function Countries({countriesPromise}){
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <h1>Okay</h1>
            {
                // countries.map(country=>{<Countries country={country}></Countries>
                })
            }
        </div>
    )
}