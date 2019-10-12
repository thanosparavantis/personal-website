import React from "react"
import image from "../images/profile_photo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default () => (
  <div style={{ width: "1200px", "height": "600px" }} className="flex items-center justify-center text-center bg-gray-200 ml-40 mt-20">
    <img src={image} className="w-64 rounded-full shadow-lg"/>
    <div className="ml-32">
      <h1 className="font-bold mb-2 text-3xl">Thanos Paravantis</h1>
      <h2 className="text-2xl tracking-tighter uppercase font-bold text-gray-700">Senior in Computer Science</h2>
      <div className="text-2xl mt-10">
        <FontAwesomeIcon icon={faTwitter} className="mr-12 text-blue-600" size="lg"/>
        <FontAwesomeIcon icon={faLinkedinIn} className="mr-12 text-blue-800" size="lg"/>
        <FontAwesomeIcon icon={faGithub} className="text-gray-800" size="lg"/>
      </div>
    </div>
  </div>
)
