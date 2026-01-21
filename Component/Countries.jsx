

import CountryCard from "./CountryCard.jsx";
import ShimmarCards from "./ShimmarCards.jsx";

const Countries = ({ filterdcountries }) => {
    if (!filterdcountries || filterdcountries.length === 0) {
    return <ShimmarCards count={12} />;
  }
      const allCountriesArray = filterdcountries.map((country, index) => {
    return (
      <CountryCard
        key={index}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population.toLocaleString()}
        Region={country.region}
        capital={country.capital ? country.capital[0] : "N/A"}
        borders={country.borders || []}
      />
    );
  });

  return (
    
    <div className="contries-container">{allCountriesArray}</div>
    

  )
};

export default Countries;
