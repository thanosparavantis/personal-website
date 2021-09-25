import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMemo} from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function FreePhotoThumbnail({photo}) {
  const photoSrc = useMemo(() => {
    return require(`../images/previews/${photo.filename}`).default
  }, [photo])

  return (
    <Link to={`/photos/${photo.slug}`}
          className="md:w-60 md:h-60 bg-gray-200 rounded shadow hover:opacity-80 transition">
      <LazyLoadImage src={photoSrc}
                     title={photo.name}
                     alt={photo.name}
                     effect="blur"
                     className="inline-block rounded md:w-60 md:h-60 object-cover"
      />
    </Link>
  )
}