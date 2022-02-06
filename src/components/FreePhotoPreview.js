import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {useMemo} from "react";
import {Link} from "react-router-dom";
import useArrowPhotos from "../hooks/useArrowPhotos";

export default function FreePhotoPreview({photo}) {
  const photoPreviewSrc = useMemo(() => {
    return require(`../images/previews/${photo.filename}`).default
  }, [photo])

  const photoFullSrc = useMemo(() => {
    return require(`../images/full/${photo.filename}`).default
  }, [photo])

  const [prevPhoto, nextPhoto] = useArrowPhotos(photo)

  return (
    <>
      <div className="group relative flex items-center justify-center">
        <img src={photoPreviewSrc}
             width="1280"
             height="960"
             title={photo.name}
             alt={photo.name}
             className="pointer-events-none bg-gray-200 rounded shadow-lg"
        />
        <Link to={`/photos/${prevPhoto.slug}`}
              className="absolute left-0 text-white px-5 py-8 transition
                         opacity-50 group-hover:opacity-100">
          <FontAwesomeIcon icon={faChevronLeft} size="3x"/>
        </Link>
        <Link to={`/photos/${nextPhoto.slug}`}
              className="absolute right-0 text-white px-5 py-8 transition
                         opacity-50 group-hover:opacity-100">
          <FontAwesomeIcon icon={faChevronRight} size="3x"/>
        </Link>
      </div>
      <div className="mt-5">
        <a href={photoFullSrc}
           target="_blank"
           className="block font-bold text-white rounded border focus:outline-none
                      text-center py-3 bg-green-600 hover:bg-green-700 active:bg-green-800">
          <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-3" size="sm"/>
          Download photo
        </a>
      </div>
    </>
  )
}