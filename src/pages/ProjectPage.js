import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import Project from "../components/Project";
import useSimilarProjects from "../hooks/useSimilarProjects";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/PageHeader";
import PageTemplate from "../components/PageTemplate";

export default function ProjectPage({project}) {
  const similarProjects = useSimilarProjects(project)

  return (
    <PageTemplate>
      <MetaTags
        title={`Project: ${project.name}`}
        description={`Learn more about this resource and browse through a variety of related open source projects.`}
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <PageHeader title={`Project: ${project.name}`} description="Learn more about this resource and browse through a variety of related open source projects."/>
      <main>
        <section className="mb-10">
          <Project project={project} expanded={true}/>
        </section>
        <section className="mb-5">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Similar to this project
          </h2>
          <div className="flex flex-col gap-5">
            {similarProjects.map(similarProject => <Project project={similarProject} key={similarProject.slug}/>)}

            <Link to="/projects"
                  className="block font-bold text-white rounded border focus:outline-none
                             text-center py-3 bg-green-600 hover:bg-green-700 active:bg-green-800">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-3" size="sm"/>
              View all projects
            </Link>
          </div>
        </section>
      </main>
    </PageTemplate>
  )
}