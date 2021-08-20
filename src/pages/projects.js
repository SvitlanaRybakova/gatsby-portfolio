import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        description
        homeProject
        github
        id
        slug
        title
        url
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
  }
`

const ProjectsPage = ({data}) => {
  
  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  )
}

export default ProjectsPage
