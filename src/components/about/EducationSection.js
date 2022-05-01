import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import InternalLink from "../InternalLink";
import ExternalLink from "../ExternalLink";

export default function EducationSection() {
  return (
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
  )
}