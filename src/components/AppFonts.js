import {Helmet} from "react-helmet";

export default function AppFonts() {
  return (
    <Helmet>
      <link rel="preload" as="font" type="font/ttf" crossOrigin="anonymous" href={require("../fonts/Lato-Regular.ttf")}/>
      <link rel="preload" as="font" type="font/ttf" crossOrigin="anonymous" href={require("../fonts/Lato-Italic.ttf")}/>
      <link rel="preload" as="font" type="font/ttf" crossOrigin="anonymous" href={require("../fonts/Lato-Bold.ttf")}/>
      <link rel="preload" as="font" type="font/ttf" crossOrigin="anonymous" href={require("../fonts/Lato-Black.ttf")}/>
    </Helmet>
  )
}