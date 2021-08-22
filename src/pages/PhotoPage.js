import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import useSimilarPhotos from "../hooks/useSimilarPhotos";

export default function PhotoPage({photo}) {
  const similarPhotos = useSimilarPhotos(photo)

  return (
    <>
      <MetaTags
        title={`Photo: ${photo.name}`}
        description="Born in Athens, Greece, Thanos Paravantis is a Software Engineer and Radio Amateur with a BSc in Computer Science."
      />

      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>

      <header className="my-16 text-center">
        <h1 className="text-4xl text-gray-900 font-bold">
          {photo.name}
        </h1>
      </header>

      <main>
        <LazyLoadImage src={require(`../images/gallery/${photo.filename}`).default}
                       title={photo.name}
                       alt={photo.name}
                       className="rounded shadow"/>
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

        <div className="grid md:grid-cols-2 gap-5 opacity-50 hover:opacity-100 transition">
          {similarPhotos.map(photo => (
            <Link to={`/photos/${photo.slug}`} key={photo.slug}>
              <LazyLoadImage src={require(`../images/gallery/${photo.filename}`).default}
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