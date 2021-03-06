import React from "react"
import GithubProfile from "../components/github-profile"
import SeoTags from "../components/seo-tags"

export default () => (
  <div>
    <SeoTags title="Projects - Thanos Paravantis"
             description="All of my open source hobby projects and university assignments in one place."
             relPath="/projects/" />
    <div className="max-w-2xl mx-auto mt-24 mb-5 px-5 md:my-12">
      <h1 className="font-bold text-xl mb-2 text-gray-900">
        Projects
      </h1>
      <GithubProfile />
    </div>
  </div>
)
