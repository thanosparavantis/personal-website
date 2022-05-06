import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import PageTemplate from "../components/PageTemplate";
import EducationSection from "../components/about/EducationSection";
import WorkExperienceSection from "../components/about/WorkExperienceSection";
import VolunteerExperienceSection from "../components/about/VolunteerExperienceSection";
import HobbiesAndSkillsSection from "../components/about/HobbiesAndSkillsSection";
import AchievementsAndConferencesSection from "../components/about/AchievementsAndConferencesSection";
import coverImg from "../images/about_cover.png";

export default function AboutPage() {
  return (
    <PageTemplate>
      <MetaTags
        title="About"
        description="Portfolio of my educational background, work and volunteer experience, hobby projects and achievements."
      />
      <Helmet>
        <body className="bg-gray-100"/>
      </Helmet>
      <main>
        <header className="relative mt-5 mb-5 h-52">
          <div className="absolute rounded w-full h-full opacity-90 bg-transparent
                          bg-gradient-to-r from-gray-900 to-transparent"/>
          <div className="left-[8%] absolute w-full h-full flex items-center">
            <h1 className="text-gray-100 font-black uppercase tracking-widest
                           text-4xl first-letter:text-5xl
                           sm:text-5xl sm:first-letter:text-6xl
                           md:text-6xl md:first-letter:text-7xl">
              About
            </h1>
          </div>
          <img src={coverImg} width="744" height="208" alt="" className="rounded shadow"/>
        </header>
        <EducationSection/>
        <WorkExperienceSection/>
        <VolunteerExperienceSection/>
        <HobbiesAndSkillsSection/>
        <AchievementsAndConferencesSection/>
      </main>
    </PageTemplate>
  )
}