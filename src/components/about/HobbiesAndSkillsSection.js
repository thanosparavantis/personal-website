import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMugHot} from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "../ExternalLink";

export default function HobbiesAndSkillsSection() {
  return (
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
  )
}