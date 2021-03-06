import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Career = () => {

  const data = useStaticQuery(graphql`
      query AllGalleryQuery {
          allImageSharp(sort: {fields: original___src, order: ASC}) {
              nodes {
                  fixed(width: 590, height: 340) {
                      ...GatsbyImageSharpFixed
                  }
                  id
              }
          }
      }
  `)

  const careers = [
    "Работа в стабильной и активно развивающейся IT-компании",
    "Полное соблюдение ТК РФ",
    "Комфортный офис в центре Москвы",
    "Дружный коллектив единомышленников",
    "Высоко конкурентная заработная плата и прозрачная система бонусов",
    "Прозрачная система профессионального, карьерного и финансового роста",
    "Социальный пакет",
    "Оплата обучения",
    "Комната отдыха с настольным теннисом",
  ]

  return (
    <div className="horizontal-stripes mg-md-3-t">
      <div className="container career-wrap vertical-stripes">
      {careers.map((item, idx) => (
        <div className="career-item" key={idx}>
          <Img
            fixed={data.allImageSharp.nodes[idx].fixed}
            objectFit="cover"
            objectPosition="50% 50%"
          />
          <div className="number">{String(idx + 1).padStart(2, 0)}</div>
          <div className="title">{item}</div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Career
