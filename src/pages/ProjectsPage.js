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
        description="Browse through a collection of open source computer science projects I have worked on."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <header className="my-16 text-center">
        <h1 className="text-4xl text-gray-900 font-bold mb-3">
          Projects
        </h1>
        <p className="text-gray-600">
          Browse through a collection of open source computer science projects I have worked on.
        </p>
      </header>
      <main>
        <section className="flex flex-wrap gap-1 mb-5">
          {tags.map(tag => <ProjectTag tag={tag} key={tag}/>)}
        </section>
        <section className="grid grid-cols-flow gap-5 mb-5">
          {projects.map(project => <Project project={project} key={project.slug}/>)}
        </section>
      </main>
    </>
  )
}