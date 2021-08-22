import {useMemo} from "react";
import usePhotos from "./usePhotos";
import {stringSimilarity} from "string-similarity-js";

export default function useSimilarPhotos(photo) {
  const photos = usePhotos()

  return useMemo(() => {
    const mappings = []

    photos.forEach(otherPhoto => {
      if (otherPhoto === photo) {
        return
      }

      mappings.push([otherPhoto, stringSimilarity(otherPhoto.name, photo.name)])
    })

    mappings.sort((first, second) => {
      return second[1] - first[1];
    });

    const similarPhotos = mappings.map(mapping => mapping[0])

    return similarPhotos.slice(0, 4)
  }, [photos, photo])
}