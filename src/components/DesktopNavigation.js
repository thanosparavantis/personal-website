import thanosParavantisImg from "../images/thanos_paravantis_navbar.png"
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faEnvelopeOpenText, faHome, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {faImages} from "@fortawesome/free-regular-svg-icons";

export default function DesktopNavigation() {
  return (
    <nav className="hidden lg:flex lg:flex-col py-10 overflow-auto border-l-8 border-emerald-700
                    fixed top-0 left-0 h-screen w-72 bg-emerald-600 shadow-lg z-10">
      <div className="flex flex-col items-center text-center px-8 mb-10">
        <Link to="/" className="mb-6 rounded-full hover:opacity-90">
          <img src={thanosParavantisImg}
               title="Thanos Paravantis"
               alt=""
               className="block w-32 h-32 bg-gray-100 rounded-full shadow-lg p-1"
          />
        </Link>
        <div className="text-white font-bold text-lg mb-1">
          Thanos Paravantis
        </div>
        <div className="text-gray-100 text-lg">
          Software Engineer
        </div>
      </div>
      <NavLink to="/"
               exact={true}
               activeClassName="bg-emerald-800"
               className="flex items-center flex-shrink-0 px-8 h-20 font-bold
                          text-white active:bg-emerald-800">
        <div className="w-8">
          <FontAwesomeIcon icon={faHome}/>
        </div>
        Home
      </NavLink>
      <NavLink to="/about"
               exact={true}
               activeClassName="bg-emerald-800"
               className="flex items-center flex-shrink-0 px-8 h-20 font-bold
                          text-white active:bg-emerald-800">
        <div className="w-8">
          <FontAwesomeIcon icon={faQuestionCircle}/>
        </div>
        About
      </NavLink>
      <NavLink to="/projects"
               activeClassName="bg-emerald-800"
               className="flex items-center flex-shrink-0 px-8 h-20 font-bold
                          text-white active:bg-emerald-800">
        <div className="w-8">
          <FontAwesomeIcon icon={faCode}/>
        </div>
        Projects
      </NavLink>
      <NavLink to="/photos"
               activeClassName="bg-emerald-800"
               className="flex items-center flex-shrink-0 px-8 h-20 font-bold
                          text-white active:bg-emerald-800">
        <div className="w-8">
          <FontAwesomeIcon icon={faImages}/>
        </div>
        Photos
      </NavLink>
      <NavLink to="/contact"
               exact={true}
               activeClassName="bg-emerald-800"
               className="flex items-center flex-shrink-0 px-8 h-20 font-bold
                          text-white active:bg-emerald-800">
        <div className="w-8">
          <FontAwesomeIcon icon={faEnvelopeOpenText}/>
        </div>
        Contact
      </NavLink>
    </nav>
  )
}