import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SeoTags from "../components/seo-tags"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faHandsHelping, faRunning, faScroll, faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import Link from "gatsby-link"
import "../styles/about.css"

const query = graphql`
  query AboutPage {
    aboutImage: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
  }
`

export default function AboutPage() {
  return <StaticQuery query={query} render={data => {
    const aboutImage = data.aboutImage.childImageSharp.fluid

    return (
      <div>
        <SeoTags title="About - Thanos Paravantis"
                 description="
                 A portfolio of my educational background, work experience,
                 achievements, conference participation and certifications."
                 relPath="/about/" />

        <div className="max-w-2xl mx-auto mt-24 mb-5 px-5 md:my-12">

          <Img fluid={aboutImage}
               className="shadow-xl rounded about-image"
               alt="Delivering a presentation at a crowdhackathon"
               title="Delivering a presentation at a crowdhackathon" />

          <div className="mt-10 leading-loose text-gray-900">
            <p className="mb-3 text-justify">
              <span className="font-bold text-lg">Hello, I'm Thanos, </span>
              and welcome to my personal website.
              I was born in <a href="https://en.wikipedia.org/wiki/Athens"
                               rel="noopener noreferrer"
                               target="_blank"
                               title="Read more about Athens, Greece in Wikipedia"
                               className="text-gray-700 font-bold underline hover:text-gray-900">Athens</a>,
              and I have studied Computer Science at the <a href="https://en.wikipedia.org/wiki/University_of_Piraeus"
                                                           rel="noopener noreferrer"
                                                           target="_blank"
                                                           title="Read more about the University of Piraeus in Wikipedia"
                                                           className="text-gray-700 font-bold underline hover:text-gray-900">University of Piraeus</a>.
              My passion for programming originated from my childhood years,
              as I was curious to learn how applications worked behind the scenes.
              As time went by, I was fascinated by the concept of writing code,
              which motivated me to dive deeper and explore new programming languages.
              In the past few years, I worked on several <Link to="/projects/"
                                                               title="Check out some of these projects"
                                                               className="text-gray-700 font-bold underline hover:text-gray-900">projects and assignments</Link>,
              some of which have helped me understand
              the fundamental aspects of software engineering.
              My vision is to master the field of computer science
              and write applications to solve elemental problems.
            </p>
          </div>

          <h2 className="flex items-center text-gray-900 font-bold text-lg mt-10 mb-4">
            <FontAwesomeIcon icon={faUserGraduate} className="mr-3" size="lg" />
            <div>
              Education
            </div>
          </h2>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              Bachelor’s in Computer Science
            </h2>
            <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
              <p className="mb-2 md:mb-0">
                2016 &ndash; 2021
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p className="mb-2 md:mb-0">
                University of Piraeus
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p className="mb-2 md:mb-0">
                GPA 8.6 / 10
              </p>
            </div>
            <div>
              <a href="http://www.cs.unipi.gr/index.php?lang=en"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                Visit university website
              </a>
            </div>
          </div>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              Secondary Education
            </h2>
            <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
              <p className="mb-2 md:mb-0">
                2013 &ndash; 2016
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p className="mb-2 md:mb-0">
                46 Lyceum Athens
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p>
                GPA 19.8 / 20
              </p>
            </div>
            <div>
              <a href="https://46lyk-athin.att.sch.gr/"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                Visit school website
              </a>
            </div>
          </div>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              Proficiency in English
            </h2>
            <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
              <p className="mb-2 md:mb-0">
                May 4, 2014
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p className="mb-2 md:mb-0">
                Hellenic American Union
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p>
                The University of Michigan
              </p>
            </div>
            <div>
              <a href="https://www.hau.gr/"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                Visit organization website
              </a>
            </div>
          </div>

          <h2 className="flex items-center text-gray-900 font-bold text-lg mt-10 mb-4">
            <FontAwesomeIcon icon={faBriefcase} className="mr-3" size="lg" />
            <div>Work Experience</div>
          </h2>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              Consultant
            </h2>
            <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
              <p className="mb-2 md:mb-0">
                January 2021
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p className="mb-2 md:mb-0">
                Athens, Greece
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p>
                World Bank Group
              </p>
            </div>
            <p className="leading-loose text-gray-900 mt-3 mb-2">
              A one-month internship working for the Information and Technology Services for Financial Engineering unit.
            </p>
            <div>
              <a href="https://www.worldbank.org/"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                Visit institution website
              </a>
            </div>
          </div>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              Software Engineer Intern
            </h2>
            <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
              <p className="mb-2 md:mb-0">
                July 2020 &ndash; September 2020
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p className="mb-2 md:mb-0">
                Chalandri, Greece
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p>
                Logicea
              </p>
            </div>
            <p className="leading-loose text-gray-900 mt-3 mb-2">
              A three month internship program supported by the University of Piraeus.
              Full time position with hands-on experience on developing Spring microservices.
            </p>
            <div>
              <a href="https://logicea.com/"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                Visit company website
              </a>
            </div>
          </div>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              Junior Developer
            </h2>
            <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
              <p className="mb-2 md:mb-0">
                August 2015 &ndash; September 2016
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p className="mb-2 md:mb-0">
                Athens, Greece
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p>
                Mineplex
              </p>
            </div>
            <p className="leading-loose text-gray-900 mt-3 mb-2">
              A part time position in one of the largest gaming communities
              in Minecraft at the time. Major contributor in a mini-game project
              that was released to the public after
              having finished an extensive development cycle.
            </p>
            <div>
              <a href="https://www.mineplex.com/home/"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                Visit company website
              </a>
            </div>
          </div>

          <h2 className="flex items-center text-gray-900 font-bold text-lg mt-10 mb-4">
            <FontAwesomeIcon icon={faHandsHelping} className="mr-3" size="lg" />
            <div>
              Volunteer Experience
            </div>
          </h2>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              IT Manager
            </h2>
            <div className="text-sm font-bold text-gray-900 md:flex md:items-center">
              <p className="mb-2 md:mb-0">
                October 2020 &ndash; present
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p className="mb-2 md:mb-0">
                Athens, Greece
              </p>
              <p className="hidden md:block md:mx-4">
                &middot;
              </p>
              <p>
                TEDxUniversityofPiraeus
              </p>
            </div>
            <p className="leading-loose text-gray-900 mt-3 mb-2">
              Responsible for managing all IT related work in preparation for
              the annual TEDx local event with the support of the University of Piraeus.
            </p>
            <div>
              <a href="https://www.tedxuniversityofpiraeus.com/"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                Visit organization website
              </a>
            </div>
          </div>


          <h2 className="flex items-center text-gray-900 font-bold text-lg mt-10 mb-4">
            <FontAwesomeIcon icon={faRunning} className="mr-3" size="lg" />
            <div>
              Achievements and Attended Conferences
            </div>
          </h2>
          <div className="text-gray-900">
            <div className="bg-gray-200 p-3 rounded border text-sm mb-3">
              Attended
              <span className="font-bold text-green-800"> Developers Day 2019 </span>
              in Dais Sports Center.
            </div>
            <div className="bg-gray-200 p-3 rounded border text-sm mb-3">
              Attended
              <span className="font-bold text-green-800"> Decentralized 2019 </span>
              in Divani Caravel Hotel.
            </div>
            <div className="bg-gray-200 p-3 rounded border text-sm mb-3">
              Attended
              <span className="font-bold text-green-800"> Google Developer's Group Athens Meetup</span>,
              September 2019.
            </div>
            <div className="bg-gray-200 p-3 rounded border text-sm mb-3">
              Attended
              <span className="font-bold text-green-800"> Job Fair Athens 2019 </span>
              in Zappeion Megaron.
            </div>
            <div className="border-2 border-orange-400 bg-orange-100 p-3 rounded border text-sm mb-3">
              4th place award at
              <span className="font-bold text-green-800"> Crowdhackathon #Agrifood</span>,
              April 2019, team “UNI3.14”.
            </div>
            <div className="bg-gray-200 p-3 rounded border text-sm mb-3">
              Attended
              <span className="font-bold text-green-800"> Developers Day 2018 </span>
              in Dais Sports Center.
            </div>
            <div className="bg-gray-200 p-3 rounded border text-sm mb-3">
              Attended
              <span className="font-bold text-green-800"> Decentralized 2018 </span>
              in Divani Caravel Hotel.
            </div>
            <div className="bg-gray-200 p-3 rounded border text-sm">
              2nd place award at
              <span className="font-bold text-green-800"> Recycling Competition </span>
              organized by Municipality of Athens, April 2013.
            </div>
          </div>

          <h2 className="flex items-center text-gray-900 font-bold text-lg mt-10 mb-4">
            <FontAwesomeIcon icon={faScroll} className="mr-3" size="lg" />
            <div>Certifications</div>
          </h2>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              Amateur Radio License
            </h2>
            <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
              <p className="font-mono mb-2 md:mb-0">SV1SQT</p>
              <p className="hidden md:block md:mx-4">&middot;</p>
              <p className="mb-2 md:mb-0">October 2020</p>
              <p className="hidden md:block md:mx-4">&middot;</p>
              <p className="mb-2 md:mb-0">Region of Attica</p>
            </div>
            <div className="font-bold text-sm md:flex md:items-center">
              <a href="https://www.qrz.com/db/SV1SQT"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="block text-gray-700 underline hover:text-gray-900">
                View QRZ.com page
              </a>
              <p className="hidden md:block md:mx-4">&middot;</p>
              <a href="https://drive.google.com/file/d/1xa4kjbna2AZDrYtQTOtThOc60WWi9vec/view?usp=sharing"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="block text-gray-700 underline hover:text-gray-900">
                View license
              </a>
            </div>
          </div>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              Amateur Radio Exam Certificate
            </h2>
            <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
              <p className="mb-2 md:mb-0">August 2020</p>
              <p className="hidden md:block md:mx-4">&middot;</p>
              <p className="mb-2 md:mb-0">Region of Attica</p>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1jTeK3_C8oWvk8vcDWsK4iT0556PgDQS1/view?usp=sharing"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                View certificate
              </a>
            </div>
          </div>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              Amateur Radio Listening Certificate
            </h2>
            <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
              <p className="mb-2 md:mb-0">February 2020</p>
              <p className="hidden md:block md:mx-4">&middot;</p>
              <p className="mb-2 md:mb-0">SWARL Callsign Desk</p>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1N05hHJc_y2VsDh-cXmKNQeAJlkLZtKNg/view?usp=sharing"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                View certificate
              </a>
            </div>
          </div>

          <div className="bg-gray-200 p-5 rounded border mb-3">
            <h2 className="text-green-800 font-bold mb-1">
              Certificate of Proficiency in English
            </h2>
            <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
              <p className="mb-2 md:mb-0">May 2014</p>
              <p className="hidden md:block md:mx-4">&middot;</p>
              <p className="mb-2 md:mb-0">Hellenic American Union</p>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1nRmDh7_pfjRT4rZFhKeR6lHzm10rF1rE/view?usp=sharing"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                View certificate
              </a>
            </div>
          </div>

          <div className="bg-gray-200 p-5 rounded border">
            <h2 className="text-green-800 font-bold mb-1">
              Certificate of Competency in English
            </h2>
            <div className="text-sm font-bold text-gray-900 mb-2 md:flex md:items-center">
              <p className="mb-2 md:mb-0">May 2012</p>
              <p className="hidden md:block md:mx-4">&middot;</p>
              <p className="mb-2 md:mb-0">Hellenic American Union</p>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1nVhxVt3jSkmWz1qOCj7p7lDnSSska32s/view?usp=sharing"
                 rel="noopener noreferrer"
                 target="_blank"
                 className="text-gray-700 font-bold text-sm underline hover:text-gray-900">
                View certificate
              </a>
            </div>
          </div>

        </div>
      </div>
    )
  }} />
}
