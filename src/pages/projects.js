import React from "react"
import { Helmet } from "react-helmet"
import GithubProfile from "../components/github-profile"

export default () => <div>
  <Helmet>
    <title>Projects - Thanos Paravantis</title>
  </Helmet>
  <div className="max-w-2xl mx-auto my-24 px-5 md:pl-20 md:my-12">
    <GithubProfile/>
  </div>
</div>
