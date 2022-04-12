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
        title="Applications of NEAT algorithm for automatic gameplay of agents in deterministic and non-deterministic game environments"
        description="Overview of the NEAT algorithm, how it works, design principles and the challenges that come with implementation. We introduce a custom two-dimensional game in Python for two players: blue and red. We lay down the basic rules and structure, in order to create an environment suitable for neuroevolution. Finally, we study five training cases, where the blue and red player are given several tasks that must be achieved through the evolution of neural networks."
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
