import {Link} from "react-router-dom";
import useProjectsFromTag from "../hooks/useProjectsFromTag";

export default function ProjectTag({tag, active = false, expand = false}) {
  const taggedProjects = useProjectsFromTag(tag)

  return (
    <Link to={active ? "/projects" : `/projects/tag/${tag}`}
          title={`Click here to view all projects related with ${tag}`}
          className={`group flex border rounded text-sm active:text-white
                      active:bg-emerald-500 active:border-emerald-600
                      ${active ? "text-white bg-emerald-500 border-emerald-600" 
                      : "text-gray-600 bg-gray-50 border-gray-400 hover:border-gray-600"}
                      ${expand && "flex-grow"}`}>
      <div className={`px-1 border-r ${active ? "border-emerald-600" : "border-gray-400 group-hover:border-gray-600"}`}>
        {taggedProjects.length}
      </div>
      <div className="px-1">
        {tag}
      </div>
    </Link>
  )
}