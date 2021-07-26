import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <div>
    <Helmet>
      <title>Not Found - Thanos Paravantis</title>
    </Helmet>
    <div className="max-w-2xl mx-auto mt-24 mb-5 px-5 md:my-12">
      <h1 className="font-bold text-xl mb-2 text-gray-900">
        Not Found :(
      </h1>
      <p className="leading-relaxed text-gray-800">
        The page you are looking for does not exist or has been removed.
      </p>
      <Link to="/" className="block mt-5 underline">
        Back to Home
      </Link>
    </div>
  </div>
)
