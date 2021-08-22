import photos from "../photos.json"
import {useMemo} from "react";

export default function usePhotos() {
  return useMemo(() => {
    return photos.sort((pA, pB) => (pA.name > pB.name) ? 1 : ((pB.name > pA.name) ? -1 : 0))
  }, [])
}