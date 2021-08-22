import {useMemo} from "react";
import projects from "../projects.json";

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

    return [...tagSet]
      .sort()
      .sort((t1, t2) => {
        const tc1 = projects.filter(project => project.tags.includes(t1))
        const tc2 = projects.filter(project => project.tags.includes(t2))

        return (tc1 > tc2) ? -1 : ((tc2 > tc1) ? 1 : 0)
      })
  }, [project])
}