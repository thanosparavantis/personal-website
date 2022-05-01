import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "react-lazy-load-image-component/src/effects/blur.css";
import AppRoutes from "./AppRoutes";
import {Helmet} from "react-helmet";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
