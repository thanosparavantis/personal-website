import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMemo} from "react";

export default function FreePhotoThumbnail({photo}) {
  const photoSrc = useMemo(() => {
    return require(`../images/previews/${photo.filename}`).default
  }, [photo])

  return (
    <Link to={`/photos/${photo.slug}`}
          className="md:w-60 md:h-60 bg-gray-200 rounded shadow-lg hover:opacity-80 transition">
      <LazyLoadImage src={photoSrc}
                     width="1280"
                     height="960"
                     title={photo.name}
                     alt={photo.name}
                     effect="blur"
                     className="pointer-events-none inline-block rounded md:w-60 md:h-60 object-cover"
      />
    </Link>
  )
}