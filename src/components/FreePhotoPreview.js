import {LazyLoadImage} from "react-lazy-load-image-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {useMemo} from "react";

export default function FreePhotoPreview({photo}) {
  const photoPreviewSrc = useMemo(() => {
    return require(`../images/previews/${photo.filename}`).default
  }, [photo])

  const photoFullSrc = useMemo(() => {
    return require(`../images/full/${photo.filename}`).default
  }, [photo])

  return (
    <>
      <LazyLoadImage src={photoPreviewSrc}
                     width="1280"
                     height="960"
                     title={photo.name}
                     alt={photo.name}
                     effect="blur"
                     className="rounded shadow"
      />
      <a href={photoFullSrc}
         rel="noopener noreferrer"
         target="_blank"
         className="block py-5 mb-5 underline text-center text-blue-600 hover:text-blue-800">
        View this photo in higher resolution
        <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
      </a>
    </>
  )
}