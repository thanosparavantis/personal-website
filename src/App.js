import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import DesktopNavigation from "./components/DesktopNavigation";
import MobileNavigation from "./components/MobileNavigation";
import PhotosPage from "./pages/PhotosPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsTagPage from "./pages/ProjectsTagPage";
import useProjectTags from "./hooks/useProjectTags";
import ScrollToTop from "./components/ScrollToTop";
import usePhotos from "./hooks/usePhotos";
import useProjects from "./hooks/useProjects";
import PhotoPage from "./pages/PhotoPage";

function App() {
  const projects = useProjects()
  const projectTags = useProjectTags()
  const photos = usePhotos()

  return (
    <BrowserRouter>
      <MobileNavigation/>
      <DesktopNavigation/>
      <ScrollToTop/>
      <div className="lg:ml-72 px-3 flex items-center justify-center">
        <div className="container max-w-3xl">
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path="/about" exact>
              <AboutPage/>
            </Route>
            <Route path="/projects" exact>
              <ProjectsPage/>
            </Route>
            <Route path="/photos" exact>
              <PhotosPage/>
            </Route>
            <Route path="/contact" exact>
              <ContactPage/>
            </Route>
            {projects.map(project => (
              <Route path={`/projects/${project.slug}`} key={project.slug} exact>
                <ProjectPage project={project}/>
              </Route>
            ))}
            {projectTags.map(tag => (
              <Route path={`/projects/tag/${tag}`} key={tag} exact>
                <ProjectsTagPage tag={tag}/>
              </Route>
            ))}
            {photos.map(photo => (
              <Route path={`/photos/${photo.slug}`} key={photo.slug} exact>
                <PhotoPage photo={photo}/>
              </Route>
            ))}
            <Route path="*">
              <NotFoundPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
