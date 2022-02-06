import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import Footer from "./Footer";

export default function PageTemplate({children}) {
  return (
    <>
      <MobileNavigation/>
      <DesktopNavigation/>
      <div className="flex flex-col justify-between lg:ml-72 min-h-screen">
        <div className="px-3 container max-w-3xl place-self-center">
          {children}
        </div>
        <Footer/>
      </div>
    </>
  )
}