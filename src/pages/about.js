import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SeoTags from "../components/seo-tags"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook, faBriefcase, faQuestionCircle, faScroll, faSign, faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons"

const query = graphql`
  query AboutPage {
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
`

export default () => {
  return <StaticQuery query={query} render={data => {
    const image1 = data.image1.childImageSharp.fluid
    const image2 = data.image2.childImageSharp.fluid
    const image3 = data.image3.childImageSharp.fluid
    const image4 = data.image4.childImageSharp.fluid

    return (
      <div>
        <SeoTags title="About - Thanos Paravantis"/>
        <div className="max-w-2xl mx-auto my-24 px-5 md:pl-20 md:my-12">
          <Img fluid={image4} className="h-64 shadow-lg rounded mb-10" alt="Thanos Paravantis speaking at Crowdhackathon #Agrifood" title="Thanos Paravantis speaking at Crowdhackathon #Agrifood"/>

          <h1 className="flex items-center text-gray-900 font-bold text-xl mb-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-3" />
            <div>About</div>
          </h1>

          <div className="leading-loose text-gray-900">
            <p className="mb-3">Hello I'm Thanos, welcome to my personal website. I was born in Athens Greece and I am studying computer science at the University of Piraeus, senior year.</p>
            <p className="mb-3">My passion for programming originated from my childhood years, as I was curious to learn how applications and software worked behind the scenes.</p>
            <p className="mb-3">As time went by, I was fascinated by the concept of writing code and creating programs, which motivated me to dive deeper and explore new programming languages.</p>
            <p className="mb-3">In the past few years, I worked on several hobby projects, some of which have helped me understand the fundamental aspects of software development.</p>
            <p>My vision is to master the field of computer science and write practical applications to solve elemental problems.</p>
          </div>

          <hr className="my-10"/>

          <h2 className="flex items-center text-gray-900 font-bold text-xl mb-4">
            <FontAwesomeIcon icon={faUserGraduate} className="mr-3" />
            <div>Education</div>
          </h2>

          <h2 className="text-green-800 font-bold mb-1">Bachelor’s in Computer Science</h2>
          <div className="text-sm font-bold text-gray-700 md:flex md:items-center">
            <p className="mb-2 md:mb-0">2016 – present</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">University of Piraeus</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">GPA 8.66 / 10</p>
          </div>


          <h2 className="text-green-800 font-bold mt-8 mb-1">Secondary Education</h2>
          <div className="text-sm font-bold text-gray-700 md:flex md:items-center">
            <p className="mb-2 md:mb-0">2013 – 2016</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">46 Lyceum Athens</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p>GPA 19.8 / 20</p>
          </div>

          <h2 className="text-green-800 font-bold mt-8 mb-1">Proficiency in English</h2>
          <div className="text-sm font-bold text-gray-700 md:flex md:items-center">
            <p className="mb-2 md:mb-0">May 4, 2014</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">Hellenic American Union</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p>The University of Michigan</p>
          </div>

          <hr className="my-10"/>

          <h2 className="flex items-center text-gray-900 font-bold text-xl mb-4">
            <FontAwesomeIcon icon={faBriefcase} className="mr-3" />
            <div>Work Experience</div>
          </h2>

          <h2 className="text-green-800 font-bold mb-1">Software Engineer Intern</h2>
          <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
            <p className="mb-2 md:mb-0">July 2020 – Present</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p>Chalandri, Greece</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p>Logicea</p>
          </div>
          <p className="leading-loose text-gray-900 mt-3">
            A three month internship program supported by University of Piraeus. Full time position with hands-on experience on backend technologies.
          </p>

          <h2 className="text-green-800 font-bold mt-8 mb-1">Minecraft server administrator</h2>
          <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
            <p className="mb-2 md:mb-0">2017 - 2018</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p>Athens, Greece</p>
          </div>
          <p className="leading-loose text-gray-900 mt-3">
            Operated a server in Minecraft open to the public with custom plugins I coded on my free time. Assembled a small administration team with a couple of internet friends to help manage the server more effectively.
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
            A part time position in one of the largest gaming communities in Minecraft at the time. Major contributor in a mini-game project that was released to the public after having finished an extensive development cycle.
          </p>

          <hr className="my-10"/>

          <h2 className="flex items-center text-gray-900 font-bold text-xl mb-4">
            <FontAwesomeIcon icon={faUserTie} className="mr-3" />
            <div>Achievements and Conferences</div>
          </h2>
          <ul className="list-inside list-disc text-gray-900">
            <li className="mb-4">Attended <span className="font-bold text-green-800">Developers Day 2019</span> in Dais Sports Center.</li>
            <li className="mb-4">Attended <span className="font-bold text-green-800">Decentralized 2019</span> in Divani Caravel Hotel.</li>
            <li className="mb-4">Attended <span className="font-bold text-green-800">Google Developer's Group Athens Meetup</span>, September 2019.</li>
            <li className="mb-4">Attended <span className="font-bold text-green-800">Job Fair Athens 2019</span> in Zappeion Megaron.</li>
            <li className="mb-4">4th place award at <span className="font-bold text-green-800">Crowdhackathon #Agrifood</span>, April 2019, team “UNI3.14”.</li>
            <li className="mb-4">Attended <span className="font-bold text-green-800">Developers Day 2018</span> in Dais Sports Center.</li>
            <li className="mb-4">Attended <span className="font-bold text-green-800">Decentralized 2018</span> in Divani Caravel Hotel.</li>
            <li>2nd place award at <span className="font-bold text-green-800">Recycling Competition</span> organized by Municipality of Athens, April 2013.</li>
          </ul>
        </div>
      </div>
    )
  }}/>
}
