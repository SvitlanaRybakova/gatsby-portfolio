import React from 'react'
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        url
      }
    }
  }
`

const ProjectTemplate = ({pageContext: {title}, data}) => {
 
  return (
    <>
      <Seo
        title={data.strapiProject.title.toUpperCase()}
        description={data.strapiProject.description}
        image={data.strapiProject.image.url}

      />
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
      </main>
    </>
  )
}

export default ProjectTemplate
