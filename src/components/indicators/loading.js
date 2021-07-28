import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import React from "react"

const Loading = () => {
  return (
    <div className="bg-gray-200 border rounded p-5 text-center font-bold">
      <FontAwesomeIcon icon={faSpinner} spin={true} className="mr-3" />
      Loading...
    </div>
  )
}

export default Loading