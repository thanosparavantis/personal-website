import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import Project from "../components/Project";
import useProjectTags from "../hooks/useProjectTags";
import ProjectTag from "../components/ProjectTag";
import useProjects from "../hooks/useProjects";

export default function ProjectsPage() {
  const projects = useProjects()
  const tags = useProjectTags()

  return (
    <>
      <MetaTags
        title="Projects"
        description="The list of computer science projects I have worked on as university assignments and hobby projects."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>

      <header className="my-16 text-center">
        <h1 className="text-4xl text-gray-900 font-bold">
          Projects
        </h1>
      </header>

      <section>
        <h2 className="text-gray-900 mb-3">
          There are <strong>{projects.length}</strong> projects with <strong>{tags.length}</strong> tags:
        </h2>
        <div className="flex flex-wrap gap-1 mb-5">
          {tags.map(tag => <ProjectTag tag={tag} key={tag}/>)}
        </div>
      </section>

      <main className="grid grid-cols-flow gap-5 mb-5">
        {projects.map(project => <Project project={project} key={project.slug}/>)}
      </main>
    </>
  )
}