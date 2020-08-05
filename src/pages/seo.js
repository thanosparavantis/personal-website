import React from "react"
import image from "../images/profile_picture.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default () => (
  <div style={{ width: "1200px", "height": "600px" }} className="flex items-center justify-center text-center bg-gray-200 ml-40 mt-20">
    <img src={image} className="w-64 rounded shadow-lg"/>
    <div className="ml-32">
      <h1 className="font-bold mb-2 text-4xl text-gray-900">Thanos Paravantis</h1>
      <h2 className="text-3xl font-bold text-gray-700">Senior in Computer Science</h2>
      <div className="text-2xl mt-12">
        <FontAwesomeIcon icon={faFacebookF} className="mr-12 text-yellow-600" size="2x"/>
        <FontAwesomeIcon icon={faTwitter} className="mr-12 text-yellow-600" size="2x"/>
        <FontAwesomeIcon icon={faLinkedinIn} className="mr-12 text-yellow-600" size="2x"/>
        <FontAwesomeIcon icon={faGithub} className="text-yellow-600" size="2x"/>
      </div>
    </div>
  </div>
)
