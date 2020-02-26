import React from "react"

const LineOptions = ({points, className}) => {

  return <div className={`lineOptions ${className}`}>
    {points.map(item => <div className="point">
      <div className="point-icon">{item.icon}</div>
      <div className="point-name">{item.name}</div>
    </div>)}
    <div className="line"></div>
  </div>
}

export default LineOptions
