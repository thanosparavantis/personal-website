import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandsHelping} from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "../ExternalLink";

export default function VolunteerExperienceSection() {
  return (
    <section className="mb-5 border rounded bg-white">
      <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
        <FontAwesomeIcon icon={faHandsHelping} className="mr-3"/>
        Volunteer experience
      </h2>
      <div className="px-5 md:px-8 py-5 border-b">
        <h3 className="mb-1 font-bold text-gray-900">
          President
        </h3>
        <div className="mb-2 flex flex-col md:flex-row text-gray-700">
          <p>
            Callsign: 18SV1364
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            May 2022 - Present
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Pan-Hellenic Club of CB Radio Users
          </p>
        </div>
        <p className="mb-3 leading-7 text-justify">
          The club promotes the use of the citizen's band in Greece.
          This alternative way of communicating with people is independent of mobile and internet services.
          Anyone can setup a license free station and operate on frequency channels ranging from 26 to 27 MHz.
        </p>
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
            TEDxUniversityofPiraeus
          </p>
        </div>
        <p className="mb-3 leading-7 text-justify">
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
  )
}
