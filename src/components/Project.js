import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faExternalLinkAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import ProjectTag from "./ProjectTag";
import useProjectTags from "../hooks/useProjectTags";

export default function Project({project, expanded = false}) {
  const tags = useProjectTags(project)

  if (expanded) {
    return (
      <div className="bg-white border rounded">
        <div className="px-5 md:px-8 py-4 gap-3 border-b">
          <h2 className="font-bold text-gray-900">
            <FontAwesomeIcon icon={faCode} className="mr-3"/>
            {project.name}
          </h2>
        </div>
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
        <div className="px-5 md:px-8 pt-5 pb-3 flex md:gap-3 md:flex-row flex-col md:items-center">
          {project.websiteLink && (
            <a href={project.websiteLink}
               rel="noopener noreferrer"
               target="_blank"
               className="underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit project website
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          )}
          {project.websiteLink && project.repositoryLink && (
            <p className="md:block hidden">
              &middot;
            </p>
          )}
          {project.repositoryLink && (
            <a href={project.repositoryLink}
               rel="noopener noreferrer"
               target="_blank"
               className="underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit project repository
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          )}
        </div>
        <div className="px-5 md:px-8 pb-5 flex flex-wrap gap-1">
          {tags.map(tag => <ProjectTag tag={tag} key={tag}/>)}
        </div>
      </div>
    )
  } else {
    return (
      <div className="bg-white border rounded">
        <Link to={`/projects/${project.slug}`}
              className="block px-5 md:px-8 py-4 border-b transition hover:bg-gray-50 active:bg-gray-100">
          <h2 className="font-bold text-gray-900">
            <FontAwesomeIcon icon={faCode} className="mr-3"/>
            {project.name}
          </h2>
        </Link>
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
        <div className="px-5 md:px-8 pt-5 pb-3 flex md:gap-3 md:flex-row flex-col md:items-center">
          {project.websiteLink && (
            <a href={project.websiteLink}
               rel="noopener noreferrer"
               target="_blank"
               className="underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit project website
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          )}
          {project.websiteLink && project.repositoryLink && (
            <p className="md:block hidden">
              &middot;
            </p>
          )}
          {project.repositoryLink && (
            <a href={project.repositoryLink}
               rel="noopener noreferrer"
               target="_blank"
               className="underline text-blue-600 hover:text-blue-800 active:text-green-700">
              Visit project repository
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" size="sm"/>
            </a>
          )}
        </div>
        <div className="px-5 md:px-8 pb-5 flex flex-wrap gap-1">
          {tags.map(tag => <ProjectTag tag={tag} key={tag}/>)}
        </div>
      </div>
    )
  }
}