import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import Project from "../components/Project";
import useProjectTags from "../hooks/useProjectTags";
import ProjectTag from "../components/ProjectTag";
import useProjects from "../hooks/useProjects";
import PageHeader from "../components/PageHeader";
import PageTemplate from "../components/PageTemplate";

export default function ProjectsPage() {
  const projects = useProjects()
  const tags = useProjectTags()

  return (
    <PageTemplate>
      <MetaTags
        title="Projects"
        description="Browse through a collection of open source computer science projects I have worked on."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <PageHeader title="Projects"
                  description="Browse through a collection of open source computer science projects I have worked on."/>
      <main>
        <section className="flex flex-wrap gap-1 mb-5">
          {tags.map(tag => (
            <ProjectTag tag={tag} expand={true} key={tag}/>
          ))}
        </section>
        <section className="grid grid-cols-flow gap-5 mb-5">
          {projects.map(project => (
            <Project project={project} key={project.slug}/>
          ))}
        </section>
      </main>
    </PageTemplate>
  )
}