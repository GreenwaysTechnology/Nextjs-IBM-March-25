import { getClient } from "../lib/client"
import { gql } from "@apollo/client"


const query =  gql `query GET_COUNTRIES{
  countries {
     name
     code
     capital
  }
}
`
export default async function CountriesPage() {
    const { data: { countries } } = await getClient().query({ query })

    return <div>
        <ul>
            <h1>Total Countries {countries.length}</h1>
            <hr/>
            {countries.map(country => {
                return <li key={country.code}>
                    <span>{country.code} - {country.name} - {country.capital}</span>
                </li>
            })}
        </ul>
    </div>
}