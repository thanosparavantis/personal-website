import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import ProjectTag from "./ProjectTag";
import useProjectTags from "../hooks/useProjectTags";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";

export default function Project({project, expanded = false}) {
  const tags = useProjectTags(project)

  return (
    <div className="bg-white border rounded">
      {expanded ? (
        <div className="px-5 md:px-8 py-4 gap-3 border-b">
          <h2 className="font-bold text-gray-900">
            <FontAwesomeIcon icon={faCode} className="mr-3"/>
            {project.name}
          </h2>
        </div>
      ) : (
        <Link to={`/projects/${project.slug}`}
              className="block px-5 md:px-8 py-4 border-b transition hover:bg-gray-50 active:bg-gray-100">
          <h2 className="font-bold text-gray-900">
            <FontAwesomeIcon icon={faCode} className="mr-3"/>
            {project.name}
          </h2>
        </Link>
      )}

      {project.contributors && (
        <div className="px-5 md:px-8 py-2 border-b">
          <div className="text-gray-900 text-sm">
            Involved in this project: {project.contributors}
          </div>
        </div>
      )}

      <div className="px-5 md:px-8 pt-5 leading-relaxed">
        <div className="text-gray-600 whitespace-pre-line">
          {project.description}
        </div>
      </div>

      <div className="px-5 md:px-8 pt-5 pb-3 flex md:gap-3 md:flex-row flex-col md:items-center items-start">
        {project.hasDocumentation && (
          <InternalLink href={`/projects/${project.slug}/documentation`}>
            Read documentation
          </InternalLink>
        )}
        {(project.websiteLink || project.repositoryLink) && project.hasDocumentation && (
          <p className="md:block hidden">
            &middot;
          </p>
        )}
        {project.websiteLink && (
          <ExternalLink href={project.websiteLink}>
            Visit project website
          </ExternalLink>
        )}
        {project.websiteLink && project.repositoryLink && (
          <p className="md:block hidden">
            &middot;
          </p>
        )}
        {project.repositoryLink && (
          <ExternalLink href={project.repositoryLink}>
            Visit project repository
          </ExternalLink>
        )}
      </div>

      <div className="px-5 md:px-8 pb-5 flex flex-wrap gap-1">
        {tags.map(tag => <ProjectTag tag={tag} key={tag}/>)}
      </div>
    </div>
  )
}