import React from "react"

const Directions = () => {
  const directions = ["Финансовый сектор", "Государственный сектор", "Промышленный сектор", "Цифровой сектор"]
  return <div className="directions-wrap mg-xs-3-t mg-lg-5-t">
    {directions.map( (item, idx) => <div className="sector-item" key={idx}>
      <div className="number">{String(idx+1).padStart(2,0)}</div>
      {item}
    </div>)}
  </div>
}

export default Directions
