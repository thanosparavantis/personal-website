import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import usePhotos from "../hooks/usePhotos";

export default function PhotosPage() {
  const photos = usePhotos()

  return (
    <>
      <MetaTags
        title="Photos"
        description="A curated collection of personal copyright free photos from Greece under public domain."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <header className="my-16 text-center">
        <h1 className="text-4xl text-gray-900 font-bold mb-3">
          Photos
        </h1>
        <p className="text-gray-600">
          A curated collection of personal copyright free photos from Greece under public domain.
        </p>
      </header>
      <main>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {photos.map(photo => {
            const photoPreview = require(`../images/thumbnails/${photo.filename}`).default

            return (
              <Link to={`/photos/${photo.slug}`}
                    className="hover:opacity-80 transition"
                    key={photo.slug}>
                <LazyLoadImage src={photoPreview}
                               width="320"
                               height="240"
                               title={photo.name}
                               alt={photo.name}
                               effect="blur"
                               className="rounded shadow"/>
              </Link>
            )
          })}
        </section>
      </main>
    </>
  )
}