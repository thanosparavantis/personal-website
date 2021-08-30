import MetaTags from "../components/MetaTags";
import thanosParavantisImg from "../images/thanos_paravantis_speaking.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <>
      <MetaTags
        title="Computer Scientist"
        description="Born in Athens, Greece, Thanos Paravantis is a Computer Scientist and Radio Amateur with a BSc in Computer Science."
      />
      <main>
        <section className="min-h-screen py-32 flex flex-col items-center justify-center text-center">
          <img src={thanosParavantisImg}
               title="Thanos Paravantis"
               alt=""
               className="mb-10 h-52 md:h-72"
          />
          <h1 className="text-2xl font-bold mb-1 text-gray-900 uppercase mb-5">
            Thanos Paravantis
          </h1>
          <h2 className="max-w-md md:max-w-full text-gray-900 mb-5">
            Born in Athens, Greece, Thanos Paravantis is a Computer Scientist <br className="hidden md:block"/>and Radio
            Amateur with a BSc in Computer Science.
          </h2>
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
        </section>
      </main>
    </>
  )
}