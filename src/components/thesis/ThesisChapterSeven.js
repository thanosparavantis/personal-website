import ThesisHeading from "./ThesisHeading";
import ThesisParagraph from "./ThesisParagraph";

export default function ThesisChapterSeven() {
  return (
    <section>
      <ThesisHeading tag="conclusions">
        7. Conclusions
      </ThesisHeading>
      <ThesisParagraph>
        On this project, we studied applications of the NEAT algorithm by creating a simple two-dimensional board game
        in Python. We laid some basic rules and moves for the two players and we setup five different training cases. We
        used popular third-party libraries from the Python community that helped with the rapid development of the game.
        After running NEAT for a considerable amount of time, we have made remarks on the performance of our experiment.
        The four training cases placed blue against a deterministic opponent and was able to approximate the fitness
        function in a satisfactory level. The fifth training case tested both blue and red in a coevolutionary
        environment. Both players were tasked with defeating one another, however we observed the development of a
        pattern of cooperation. All cases were of varying difficulty, each one with a unique twist. It appears that the
        neural networks were most efficient in cases where the opponent remained static throughout the game.
      </ThesisParagraph>
      <ThesisParagraph>
        This simple board game required a fair amount of computational power, due to the vast number of games that were
        played concurrently. This factor is limiting, as the training environment can always make use of better
        hardware. We used the <code>multithreading</code> package, which helped significantly with the training process. However, as
        we know, Python is an interpreted language hence the processing power is limited. Rewriting the entire project
        in a compiled language such as C++ could offer major performance improvements. Furthermore, different types of
        fitness functions could be tested for all training cases. Perhaps a difference in fitness may render more
        effective results than the ones presented. Lastly, alternative vector representations could be tested for
        encoding game state, as well as decoding moves from neural network outputs.
      </ThesisParagraph>
    </section>
  )
}