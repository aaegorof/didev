import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Career = ({data}) => {
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
    <div className="row career-wrap mg-md-4-t">
      {careers.map((item, idx) => (
        <div className="career-item col-md-2 mg-md-4-b mg-xs-2-b" key={idx}>
          <Img fixed={data.allImageSharp.nodes[idx].fixed} objectFit="cover" objectPosition="50% 50%"/>
          <div className="number">{String(idx + 1).padStart(2, 0)}</div>
          <div className="title">{item}</div>
        </div>
      ))}
    </div>
  )
}

export const data = graphql`
            query {
                allImageSharp(sort: {fields: original___src, order: ASC}) {
                    nodes {
                        fixed(width: 250, height: 250) {
                            ...GatsbyImageSharpFixed
                        }
                        id
                    }
                }
            }
  `

export default Career
