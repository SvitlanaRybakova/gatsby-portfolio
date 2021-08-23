import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
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

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  //
  const img = data.strapiProject.image.localFile
  console.log(img)
  return (
    <>
      <Seo
        title={data.strapiProject.title.toUpperCase()}
        description={data.strapiProject.description}
        image={data.strapiProject.image.url}
      />
      <main className="project-template-page">
        <h2>{title}</h2>
        <div className="content-wrapper">
          <GatsbyImage image={getImage(img)} className="single-project-img" alt={title} />
          <p className="single-project-description">{data.strapiProject.description}</p>
        </div>
      </main>
    </>
  )
}

export default ProjectTemplate
