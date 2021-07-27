import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SocialButtonStack from "../components/social-button-stack"
import SeoTags from "../components/seo-tags"
import "../styles/home.css"

const query = graphql`
  query IndexPage {
    profilePicture: file(relativePath: { eq: "profile_picture.png" }) {
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
      <>
        <div className="mt-16 md:mt-0">
          <SeoTags />

          <div className="min-h-screen p-5 flex flex-col
                          items-center justify-center text-center">

            <Img fluid={profilePicture}
                 alt="Profile picture of Thanos Paravantis"
                 title="Profile picture of Thanos Paravantis"
                 className="mb-10 rounded-full flex-shrink-0 w-56" />

            <h1 className="font-bold uppercase text-2xl text-gray-900 mb-2">
              Thanos Paravantis
            </h1>

            <h2 className="font-bold text-gray-700">
              BSc in Computer Science
            </h2>

            <p className="font-bold text-gray-700 mb-8">
              Software Engineer and Radio Amateur
            </p>

            <SocialButtonStack />
          </div>
        </div>
      </>
    )
  }} />
}
