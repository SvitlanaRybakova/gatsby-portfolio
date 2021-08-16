import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
 
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Dmitry Rybakov</h1>
            <h4>Swift/ObjectiveC/C++ Software Engineer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a
                    href={link.url}
                    key={link.id}
                    target="_blank"
                    className="social-link"
                  >
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.png"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
