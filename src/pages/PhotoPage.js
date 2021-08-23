import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
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
        <h1 className="text-4xl text-gray-900 font-bold mb-3">
          {photo.name}
        </h1>
        <p className="text-gray-600">
          This photo is presented copyright free under public domain.
        </p>
      </header>

      <main>
        <a href={photoFull}
           title="Click here to view the high resolution version of the photo"
           rel="noopener noreferrer"
           target="_blank">
          <LazyLoadImage src={photoPreview} alt={photo.name} className="rounded shadow"/>
        </a>
      </main>

      <section className="mb-5">
        <div className="mt-10 mb-5">
          <Link to="/photos"
                className="block font-bold text-gray-900 rounded border
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
    </>
  )
}