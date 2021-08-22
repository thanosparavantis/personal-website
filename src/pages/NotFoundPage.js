import {Link} from "react-router-dom";
import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";

export default function NotFoundPage() {
  return (
    <>
      <MetaTags
        title="404 Not Found"
        description="Born in Athens, Greece, Thanos Paravantis is a Software Engineer and Radio Amateur with a BSc in Computer Science."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <main className="min-h-screen py-32 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-gray-900 mb-8 text-3xl md:text-5xl">
          404
        </h1>
        <p className="mb-5 font-bold text-gray-600 text-sm md:text-base leading-loose">
          The page you requested could not be found.
        </p>
        <Link to="/" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold
                                rounded shadow px-8 py-3 focus:outline-none focus:ring-2 text-sm md:text-base">
          Back to Home
        </Link>
      </main>
    </>
  )
}