import MetaTags from "../components/MetaTags";
import thanosParavantisImg from "../images/thanos_paravantis_april_2022.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {faChevronDown, faCode, faEnvelopeOpenText, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {faImages} from "@fortawesome/free-regular-svg-icons";
import MobileNavigation from "../components/MobileNavigation";
import DesktopNavigation from "../components/DesktopNavigation";
import Footer from "../components/Footer";
import useProjects from "../hooks/useProjects";
import useProjectTags from "../hooks/useProjectTags";
import usePhotos from "../hooks/usePhotos";

export default function HomePage() {
  const projects = useProjects()
  const tags = useProjectTags()
  const photos = usePhotos()

  return (
    <>
      <MobileNavigation/>
      <DesktopNavigation/>
      <MetaTags
        title="Computer Scientist"
        description="Born in Athens, Greece, Thanos Paravantis is a Computer Scientist and Radio Amateur with a BSc in Computer Science."
      />
      <main>
        <div className="relative flex items-center justify-center lg:ml-72 px-3">
          <section itemScope itemType="https://schema.org/Person"
                   className="container max-w-3xl min-h-screen py-32 flex flex-col items-center justify-center text-center">
            <div className="w-52 h-52 md:w-72 md:h-72 mb-10">
              <img src={thanosParavantisImg}
                   itemProp="image"
                   title="Thanos Paravantis"
                   alt=""
                   width="272"
                   height="272"
                   className="w-52 h-52 md:w-auto md:h-auto rounded-full shadow-lg p-2"
              />
            </div>
            <h1 itemProp="name" className="md:text-3xl text-2xl font-black text-gray-800 uppercase mb-5 tracking-wide">
              Thanos Paravantis
            </h1>
            <h2 itemProp="description" className="max-w-md md:max-w-full text-gray-900 leading-7">
              Born in Athens, Greece, Thanos Paravantis is a <span itemProp="jobTitle">Computer Scientist</span> <br
              className="hidden md:block"/> and Radio Amateur with a BSc in Computer Science
            </h2>
            <meta itemProp="email" content="thanos@paravantis.org"/>
            <meta itemProp="callSign" content="SV1SQT"/>
            <div className="flex items-center justify-center gap-2 md:gap-6 mt-5">
              <a href="https://www.facebook.com/thanospersonal/"
                 itemProp="sameAs"
                 rel="noopener noreferrer"
                 target="_blank"
                 title="Visit my Facebook profile"
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
          <FontAwesomeIcon icon={faChevronDown} size="2x"
                           className="text-gray-900 absolute bottom-0 animate-bounce mb-1"/>
        </div>
        <div className="bg-gradient-to-b from-gray-50 to-gray-200 border-t shadow
                        flex items-center justify-center lg:ml-72 px-3">
          <section className="container max-w-3xl min-h-screen mt-16 mb-5 flex flex-col items-center justify-center">
            <h2 className="text-2xl text-gray-900 font-black text-center mb-10">
              Welcome to <span className="text-blue-600">thanos.dev</span>
            </h2>
            <section className="hidden md:flex justify-center text-center gap-12 mb-20">
              <div className="flex flex-col gap-3 items-center">
                <div className="text-6xl text-emerald-600 font-bold">
                  {projects.length}
                </div>
                <div className="font-bold text-gray-900">
                  Open source projects
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-6xl text-emerald-600 font-bold">
                  {tags.length}
                </div>
                <div className="font-bold text-gray-900">
                  Technology categories
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-6xl text-emerald-600 font-bold">
                  {photos.length}
                </div>
                <div className="font-bold text-gray-900">
                  Public domain photos
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link to="/about" className="h-36 flex flex-col gap-3 p-5 border rounded shadow bg-white
                                           border-gray-300 hover:border-gray-400 active:bg-gray-50">
                <div className="flex items-center font-bold text-gray-900">
                  <div className="w-9">
                    <FontAwesomeIcon icon={faQuestionCircle} size="lg"/>
                  </div>
                  <p>About</p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  Portfolio of my educational background, work and volunteer experience, hobby projects and
                  achievements.
                </p>
              </Link>
              <Link to="/projects" className="h-36 flex flex-col gap-3 p-5 border rounded shadow bg-white
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
              <Link to="/photos" className="h-36 flex flex-col gap-3 p-5 border rounded shadow bg-white
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
              <Link to="/contact" className="h-36 flex flex-col gap-3 p-5 border rounded shadow bg-white
                                              border-gray-300 hover:border-gray-400 active:bg-gray-50">
                <div className="flex items-center font-bold text-gray-900">
                  <div className="w-9">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} size="lg"/>
                  </div>
                  <p>Contact</p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  For business inquiries or any other matters, feel free to send me an email or fill out the contact
                  form.
                </p>
              </Link>
            </section>
          </section>
        </div>
        <div className="lg:ml-72">
          <Footer/>
        </div>
      </main>
    </>
  )
}