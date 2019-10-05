import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

export default () => {
  const data = useStaticQuery(graphql`
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
    }
  `)
  return <div>
    <BackgroundImage Tag="div" fluid={data.background.childImageSharp.fluid}>
      <div className="absolute w-screen h-screen bg-white opacity-75"></div>
      <div className="relative flex flex-col items-center justify-center w-screen h-screen">
        <Img fluid={data.profilePhoto.childImageSharp.fluid} alt="Profile photo" className="mb-10 rounded-full shadow-xl w-1/2 md:w-1/4 lg:w-1/6" />
        <h1 className="text-xl font-bold mb-2 md:text-2xl lg:text-3xl">Thanos Paravantis</h1>
        <h2 className="text-lg tracking-tighter uppercase font-bold text-gray-700 lg:text-xl">Senior in Computer Science</h2>
      </div>
    </BackgroundImage>
  </div>
}
