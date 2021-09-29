import usePhotos from "./usePhotos";
import {useMemo} from "react";

export default function useArrowPhotos(photo) {
  const photos = usePhotos()

  return useMemo(() => {
    const index = photos.map(photo => photo.slug).indexOf(photo.slug)
    let prevIndex = index - 1
    let nextIndex = index + 1

    if (prevIndex < 0) {
      prevIndex = photos.length - 1
    }

    if (nextIndex === photos.length) {
      nextIndex = 0
    }

    return [photos[prevIndex], photos[nextIndex]]
  }, [photos, photo])
}