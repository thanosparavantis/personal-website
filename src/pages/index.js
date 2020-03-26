import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SocialButtonStack from "../components/social-button-stack"

const query = graphql`
  query IndexPage {
    profilePhoto: file(relativePath: { eq: "profile_photo.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default () => {
  return <StaticQuery query={query} render={data => {
    const profilePhoto = data.profilePhoto.childImageSharp.fluid

    return (
      <div className="mt-16 md:mt-0 md:pl-20">
        <div className="min-h-screen p-5 flex flex-col items-center justify-center text-center">
          <Img fluid={profilePhoto} alt="Profile photo" title="Profile picture of Thanos Paravantis"
               className="mb-10 rounded shadow-xl flex-shrink-0 w-56"/>
          <h1 className="text-xl font-bold mb-2 text-gray-900">
            Thanos Paravantis
          </h1>
          <h2 className="text-lg font-bold mb-10 text-gray-600">
            Senior in Computer Science
          </h2>
          <SocialButtonStack/>
        </div>
      </div>
    )
  }}/>
}
