import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import PageHeader from "../components/PageHeader";
import PageTemplate from "../components/PageTemplate";
import EducationSection from "../components/about/EducationSection";
import WorkExperienceSection from "../components/about/WorkExperienceSection";
import VolunteerExperienceSection from "../components/about/VolunteerExperienceSection";
import HobbiesAndSkillsSection from "../components/about/HobbiesAndSkillsSection";
import AchievementsAndConferencesSection from "../components/about/AchievementsAndConferencesSection";

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
        <PageHeader title="About"
                    description="Portfolio of my educational background, work and volunteer experience, hobby projects and achievements."/>
        <EducationSection/>
        <WorkExperienceSection/>
        <VolunteerExperienceSection/>
        <HobbiesAndSkillsSection/>
        <AchievementsAndConferencesSection/>
      </main>
    </PageTemplate>
  )
}