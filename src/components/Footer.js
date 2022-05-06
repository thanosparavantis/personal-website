import {useMemo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  return (
    <footer className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center
                       gap-5 bg-white border-t shadow p-5 text-gray-600 font-bold md:text-xs text-sm">
      <div>
        &copy; {year} Thanos Paravantis
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="https://www.facebook.com/thanospersonal/"
           rel="noopener noreferrer"
           target="_blank"
           className="text-blue-600 hover:opacity-60">
          <FontAwesomeIcon icon={faFacebook} size="2x"/>
        </a>
        <a href="https://twitter.com/thparavantis"
           rel="noopener noreferrer"
           target="_blank"
           className="text-blue-400 hover:opacity-60">
          <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </a>
        <a href="https://www.linkedin.com/in/thanosparavantis/"
           rel="noopener noreferrer"
           target="_blank"
           className="text-blue-800 hover:opacity-60">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
        <a href="https://github.com/thanosparavantis"
           rel="noopener noreferrer"
           target="_blank"
           className="text-gray-900 hover:opacity-60">
          <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
        <a href="https://www.youtube.com/channel/UCjBLN827xiPCA19MMt_jbmA"
           rel="noopener noreferrer"
           target="_blank"
           className="text-red-700 hover:opacity-60">
          <FontAwesomeIcon icon={faYoutube} size="2x"/>
        </a>
      </div>
    </footer>
  )
}