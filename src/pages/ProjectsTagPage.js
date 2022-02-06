import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import Project from "../components/Project";
import useProjectsFromTag from "../hooks/useProjectsFromTag";
import ProjectTag from "../components/ProjectTag";
import useProjectTags from "../hooks/useProjectTags";
import PageHeader from "../components/PageHeader";
import PageTemplate from "../components/PageTemplate";

export default function ProjectsTagPage({tag}) {
  const tags = useProjectTags()
  const projects = useProjectsFromTag(tag)

  return (
    <PageTemplate>
      <MetaTags
        title={`Tag: ${tag}`}
        description={`The list of open source computer science projects including the ${tag} tag.`}
        canonicalUrl="/projects"
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <PageHeader title={`Tag: ${tag}`} description={`The list of open source computer science projects including the ${tag} tag.`}/>
      <main>
        <section className="text-gray-900 flex flex-wrap gap-1 mb-5">
          {tags.map(otherTag => <ProjectTag tag={otherTag} active={otherTag === tag} key={otherTag}/>)}
        </section>
        <section className="grid grid-cols-flow gap-5 mb-5">
          {projects.map(project => <Project project={project} key={project.slug}/>)}
        </section>
      </main>
    </PageTemplate>
  )
}