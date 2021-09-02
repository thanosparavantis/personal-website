import {Link} from "react-router-dom";
import useProjectsFromTag from "../hooks/useProjectsFromTag";

export default function ProjectTag({tag, active = false}) {
  const taggedProjects = useProjectsFromTag(tag)

  return (
    <Link to={active ? "/projects" : `/projects/tag/${tag}`}
          title={`Click here to view all projects related with ${tag}`}
          className={`group flex border rounded text-sm active:text-white
                      active:bg-green-500 active:border-green-600
                    ${active ? "text-white bg-green-500 border-green-600"
                    : "text-gray-600 bg-gray-50 border-gray-400 hover:border-gray-600"}`}>
      <div className={`px-1 border-r ${active ? "border-green-600" : "border-gray-400 group-hover:border-gray-600"}`}>
        {taggedProjects.length}
      </div>
      <div className="px-1">
        {tag}
      </div>
    </Link>
  )
}