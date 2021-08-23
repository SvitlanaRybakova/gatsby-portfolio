import React, { useState } from "react"
import Seo from "../components/Seo"
import emailjs from "emailjs-com"
import { FcCheckmark } from "react-icons/fc"

const Result = () => {
  return (
    <p className="confirmation">
      <FcCheckmark /> Your message has been successfully sent. I will contact
      you soon.
    </p>
  )
}

const Contact = () => {
  const [result, showResult] = useState(false)

  const sendEmail = e => {
    e.preventDefault()
   
    emailjs
      .sendForm(
        `${process.env.GATSBY_SERVICE_ID}`,
        `${process.env.GATSBY_TEMPLATE_ID}`,
        e.target,
        `${process.env.GATSBY_USER_ID}`
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
    showResult(true)
  }

  // hide result
  setTimeout(() => {
    showResult(false)
  }, 5000)

  return (
    <>
    <Seo title="Contacts" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
        <div className="confirm-container">{result ? <Result /> : null}</div>
      </section>
    </>
  )
}

export default Contact
