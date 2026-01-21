import React from 'react'

const ShimmarCards = ({ count = 12 }) => {
  return (
    <div className="contries-container">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="shimmer-card">
          <div className="shimmer shimmer-img"></div>
          <div className="shimmer-text">
            <div className="shimmer shimmer-title"></div>
            <div className="shimmer shimmer-line"></div>
            <div className="shimmer shimmer-line"></div>
            <div className="shimmer shimmer-line short"></div>
            <div className="shimmer shimmer-borders"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShimmarCards
