import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import useSimilarPhotos from "../hooks/useSimilarPhotos";
import FreePhotoPreview from "../components/FreePhotoPreview";
import FreePhotoThumbnail from "../components/FreePhotoThumbnail";
import {useMemo} from "react";

export default function PhotoPage({photo}) {
  const similarPhotos = useSimilarPhotos(photo)

  const photoSrc = useMemo(() => {
    return require(`../images/previews/${photo.filename}`).default
  }, [photo])

  return (
    <>
      <MetaTags
        title={`Photo: ${photo.name}`}
        description="Learn more about this copyright free photo and find similar ones under public domain."
        image={photoSrc}
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
        <section className="mb-10">
          <FreePhotoPreview photo={photo}/>
        </section>
        <section className="mb-5">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Similar to this photo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {similarPhotos.map(photo => <FreePhotoThumbnail photo={photo} key={photo.slug}/>)}
          </div>
        </section>
      </main>
    </>
  )
}