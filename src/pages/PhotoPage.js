import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import useSimilarPhotos from "../hooks/useSimilarPhotos";

export default function PhotoPage({photo}) {
  const similarPhotos = useSimilarPhotos(photo)
  const photoFull = require(`../images/full/${photo.filename}`).default
  const photoPreview = require(`../images/preview/${photo.filename}`).default

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
          <LazyLoadImage src={photoPreview}
                         title={photo.name}
                         alt={photo.name}
                         className="rounded shadow"/>

          <a href={photoFull}
             rel="noopener noreferrer"
             target="_blank"
             className="block py-5 mb-5 underline text-center text-blue-600 hover:text-blue-800">
            View this photo in higher resolution
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
          </a>
        </section>

        <section className="mb-5">
          <div className="mb-5">
            <Link to="/photos"
                  className="block font-bold text-gray-900 rounded border focus:outline-none focus:ring-2
                           hover:border-gray-400 text-center py-3 bg-white">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-3" size="sm"/>
              View all photos
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:opacity-50 md:hover:opacity-100 md:transition">
            {similarPhotos.map(photo => (
              <Link to={`/photos/${photo.slug}`} key={photo.slug}>
                <LazyLoadImage src={require(`../images/preview/${photo.filename}`).default}
                               title={photo.name}
                               alt={photo.name}
                               className="rounded shadow"/>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}