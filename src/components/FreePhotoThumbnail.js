import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMemo} from "react";

export default function FreePhotoThumbnail({photo}) {
  const photoSrc = useMemo(() => {
    return require(`../images/previews/${photo.filename}`).default
  }, [photo])

  return (
    <Link to={`/photos/${photo.slug}`}
          title={photo.name}
          className="md:h-60 hover:opacity-80"
    >
      <LazyLoadImage src={photoSrc}
                     title={photo.name}
                     alt={photo.name}
                     effect="blur"
                     className="md:h-60 rounded shadow-lg pointer-events-none inline-block rounded object-cover"
      />
    </Link>
  )
}