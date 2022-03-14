import PageTemplate from "../components/PageTemplate";
import ThesisChapterOne from "../components/thesis/ThesisChapterOne";
import ThesisChapterAbstract from "../components/thesis/ThesisChapterAbstract";
import ThesisChapterAcknowledgements from "../components/thesis/ThesisChapterAcknowledgements";
import ThesisTitle from "../components/thesis/ThesisTitle";
import ThesisAcademicIdentity from "../components/thesis/ThesisAcademicIdentity";
import ThesisChapterTwo from "../components/thesis/ThesisChapterTwo";
import MetaTags from "../components/MetaTags";
import ThesisChapterThree from "../components/thesis/ThesisChapterThree";
import ThesisChapterFour from "../components/thesis/ThesisChapterFour";
import ThesisChapterFive from "../components/thesis/ThesisChapterFive";
import ThesisChapterSix from "../components/thesis/ThesisChapterSix";
import ThesisChapterSeven from "../components/thesis/ThesisChapterSeven";
import ThesisChapterEight from "../components/thesis/ThesisChapterEight";
import ThesisChapterContents from "../components/thesis/ThesisChapterContents";
import ThesisChapterFigures from "../components/thesis/ThesisChapterFigures";

export default function ThesisPage() {
  return (
    <PageTemplate>
      <MetaTags
        title="Thesis Documentation"
        description="Applications of NEAT algorithm for automatic gameplay of agents in deterministic and non-deterministic game environments."
      />
      <main className="my-16 flex flex-col gap-7">
        <ThesisAcademicIdentity/>
        <ThesisTitle/>
        <ThesisChapterAcknowledgements/>
        <ThesisChapterAbstract/>
        <ThesisChapterContents/>
        <ThesisChapterFigures/>
        <ThesisChapterOne/>
        <ThesisChapterTwo/>
        <ThesisChapterThree/>
        <ThesisChapterFour/>
        <ThesisChapterFive/>
        <ThesisChapterSix/>
        <ThesisChapterSeven/>
        <ThesisChapterEight/>
      </main>
    </PageTemplate>
  )
}