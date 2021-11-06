import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faExternalLinkAlt,
  faHandsHelping, faMugHot,
  faScroll,
  faTrophy,
  faUserGraduate
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <>
      <MetaTags
        title="About"
        description="Portfolio of my educational background, work and volunteer experience, hobby projects and achievements."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <main>
        <header className="my-16 text-center">
          <h1 className="text-4xl text-gray-900 font-bold mb-3">
            About
          </h1>
          <p className="text-gray-600">
            Portfolio of my educational background, work and volunteer experience, hobby projects and achievements.
          </p>
        </header>
        <section className="mb-5 border rounded bg-white">
          <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
            <FontAwesomeIcon icon={faUserGraduate} className="mr-3"/>
            Education
          </h2>
          <div className="px-5 md:px-8 py-5 border-b">
            <h3 className="mb-1 font-bold text-gray-900">
              Bachelor's in Computer Science
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                2016 – 2021
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                University of Piraeus
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                GPA 8.72 / 10
              </p>
            </div>
            <a href="https://www.unipi.gr/unipi/en/"
               target="noopener noreferrer"
               className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit university website
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          </div>
          <div className="px-5 md:px-8 py-5 border-b">
            <h3 className="mb-1 font-bold text-gray-900">
              Secondary Education
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                2013 – 2016
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                46th High School of Athens
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                GPA 19.8 / 20
              </p>
            </div>
            <a href="https://46lyk-athin.att.sch.gr/"
               target="noopener noreferrer"
               className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit school website
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          </div>
          <div className="px-5 md:px-8 py-5">
            <h3 className="mb-1 font-bold text-gray-900">
              Proficiency in English
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                May 4, 2014
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                Hellenic American Union
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                The University of Michigan
              </p>
            </div>
            <a href="https://www.hau.gr/"
               target="noopener noreferrer"
               className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit organization website
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          </div>
        </section>
        <section className="mb-5 border rounded bg-white">
          <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
            <FontAwesomeIcon icon={faBriefcase} className="mr-3"/>
            Work experience
          </h2>
          <div className="px-5 md:px-8 py-5 border-b">
            <h3 className="mb-1 font-bold flex-col md:flex-row text-gray-900">
              Research Assistant
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                October 2021 - Present
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                University of Illinois Chicago
              </p>
            </div>
            <p className="mb-3 leading-relaxed">
              State legislators database development, Dr. Alexandra Filindra.
            </p>
            <a href="https://www.uic.edu/"
               target="noopener noreferrer"
               className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit university website
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          </div>
          <div className="px-5 md:px-8 py-5 border-b">
            <h3 className="mb-1 font-bold flex-col md:flex-row text-gray-900">
              Consultant
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                January 2021
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                World Bank Group, Washington D.C.
              </p>
            </div>
            <p className="mb-3 leading-relaxed">
              A one-month internship working for the Information and Technology Services for Financial Engineering unit.
            </p>
            <a href="https://www.worldbank.org/"
               target="noopener noreferrer"
               className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit institution website
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          </div>
          <div className="px-5 md:px-8 py-5 border-b">
            <h3 className="mb-1 font-bold text-gray-900">
              Software Engineer Intern
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                July 2020 - September 2020
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                Logicea, Athens, Greece
              </p>
            </div>
            <p className="mb-3 leading-relaxed">
              A three month internship program supported by the University of Piraeus.
              Full time position with hands-on experience on developing Spring microservices.
            </p>
            <a href="https://logicea.com/"
               target="noopener noreferrer"
               className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit company website
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          </div>
          <div className="px-5 md:px-8 py-5">
            <h3 className="mb-1 font-bold text-gray-900">
              Junior Developer
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                August 2015 - September 2016
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                Mineplex, Georgia USA
              </p>
            </div>
            <p className="mb-3 leading-relaxed">
              A part time position in one of the largest gaming communities in Minecraft at the time.
              Major contributor in a mini-game project that was released
              to the public after having finished an extensive development cycle.
            </p>
            <a href="https://www.mineplex.com/home/"
               target="noopener noreferrer"
               className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit company website
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          </div>
        </section>
        <section className="mb-5 border rounded bg-white">
          <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
            <FontAwesomeIcon icon={faHandsHelping} className="mr-3"/>
            Volunteer experience
          </h2>
          <div className="px-5 md:px-8 py-5">
            <h3 className="mb-1 font-bold text-gray-900">
              IT Manager
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                October 2020 - September 2021
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                TEDxUniversityofPiraeus, Athens, Greece
              </p>
            </div>
            <p className="mb-3 leading-relaxed">
              Responsible for managing all IT related work in preparation
              for the annual TEDx local event with the support of the University of Piraeus.
            </p>
            <a href="https://www.tedxuniversityofpiraeus.com/"
               target="noopener noreferrer"
               className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit organization website
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          </div>
        </section>
        <section className="mb-5 border rounded bg-white">
          <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
            <FontAwesomeIcon icon={faMugHot} className="mr-3"/>
            Hobbies and skills
          </h2>
          <div className="px-5 md:px-8 py-5 border-b">
            <h3 className="mb-1 font-bold text-gray-900">
              Greek driving license
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                Since November 2021
              </p>
            </div>
          </div>
          <div className="px-5 md:px-8 py-5 border-b">
            <h3 className="mb-1 font-bold text-gray-900">
              Licensed amateur radio operator
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                Callsign: SV1SQT
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                Since October 2020
              </p>
            </div>
            <div className="flex flex-col md:flex-row">
              <a href="https://www.qrz.com/db/SV1SQT"
                 target="noopener noreferrer"
                 className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
                Visit QRZ.com page
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
              </a>
            </div>
          </div>
        </section>
        <section className="mb-5 border rounded bg-white">
          <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
            <FontAwesomeIcon icon={faTrophy} className="mr-3"/>
            Achievements and conferences
          </h2>
          <div className="px-5 md:px-8 py-5 text-gray-900 border-b">
            Participated in the 33rd IEEE International Conference on Tools with Artificial Intelligence Conference (ICTAI) virtually
            as Session Coordinator, chaired 8 sessions, November 2021.
            <div className="mt-2 flex flex-col md:flex-row">
              <a href="https://ictai.computer.org/"
                 target="noopener noreferrer"
                 className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
                Visit conference website
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
              </a>
            </div>
          </div>
          <div className="px-5 md:px-8 py-5 text-gray-900 border-b">
            Awarded with the "Employee of the month" title in World Bank Group on the Information and Technology Services for Financial Engineering unit, January 2021.
          </div>
          <div className="px-5 md:px-8 py-5 text-gray-900 border-b">
            Awarded 4th place in Crowdhackathon Agrifood, team "UNI3.14", April 2019.
            <div className="mt-2 flex flex-col md:flex-row">
              <a href="https://crowdhackathon.com/agrifood/"
                 target="noopener noreferrer"
                 className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
                Visit event website
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
              </a>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <a href="https://www.youtube.com/watch?v=UIgAHE7qk7g"
                 target="noopener noreferrer"
                 className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
                Watch our presentation
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
              </a>
            </div>
          </div>
          <div className="px-5 md:px-8 py-5 text-gray-900">
            Awarded 2nd place in a recycling competition organized by Municipality of Athens, April 2013.
            <div className="mt-2 flex flex-col md:flex-row">
              <a href="https://www.newsbomb.gr/ellada/story/326452/vraveytikan-oi-nikites-stis-megales-giortes-antapodotikis-anakyklosis"
                 target="noopener noreferrer"
                 className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
                Visit related news article
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}