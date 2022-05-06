import {Link} from "react-router-dom";
import MetaTags from "../components/MetaTags";
import personWalkingOutdoorsImg from "../images/person_walking_outdoors.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import PageTemplate from "../components/PageTemplate";
import {Helmet} from "react-helmet";

export default function NotFoundPage() {

  return (
    <PageTemplate>
      <MetaTags
        title="404 Not Found"
        description="Born in Athens, Greece, Thanos Paravantis is a Computer Scientist and Radio Amateur with a BSc in Computer Science."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <main>
        <section className="min-h-screen py-32 flex flex-wrap items-center gap-20 justify-center text-center">
          <div className="flex-shrink-0">
            <img src={personWalkingOutdoorsImg}
                 width="243"
                 height="225"
                 alt="Person walking outdoors in nature"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-black tracking-wider mb-5 text-7xl text-gray-900">
              404
            </h1>
            <p className=" text-gray-700 mb-10">
              The requested page could not be found.
            </p>
            <Link to="/" className="px-8 py-3 text-white uppercase focus:ring-2 focus:ring-offset-1
                                    font-bold shadow-lg text-center bg-emerald-600 hover:bg-emerald-700">
              Back to Home
              <FontAwesomeIcon icon={faArrowRight} className="ml-5"/>
            </Link>
          </div>
        </section>
      </main>
    </PageTemplate>
  )
}