import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faChevronLeft, faChevronRight, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
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
    <div className="shadow-lg rounded">
      <div className="group relative flex items-center justify-center">
        <img src={photoPreviewSrc}
             width="1280"
             height="960"
             title={photo.name}
             alt={photo.name}
             className="pointer-events-none bg-gray-200 rounded-t"
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
      <div className="flex md:items-center flex-col md:flex-row md:justify-between bg-white p-5 rounded-b gap-3">
        <a href={photoFullSrc}
           rel="noopener noreferrer"
           target="_blank"
           className="text-center px-5 py-3 text-sm text-white font-bold shadow-lg transition
                      bg-green-600 hover:bg-green-700 active:bg-green-800">
          Download photo
          <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-3" size="sm"/>
        </a>
        <Link to="/photos"
              className="text-center px-5 py-3 text-sm text-gray-900 font-bold shadow-lg transition
                         bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
          View all photos
          <FontAwesomeIcon icon={faArrowRight} className="ml-3" size="sm"/>
        </Link>
      </div>
    </div>
  )
}