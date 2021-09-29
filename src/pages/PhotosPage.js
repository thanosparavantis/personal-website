import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import usePhotos from "../hooks/usePhotos";
import FreePhotoThumbnail from "../components/FreePhotoThumbnail";

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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {photos.map(photo => <FreePhotoThumbnail photo={photo} key={photo.slug}/>)}
        </section>
      </main>
    </>
  )
}