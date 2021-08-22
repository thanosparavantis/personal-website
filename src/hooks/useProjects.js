import projects from "../projects.json"
import {useMemo} from "react";

export default function useProjects() {
  return useMemo(() => {
    return projects.sort((pA, pB) => (pA.name > pB.name) ? 1 : ((pB.name > pA.name) ? -1 : 0))
  }, [])
}