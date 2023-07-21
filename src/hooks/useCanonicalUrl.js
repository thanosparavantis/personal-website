import {useMemo} from "react";

export default function useCanonicalUrl(canonicalUrl = null) {
  return useMemo(() => {
    return "https://thanos.dev" + (canonicalUrl || window.location.pathname)
  }, [canonicalUrl])
}