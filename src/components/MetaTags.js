import {Helmet} from "react-helmet";
import {useMemo} from "react";

export default function MetaTags({title, description, image = null}) {
  const metaUrl = useMemo(() => {
    return window.location.href
  }, [])

  const domain = useMemo(() => {
    const url = new URL(metaUrl)
    return url.protocol + "//" + url.host
  }, [metaUrl])

  const metaTitle = useMemo(() => {
    return `Thanos Paravantis - ${title}`
  }, [title])

  const metaDesc = useMemo(() => {
    return description
  }, [description])

  const metaImage = useMemo(() => {
    return domain + (image || "/preview.jpg")
  }, [])

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
