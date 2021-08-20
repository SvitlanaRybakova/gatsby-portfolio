import React from 'react'
import { graphql } from "gatsby"

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
    <main className="project-template-page">
      <h2>{title}</h2>
      <p>{data.strapiProject.description}</p>
    </main>
  )
}

export default ProjectTemplate
