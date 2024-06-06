import MetaTags from "../components/MetaTags";
import {Helmet} from "react-helmet";
import PageTemplate from "../components/PageTemplate";
import EducationSection from "../components/about/EducationSection";
import ProfessionalExperienceSection from "../components/about/ProfessionalExperienceSection";
import VolunteerExperienceSection from "../components/about/VolunteerExperienceSection";
import HobbiesAndSkillsSection from "../components/about/HobbiesAndSkillsSection";
import AchievementsAndConferencesSection from "../components/about/AchievementsAndConferencesSection";
import PageHeader from "../components/PageHeader";

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
      <PageHeader
        title="About"
        description="Portfolio of my educational background, professional and volunteer experience, hobby projects and achievements."/>
      <main>
        <EducationSection/>
        <ProfessionalExperienceSection/>
        <VolunteerExperienceSection/>
        <HobbiesAndSkillsSection/>
        <AchievementsAndConferencesSection/>
      </main>
    </PageTemplate>
  )
}
