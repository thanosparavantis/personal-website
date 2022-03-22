import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

export default function ExternalLink({href, children}) {
  return (
    <a href={href}
       rel="noopener external"
       target="_blank"
       className="underline text-blue-600 hover:text-blue-800 active:text-green-700"
    >
      {children}
      <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" className="ml-2"/>
    </a>
  )
}