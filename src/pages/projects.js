import React from "react"
import GithubProfile from "../components/github-profile"
import SeoTags from "../components/seo-tags"

export default () => (
  <div>
    <SeoTags title="Projects - Thanos Paravantis"/>
    <div className="max-w-2xl mx-auto my-24 px-5 md:pl-20 md:my-12">
      <h1 className="font-bold text-xl mb-2 text-gray-900">
        Projects
      </h1>
      <GithubProfile/>
    </div>
  </div>
)
