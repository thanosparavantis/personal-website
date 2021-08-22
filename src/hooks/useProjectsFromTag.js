import useProjects from "./useProjects";
import {useMemo} from "react";

export default function useProjectsFromTag(tag) {
  const projects = useProjects()

  return useMemo(() => {
    return projects.filter(project => project.tags.includes(tag))
  }, [projects, tag])
}