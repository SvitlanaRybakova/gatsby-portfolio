import React from "react"
import { IoMdDoneAll } from "react-icons/io"
import { companies, projects } from "../constants/prev_experience"

const HidenExperience = ({prevJobs}) => {
  return (
    <section className={`hide-section bg-grey ${prevJobs ? "previous-job_active" : "previous-job"}`}>
      {/* hiden info */}
      <article className=" jobs-center ">
        <div className="btn-container"></div>
        <div className="job-info">
          <h3>Previous experience</h3>
          <p>Before that I was working in several companies including:</p>
          <ul>
            {companies.map(company => {
              return (
                <li key={company.id} className="job-desc">
                  <IoMdDoneAll className="job-icon" />
                  <a href={company.link} target="_blank">
                    <span className="project-link">{company.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
          <p>with 6 years of experience in total on the following projects:</p>

          <ul>
            {projects.map(project => {
              return (
                <li key={project.id} className="job-desc">
                  <IoMdDoneAll className="job-icon" />
                  <a href={project.link} target="_blank">
                    <span className="project-link">{project.link}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </article>
    </section>
  )
}

export default HidenExperience
