import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"
import Home from "../components/home"
import About from "../components/about"
import Solutions from "../components/solutions"
import Directions from "../components/directions"
import Career from "../components/career"
import Contacts from "../components/contacts"

export const config = {
  mainTitle: () => (
    <div>
      <span className="color-primary">Di</span>gital{" "}
      <span className="color-primary">Dev</span>elopment
    </div>
  ),
  columns: 6,
}

export const menuLinks = [
  { name: "Главная", component: <Home />, offset: 3 },
  { name: "О компании", component: <About />, offset: 1 },
  { name: "Направления", component: <Directions />, offset: 1 },
  { name: "Решения", component: <Solutions />, offset: 1 },
  { name: "Карьера", component: <Career />, offset: 1 },
  {
    name: "Контакты",
    component: <Contacts />,
    offset: 0,
    bodyClass: "bg-primaryDark",
  },
]

const IndexPage = () => {
  const [activeSlideId, setActiveSlideId] = useState(0)
  const _setActiveSlideId = slideId => () => setActiveSlideId(slideId)
  const bodyClass = menuLinks[activeSlideId].bodyClass

  useEffect(() => {
    bodyClass
      ? document.body.classList.add(bodyClass)
      : (document.body.classList = [])
  }, [activeSlideId, bodyClass])

  return (
      <Layout
        active={activeSlideId}
        onChnge={slideId => _setActiveSlideId(slideId)}
        classvar={activeSlideId === 5 ? "inverted" : ""}
        title={
          activeSlideId === 0
            ? config.mainTitle()
            : menuLinks[activeSlideId].name
        }
      >
        <SEO title={menuLinks[activeSlideId].name} />
        {menuLinks[activeSlideId].component}
      </Layout>
  )
}

export default IndexPage
