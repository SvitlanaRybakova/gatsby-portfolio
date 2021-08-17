import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

import HidenExperience from "./HidenExperience"

const query = graphql`
  {
    allStrapiJob(sort: { fields: id, order: ASC }) {
      nodes {
        company
        date
        position
        description
        link
        responsilbilities {
          id
          name
        }
        tech {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJob: { nodes: jobs },
  } = data
  const [selectCompany, setCompany] = useState(0)
  const {
    company,
    date,
    description,
    position,
    responsilbilities,
    tech,
  } = jobs[selectCompany]

  const [prevJobs, setPrevJobs]= useState(false);

  return (
    <>
      <section className="section-jobs">
        <Title title="experience" />
        <div className="jobs-center">
          {/* btn container */}
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  className={
                    index === selectCompany ? "job-btn active-btn" : "job-btn"
                  }
                  key={item.index}
                  onClick={() => setCompany(index)}
                >
                  {item.company}
                </button>
              )
            })}
          </div>
          {/* job info */}
          <article className="job-info">
            <h3>{position}</h3>
            <h4>{company}</h4>
            <div className="job-date">{date}</div>
            <div>
              {description}
              {jobs[selectCompany].link && (
                <p>
                  The project's link:{" "}
                  <a
                    href={jobs[0].link}
                    target="_blank"
                    className="project-link"
                  >
                    {jobs[0].link}
                  </a>
                </p>
              )}
            </div>
            <h5 className="job-title">
              Responsibilities and Key Accomplishments
            </h5>
            {responsilbilities.map(res => {
              return (
                <div key={res.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{res.name}</p>
                </div>
              )
            })}
            <h5 className="job-title">
              Technologies, frameworks and libraries
            </h5>
            {tech.map(item => {
              return (
                <div key={item.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{item.name}</p>
                </div>
              )
            })}
          </article>
        </div>
      </section>
      <HidenExperience prevJobs={prevJobs}/>
      <button
        className="btn center-btn"
        onClick={() => setPrevJobs(!prevJobs)}
      >{ prevJobs ? "hide info": "more info"}
      </button>
    </>
  )
}

export default Jobs
