import {useMemo} from "react";

export default function useCanonicalUrl(canonicalUrl = null) {
  return useMemo(() => {
    return "https://www.thanosparavantis.com" + (canonicalUrl || window.location.pathname)
  }, [canonicalUrl])
}