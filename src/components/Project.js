import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import ProjectTag from "./ProjectTag";
import useProjectTags from "../hooks/useProjectTags";

export default function Project({project, expanded = false}) {
  const tags = useProjectTags(project)

  if (expanded) {
    return (
      <div className="bg-white border rounded">
        <div className="px-5 md:px-8 py-5 transition border-b">
          <h2 className="md:text-lg font-bold text-gray-900">
            <FontAwesomeIcon icon={faCode} className="mr-3"/>
            {project.name}
          </h2>
        </div>
        <div className="px-5 md:px-8 py-5 leading-relaxed">
          <div className="text-gray-600 whitespace-pre-line">
            {project.description}
          </div>
        </div>
        <div className="px-5 md:px-8 pb-3">
          <a href={project.githubLink}
             rel="noopener noreferrer"
             target="_blank"
             className="inline-block underline text-blue-600 hover:text-blue-800 active:text-green-700">
            View project on GitHub
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
          </a>
        </div>
        <div className="px-5 md:px-8 pb-5 flex flex-wrap gap-1">
          {tags.map(tag => <ProjectTag tag={tag} key={tag}/>)}
        </div>
      </div>
    )
  } else {
    return (
      <Link to={`/projects/${project.slug}`}
            title={`Learn more about ${project.name}`}
            className="transition group hover:border-gray-400 active:bg-gray-200 block bg-white border rounded">
        <div className="px-5 md:px-8 py-5 transition border-b group-hover:border-gray-400">
          <h2 className="md:text-lg font-bold text-gray-900">
            <FontAwesomeIcon icon={faCode} className="mr-3"/>
            {project.name}
          </h2>
        </div>
        <div className="px-5 md:px-8 py-5 leading-relaxed">
          <div className="text-gray-600 whitespace-pre-line">
            {project.description}
          </div>
        </div>
      </Link>
    )
  }
}