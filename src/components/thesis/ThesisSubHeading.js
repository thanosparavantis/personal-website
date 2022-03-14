import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

export default function ThesisSubHeading({tag = null, children}) {
  if (tag) {
    return (
      <h2 id={tag} className="group sticky top-0 bg-white bg-opacity-80 text-gray-900
                              text-justify font-bold flex items-center justify-between h-14">
        {children}
        <a href={`#${tag}`}
           className="px-3 -mr-3 opacity-0 group-hover:opacity-50 ml-auto select-none transition">
          <FontAwesomeIcon icon={faLink}/>
        </a>
      </h2>
    )
  } else {
    return (
      <h2 className="text-gray-900 font-bold">
        {children}
      </h2>
    )
  }
}