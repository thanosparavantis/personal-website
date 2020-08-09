import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SocialButtonStack from "../components/social-button-stack"

const query = graphql`
  query IndexPage {
    profilePicture: file(relativePath: { eq: "profile_picture.jpg" }) {
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
    const profilePicture = data.profilePicture.childImageSharp.fluid

    return (
      <div className="mt-16 md:mt-0 md:pl-20">
        <div className="min-h-screen p-5 flex flex-col items-center justify-center text-center">
          <Img fluid={profilePicture} alt="Profile picture of Thanos Paravantis" title="Profile picture of Thanos Paravantis" className="mb-10 rounded-full shadow-xl flex-shrink-0 w-56"/>
          <h1 className="text-xl font-bold mb-2 text-gray-900">
            Thanos Paravantis
          </h1>
          <h2 className="text-lg font-bold mb-10 text-gray-600">
            Student, programmer, radio amateur
          </h2>
          <SocialButtonStack/>
        </div>
      </div>
    )
  }}/>
}
