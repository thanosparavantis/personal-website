import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCode, faEnvelopeOpenText, faHome, faQuestionCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import thanosParavantisImg from "../images/thanos_paravantis_navbar.png";
import {useCallback, useEffect, useState} from "react";
import {faImages} from "@fortawesome/free-regular-svg-icons";

export default function MobileNavigation() {
  const [opened, setOpened] = useState(false)

  const toggleOpenState = useCallback(() => {
    setOpened(!opened)
  }, [opened])

  useEffect(() => {
    const body = document.querySelector("body")

    if (opened) {
      body.classList.add("overflow-hidden")
    } else {
      body.classList.remove("overflow-hidden")
    }
  }, [opened])

  return (
    <>
      <nav className="lg:hidden flex items-center justify-center bg-emerald-600
                    shadow-lg h-20 border-b-8 border-emerald-700 z-10">
        <div className="container max-w-3xl text-white flex justify-between">
          <Link to="/" className="flex items-center font-bold h-20 px-5">
            <img src={thanosParavantisImg}
                 title="Thanos Paravantis"
                 alt=""
                 className="block w-10 h-10 bg-gray-100 rounded-full shadow-lg mr-3 p-1"
            />
            Thanos Paravantis
          </Link>
          <button className="w-16 h-20"
                  onClick={toggleOpenState}
                  aria-label="Toggle navigation menu">
            <FontAwesomeIcon icon={opened ? faTimes : faBars} size="lg"/>
          </button>
        </div>
      </nav>

      {opened && (
        <div
          className="lg:hidden flex flex-col absolute bg-gray-100 text-lg font-bold
                     text-gray-600 top-0 left-0 right-0 bottom-0 mt-20 overflow-auto z-10"
          style={{height: "calc(100vh - 5rem)"}}>
          <NavLink to="/"
                   exact={true}
                   activeClassName="text-emerald-600"
                   className="h-20 flex flex-shrink-0 items-center px-5 bg-white border-b"
                   onClick={toggleOpenState}
          >
            <div className="w-8">
              <FontAwesomeIcon icon={faHome}/>
            </div>
            Home
          </NavLink>
          <NavLink to="/about"
                   exact={true}
                   activeClassName="text-emerald-600"
                   className="h-20 flex flex-shrink-0 items-center px-5 bg-white border-b"
                   onClick={toggleOpenState}
          >
            <div className="w-8">
              <FontAwesomeIcon icon={faQuestionCircle}/>
            </div>
            About
          </NavLink>
          <NavLink to="/projects"
                   activeClassName="text-emerald-600"
                   className="h-20 flex flex-shrink-0 items-center px-5 bg-white border-b"
                   onClick={toggleOpenState}
          >
            <div className="w-8">
              <FontAwesomeIcon icon={faCode}/>
            </div>
            Projects
          </NavLink>
          <NavLink to="/photos"
                   activeClassName="text-emerald-600"
                   className="h-20 flex flex-shrink-0 items-center px-5 bg-white border-b"
                   onClick={toggleOpenState}
          >
            <div className="w-8">
              <FontAwesomeIcon icon={faImages}/>
            </div>
            Photos
          </NavLink>
          <NavLink to="/contact"
                   exact={true}
                   activeClassName="text-emerald-600"
                   className="h-20 flex flex-shrink-0 items-center px-5 bg-white border-b"
                   onClick={toggleOpenState}
          >
            <div className="w-8">
              <FontAwesomeIcon icon={faEnvelopeOpenText}/>
            </div>
            Contact
          </NavLink>
        </div>
      )}
    </>
  )
}