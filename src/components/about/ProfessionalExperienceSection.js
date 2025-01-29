import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "../ExternalLink";

export default function ProfessionalExperienceSection() {
  return (
    <section className="mb-5 border rounded bg-white">
      <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
        <FontAwesomeIcon icon={faBriefcase} className="mr-3"/>
        Professional experience
      </h2>
      <div className="px-5 md:px-8 py-5 border-b">
        <h3 className="mb-1 font-bold flex-col md:flex-row text-gray-900">
          Backend Engineer
        </h3>
        <div className="mb-2 flex flex-col md:flex-row text-gray-700">
          <p>
            July 2024 - Present
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Plum Fintech
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Athens, Attiki, Greece
          </p>
        </div>
        <p className="mb-3 leading-7">
          Development of Individual Savings Account (ISA) products for the UK, working for the Wealth Management unit.
          Providing 2nd level support for Operations and Customer Success teams.
        </p>
        <ExternalLink href="https://withplum.com/">
          Visit fintech website
        </ExternalLink>
      </div>
      <div className="px-5 md:px-8 py-5 border-b">
        <h3 className="mb-1 font-bold flex-col md:flex-row text-gray-900">
          Software Engineer
        </h3>
        <div className="mb-2 flex flex-col md:flex-row text-gray-700">
          <p>
            June 2023 - May 2023
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Viva.com
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Maroussi, Attiki, Greece
          </p>
        </div>
        <p className="mb-3 leading-7">
          Development, extension and maintenance of the core banking services for Viva Wallet.
          Utilized the C# .NET framework, Microsoft SQL database, xUnit testing suite, Redis,
          RabbitMQ, GitHub and Atlassian tools.
        </p>
        <ExternalLink href="https://www.viva.com/">
          Visit fintech website
        </ExternalLink>
      </div>
      <div className="px-5 md:px-8 py-5 border-b">
        <h3 className="mb-1 font-bold flex-col md:flex-row text-gray-900">
          Software Engineer - Analyst
        </h3>
        <div className="mb-2 flex flex-col md:flex-row text-gray-700">
          <p>
            March 2022 - January 2023
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Hellenic Army
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Athens, Attiki, Greece
          </p>
        </div>
        <p className="mb-3 leading-7">
          Mandatory military service at the IT Center of the Hellenic Army (KEPYES).
          Maintenance and ad-hoc development in Java EE and Angular for the
          “Hellenic Army’s Command and Control System”.
        </p>
        <ExternalLink href="http://army.gr/el/organosi/monades-ypiresies/kentro-pliroforikis-ypostirixis-ellinikoy-stratoy-kepyes">
          Visit department website
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
            World Bank Group
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Athens, Attiki, Greece
          </p>
        </div>
        <p className="mb-3 leading-7">
          Short-Term Consultant for the IT Services for Financial Engineering unit.
          Conducted data analysis on a large dataset using Excel and Power Query.
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
            Logicea
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Chalandri, Attiki, Greece
          </p>
        </div>
        <p className="mb-3 leading-7">
          Three-month internship program through the University of Piraeus.
          Hands-on experience in developing Java Spring microservices for a
          mobile application operated by Wind Hellas Telecommunications.
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
            Mineplex
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Athens, Attiki, Greece
          </p>
        </div>
        <p className="mb-3 leading-7">
          Part time position at one of the largest gaming networks in Minecraft.
          Developed a mini-game project using Minecraft APIs in Java.
        </p>
        <ExternalLink href="https://www.mineplex.com/home/">
          Visit company website
        </ExternalLink>
      </div>
    </section>
  )
}
