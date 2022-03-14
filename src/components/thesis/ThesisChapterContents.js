import ThesisHeading from "./ThesisHeading";
import ThesisInternalLink from "./ThesisInternalLink";

export default function ThesisChapterContents() {
  return (
    <section>
      <ThesisHeading tag="contents">
        Contents
      </ThesisHeading>
      <ul className="leading-loose">
        <li>
          <ThesisInternalLink href="#neat-overview">
            1. Overview of NEAT algorithm
          </ThesisInternalLink>
        </li>
        <li>
          <ThesisInternalLink href="#game-overview">
            2. Game Overview
          </ThesisInternalLink>
          <ul className="ml-6">
            <li>
              <ThesisInternalLink href="#production-move">
                2.1 Production move
              </ThesisInternalLink>
            </li>
            <li>
              <ThesisInternalLink href="#attack-move">
                2.2 Attack move
              </ThesisInternalLink>
            </li>
            <li>
              <ThesisInternalLink href="#transport-move">
                2.3 Transport move
              </ThesisInternalLink>
            </li>
          </ul>
        </li>
        <li>
          <ThesisInternalLink href="#state-visualization">
            3. State visualization
          </ThesisInternalLink>
        </li>
        <li>
          <ThesisInternalLink href="#neat-parameters">
            4. NEAT parameters
          </ThesisInternalLink>
        </li>
        <li>
          <ThesisInternalLink href="#neural-net-io">
            5. Neural network input and output
          </ThesisInternalLink>
        </li>
        <li>
          <ThesisInternalLink href="#training-cases">
            6. Training cases
          </ThesisInternalLink>
          <ul className="ml-6">
            <li>
              <ThesisInternalLink href="#first-case">
                6.1 Blue player on an empty map
              </ThesisInternalLink>
            </li>
            <li>
              <ThesisInternalLink href="#second-case">
                6.2 Blue player against easy red
              </ThesisInternalLink>
            </li>
            <li>
              <ThesisInternalLink href="#third-case">
                6.3 Blue player against hard red
              </ThesisInternalLink>
            </li>
            <li>
              <ThesisInternalLink href="#fourth-case">
                6.4 Blue against deterministic red
              </ThesisInternalLink>
            </li>
            <li>
              <ThesisInternalLink href="#fifth-case">
                6.5 Coevolution of blue and red player
              </ThesisInternalLink>
            </li>
          </ul>
        </li>
        <li>
          <ThesisInternalLink href="#conclusions">
            7. Conclusions
          </ThesisInternalLink>
        </li>
        <li>
          <ThesisInternalLink href="#references">
            8. References
          </ThesisInternalLink>
        </li>
      </ul>
    </section>
  )
}