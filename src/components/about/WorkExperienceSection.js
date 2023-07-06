import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "../ExternalLink";

export default function WorkExperienceSection() {
  return (
    <section className="mb-5 border rounded bg-white">
      <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
        <FontAwesomeIcon icon={faBriefcase} className="mr-3"/>
        Work experience
      </h2>
      <div className="px-5 md:px-8 py-5 border-b">
        <h3 className="mb-1 font-bold flex-col md:flex-row text-gray-900">
          Junior Software Engineer
        </h3>
        <div className="mb-2 flex flex-col md:flex-row text-gray-700">
          <p>
            June 2023 - Present
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Viva Wallet
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Maroussi, Attiki, Greece
          </p>
        </div>
        <p className="mb-3 leading-7 text-justify">
          Development, extension and maintenance of the core banking services provided by Viva Wallet.
          Working with the C# .NET framework, Microsoft SQL database,
          xUnit testing suite, Redis, RabbitMQ, GitHub and Atlassian.
        </p>
        <ExternalLink href="https://www.vivawallet.com/">
          Visit neobank website
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
        <p className="mb-3 leading-7 text-justify">
          Mandatory military conscription of 12 months, undergone a three week basic bootcamp and a three week specialist training.
          Served at the Information Technology Support Center of the Hellenic Army (KEPYES).
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
        <p className="mb-3 leading-7 text-justify">
          Short  Term  Consultant  working  for  the  Information  Technology  Services  for  Financial  Engineering  unit.
          Performed data analytics on Excel using Power Query with large chunks of XML data. 
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
        <p className="mb-3 leading-7 text-justify">
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
            Mineplex
          </p>
          <p className="mx-3 hidden md:block">
            &middot;
          </p>
          <p>
            Athens, Attiki, Greece
          </p>
        </div>
        <p className="mb-3 leading-7 text-justify">
          A part time position in one of the largest gaming communities in Minecraft at the time.
          Major contributor in a mini-game project that was released
          to the public after having finished an extensive development cycle.
        </p>
        <ExternalLink href="https://www.mineplex.com/home/">
          Visit company website
        </ExternalLink>
      </div>
    </section>
  )
}
