import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

export default () => {
  const data = useStaticQuery(graphql`
      query {
          image1: file(relativePath: { eq: "me01.jpg" }) {
              childImageSharp {
                  fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          },
          image2: file(relativePath: { eq: "me02.jpg" }) {
              childImageSharp {
                  fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          },
          image3: file(relativePath: { eq: "me03.jpg" }) {
              childImageSharp {
                  fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          },
      }
  `)

  return <div>
    <Helmet>
      <title>About - Thanos Paravantis</title>
    </Helmet>
    <div className="max-w-lg mx-auto mt-24 mb-5 px-5 md:mt-10 lg:max-w-xl">
      <h1 className="font-bold text-xl mb-2">
        About
      </h1>
      <p className="text-lg leading-loose text-gray-800 lg:text-base">
        Hello, welcome to my personal website! My name is Thanos Paravantis and I was born in Athens Greece. I am
        studying computer science at the University of Piraeus, senior year. My passion for programming originated from
        my childhood years, as I was curious to learn how applications and software worked behind the scenes. As time
        went by, I was fascinated by the concept of writing code and creating programs, which motivated me to dive
        deeper and explore new programming languages. In the past few years, I worked on several hobby projects, some of
        which have helped me understand the fundamental aspects of software development. My vision is to master the
        field of computer science and write practical applications to solve elemental problems.
      </p>
    </div>
  </div>
}
