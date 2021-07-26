import React from "react"
import image from "../images/profile_picture.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons"

export default () => (
  <div style={{ width: "1200px", "height": "600px" }}
       className="flex items-center justify-center text-center bg-gray-200 ml-40 mt-20">

    <img src={image} className="rounded shadow-xl" alt="Profile picture of Thanos Paravantis" style={{ width: "300px" }} />

    <div className="font-mono font-bold ml-20">
      <h1 className="mb-5 text-4xl text-gray-900">
        Thanos Paravantis
      </h1>
      <p className="text-3xl text-gray-700">
        Student, programmer, radio amateur
      </p>

      <p className="text-3xl text-gray-700 mb-12">
        <FontAwesomeIcon icon={faBroadcastTower} className="mr-3" size="sm" />
        SV1SQT / 18SV1364 / NR282
      </p>

      <div>
        <FontAwesomeIcon icon={faFacebookF} className="mr-16 text-yellow-600" size="4x" />
        <FontAwesomeIcon icon={faTwitter} className="mr-16 text-yellow-600" size="4x" />
        <FontAwesomeIcon icon={faLinkedinIn} className="mr-16 text-yellow-600" size="4x" />
        <FontAwesomeIcon icon={faGithub} className="text-yellow-600" size="4x" />
      </div>
    </div>
  </div>
)
