import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons"
import React from "react"

const Empty = () => {
  return (
    <div className="bg-gray-200 border rounded p-5 text-center font-bold">
      <FontAwesomeIcon icon={faWaveSquare} className="mr-3" />
      Nothing to see here
    </div>
  )
}

export default Empty