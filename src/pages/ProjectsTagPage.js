import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import Project from "../components/Project";
import useProjectsFromTag from "../hooks/useProjectsFromTag";
import ProjectTag from "../components/ProjectTag";
import useProjectTags from "../hooks/useProjectTags";

export default function ProjectsTagPage({tag}) {
  const tags = useProjectTags()
  const projects = useProjectsFromTag(tag)

  return (
    <>
      <MetaTags
        title={`Tag: ${tag}`}
        description={`The list of computer science projects I have worked on tagged with ${tag}.`}
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
          There {projects.length > 1 ? "are" : "is"} <strong>{projects.length}</strong> {projects.length > 1 ? "projects" : "project"} with the <strong>{tag}</strong> tag:
        </h2>
        <div className="flex flex-wrap gap-1 mb-5">
          {tags.map(otherTag => <ProjectTag tag={otherTag} active={otherTag === tag} key={otherTag}/>)}
        </div>
      </section>

      <main className="grid grid-cols-flow gap-5 mb-5">
        {projects.map(project => <Project project={project} key={project.slug}/>)}
      </main>
    </>
  )
}