import React from "react"
import { Helmet } from "react-helmet"
import GithubProfile from "../components/github-profile"

export default () => <div>
  <Helmet>
    <title>Social - Thanos Paravantis</title>
  </Helmet>
  <div className="max-w-md mx-auto mt-24 mb-5 px-5 md:mt-10 lg:max-w-2xl">
    <h1 className="font-bold text-xl mb-2">
      Social
    </h1>
    <GithubProfile/>
  </div>
</div>
