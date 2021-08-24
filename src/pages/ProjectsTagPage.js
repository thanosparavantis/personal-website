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
        description={`The list of open source computer science projects including the ${tag} tag.`}
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>

      <header className="my-16 text-center">
        <h1 className="text-3xl text-gray-900 mb-3">
          Tag: <strong>{tag}</strong>
        </h1>
        <h2 className="text-gray-600">
          The list of open source computer science projects including the {tag} tag.
        </h2>
      </header>

      <section className="text-gray-900 flex flex-wrap gap-1 mb-5">
        {tags.map(otherTag => <ProjectTag tag={otherTag} active={otherTag === tag} key={otherTag}/>)}
      </section>

      <main className="grid grid-cols-flow gap-5 mb-5">
        {projects.map(project => <Project project={project} key={project.slug}/>)}
      </main>
    </>
  )
}