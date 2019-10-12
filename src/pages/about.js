import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

export default () => {
  const data = useStaticQuery(graphql`
      query {
          image1: file(relativePath: { eq: "about_01.jpg" }) {
              childImageSharp {
                  fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          },
          image2: file(relativePath: { eq: "about_02.jpg" }) {
              childImageSharp {
                  fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          },
          image3: file(relativePath: { eq: "about_03.jpg" }) {
              childImageSharp {
                  fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          },
          image4: file(relativePath: { eq: "about_04.jpg" }) {
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
    <div className="max-w-2xl mx-auto my-24 px-5 md:pl-20 md:my-12">
      <Img fluid={data.image1.childImageSharp.fluid} className="h-64 shadow-lg rounded mb-8" alt="Thanos Paravantis" title="Thanos Paravantis"/>
      <h1 className="text-gray-900 font-bold text-xl mb-4">About</h1>

      <div className="leading-loose text-gray-900">
        <p className="mb-3">Hello I'm Thanos, welcome to my personal website. I was born in Athens Greece and I am studying computer science at the University of Piraeus, senior year.</p>
        <p className="mb-3">My passion for programming originated from my childhood years, as I was curious to learn how applications and software worked behind the scenes.</p>
        <p className="mb-3">As time went by, I was fascinated by the concept of writing code and creating programs, which motivated me to dive deeper and explore new programming languages.</p>
        <p className="mb-3">In the past few years, I worked on several hobby projects, some of which have helped me understand the fundamental aspects of software development.</p>
        <p>My vision is to master the field of computer science and write practical applications to solve elemental problems.</p>
      </div>

      <Img fluid={data.image2.childImageSharp.fluid} className="h-64 hadow-lg rounded mt-20 mb-8" alt="Thanos Paravantis" title="Thanos Paravantis"/>
      <h1 className="text-gray-900 font-bold text-xl mb-4">Education</h1>

      <h2 className="text-green-800 font-bold mb-1">Bachelor’s in Computer Science</h2>
      <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
        <p className="mb-2 md:mb-0">2016 – present</p>
        <p className="hidden md:block md:mx-4">&middot;</p>
        <p className="mb-2 md:mb-0">University of Piraeus</p>
        <p className="hidden md:block md:mx-4">&middot;</p>
        <p className="mb-2 md:mb-0">GPA 8.49 / 10</p>
      </div>
      <p className="leading-loose text-gray-900 mt-3">
        Studying at the informatics department (four-year program) which covers both theoretical and applied informatics.
      </p>

      <h2 className="text-green-800 font-bold mt-8 mb-1">Secondary Education</h2>
      <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
        <p className="mb-2 md:mb-0">2013 – 2016</p>
        <p className="hidden md:block md:mx-4">&middot;</p>
        <p className="mb-2 md:mb-0">46 Lyceum Athens</p>
        <p className="hidden md:block md:mx-4">&middot;</p>
        <p>GPA 19.8 / 20</p>
      </div>

      <h2 className="text-green-800 font-bold mt-8 mb-1">Proficiency in English</h2>
      <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
        <p className="mb-2 md:mb-0">May 4, 2014</p>
        <p className="hidden md:block md:mx-4">&middot;</p>
        <p className="mb-2 md:mb-0">Hellenic American Union</p>
        <p className="hidden md:block md:mx-4">&middot;</p>
        <p>The University of Michigan</p>
      </div>

      <Img fluid={data.image3.childImageSharp.fluid} className="h-64 shadow-lg rounded mt-20 mb-8" alt="Thanos Paravantis" title="Thanos Paravantis"/>
      <h1 className="text-gray-900 font-bold text-xl mb-4">Work Experience</h1>

      <h2 className="text-green-800 font-bold mb-1">Minecraft Server</h2>
      <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
        <p className="mb-2 md:mb-0">2017 - 2018</p>
        <p className="hidden md:block md:mx-4">&middot;</p>
        <p>Athens, Greece</p>
      </div>
      <p className="leading-loose text-gray-900 mt-3">
        Managed a Minecraft server with custom coded plugins and assembled a small team of moderators that helped administrate the server.
      </p>

      <h2 className="text-green-800 font-bold mt-8 mb-1">Junior Developer</h2>
      <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
        <p className="mb-2 md:mb-0">2015 - 2016</p>
        <p className="hidden md:block md:mx-4">&middot;</p>
        <p className="mb-2 md:mb-0">Athens, Greece</p>
        <p className="hidden md:block md:mx-4">&middot;</p>
        <p>Mineplex, LLC.</p>
      </div>
      <p className="leading-loose text-gray-900 mt-3">
        A company running one of the largest gaming networks in the game “Minecraft”. Major contributor in a large “mini-game” called “Bawk Bawk Battles” which is still available in the network to this day.
      </p>

      <Img fluid={data.image4.childImageSharp.fluid} className="h-64 shadow-lg rounded mt-20 mb-8" alt="Thanos Paravantis" title="Thanos Paravantis"/>
      <h1 className="text-gray-900 font-bold text-xl mb-4">Achievements and Conferences</h1>

      <div className="text-gray-900">
        <p className="mb-4">Attended Google Developer's Group Athens Meetup, September 2019.</p>
        <p className="mb-4">Attended Career’s Day organized by University of Piraeus, April 2019.</p>
        <p className="mb-4">Attended Job Fair Athens 2019 in Zappeion Megaron.</p>
        <p className="mb-4">4th place award at Crowdhackathon #Agrifood, April 2019, team “UNI3.14”.</p>
        <p className="mb-4">Attended Developers Day 2018 in Dais Sports Center.</p>
        <p className="mb-4">Attended Decentralized 2018 in Divani Caravel Hotel.</p>
        <p>2nd place award at Recycling Competition organized by Municipality of Athens, April 2013.</p>
      </div>
    </div>
  </div>
}
