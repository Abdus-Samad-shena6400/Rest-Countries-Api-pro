import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DetailShimmer from './DetailShimmer'

const CountryDetail = ({ allCountries }) => {
  const { name } = useParams()
  const navigate = useNavigate()
  const decodedName = decodeURIComponent(name || '')

  const country = Array.isArray(allCountries)
    ? allCountries.find(c => c?.name?.common === decodedName)
    : null

  // Show shimmer while loading
  if (!allCountries || allCountries.length === 0) {
    return <DetailShimmer />
  }

  // Helper function to find country by CCA3 (3-letter code)
  const findCountryByCode = (code) => {
    return allCountries?.find(c => c?.cca3?.toLowerCase() === code?.toLowerCase())
  }

  // Helper function to get country name from border code
  const getCountryNameFromCode = (code) => {
    const borderCountry = findCountryByCode(code)
    return borderCountry?.name?.common || code
  }

  const handleBorderClick = (borderCode, e) => {
    e.preventDefault()
    e.stopPropagation()
    const borderCountry = findCountryByCode(borderCode)
    if (borderCountry) {
      navigate(`/country/${encodeURIComponent(borderCountry.name.common)}`)
    }
  }

  if (!country) {
    return (
      <div className="country-detail">
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
        <p>Country not found.</p>
      </div>
    )
  }

  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A'
  const currencies = country.currencies ? Object.values(country.currencies).map(cur => cur.name).join(', ') : 'N/A'
  const timezones = country.timezones ? country.timezones.join(', ') : 'N/A'
  
  const maxBorders = 3
  const displayBorders = country.borders && country.borders.length > 0 ? country.borders.slice(0, maxBorders) : []
  const remainingBorders = country.borders && country.borders.length > maxBorders ? country.borders.length - maxBorders : 0

  return (
    <div className="country-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      <img src={country.flags?.svg} alt={`${country.name?.common} flag`} className="detail-flag" />
      <div className="country-text">
        <h2>{country.name?.common}</h2>
        <p><b>Population:</b> {country.population ? country.population.toLocaleString() : 'N/A'}</p>
        <p><b>Region:</b> {country.region || 'N/A'}</p>
        <p><b>Capital:</b> {country.capital ? country.capital[0] : 'N/A'}</p>
        <div className="borders-info">
          <b>Borders:</b>
          <div className="borders-container">
            {displayBorders && displayBorders.length > 0
              ? (
                  <>
                    {displayBorders.map((border, idx) => (
                      <button
                        key={idx}
                        className="border-tag border-clickable"
                        onClick={(e) => handleBorderClick(border, e)}
                        title={`Go to ${getCountryNameFromCode(border)}`}
                      >
                        {border}
                      </button>
                    ))}
                    {remainingBorders > 0 && (
                      <span className="border-tag border-more">+{remainingBorders} more</span>
                    )}
                  </>
                )
              : <span className="border-tag border-none">None</span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail
