import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const query = graphql`
  query SeoTags {
    site {
      siteMetadata {
        seoDescription
        seoKeywords
        seoTitle
        seoUrl
      }
    }
  }
`

const SeoTags = ({ title, relPath, description, keywords }) => (
  <StaticQuery query={query} render={data => {
    const seoTitle = title || data.site.siteMetadata.seoTitle
    const seoDescription = description || data.site.siteMetadata.seoDescription
    const seoKeywords = keywords || data.site.siteMetadata.seoKeywords
    const seoUrl = data.site.siteMetadata.seoUrl + (relPath || "")
    const seoImage = data.site.siteMetadata.seoUrl + "/social.png"

    return (
      <Helmet>
        <html lang="en" />
        <title>{seoTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={seoImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={seoImage} />
      </Helmet>
    )
  }} />
)

export default SeoTags
