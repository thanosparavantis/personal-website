import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faHandsHelping, faMugHot, faTrophy, faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/PageHeader";
import PageTemplate from "../components/PageTemplate";
import ExternalLink from "../components/ExternalLink";
import InternalLink from "../components/InternalLink";

export default function AboutPage() {
  return (
    <PageTemplate>
      <MetaTags
        title="About"
        description="Portfolio of my educational background, work and volunteer experience, hobby projects and achievements."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <main>
        <PageHeader title="About"
                    description="Portfolio of my educational background, work and volunteer experience, hobby projects and achievements."/>
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
            <div className="flex flex-col md:flex-row md:items-center items-start">
              <InternalLink href={"/projects/thesis/documentation"}>
                Read thesis documentation
              </InternalLink>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <ExternalLink href="https://www.unipi.gr/unipi/en/">
                Visit university website
              </ExternalLink>
            </div>
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
            <ExternalLink href="https://46lyk-athin.att.sch.gr/">
              Visit school website
            </ExternalLink>
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
            <ExternalLink href="https://www.hau.gr/">
              Visit organization website
            </ExternalLink>
          </div>
        </section>
        <section className="mb-5 border rounded bg-white">
          <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
            <FontAwesomeIcon icon={faBriefcase} className="mr-3"/>
            Work experience
          </h2>
          <div className="px-5 md:px-8 py-5 border-b">
            <h3 className="mb-1 font-bold flex-col md:flex-row text-gray-900">
              Research Associate
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
            <p className="mb-3 leading-7">
              State legislators database development, Dr. Alexandra Filindra.
            </p>
            <ExternalLink href="https://www.uic.edu/">
              Visit university website
            </ExternalLink>
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
            <p className="mb-3 leading-7">
              A one-month internship working for the Information and Technology Services for Financial
              Engineering unit.
            </p>
            <ExternalLink href="https://www.worldbank.org/">
              Visit institution website
            </ExternalLink>
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
            <p className="mb-3 leading-7">
              A three month internship program supported by the University of Piraeus.
              Full time position with hands-on experience on developing Spring microservices.
            </p>
            <ExternalLink href="https://logicea.com/">
              Visit company website
            </ExternalLink>
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
            <p className="mb-3 leading-7">
              A part time position in one of the largest gaming communities in Minecraft at the time.
              Major contributor in a mini-game project that was released
              to the public after having finished an extensive development cycle.
            </p>
            <ExternalLink href="https://www.mineplex.com/home/">
              Visit company website
            </ExternalLink>
          </div>
        </section>
        <section className="mb-5 border rounded bg-white">
          <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
            <FontAwesomeIcon icon={faHandsHelping} className="mr-3"/>
            Volunteer experience
          </h2>
          <div className="px-5 md:px-8 py-5 border-b">
            <h3 className="mb-1 font-bold text-gray-900">
              Member
            </h3>
            <div className="mb-2 flex flex-col md:flex-row text-gray-700">
              <p>
                July 2020 - Present
              </p>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <p>
                Panhellenic CB Club of Radio Users
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center items-start">
              <ExternalLink href="https://pasixeracb.com/">
                Visit club website
              </ExternalLink>
            </div>
          </div>
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
            <p className="mb-3 leading-7">
              Responsible for coordinating all IT related work in preparation
              for the annual TEDx local event with the support of the University of Piraeus.
              Managed a team of two web developers and supervised the creation of a new website for the organization.
            </p>
            <div className="flex flex-col md:flex-row md:items-center items-start">
              <ExternalLink href="https://www.tedxuniversityofpiraeus.com/">
                Visit organization website
              </ExternalLink>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <ExternalLink href="https://www.ted.com/tedx/events/45617">
                Visit TED.com event page
              </ExternalLink>
            </div>
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
          <div className="px-5 md:px-8 py-5">
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
            <ExternalLink href="https://www.qrz.com/db/SV1SQT">
              Visit QRZ.com page
            </ExternalLink>
          </div>
        </section>
        <section className="mb-5 border rounded bg-white">
          <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
            <FontAwesomeIcon icon={faTrophy} className="mr-3"/>
            Achievements and conferences
          </h2>
          <div className="px-5 md:px-8 py-5 text-gray-900 border-b">
            <p className="leading-7">
              Participated in the 33rd IEEE International Conference on Tools with Artificial Intelligence
              Conference (ICTAI) virtually as Session Coordinator, chaired 8 sessions, November 2021.
            </p>
            <div className="mt-2">
              <ExternalLink href="https://ictai.computer.org/">
                Visit conference website
              </ExternalLink>
            </div>
          </div>
          <div className="px-5 md:px-8 py-5 text-gray-900 border-b">
            <p className="leading-7">
              Awarded with the "Employee of the month" title in World Bank Group on the Information and
              Technology Services for Financial Engineering unit, January 2021.
            </p>
          </div>
          <div className="px-5 md:px-8 py-5 text-gray-900 border-b">
            <p className="leading-7">
              Created a YouTube video guide on "How to become a radio amateur" with more than 10,000 views,
              that went viral on amateur radio community in Greece, November 2020.
            </p>
            <div className="mt-2 flex flex-col md:flex-row md:items-center items-start">
              <ExternalLink href="https://www.youtube.com/watch?v=pQUzARlrJBY">
                Watch video
              </ExternalLink>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <ExternalLink
                href="https://rfnews.gr/%CF%80%CF%89%CF%82-%CE%BD%CE%B1-%CE%B3%CE%AF%CE%BD%CE%B5%CF%84%CE%B5-%CF%81%CE%B1%CE%B4%CE%B9%CE%BF%CE%B5%CF%81%CE%B1%CF%83%CE%B9%CF%84%CE%AD%CF%87%CE%BD%CE%B7%CF%82-video-guide/">
                Read article on rfnews.gr
              </ExternalLink>
            </div>
          </div>
          <div className="px-5 md:px-8 py-5 text-gray-900 border-b">
            <p className="leading-7">
              Awarded 4th place in Crowdhackathon Agrifood, team "UNI3.14", April 2019.
            </p>
            <div className="mt-2 flex flex-col md:flex-row md:items-center items-start">
              <ExternalLink href="https://crowdhackathon.com/agrifood/">
                Visit event website
              </ExternalLink>
              <p className="mx-3 hidden md:block">
                &middot;
              </p>
              <ExternalLink href="https://www.youtube.com/watch?v=UIgAHE7qk7g">
                Watch our presentation
              </ExternalLink>
            </div>
          </div>
          <div className="px-5 md:px-8 py-5 text-gray-900">
            <p className="leading-7">
              Awarded 2nd place in a recycling competition organized by Municipality of Athens, April 2013.
            </p>
            <div className="mt-2">
              <ExternalLink
                href="https://www.newsbomb.gr/ellada/story/326452/vraveytikan-oi-nikites-stis-megales-giortes-antapodotikis-anakyklosis">
                Read article on newsbomb.gr
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>
    </PageTemplate>
  )
}