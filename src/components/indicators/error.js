import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import React from "react"

const Error = () => {
  return (
    <div className="bg-gray-200 shadow rounded p-5 text-center font-bold text-red-700">
      <FontAwesomeIcon icon={faExclamationCircle} className="mr-3" />
      Something went wrong, please try again later.
    </div>
  )
}

export default Error