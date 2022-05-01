import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./AppRoutes";
import {Helmet} from "react-helmet";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <link rel="preload" as="font" type="font/ttf" href={require("./fonts/Lato-Regular.ttf")}/>
        <link rel="preload" as="font" type="font/ttf" href={require("./fonts/Lato-Italic.ttf")}/>
        <link rel="preload" as="font" type="font/ttf" href={require("./fonts/Lato-Bold.ttf")}/>
        <link rel="preload" as="font" type="font/ttf" href={require("./fonts/Lato-Black.ttf")}/>
      </Helmet>
      <ScrollToTop/>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
