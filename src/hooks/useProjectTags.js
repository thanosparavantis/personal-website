import {useMemo} from "react";
import projects from "../_projects.json";

export default function useProjectTags(project = null) {
  return useMemo(() => {
    const tagSet = new Set()

    if (project) {
      project.tags.forEach(tag => tagSet.add(tag))
    } else {
      projects.forEach(project => {
        project.tags.forEach(tag => tagSet.add(tag))
      })
    }

    return [...tagSet].sort()
  }, [project])
}