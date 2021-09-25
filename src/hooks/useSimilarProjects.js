import {useMemo} from "react";
import useProjects from "./useProjects";

export default function useSimilarProjects(project) {
  const projects = useProjects()

  return useMemo(() => {
    const mappings = []

    const tagsA = new Set(project.tags);

    projects.forEach(otherProject => {
      if (otherProject.slug === project.slug) {
        return
      }

      const tagsB = new Set(otherProject.tags);
      const intersection = new Set([...tagsA].filter(x => tagsB.has(x)));
      mappings.push([otherProject, intersection.size])
    })

    mappings.sort((first, second) => {
      return second[1] - first[1];
    });

    const similarProjects = mappings.map(mapping => mapping[0])

    return similarProjects.slice(0, 5)
  }, [projects, project])
}