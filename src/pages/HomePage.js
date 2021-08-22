import MetaTags from "../components/MetaTags";
import thanosParavantisImg from "../images/thanos_paravantis_speaking.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <>
      <MetaTags
        title="Software Engineer"
        description="Born in Athens, Greece, Thanos Paravantis is a Software Engineer and Radio Amateur with a BSc in Computer Science."
      />
      <main className="min-h-screen py-32 flex flex-col items-center justify-center text-center">
        <img src={thanosParavantisImg}
             title="Thanos Paravantis"
             alt="Thanos Paravantis"
             className="mb-10 h-52 md:h-72"
        />
        <h1 className="text-2xl font-bold mb-1 text-gray-900 tracking-wide uppercase">
          Thanos Paravantis
        </h1>
        <h2 className="md:text-lg text-gray-900 font-bold mb-5">
          Engineering applications to solve elemental problems
        </h2>
        <p className="md:text-lg text-gray-600 mb-1">
          BSc in Computer Science
        </p>
        <p className="md:text-lg text-gray-600 mb-8">
          Software Engineer and Radio Amateur
        </p>
        <div className="grid grid-flow-col gap-2 md:gap-6">
          <a href="https://www.facebook.com/thanosparavantis/"
             rel="noopener noreferrer"
             target="_blank"
             title="Visit my Facebook Page"
             className="text-blue-600 p-2 hover:opacity-60">
            <div className="hidden md:block">
              <FontAwesomeIcon icon={faFacebook} size="3x"/>
            </div>
            <div className="block md:hidden">
              <FontAwesomeIcon icon={faFacebook} size="2x"/>
            </div>
          </a>
          <a href="https://twitter.com/thparavantis"
             rel="noopener noreferrer"
             target="_blank"
             title="Visit my Twitter profile"
             className="text-blue-400 p-2 hover:opacity-60">
            <div className="hidden md:block">
              <FontAwesomeIcon icon={faTwitter} size="3x"/>
            </div>
            <div className="block md:hidden">
              <FontAwesomeIcon icon={faTwitter} size="2x"/>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/thanosparavantis/"
             rel="noopener noreferrer"
             target="_blank"
             title="Visit my LinkedIn profile"
             className="text-blue-800 p-2 hover:opacity-60">
            <div className="hidden md:block">
              <FontAwesomeIcon icon={faLinkedin} size="3x"/>
            </div>
            <div className="block md:hidden">
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </div>
          </a>
          <a href="https://github.com/thanosparavantis"
             rel="noopener noreferrer"
             target="_blank"
             title="Visit my GitHub profile"
             className="text-gray-900 p-2 hover:opacity-60">
            <div className="hidden md:block">
              <FontAwesomeIcon icon={faGithub} size="3x"/>
            </div>
            <div className="block md:hidden">
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCjBLN827xiPCA19MMt_jbmA"
             rel="noopener noreferrer"
             target="_blank"
             title="Visit my YouTube channel"
             className="text-red-700 p-2 hover:opacity-60">
            <div className="hidden md:block">
              <FontAwesomeIcon icon={faYoutube} size="3x"/>
            </div>
            <div className="block md:hidden">
              <FontAwesomeIcon icon={faYoutube} size="2x"/>
            </div>
          </a>
        </div>
      </main>
    </>
  )
}