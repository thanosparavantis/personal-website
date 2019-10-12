import React from "react"
import { Helmet } from "react-helmet"

export default class SeoHeader extends React.Component {
  render() {
    return <Helmet>
      <meta name="description" content="A computer science student and passionate programmer, interested in web development, machine learning, software engineering."/>
      <meta name="robots" content="index, follow"/>
      <meta name="keywords" content="thanos paravanits, computer science, programming, web development, machine learning, development, software, backend, frontend"/>
      <meta property="og:title" content="Thanos Paravantis"/>
      <meta property="og:description" content="A computer science student and passionate programmer, interested in web development, machine learning, software engineering."/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://thanosparavantis.com/"/>
      <meta property="og:image" content="social.png"/>
      <meta property="og:image:type" content="image/jpeg"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="Thanos Paravantis"/>
      <meta name="twitter:creator" content="@thparavantis"/>
      <meta name="twitter:description" content="A computer science student and passionate programmer, interested in web development, machine learning, software engineering."/>
      <meta name="twitter:image" content="social.jpg"/>
    </Helmet>
  }
}
