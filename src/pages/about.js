import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SeoTags from "../components/seo-tags"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faQuestionCircle, faScroll, faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons"

const query = graphql`
  query AboutPage {
    presentationImage: file(relativePath: { eq: "presenting.jpg" }) {
        childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    },
    site {
      siteMetadata {
        linkedinLink
      }
    }
  }
`

export default () => {
  return <StaticQuery query={query} render={data => {
    console.log(data)
    const presentationImage = data.presentationImage.childImageSharp.fluid
    const linkedIn = data.site.siteMetadata.linkedinLink

    return (
      <div>
        <SeoTags title="About - Thanos Paravantis"/>
        <div className="max-w-2xl mx-auto mt-24 mb-5 px-5 md:pl-20 md:my-12">
          <Img fluid={presentationImage} className="h-64 shadow-lg rounded mb-10" alt="Presenting at Crowdhackathon #Agrifood" title="Presenting at Crowdhackathon #Agrifood"/>

          <h1 className="flex items-center text-gray-900 font-bold text-xl mb-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-3"/>
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
            <FontAwesomeIcon icon={faUserGraduate} className="mr-3"/>
            <div>Education</div>
          </h2>

          <h2 className="text-green-800 font-bold mb-1">Bachelor’s in Computer Science</h2>
          <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
            <p className="mb-2 md:mb-0">2016 – present</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">University of Piraeus</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">GPA 8.66 / 10</p>
          </div>
          <div>
            <a href="http://www.cs.unipi.gr/index.php?lang=en" rel="noopener noreferrer" className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
              Visit university website
            </a>
          </div>

          <h2 className="text-green-800 font-bold mt-8 mb-1">Secondary Education</h2>
          <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
            <p className="mb-2 md:mb-0">2013 – 2016</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">46 Lyceum Athens</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p>GPA 19.8 / 20</p>
          </div>
          <div>
            <a href="https://46lyk-athin.att.sch.gr/" rel="noopener noreferrer" className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
              Visit school website
            </a>
          </div>

          <h2 className="text-green-800 font-bold mt-8 mb-1">Proficiency in English</h2>
          <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
            <p className="mb-2 md:mb-0">May 4, 2014</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">Hellenic American Union</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p>The University of Michigan</p>
          </div>
          <div>
            <a href="https://www.hau.gr/" rel="noopener noreferrer" className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
              Visit organisation website
            </a>
          </div>

          <hr className="my-10"/>

          <h2 className="flex items-center text-gray-900 font-bold text-xl mb-4">
            <FontAwesomeIcon icon={faBriefcase} className="mr-3"/>
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
          <p className="leading-loose text-gray-900 mt-3 mb-2">
            A three month internship program supported by University of Piraeus. Full time position with hands-on experience on backend technologies.
          </p>
          <div>
            <a href="https://logicea.com/" rel="noopener noreferrer" className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
              Visit company website
            </a>
          </div>

          <h2 className="text-green-800 font-bold mt-8 mb-1">Minecraft server administrator</h2>
          <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
            <p className="mb-2 md:mb-0">2017 - 2018</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p>Athens, Greece</p>
          </div>
          <p className="leading-loose text-gray-900 mt-3">
            Operated a public server in Minecraft with custom plugins I created on my free time. Assembled a small administration team with a couple of internet friends to help manage the server more effectively.
          </p>

          <h2 className="text-green-800 font-bold mt-8 mb-1">Junior Developer</h2>
          <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
            <p className="mb-2 md:mb-0">2015 - 2016</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">Athens, Greece</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p>Mineplex</p>
          </div>
          <p className="leading-loose text-gray-900 mt-3 mb-2">
            A part time position in one of the largest gaming communities in Minecraft at the time. Major contributor in a mini-game project that was released to the public after having finished an extensive development cycle.
          </p>
          <div>
            <a href="https://www.mineplex.com/home/" rel="noopener noreferrer" className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
              Visit company website
            </a>
          </div>

          <hr className="my-10"/>

          <h2 className="flex items-center text-gray-900 font-bold text-xl mb-4">
            <FontAwesomeIcon icon={faUserTie} className="mr-3"/>
            <div>Achievements and Conferences</div>
          </h2>
          <div className="text-gray-900">
            <p className="mb-4">Attended <span className="font-bold text-green-800">Developers Day 2019</span> in Dais Sports Center.</p>
            <p className="mb-4">Attended <span className="font-bold text-green-800">Decentralized 2019</span> in Divani Caravel Hotel.</p>
            <p className="mb-4">Attended <span className="font-bold text-green-800">Google Developer's Group Athens Meetup</span>, September 2019.</p>
            <p className="mb-4">Attended <span className="font-bold text-green-800">Job Fair Athens 2019</span> in Zappeion Megaron.</p>
            <p className="mb-4">4th place award at <span className="font-bold text-green-800">Crowdhackathon #Agrifood</span>, April 2019, team “UNI3.14”.</p>
            <p className="mb-4">Attended <span className="font-bold text-green-800">Developers Day 2018</span> in Dais Sports Center.</p>
            <p className="mb-4">Attended <span className="font-bold text-green-800">Decentralized 2018</span> in Divani Caravel Hotel.</p>
            <p>2nd place award at <span className="font-bold text-green-800">Recycling Competition</span> organized by Municipality of Athens, April 2013.</p>
          </div>

          <hr className="my-10"/>

          <h2 className="flex items-center text-gray-900 font-bold text-xl mb-4">
            <FontAwesomeIcon icon={faScroll} className="mr-3"/>
            <div>Certifications</div>
          </h2>

          <h2 className="text-green-800 font-bold mt-8 mb-1">
            Harmonised Amateur Radio Exam Certificate (HAREC) Based on CEPT Recommendation T/R 61-02
          </h2>
          <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
            <p className="mb-2 md:mb-0">July 2020</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">Region of Attica</p>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1jTeK3_C8oWvk8vcDWsK4iT0556PgDQS1/view?usp=sharing" rel="noopener noreferrer" className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
              View certificate
            </a>
          </div>

          <h2 className="text-green-800 font-bold mt-8 mb-1">
            Shortwave Amateur Radio Listening Certificate
          </h2>
          <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
            <p className="mb-2 md:mb-0">February 2020</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">SWARL Callsign Desk</p>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1N05hHJc_y2VsDh-cXmKNQeAJlkLZtKNg/view?usp=sharing" rel="noopener noreferrer" className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
              View certificate
            </a>
          </div>

          <h2 className="text-green-800 font-bold mt-8 mb-1">
            Certificate of Proficiency in English
          </h2>
          <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
            <p className="mb-2 md:mb-0">May 2014</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">Hellenic American Union</p>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1nRmDh7_pfjRT4rZFhKeR6lHzm10rF1rE/view?usp=sharing" rel="noopener noreferrer" className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
              View certificate
            </a>
          </div>

          <h2 className="text-green-800 font-bold mt-8 mb-1">
            Certificate of Competency in English
          </h2>
          <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
            <p className="mb-2 md:mb-0">May 2012</p>
            <p className="hidden md:block md:mx-4">&middot;</p>
            <p className="mb-2 md:mb-0">Hellenic American Union</p>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1nVhxVt3jSkmWz1qOCj7p7lDnSSska32s/view?usp=sharing" rel="noopener noreferrer" className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
              View certificate
            </a>
          </div>

          <div className="p-5 bg-gray-200 mt-10 rounded shadow">
            <h2 className="text-gray-900 font-bold mb-2">
              Looking for more?
            </h2>
            <p className="leading-loose">
              You can check out my <Link to="/projects/" className="underline">public projects</Link> or visit my <a href={linkedIn} rel="noopener noreferrer" className="underline">LinkedIn profile</a>.
            </p>
          </div>
        </div>
      </div>
    )
  }}/>
}
