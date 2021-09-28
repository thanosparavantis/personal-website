import thanosParavantisImg from "../images/thanos_paravantis_navbar.png"
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faEnvelopeOpenText, faHome, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {faImages} from "@fortawesome/free-regular-svg-icons";

export default function DesktopNavigation() {
  return (
    <nav className="hidden lg:flex lg:flex-col py-10 overflow-auto border-l-8 border-green-700
                    fixed top-0 left-0 h-screen w-72 bg-green-600 shadow-lg z-10">
      <div className="flex flex-col items-center text-center px-8 mb-10">
        <Link to="/" className="mb-8 transition rounded-full hover:opacity-90">
          <img src={thanosParavantisImg}
               title="Thanos Paravantis"
               alt=""
               className="block w-32 h-32 bg-gray-100 rounded-full shadow-lg p-2"
          />
        </Link>
        <h1 className="text-white font-bold text-lg mb-1">
          Thanos Paravantis
        </h1>
        <h2 className="text-gray-100 text-lg">
          Computer Scientist
        </h2>
      </div>
      <NavLink to="/"
               exact={true}
               activeClassName="bg-green-700"
               className="flex items-center flex-shrink-0 px-8 h-20 transition font-bold
                          text-white text-lg active:bg-green-800">
        <div className="w-8">
          <FontAwesomeIcon icon={faHome}/>
        </div>
        Home
      </NavLink>
      <NavLink to="/about"
               exact={true}
               activeClassName="bg-green-700"
               className="flex items-center flex-shrink-0 px-8 h-20 transition font-bold
                          text-white text-lg active:bg-green-800">
        <div className="w-8">
          <FontAwesomeIcon icon={faQuestionCircle}/>
        </div>
        About
      </NavLink>
      <NavLink to="/projects"
               activeClassName="bg-green-700"
               className="flex items-center flex-shrink-0 px-8 h-20 transition font-bold
                          text-white text-lg active:bg-green-800">
        <div className="w-8">
          <FontAwesomeIcon icon={faCode}/>
        </div>
        Projects
      </NavLink>
      <NavLink to="/photos"
               activeClassName="bg-green-700"
               className="flex items-center flex-shrink-0 px-8 h-20 transition font-bold
                          text-white text-lg active:bg-green-800">
        <div className="w-8">
          <FontAwesomeIcon icon={faImages}/>
        </div>
        Photos
      </NavLink>
      <NavLink to="/contact"
               exact={true}
               activeClassName="bg-green-700"
               className="flex items-center flex-shrink-0 px-8 h-20 transition font-bold
                          text-white text-lg active:bg-green-800">
        <div className="w-8">
          <FontAwesomeIcon icon={faEnvelopeOpenText}/>
        </div>
        Contact
      </NavLink>
    </nav>
  )
}