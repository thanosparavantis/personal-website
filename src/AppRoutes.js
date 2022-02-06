import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import PhotosPage from "./pages/PhotosPage";
import ContactPage from "./pages/ContactPage";
import ThesisPage from "./pages/ThesisPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsTagPage from "./pages/ProjectsTagPage";
import PhotoPage from "./pages/PhotoPage";
import NotFoundPage from "./pages/NotFoundPage";
import useProjects from "./hooks/useProjects";
import useProjectTags from "./hooks/useProjectTags";
import usePhotos from "./hooks/usePhotos";

export default function AppRoutes() {
  const projects = useProjects()
  const projectTags = useProjectTags()
  const photos = usePhotos()

  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/projects" component={ProjectsPage}/>
      <Route exact path="/photos" component={PhotosPage}/>
      <Route exact path="/contact" component={ContactPage}/>
      {/*<Route exact path="/thesis" component={ThesisPage}/>*/}
      {projects.map(project => (
        <Route exact path={`/projects/${project.slug}`} key={project.slug}>
          <ProjectPage project={project}/>
        </Route>
      ))}
      {projectTags.map(tag => (
        <Route exact path={`/projects/tag/${tag}`} key={tag}>
          <ProjectsTagPage tag={tag}/>
        </Route>
      ))}
      {photos.map(photo => (
        <Route exact path={`/photos/${photo.slug}`} key={photo.slug}>
          <PhotoPage photo={photo}/>
        </Route>
      ))}
      <Route path="*" component={NotFoundPage}/>
    </Switch>

  )
}