import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({name , flag ,population ,Region, capital, borders}) => {
  const [showBordersModal, setShowBordersModal] = useState(false)
  
  const maxBorders = 3
  const displayBorders = borders && borders.length > 0 ? borders.slice(0, maxBorders) : []
  const remainingBorders = borders && borders.length > maxBorders ? borders.length - maxBorders : 0

  const handleMoreClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowBordersModal(true)
  }

  const closeModal = (e) => {
    e?.stopPropagation?.()
    setShowBordersModal(false)
  }

  return (
    <>
      <Link to={`/country/${encodeURIComponent(name)}`} className="country-card">
        <img src={flag} alt={name}/>
        <div className="country-text">
          <h2>{name}</h2>
          <p><b>Population:</b>{population}</p>
          <p><b>Region:</b>{Region}</p>
          <p><b>Capital:</b>{capital}</p>
          <div className="borders-info">
            <b>Borders:</b>
            <div className="borders-container">
              {displayBorders && displayBorders.length > 0 
                ? (
                    <>
                      {displayBorders.map((border, idx) => (
                        <span key={idx} className="border-tag">{border}</span>
                      ))}
                      {remainingBorders > 0 && (
                        <button 
                          className="border-tag border-more" 
                          onClick={handleMoreClick}
                        >
                          +{remainingBorders} more
                        </button>
                      )}
                    </>
                  )
                : <span className="border-tag border-none">None</span>
              }
            </div>
          </div>
        </div>
      </Link>

      {showBordersModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>All Borders of {name}</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-borders">
              {borders && borders.length > 0
                ? borders.map((border, idx) => (
                    <span key={idx} className="border-tag">{border}</span>
                  ))
                : <p>No borders</p>
              }
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CountryCard