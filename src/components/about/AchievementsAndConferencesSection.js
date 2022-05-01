import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "../ExternalLink";

export default function AchievementsAndConferencesSection() {
  return (
    <section className="mb-5 border rounded bg-white">
      <h2 className="px-5 md:px-8 py-5 border-b md:text-lg font-bold text-gray-900">
        <FontAwesomeIcon icon={faTrophy} className="mr-3"/>
        Achievements and conferences
      </h2>
      <div className="px-5 md:px-8 py-5 text-gray-900 border-b">
        <p className="leading-7 text-justify">
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
        <p className="leading-7 text-justify">
          Awarded with the "Employee of the month" title in World Bank Group on the Information and
          Technology Services for Financial Engineering unit, January 2021.
        </p>
      </div>
      <div className="px-5 md:px-8 py-5 text-gray-900 border-b">
        <p className="leading-7 text-justify">
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
        <p className="leading-7 text-justify">
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
        <p className="leading-7 text-justify">
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
  )
}