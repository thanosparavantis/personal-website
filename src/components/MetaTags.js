import {Helmet} from "react-helmet";

export default function MetaTags({title, description}) {
  const metaUrl = window.location.href
  const metaTitle = `Thanos Paravantis - ${title}`
  const metaDesc = description
  const metaImage = "https://www.thanosparavantis.com/preview.png"

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle}/>
      <meta name="description" content={metaDesc}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={metaUrl}/>
      <meta property="og:title" content={metaTitle}/>
      <meta property="og:description" content={metaDesc}/>
      <meta property="og:image" content={metaImage}/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={metaUrl}/>
      <meta property="twitter:title" content={metaTitle}/>
      <meta property="twitter:description" content={metaDesc}/>
      <meta property="twitter:image" content={metaImage}/>
    </Helmet>
  )
}
