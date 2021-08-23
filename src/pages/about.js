import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

export const query = graphql`
  {
    strapiAbout {
      title
      info
      stack {
        id
        title
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

const About = ({ data }) => {
  const {
    strapiAbout: { title, image, info, stack },
  } = data
  const img = image.localFile

  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage
            image={getImage(img)}
            className="about-img-svg"
            alt={title}
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default About
