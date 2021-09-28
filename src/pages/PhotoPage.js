import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import useSimilarPhotos from "../hooks/useSimilarPhotos";
import "react-lazy-load-image-component/src/effects/blur.css";
import FreePhotoPreview from "../components/FreePhotoPreview";
import FreePhotoThumbnail from "../components/FreePhotoThumbnail";

export default function PhotoPage({photo}) {
  const similarPhotos = useSimilarPhotos(photo)

  return (
    <>
      <MetaTags
        title={`Photo: ${photo.name}`}
        description="Learn more about this copyright free photo and find similar ones under public domain."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <header className="my-16 text-center">
        <h1 className="text-3xl text-gray-900 mb-3">
          Photo: <strong>{photo.name}</strong>
        </h1>
        <p className="text-gray-600">
          Learn more about this copyright free photo and find similar ones under public domain.
        </p>
      </header>
      <main>
        <section>
          <FreePhotoPreview photo={photo}/>
        </section>
        <section className="mb-5">
          <div className="mb-5">
            <Link to="/photos"
                  className="block font-bold text-gray-900 rounded border focus:outline-none
                             bg-white hover:border-gray-400 active:bg-gray-200 text-center py-3">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-3" size="sm"/>
              View all photos
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 md:opacity-60 md:hover:opacity-100 md:transition">
            {similarPhotos.map(photo => <FreePhotoThumbnail photo={photo} key={photo.slug}/>)}
          </div>
        </section>
      </main>
    </>
  )
}