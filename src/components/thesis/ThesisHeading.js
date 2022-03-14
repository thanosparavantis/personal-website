import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

export default function ThesisHeading({tag = null, children}) {
  if (tag) {
    return (
      <h1 id={tag} className="group sticky top-0 bg-white bg-opacity-80 text-gray-900
                              font-bold flex items-center justify-between h-14">
        <span className="text-lg">
          {children}
        </span>
        <a href={`#${tag}`}
           className="px-3 -mr-3 opacity-0 group-hover:opacity-50 ml-auto select-none transition">
          <FontAwesomeIcon icon={faLink}/>
        </a>
      </h1>
    )
  } else {
    return (
      <h1 className="text-lg text-gray-900 font-bold">
        {children}
      </h1>
    )
  }
}