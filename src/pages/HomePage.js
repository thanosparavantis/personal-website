import MetaTags from "../components/MetaTags";
import thanosParavantisImg from "../images/thanos_paravantis_speaking.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {faCode, faEnvelopeOpenText, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {faImages} from "@fortawesome/free-regular-svg-icons";
import {Helmet} from "react-helmet";

export default function HomePage() {
  return (
    <>
      <MetaTags
        title="Computer Scientist"
        description="Born in Athens, Greece, Thanos Paravantis is a Computer Scientist and Radio Amateur with a BSc in Computer Science."
      />
      <main>
        <section itemScope itemType="https://schema.org/Person"
                 className="min-h-screen py-32 flex flex-col items-center justify-center text-center">
          <img src={thanosParavantisImg}
               itemProp="image"
               title="Thanos Paravantis"
               alt=""
               className="mb-10 h-52 md:h-72"
          />
          <h1 itemProp="name" className="text-2xl font-bold mb-1 text-gray-900 uppercase mb-5">
            Thanos Paravantis
          </h1>
          <h2 itemProp="description" className="max-w-md md:max-w-full text-gray-900">
            Born in Athens, Greece, Thanos Paravantis is a <span itemProp="jobTitle">Computer Scientist</span> <br
            className="hidden md:block"/> and Radio Amateur with a BSc in Computer Science
          </h2>
          <meta itemProp="email" content="thanosparavantis@gmail.com"/>
          <meta itemProp="callSign" content="SV1SQT"/>

          <div className="flex items-center justify-center gap-2 md:gap-6 mt-5">
            <a href="https://www.facebook.com/thanosparavantis/"
               itemProp="sameAs"
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
               itemProp="sameAs"
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
               itemProp="sameAs"
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
               itemProp="sameAs"
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
               itemProp="sameAs"
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
        <section className="mb-5 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link to="/about" className="h-36 flex flex-col gap-3 p-5 border rounded shadow
                                         border-gray-300 hover:border-gray-400 active:bg-gray-50">
              <div className="flex items-center font-bold text-gray-900">
                <div className="w-9">
                  <FontAwesomeIcon icon={faQuestionCircle} size="lg"/>
                </div>
                <p>About</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Portfolio of my educational background, work and volunteer experience, hobby projects and achievements.
              </p>
            </Link>
            <Link to="/projects" className="h-36 flex flex-col gap-3 p-5 border rounded shadow
                                         border-gray-300 hover:border-gray-400 active:bg-gray-50">
              <div className="flex items-center font-bold text-gray-900">
                <div className="w-9">
                  <FontAwesomeIcon icon={faCode} size="lg"/>
                </div>
                <p>Projects</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Browse through a collection of open source computer science projects I have worked on.
              </p>
            </Link>
            <Link to="/photos" className="h-36 flex flex-col gap-3 p-5 border rounded shadow
                                         border-gray-300 hover:border-gray-400 active:bg-gray-50">
              <div className="flex items-center font-bold text-gray-900">
                <div className="w-9">
                  <FontAwesomeIcon icon={faImages} size="lg"/>
                </div>
                <p>Photos</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                A curated collection of personal copyright free photos from Greece under public domain.
              </p>
            </Link>
            <Link to="/contact" className="h-36 flex flex-col gap-3 p-5 border rounded shadow
                                         border-gray-300 hover:border-gray-400 active:bg-gray-50">
              <div className="flex items-center font-bold text-gray-900">
                <div className="w-9">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} size="lg"/>
                </div>
                <p>Contact</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                For business inquiries or any other matters, feel free to send me an email or fill out the contact form.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}