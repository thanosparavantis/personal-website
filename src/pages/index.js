import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default () => {
  return <StaticQuery query={graphql`
    query {
      profilePhoto: file(relativePath: { eq: "profile_photo.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
      background: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
     }`} render={data => <div className="mt-16 md:mt-0 md:pl-20">
    <Helmet>
      <title>Thanos Paravantis</title>
    </Helmet>
    <BackgroundImage Tag="div" fluid={data.background.childImageSharp.fluid}>
      <div className="absolute w-screen h-screen bg-white opacity-75"></div>
      <div className="p-5 relative flex flex-col items-center justify-center w-full h-screen">
        <Img fluid={data.profilePhoto.childImageSharp.fluid} alt="Profile photo" title="Profile photo" className="mb-10 rounded-full shadow-xl w-1/2 md:w-1/4 lg:w-1/6"/>
        <h1 className="text-xl font-bold mb-2 md:text-2xl lg:text-3xl">Thanos Paravantis</h1>
        <h2 className="text-lg tracking-tighter uppercase font-bold text-gray-700 lg:text-xl">Senior in Computer Science</h2>
        <div className="flex flex-col mt-6 w-full md:flex-row max-w-lg">
          <a href="https://twitter.com/thparavantis" title="Visit my Twitter profile" className="block w-full text-center mb-2 px-5 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 focus:outline-none focus:shadow-outline md:mb-0 md:mr-4">
            <FontAwesomeIcon icon={faTwitter} className="mr-2" size="lg"/>
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/thanosparavantis" title="Visit my LinkedIn profile" className="block w-full text-center mb-2 px-5 py-3 text-white bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline md:mb-0 md:mr-4">
            <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" size="lg"/>
            LinkedIn
          </a>
          <a href="https://github.com/thanosparavantis" title="Visit my GitHub profile" className="block w-full text-center px-5 py-3 text-white bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:shadow-outline">
            <FontAwesomeIcon icon={faGithub} className="mr-2" size="lg"/>
            GitHub
          </a>
        </div>
      </div>
    </BackgroundImage>
  </div>}/>
}
