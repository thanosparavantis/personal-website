import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import usePhotos from "../hooks/usePhotos";
import FreePhotoThumbnail from "../components/FreePhotoThumbnail";
import PageHeader from "../components/PageHeader";
import PageTemplate from "../components/PageTemplate";

export default function PhotosPage() {
  const photos = usePhotos()

  return (
    <PageTemplate>
      <MetaTags
        title="Photos"
        description="A curated collection of personal copyright free photos from Greece under public domain."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <PageHeader title="Photos" description="A curated collection of personal copyright free photos from Greece under public domain."/>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {photos.map(photo => <FreePhotoThumbnail photo={photo} key={photo.slug}/>)}
        </section>
      </main>
    </PageTemplate>
  )
}