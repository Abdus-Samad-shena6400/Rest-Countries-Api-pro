import React from 'react'

const DetailShimmer = () => {
  return (
    <div className="country-detail">
      <button className="back-btn">Back</button>
      <div className="shimmer-detail-img"></div>
      <div className="detail-shimmer-text">
        <div className="shimmer shimmer-detail-title"></div>
        <div className="shimmer shimmer-detail-line"></div>
        <div className="shimmer shimmer-detail-line"></div>
        <div className="shimmer shimmer-detail-line short"></div>
        <div className="shimmer shimmer-detail-borders"></div>
      </div>
    </div>
  )
}

export default DetailShimmer
