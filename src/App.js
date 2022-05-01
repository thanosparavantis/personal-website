import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./components/AppRoutes";
import AppFonts from "./components/AppFonts";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <AppFonts/>
      <AppRoutes/>
    </BrowserRouter>
  )
}
