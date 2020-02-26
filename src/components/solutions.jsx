import React from "react"
import LineOptions from "./lineOptions"
import Api from "../images/api.svg"
import Advisor from "../images/advisor.svg"
import Automation from "../images/automation.svg"
import Coding from "../images/coding.svg"
import Integration from "../images/integration.svg"


const points = [
  {
  icon: <Automation/>,
  name: "Интеграция автоматизированных систем банков и предприятий"
},
  {
    icon: <Integration/>,
    name: "Интеграционные решения"
  },
  {
    icon: <Coding />,
    name: "Разработка корпоративных решений на платформе OpenShift"
  },
  {
    icon: <Api />,
    name: "Разработка API решений"
  },
  {
    icon: <Advisor/>,
    name: "ИТ-консалтинг"
  },
]

const Solutions = () => {
  return <div className="solutions-wrap row">
    <div className="col-md-1"></div>
    <LineOptions points={points} className="col-md-4"/>
    <div className="row"></div>
  </div>
}

export default Solutions
