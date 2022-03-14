import ThesisHeading from "./ThesisHeading";
import ThesisParagraph from "./ThesisParagraph";

export default function ThesisChapterAbstract() {
  return (
    <section>
      <ThesisHeading tag="abstract">
        Abstract
      </ThesisHeading>
      <ThesisParagraph>
        On this project, we study applications of the NEAT algorithm in deterministic and non-deterministic game
        environments. First, we look at an overview of the NEAT algorithm, how it works, design principles and the
        challenges that come with implementation. Next, we introduce a custom two-dimensional game in Python for two
        players: blue and red. We lay down the basic rules and structure, in order to create an environment suitable
        for neuroevolution. Finally, we study five training cases, where the blue and red player are given several
        tasks that must be achieved through the evolution of neural networks.
      </ThesisParagraph>
    </section>
  )
}