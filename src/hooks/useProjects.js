import projects from "../_projects.json"
import {useMemo} from "react";

export default function useProjects() {
  return useMemo(() => {
    return projects
      .map(project => {
        return {
          name: project.name,
          slug: project.linkSlug,
          description: project.description,
          tags: project.tags,
        }
      })
      .sort((pA, pB) => (pA.name > pB.name) ? 1 : ((pB.name > pA.name) ? -1 : 0))
  }, [])
}