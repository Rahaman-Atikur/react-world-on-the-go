export default function Country({ country }) {
    return (
        <div>
            <h3>Name:{country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Population:{country.population}</p>

        </div >
    )
} 