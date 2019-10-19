import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { Helmet } from "react-helmet"
import SocialButtonStack from "../components/social-button-stack"

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
      <div className="min-h-screen p-5 flex flex-col items-center justify-center text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
        <Img fluid={data.profilePhoto.childImageSharp.fluid} alt="Profile photo" title="Profile picture of Thanos Paravantis" className="mb-10 rounded-full shadow-xl flex-shrink-0 w-1/2 md:w-1/4 lg:w-1/6"/>
        <h1 className="text-xl font-bold mb-2 md:text-2xl lg:text-3xl">
          Thanos Paravantis
        </h1>
        <h2 className="mb-6 text-lg tracking-tighter uppercase font-bold text-gray-700 lg:text-xl">
          Senior in Computer Science
        </h2>
        <SocialButtonStack/>
      </div>
    </BackgroundImage>
  </div>
  }/>
}
