import Disqus from "disqus-react"
import useCanonicalUrl from "../hooks/useCanonicalUrl";

export default function CommentWidget({identifier, title, canonicalUrl = null}) {
  const url = useCanonicalUrl(canonicalUrl)

  return (
    <Disqus.DiscussionEmbed
      shortname="thanosparavantis"
      config={{
        url: url,
        identifier: identifier,
        title: title
      }}
    />
  )
}