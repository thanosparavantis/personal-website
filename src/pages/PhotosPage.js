import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import usePhotos from "../hooks/usePhotos";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

export default function PhotosPage() {
  const photos = usePhotos()

  return (
    <>
      <MetaTags
        title="Photos"
        description="A collection of personal photos from Greece usable by anyone under public domain."
      />

      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>

      <header className="my-16 text-center">
        <h1 className="text-4xl text-gray-900 font-bold">
          Photos
        </h1>
      </header>

      <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {photos.map(photo => (
          <Link to={`/photos/${photo.slug}`} key={photo.slug}>
            <LazyLoadImage src={require(`../images/gallery/${photo.filename}`).default}
                           title={photo.name}
                           alt={photo.name}
                           className="rounded shadow"/>
          </Link>
        ))}
      </main>
    </>
  )
}