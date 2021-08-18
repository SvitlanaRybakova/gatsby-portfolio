import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

export const query = graphql`
  {
    allStrapiProject(filter: { homeProject: { eq: true } }) {
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

const IndexPage = ({data}) => {
  
   const {
     allStrapiProject: { nodes: projects },
   } = data
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="home projects" showLink projects={projects} />
      </main>
    </>
  )
}

export default IndexPage
