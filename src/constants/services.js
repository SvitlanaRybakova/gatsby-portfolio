import React from "react"
import { FaCode, FaSketch, FaApple } from "react-icons/fa"
const services = [
  {
    id: 10,
    icon: <FaCode className="service-icon" />,
    title: "iOS Development",
    text: `Make outstanding mobile applications for Apple hardware, including iPhone, iPad and iPod Touch.
    The software is written in the Swift programming language or Objective-C and then deployed to the App Store for users to download.
`,
  },
  {
    id: 21,
    icon: <FaSketch className="service-icon" />,
    title: "iOS Design",
    text: `Follow Human Interface Guidelines for designing great apps that integrate seamlessly with different Apple platforms.
    Create more compelling, intuitive, and beautiful experiences and design better apps.`,
  },
  {
    id: 31,
    icon: <FaApple className="service-icon" />,
    title: "App Design",
    text: `Combine the user interface (UI including the colors, fonts, and general look and feel) and user experience (UX focuses on the actual functionality and usability) to create a flawless user experience.`,
  },
]

export default services
