import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SocialButtonStack from "../components/social-button-stack"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons"
import SeoTags from "../components/seo-tags"

const query = graphql`
  query IndexPage {
    profilePicture: file(relativePath: { eq: "profile_picture.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
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
        <SeoTags />

        <div className="font-mono min-h-screen p-5 flex flex-col items-center justify-center text-center">

          <Img fluid={profilePicture}
               alt="Profile picture of Thanos Paravantis"
               title="Profile picture of Thanos Paravantis"
               className="mb-10 rounded-full shadow-xl flex-shrink-0 w-48" />

          <h1 className="text-lg font-bold text-gray-900 mb-2">
            Thanos Paravantis
          </h1>

          <p className="text-gray-700">
            Student, programmer, radio amateur
          </p>

          <p className="text-gray-700 mb-10">
            <FontAwesomeIcon icon={faBroadcastTower} className="mr-3" size="sm" />
            SV1SQT / 18SV1364 / NR282
          </p>

          <SocialButtonStack />
        </div>
      </div>
    )
  }} />
}
