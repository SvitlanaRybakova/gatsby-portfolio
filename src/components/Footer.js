import React from "react"
import socialLinks from "../constants/social_links"
import cv from '../../CV-DmitryR.pdf';
import {FaFileDownload} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} target="_blank" className="social-link">
                {link.icon}
              </a>
            )
          })}
          <a href={cv} download>
            <FaFileDownload className="social-link download-link"/>
          </a> 
        </div>
        {/* <h4>
          copyright&copy;{new Date().getFullYear()}
          <span>WebDev</span> all rights reserved
        </h4> */}
      </div>
    </footer>
  )
}

export default Footer
