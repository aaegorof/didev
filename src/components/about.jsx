import React from "react"
import Sber from "../images/sberbank_logo.svg"
import Rossiya from "../images/bank_rf_logo.svg"

const About = () => {

  return <div className="row about-wrap">
    <div className="col-lg-1"></div>
    <div className="col-lg-3">
      <h3>Реализуем. Внедряем.</h3>
      <div className="content mg-4-t">
        Специалистами компании реализовано и внедрено более десятка сложных проектов. Сотрудники являются экспертами в области корпоративного стека технологий разработки. Компания входит в список аккредитованных поставщиков программного обеспечения для Банка России и ПАО «Сбербанк России», что свидетельствует о признании профессионализма и наличия доверия от двух самых крупных компаний России финансового сектора.
      </div>
      <div className="row mg-4-t logos">
        <div className="col-md-3"><Sber /></div>
        <div className="col-md-3"><Rossiya /></div>

      </div>
    </div>
  </div>
}

export default About
