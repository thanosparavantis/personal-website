import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import useSimilarPhotos from "../hooks/useSimilarPhotos";
import FreePhotoPreview from "../components/FreePhotoPreview";
import FreePhotoThumbnail from "../components/FreePhotoThumbnail";
import {useMemo} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/PageHeader";
import PageTemplate from "../components/PageTemplate";

export default function PhotoPage({photo}) {
  const similarPhotos = useSimilarPhotos(photo)
  const photoSrc = useMemo(() => require(`../images/previews/${photo.filename}`).default, [photo])

  return (
    <PageTemplate>
      <MetaTags
        title={`Photo: ${photo.name}`}
        description="Learn more about this copyright free photo and find similar ones under public domain."
        photoSrc={photoSrc}
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <PageHeader title={`Photo: ${photo.name}`} description="Learn more about this copyright free photo and find similar ones under public domain."/>
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
          <div className="mt-5">
            <Link to="/photos"
                  className="block font-bold text-white rounded border focus:outline-none
                             text-center py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-3" size="sm"/>
              View all photos
            </Link>
          </div>
        </section>
      </main>
    </PageTemplate>
  )
}