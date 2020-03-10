import React, { useState, useEffect } from "react"
import Button from "./Button"
import Dlow from "../images/dlow.svg"
import Dtop from "../images/dtop.svg"

const Home = () => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    setTimeout(setIsActive(true), 3200)
  }, [])

  return (
    <div className="row home-wrap">
      <div className={`col-lg-3 animation-section ${isActive ? "active" : ""}`}>
        <div className="animated-logo">
          <div className="glass"></div>
          <Dlow className="dlow" />
          <Dtop className="dtop" />
          <div className="glass low"></div>
        </div>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-2">
        <div className="content mg-3-v mg-4-b">
          Мы обладаем уникальным практическим опытом разработки и внедрения
          комплексных программных решений для финансовых организаций с любым
          уровнем капитала и объёмом занимаемого рынка в отрасли.
        </div>
        <Button>Нажмите >_</Button>
      </div>
    </div>
  )
}

export default Home
