import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import Project from "../components/Project";
import useSimilarProjects from "../hooks/useSimilarProjects";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function ProjectPage({project}) {
  const similarProjects = useSimilarProjects(project)

  return (
    <>
      <MetaTags
        title={`Project: ${project.name}`}
        description={`Learn more about this resource and browse through a variety of related open source projects.`}
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <header className="my-16 text-center">
        <h1 className="text-3xl text-gray-900 mb-3">
          Project: <strong>{project.name}</strong>
        </h1>
        <p className="text-gray-600">
          Learn more about this resource and browse through a variety of related open source projects.
        </p>
      </header>
      <main>
        <section>
          <Project project={project} expanded={true}/>
        </section>
        <section className="mb-5">
          <div className="mt-10 mb-5">
            <Link to="/projects"
                  className="block font-bold text-gray-900 rounded border focus:outline-none
                             bg-white hover:border-gray-400 active:bg-gray-200 text-center py-3">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-3" size="sm"/>
              View all projects
            </Link>
          </div>
          <div className="flex flex-col gap-5 md:opacity-60 md:hover:opacity-100 md:transition">
            {similarProjects.map(similarProject => <Project project={similarProject} key={similarProject.slug}/>)}
          </div>
        </section>
      </main>
    </>
  )
}