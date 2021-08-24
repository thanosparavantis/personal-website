import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faHandsHelping, faScroll, faTrophy, faUserGraduate} from "@fortawesome/free-solid-svg-icons";

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
      <header className="my-16 text-center">
        <h1 className="text-4xl text-gray-900 font-bold mb-3">
          About
        </h1>
        <h2 className="text-gray-600">
          Portfolio of my educational background, work and volunteer experience, hobby projects and achievements.
        </h2>
      </header>
      <section className="mb-5 border rounded bg-white">
        <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
          <FontAwesomeIcon icon={faUserGraduate} className="mr-3"/>
          Education
        </h2>
        <div className="px-5 md:px-8 py-5 border-b">
          <h3 className="mb-1 font-bold text-gray-900">
            Bachelor’s in Computer Science
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
              GPA 8.6 / 10
            </p>
          </div>
          <a href="https://www.cs.unipi.gr/index.php?lang=en"
             target="noopener noreferrer"
             className="block underline text-blue-600 hover:text-blue-800">
            Visit university website
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
              46 Lyceum Athens
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
             className="block underline text-blue-600 hover:text-blue-800">
            Visit school website
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
             className="block underline text-blue-600 hover:text-blue-800">
            Visit organization website
          </a>
        </div>
      </section>
      <section className="mb-5 border rounded bg-white">
        <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
          <FontAwesomeIcon icon={faBriefcase} className="mr-3"/>
          Work Experience
        </h2>
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
              Athens, Greece
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
             className="block underline text-blue-600 hover:text-blue-800">
            Visit institution website
          </a>
        </div>
        <div className="px-5 md:px-8 py-5 border-b">
          <h3 className="mb-1 font-bold text-gray-900">
            Software Engineer Intern
          </h3>
          <div className="mb-2 flex flex-col md:flex-row text-gray-700">
            <p>
              July 2020 – September 2020
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              Athens, Greece
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              Logicea
            </p>
          </div>
          <p className="mb-3 leading-relaxed">
            A three month internship program supported by the University of Piraeus.
            Full time position with hands-on experience on developing Spring microservices.
          </p>
          <a href="https://logicea.com/"
             target="noopener noreferrer"
             className="block underline text-blue-600 hover:text-blue-800">
            Visit company website
          </a>
        </div>
        <div className="px-5 md:px-8 py-5">
          <h3 className="mb-1 font-bold text-gray-900">
            Junior Developer
          </h3>
          <div className="mb-2 flex flex-col md:flex-row text-gray-700">
            <p>
              August 2015 – September 2016
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              Athens, Greece
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
             className="block underline text-blue-600 hover:text-blue-800">
            Visit company website
          </a>
        </div>
      </section>
      <section className="mb-5 border rounded bg-white">
        <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
          <FontAwesomeIcon icon={faHandsHelping} className="mr-3"/>
          Volunteer Experience
        </h2>
        <div className="px-5 md:px-8 py-5">
          <h3 className="mb-1 font-bold text-gray-900">
            IT Manager
          </h3>
          <div className="mb-2 flex flex-col md:flex-row text-gray-700">
            <p>
              October 2020 – present
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              Athens, Greece
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              TEDxUniversityofPiraeus
            </p>
          </div>
          <p className="mb-3 leading-relaxed">
            Responsible for managing all IT related work in preparation
            for the annual TEDx local event with the support of the University of Piraeus.
          </p>
          <a href="https://www.tedxuniversityofpiraeus.com/"
             target="noopener noreferrer"
             className="block underline text-blue-600 hover:text-blue-800">
            Visit organization website
          </a>
        </div>
      </section>
      <section className="mb-5 border rounded bg-white">
        <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
          <FontAwesomeIcon icon={faTrophy} className="mr-3"/>
          Achievements and attended conferences
        </h2>
        <div className="px-5 md:px-8 py-3 text-gray-900 border-b">
          Attended Developers Day 2019 in Dais Sports Center.
        </div>
        <div className="px-5 md:px-8 py-3 text-gray-900 border-b">
          Attended Decentralized 2019 in Divani Caravel Hotel.
        </div>
        <div className="px-5 md:px-8 py-3 text-gray-900 border-b">
          Attended Google Developer's Group Athens Meetup, September 2019.
        </div>
        <div className="px-5 md:px-8 py-3 text-gray-900 border-b">
          Attended Job Fair Athens 2019 in Zappeion Megaron.
        </div>
        <div className="px-5 md:px-8 py-3 text-gray-900 border-b">
          4th place award at Crowdhackathon #Agrifood, April 2019, team “UNI3.14”.
        </div>
        <div className="px-5 md:px-8 py-3 text-gray-900 border-b">
          Attended Developers Day 2018 in Dais Sports Center.
        </div>
        <div className="px-5 md:px-8 py-3 text-gray-900 border-b">
          Attended Decentralized 2018 in Divani Caravel Hotel.
        </div>
        <div className="px-5 md:px-8 py-3 text-gray-900">
          2nd place award at Recycling Competition organized by Municipality of Athens, April 2013.
        </div>
      </section>
      <section className="mb-5 border rounded bg-white">
        <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
          <FontAwesomeIcon icon={faScroll} className="mr-3"/>
          Certifications
        </h2>
        <div className="px-5 md:px-8 py-5 border-b">
          <h3 className="mb-1 font-bold text-gray-900">
            Amateur Radio License
          </h3>
          <div className="mb-2 flex flex-col md:flex-row text-gray-700">
            <p>
              SV1SQT
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              October 2020
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              Region of Attica
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <a href="https://www.qrz.com/db/SV1SQT"
               target="noopener noreferrer"
               className="block underline text-blue-600 hover:text-blue-800">
              Visit QRZ.com page
            </a>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <a href="https://drive.google.com/file/d/1xa4kjbna2AZDrYtQTOtThOc60WWi9vec/view?usp=sharing"
               target="noopener noreferrer"
               className="block underline text-blue-600 hover:text-blue-800">
              View license
            </a>
          </div>
        </div>
        <div className="px-5 md:px-8 py-5 border-b">
          <h3 className="mb-1 font-bold text-gray-900">
            Amateur Radio Exam Certificate
          </h3>
          <div className="mb-2 flex flex-col md:flex-row text-gray-700">
            <p>
              August 2020
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              Region of Attica
            </p>
          </div>
          <a href="https://drive.google.com/file/d/1jTeK3_C8oWvk8vcDWsK4iT0556PgDQS1/view?usp=sharing"
             target="noopener noreferrer"
             className="block underline text-blue-600 hover:text-blue-800">
            View certificate
          </a>
        </div>
        <div className="px-5 md:px-8 py-5 border-b">
          <h3 className="mb-1 font-bold text-gray-900">
            Amateur Radio Listening Certificate
          </h3>
          <div className="mb-2 flex flex-col md:flex-row text-gray-700">
            <p>
              February 2020
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              SWARL Callsign Desk
            </p>
          </div>
          <a href="https://drive.google.com/file/d/1N05hHJc_y2VsDh-cXmKNQeAJlkLZtKNg/view?usp=sharing"
             target="noopener noreferrer"
             className="block underline text-blue-600 hover:text-blue-800">
            View certificate
          </a>
        </div>
        <div className="px-5 md:px-8 py-5 border-b">
          <h3 className="mb-1 font-bold text-gray-900">
            Certificate of Proficiency in English
          </h3>
          <div className="mb-2 flex flex-col md:flex-row text-gray-700">
            <p>
              May 2014
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              Hellenic American Union
            </p>
          </div>
          <a href="https://drive.google.com/file/d/1nRmDh7_pfjRT4rZFhKeR6lHzm10rF1rE/view?usp=sharing"
             target="noopener noreferrer"
             className="block underline text-blue-600 hover:text-blue-800">
            View certificate
          </a>
        </div>
        <div className="px-5 md:px-8 py-5">
          <h3 className="mb-1 font-bold text-gray-900">
            Certificate of Competency in English
          </h3>
          <div className="mb-2 flex flex-col md:flex-row text-gray-700">
            <p>
              May 2012
            </p>
            <p className="mx-3 hidden md:block">
              &middot;
            </p>
            <p>
              Hellenic American Union
            </p>
          </div>
          <a href="https://drive.google.com/file/d/1nVhxVt3jSkmWz1qOCj7p7lDnSSska32s/view?usp=sharing"
             target="noopener noreferrer"
             className="block underline text-blue-600 hover:text-blue-800">
            View certificate
          </a>
        </div>
      </section>
    </>
  )
}