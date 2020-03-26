import React from "react"
import { Helmet } from "react-helmet"
import socialImage from "../images/social.png"
import { graphql, StaticQuery } from "gatsby"

const query = graphql`
  query SeoTags {
    site {
      siteMetadata {
        seoDescription
        seoKeywords
        seoTitle
        seoUrl
        seoTwitterUsername
      }
    }
  }
`

const SeoTags = ({ title, description, keywords }) => (
  <StaticQuery query={query} render={data => {
    const seoTitle = title || data.site.siteMetadata.seoTitle
    const seoDescription = description || data.site.siteMetadata.seoDescription
    const seoKeywords = keywords || data.site.siteMetadata.seoKeywords
    const seoUrl = data.site.siteMetadata.seoUrl
    const seoTwitterUsername = data.site.siteMetadata.seoTwitterUsername

    return (
      <Helmet>
        <html lang="en"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content={seoDescription}/>
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content={seoKeywords}/>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle}/>
        <meta property="og:description" content={seoDescription}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={seoUrl}/>
        <meta property="og:image" content={socialImage}/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={seoTitle}/>
        <meta name="twitter:creator" content={seoTwitterUsername}/>
        <meta name="twitter:description" content={seoDescription}/>
        <meta name="twitter:image" content={socialImage}/>
      </Helmet>
    )
  }}/>
)

export default SeoTags
