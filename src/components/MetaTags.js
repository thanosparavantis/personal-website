import {Helmet} from "react-helmet";
import {useMemo} from "react";
import useCanonicalUrl from "../hooks/useCanonicalUrl";

export default function MetaTags({title: pageTitle, description, canonicalUrl = null, photoSrc = null}) {
  const url = useCanonicalUrl(canonicalUrl)

  const title = useMemo(() => {
    return `Thanos Paravantis - ${pageTitle}`
  }, [pageTitle])

  const image = useMemo(() => {
    return "https://thanos.dev" + (photoSrc || "/preview.jpg")
  }, [])

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url}/>
      <meta name="title" content={title}/>
      <meta name="description" content={description}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={url}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={url}/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description}/>
      <meta property="twitter:image" content={image}/>
    </Helmet>
  )
}
