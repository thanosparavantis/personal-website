import ThesisHeading from "./ThesisHeading";
import ThesisParagraph from "./ThesisParagraph";
import ThesisFigure from "./ThesisFigure";
import figure_6_1 from "../../images/thesis/figure_6_1.png";
import figure_6_2 from "../../images/thesis/figure_6_2.png";
import figure_6_3 from "../../images/thesis/figure_6_3.png";
import figure_6_4 from "../../images/thesis/figure_6_4.png";
import figure_6_5 from "../../images/thesis/figure_6_5.png";
import figure_6_6 from "../../images/thesis/figure_6_6.png";
import figure_6_7 from "../../images/thesis/figure_6_7.png";
import figure_6_8 from "../../images/thesis/figure_6_8.png";
import figure_6_9 from "../../images/thesis/figure_6_9.png";
import figure_6_10 from "../../images/thesis/figure_6_10.png";
import figure_6_11 from "../../images/thesis/figure_6_11.png";
import figure_6_12 from "../../images/thesis/figure_6_12.png";
import figure_6_13 from "../../images/thesis/figure_6_13.png";
import figure_6_14 from "../../images/thesis/figure_6_14.png";
import figure_6_15 from "../../images/thesis/figure_6_15.png";
import figure_6_16 from "../../images/thesis/figure_6_16.png";
import figure_6_17 from "../../images/thesis/figure_6_17.png";
import figure_6_18 from "../../images/thesis/figure_6_18.png";
import figure_6_19 from "../../images/thesis/figure_6_19.png";
import figure_6_20 from "../../images/thesis/figure_6_20.png";
import figure_6_21 from "../../images/thesis/figure_6_21.png";
import ThesisUnorderedList from "./ThesisUnorderedList";
import ThesisSubHeading from "./ThesisSubHeading";
import ThesisInternalLink from "./ThesisInternalLink";

export default function ThesisChapterSix() {
  return (
    <>
      <section>
        <ThesisHeading tag="training-cases">
          6. Training cases
        </ThesisHeading>
        <ThesisParagraph>
          On this project, we study applications of the NEAT algorithm by allowing networks to train on five different
          game presets. The first case puts the blue player into the test, by initializing the game with an empty map
          for
          blue with the absence of the red player. The second and third cases introduce a challenge for blue, by placing
          red tiles on the map, without allowing the red player to take turns. In fourth case, we allow both players to
          play, but the red player selects moves based on a deterministic move selection algorithm. Finally, we coevolve
          both blue and red players, by making neural networks play against each other.
        </ThesisParagraph>
        <ThesisParagraph>
          As briefly mentioned in Game overview, in order to create training cases that share common rules, we use game
          presets. The <code>game_presets.py</code> file includes four classes based on the <code>Game</code> class: <code>BlueExpandAlone</code>,
          <code>BlueBeatRedEasy</code>, <code>BlueBeatRedHard</code> and <code>BlueAgainstRed</code>. These subclasses encode the cases mentioned respectively,
          by implementing custom methods for map initialization, game settings, fitness functions and win conditions.
          The
          fifth case is treated different, as it is a separate project on its own (based on the original) due to the
          vast
          differences in implementation.
        </ThesisParagraph>
        <ThesisParagraph>
          The <code>run_evolve.py</code> is a runnable Python file that is used to start or resume the execution of the NEAT
          algorithm.
          By providing an optional preset flag (<code>-p, --preset [1, 2, 3, 4]</code>), we choose which type of preset we want to
          evolve. As mentioned in NEAT parameters, we initialize the learning algorithm with 100 neural networks for an
          infinite number of generations to run. After each generation, we save the current progress in a checkpoint
          file,
          inside folders starting with the <code>checkpoint</code> prefix. Furthermore, we record information about game runs in JSON
          format. These files are included in folders starting with the <code>game-result</code> prefix. Lastly, the entire gameplay
          process for each fitness evaluation is done using the <code>multithreading</code> library in Python. That way we can speed
          up
          the process by processing multiple games in different CPU cores on the host computer.
        </ThesisParagraph>
        <ThesisParagraph>
          Each training case has different win criteria; however, all matches are subject to termination if the game is
          deemed to be stale. When one state is repeated more than three times, then the game is stopped. This mechanism
          is present, in order to prevent neural networks from applying the same move repeatedly without any purpose.
        </ThesisParagraph>
      </section>
      <section>
        <ThesisSubHeading tag="first-case">
          6.1. Blue player on an empty map
        </ThesisSubHeading>
        <ThesisParagraph>
          We start with a simple case, where the blue player is placed on the upper left corner of an empty map. The
          red
          player is absent, and the end goal for blue is to take over the entire map as soon as possible. There is no
          competition for blue, therefore it is only a matter of learning how to play game. The initial state for all
          neural networks in the population is depicted in <ThesisInternalLink href="#figure-6-1">Figure 6.1</ThesisInternalLink>.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_1} width="465" height="419" tag="figure-6-1"
                      caption="Figure 6.1 The initial state of the first training case"
        />
        <ThesisParagraph>
          The round limit is set to 5,000 and the blue player wins if the entirety of the map is conquered. We define
          a
          fitness function for this case with the following criteria:
        </ThesisParagraph>
        <ThesisUnorderedList>
          <li>For all cases, claim up to 50% of the maximum fitness depending on the number of tiles you have
            conquered
            from 36 total.
          </li>
          <li>If blue player won, claim up to 50% of the maximum fitness depending on the number of rounds the game
            lasted before conquering the entirety of the map.
          </li>
        </ThesisUnorderedList>
        <ThesisParagraph>
          The two fitness component values are squared and then summed, so we can build up a higher fitness payoff as
          the
          blue player converges towards end goal. We end up with a percentage and the maximum ideal fitness of 100%.
        </ThesisParagraph>
        <ThesisParagraph>
          After running for 80 generations, the most fit network has a fitness payoff of <strong>79.7%</strong>, conquering the
          entirety
          of
          the map after playing for 1,140 rounds. The topology of the neural network contains 36 input neurons, 7
          hidden
          neurons, 4 output neurons and 150 connections. The second and third best neural network complete the task
          after
          1,754 and 1,843 rounds, respectively. In the following graph, we observe the fitness progression through
          generations. The upper blue plot depicts the fitness of the most fit network, and the lower light blue plot
          depicts the average fitness of the entire population.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_2} width="467" height="265" tag="figure-6-2"
                      caption="Figure 6.2 Fitness progression of the first training case"
        />
        <ThesisParagraph>
          The most-fit network developed a gameplay style that involved 568 production moves, 43 attack moves and 529
          transport moves. From the 1,140 moves in total, 636 moves were guided, meaning that the program used the
          correction gate for most of the moves in order to end up on valid ones.
        </ThesisParagraph>
        <ThesisParagraph>
          In order to observe the learning curve of the population, let us look at the differences between the first
          and
          second best network. We render the game state of round 1140 – which is the final game state for the most fit
          network – to note the differences in map ownership. Looking at <ThesisInternalLink href="#figure-6-3">Figure 6.3</ThesisInternalLink> and <ThesisInternalLink href="#figure-6-4">Figure 6.4</ThesisInternalLink> it is evident that
          in
          the first case, the game has already ended since blue player conquered all 36 tiles, whereas in the second
          case,
          the blue player has only conquered 22 tiles. This difference in gameplay makes the first player considerably
          better than the second one, as both the number of tiles and rounds are fitness components. The major
          difference
          in fitness (79.7 and 18.6) is caused because of the rounds component, as it is rewarded only when blue
          player
          wins.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_3} width="428" height="386" tag="figure-6-3"
                      caption="Figure 6.3 End state of the most fit network for the first training case"
        />
        <ThesisFigure src={figure_6_4} width="428" height="386" tag="figure-6-4"
                      caption="Figure 6.4 Example state of the second-best network for the first training case"
        />
      </section>
      <section>
        <ThesisSubHeading tag="second-case">
          6.2. Blue player against easy red
        </ThesisSubHeading>
        <ThesisParagraph>
          The second case introduces a different challenge for blue, by adding the red opponent on the map. The red
          player remains static, without reacting to any moves applied by the blue player. The end goal for blue is to
          eliminate all red tiles as soon as possible. In <ThesisInternalLink href="#figure-6-5">Figure 6.5</ThesisInternalLink> we look at the initial map setup where the red
          player owns 6 tiles with 40 troops.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_5} width="428" height="387" tag="figure-6-5"
                      caption="Figure 6.5 The initial state of the second training case"
        />
        <ThesisParagraph>
          The round limit is set to 500 and the blue player wins only when all 6 tiles owned by red are eliminated. We
          define a fitness function for this case with the following criteria:
        </ThesisParagraph>
        <ThesisUnorderedList>
          <li>For all cases, claim up to 30% of the maximum fitness depending on the number of tiles blue has
            conquered from red.
          </li>
          <li>For all cases, claim up to 20% of the maximum fitness depending on the number of troops blue has killed
            from red.
          </li>
          <li>If blue player won, claim 20% for the victory.</li>
          <li>If blue player won, claim up to 30% of the maximum fitness depending on the number of rounds the game
            lasted before eliminating red.
          </li>
        </ThesisUnorderedList>
        <ThesisParagraph>
          The final fitness is the sum of the four individual components. We end up with a percentage and the maximum
          ideal fitness of 100%.
        </ThesisParagraph>
        <ThesisParagraph>
          After running for 261 generations, the most fit network has a fitness payoff of <strong>93.8%</strong>, defeating red after
          playing for 102 rounds. The topology of the neural network contains 36 input neurons, 6 hidden neurons, 4
          output neurons and 114 connections. The second and third best neural network complete the task after 108 and
          136 rounds, respectively. In the following graph, we observe the fitness progression through generations.
          The upper blue plot depicts the fitness of the most fit network, and the lower light blue plot depicts the
          average fitness of the entire population.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_6} width="467" height="265" tag="figure-6-6"
                      caption="Figure 6.6 Fitness progression of the second training case"
        />
        <ThesisParagraph>
          Since the number of moves is relative to the number of rounds, it is evident that the blue player is more
          than capable of defeating the red player. The most-fit network managed to complete the task, with just 66
          production moves, 28 attack moves and 8 transport moves.
        </ThesisParagraph>
        <ThesisParagraph>
          Like the comparisons from the first case, let us look at the first, second and third best network. We render
          the game state for the final round 102, in order to look at the differences in gameplay. Looking at <ThesisInternalLink href="#figure-6-7">Figure
          6.7</ThesisInternalLink> , <ThesisInternalLink href="#figure-6-8">Figure 6.8</ThesisInternalLink> and <ThesisInternalLink href="#figure-6-9">Figure 6.9</ThesisInternalLink> we notice that the first network has successfully defeated red. However, the
          second and third network have yet to complete the task after the round of interest. Furthermore, on the
          second case there is 1 red tile left. Likewise, on the third case, there are 4 red tiles left.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_7} width="427" height="387" tag="figure-6-7"
                      caption="Figure 6.7 End state of the most fit network for the second training case"
        />
        <ThesisFigure src={figure_6_8} width="427" height="386" tag="figure-6-8"
                      caption="Figure 6.8 Example state of the second-best network for the second training case"
        />
        <ThesisFigure src={figure_6_9} width="427" height="387" tag="figure-6-9"
                      caption="Figure 6.9 Example state of the third-best network for the second training case"
        />
      </section>
      <section>
        <ThesisSubHeading tag="third-case">
          6.3. Blue player against hard red
        </ThesisSubHeading>
        <ThesisParagraph>
          The third case introduces a challenge harder than the one described in the second case. The blue player is
          given the task of eliminating red; however, the number of red tiles is significantly larger. The red player
          remains static throughout the game, without reacting to any of the moves applied by blue. In <ThesisInternalLink href="#figure-6-10">Figure 6.10</ThesisInternalLink> we
          look at the initial setup where the red player opponent starts off with 19 tiles and 222 troops.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_10} width="427" height="387" tag="figure-6-10"
                      caption="Figure 6.10 The game state of the third training case"
        />
        <ThesisParagraph>
          The round limit is set to 5,000 and the blue player wins only when all 22 tiles owned by red are eliminated.
          The upper round limit is greater compared to the second case, due to the extra difficulty of this task. We
          define a fitness function with the following criteria:
        </ThesisParagraph>
        <ThesisUnorderedList>
          <li>For all cases, claim up to 30% of the maximum fitness depending on the number of tiles blue has
            conquered from red.
          </li>
          <li>For all cases, claim up to 20% of the maximum fitness depending on the number of troops blue has killed
            from red.
          </li>
          <li>If blue player won, claim 20% for the victory.</li>
          <li>If blue player won, claim up to 30% of the maximum fitness depending on the number of rounds the game
            lasted before eliminating red.
          </li>
        </ThesisUnorderedList>
        <ThesisParagraph>
          The final fitness is the sum of the four individual components. We end up with a percentage and the maximum
          ideal fitness of 100%.
        </ThesisParagraph>
        <ThesisParagraph>
          After running for 128 generations, the most fit network has a fitness payoff of <strong>93.8%</strong>, defeating red after
          playing for 1,020 rounds. The topology of the neural network contains 36 input neurons, 2 hidden neurons, 4
          output neurons and 116 connections. The second and third best neural network complete the task after 1,065
          and 1,101 rounds, respectively. In the following graph, we observe the fitness progression through
          generations. The upper blue plot depicts the fitness of the most fit network, and the lower light blue plot
          depicts the average fitness of the entire population.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_11} width="467" height="265" tag="figure-6-11"
                      caption="Figure 6.11 Fitness progression of the third training case"
        />
        <ThesisParagraph>
          Despite the challenge, the most-fit network managed to beat the red player after 313 production moves, 109
          attack moves and 598 transport moves. The blue player focused on eliminating red after building up the
          necessary forces. Since the red player is not reacting to any moves, blue has all the time to build up
          without the need of defending attacks or considering changes in red forces.
        </ThesisParagraph>
        <ThesisParagraph>
          Let us look at the first, second and third best network, like the comparisons from previous cases. We render
          the game state for the final round 1,020 in order to look at the differences in gameplay. Looking at <ThesisInternalLink href="#figure-6-12">Figure
          6.12</ThesisInternalLink>, <ThesisInternalLink href="#figure-6-13">Figure 6.13</ThesisInternalLink> and <ThesisInternalLink href="#figure-6-14">Figure 6.14</ThesisInternalLink> we notice that the first network has successfully defeated red. However,
          the second and third network have yet to complete the task after the round of interest. Furthermore, on the
          second case there are 10 red tiles left. Likewise, on the third case, there are 13 red tiles left.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_12} width="430" height="397" tag="figure-6-12"
                      caption="Figure 6.12 End state of the most fit network for the third training case"
        />
        <ThesisFigure src={figure_6_13} width="429" height="396" tag="figure-6-13"
                      caption="Figure 6.13 Example state of the second-best network for the third training case"
        />
        <ThesisFigure src={figure_6_14} width="431" height="397" tag="figure-6-14"
                      caption="Figure 6.14 Example state of the third-best network for the third training case"
        />
      </section>
      <section>
        <ThesisSubHeading tag="fourth-case">
          6.4. Blue against deterministic red
        </ThesisSubHeading>
        <ThesisParagraph>
          The fourth case differs from the first three scenarios, as the red player no longer remains static
          throughout the game. Based on the game state of each round, red selects an appropriate move based on a
          deterministic algorithm. The blue player is controlled with a neural network and is tasked to eliminate the
          red player from the map. For this case, we utilize the <code>Generator</code> class from the <code>numpy</code> package in order to
          create a deterministic random number generator. That way, for all training cases, the red player is
          predictable as it will always react the same when a certain game state is evaluated. Let us look at the
          initial state depicted in <ThesisInternalLink href="#figure-6-15">Figure 6.15</ThesisInternalLink>.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_15} width="428" height="386" tag="figure-6-15"
                      caption="Figure 6.15 Initial state for the fourth training case"
        />
        <ThesisParagraph>
          The round limit is set to 500. During a match, the blue player always takes turns from neural network
          activations, whereas the red player selects moves based on certain criteria. The available pool of next
          moves is generated for red, by looking at the current game state for each round. We define the following
          move selection criteria for red:
        </ThesisParagraph>
        <ThesisUnorderedList>
          <li>If the number of blue tiles is greater than the number of red tiles and red player can make an attack
            move, select a random attack move.
          </li>
          <li>Otherwise, if the number of red troops is less than 20 or less than the number of blue troops and red
            player can make a production move, select a random production move.
          </li>
          <li>Finally, if the criteria above are not satisfied, select a random move.</li>
        </ThesisUnorderedList>
        <ThesisParagraph>
          Now that we have laid the ground rules for red, let us look at the fitness function for blue:
        </ThesisParagraph>
        <ThesisUnorderedList>
          <li>For all cases, claim up to 50% of the maximum fitness depending on the number of tiles blue has
            conquered overall.
          </li>
          <li>If blue player won, claim up to 50% of the maximum fitness depending on the number of rounds the game
            lasted before eliminating red.
          </li>
        </ThesisUnorderedList>
        <ThesisParagraph>
          The final fitness is the sum of the two individual components. We end up with a percentage and the maximum
          ideal fitness of 100%.
        </ThesisParagraph>
        <ThesisParagraph>
          After running for 162 generations, the most fit network has a fitness payoff of <strong>65.1%</strong>, defeating red after
          playing for 99 rounds. The topology of the neural network contains 36 input neurons, 2 hidden neurons, 4
          output neurons and 137 connections. The second and third best neural network complete the task after 61 and
          84 rounds, respectively. In the following graph, we observe the fitness progression through generations. The
          upper blue plot depicts the fitness of the most fit network, and the lower light blue plot depicts the
          average fitness of the entire population.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_16} width="467" height="264" tag="figure-6-16"
                      caption="Figure 6.16 Fitness progression of the fourth training case"
        />
        <ThesisParagraph>
          It turns out that the blue player was more than able to defeat red. Considering that blue was expected to
          win the game and conquer as many tiles as possible, the result is satisfactory. After 62 production moves,
          31 attack moves and 6 transport moves, 73 of which were guided, blue has defeated red and conquered a total
          of 18 tiles. The second and third best networks won with 15 and 16 tiles, respectively. In <ThesisInternalLink href="#figure-6-17">Figure 6.17</ThesisInternalLink> we
          look at the end state for the most fit network.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_17} width="428" height="387" tag="figure-6-17"
                      caption="Figure 6.17 The end state of the most fit network for the fourth training case"
        />
      </section>
      <section>
        <ThesisSubHeading tag="fifth-case">
          6.5. Coevolution of blue and red player
        </ThesisSubHeading>
        <ThesisParagraph>
          For the fifth and final training case, we introduce two neural networks for blue and red, respectively. In
          all previous cases, blue was the only player controlled with a neural network. Now, we task two neural
          networks to play against each other, until one eliminates the other. We go through a process of coevolution,
          where both populations repeatedly play games against each other, striving for a large fitness payoff. Let us
          study the implementation details, first by looking at the initial state depicted in <ThesisInternalLink href="#figure-6-18">Figure 6.18</ThesisInternalLink>.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_18} width="448" height="387" tag="figure-6-18"
                      caption="Figure 6.18 The initial state for the fifth training case"
        />
        <ThesisParagraph>
          The blue player – just like the previous training cases - starts on the upper left corner and the red player
          on the lower right corner. In order to evaluate individual fitness, we must first go through a process of
          matching every network on the blue population with a network on the red population. Since the two
          populations can grow or shrink in size due to the reproduction of species from generation to generation, we
          have three distinct cases. If the two populations are equal, then blue and red networks can be matched one
          to one. If the blue population is larger, then the blue networks are matched with the red ones, and the
          extra networks are matched with a random network from red. Similarly, if the red population is larger, then
          red networks are matched with blue ones, and the extra networks are randomly matched with blue networks.
        </ThesisParagraph>
        <ThesisParagraph>
          As mentioned in the introductory of this chapter, we process games in a multithreaded manner. This gives us
          great flexibility, as we can run two populations and evaluate individual fitness in parallel as games are
          concluded. We initialize two populations for blue and red, and for each generation, we have a one-to-one
          match for all networks. Once all games in a generation have ended, fitness is assigned for the blue and red
          networks as if they were playing solo. The networks are not aware of the presence of other networks. The
          only difference is visible in game state, as it can now be altered in a non-deterministic manner. Let us
          look at the fitness function for this training case.
        </ThesisParagraph>
        <ThesisParagraph>
          Instead of calculating the overall fitness at the end of each game, we now evaluate fitness per move. This
          is done so we can search for desired behavior by inspecting every detail of the player’s strategy. At the
          end of each game, we calculate the final fitness by taking the average of the per-move fitness for both blue
          and red. This type of fitness is based on four components: tiles gained, troops gained, enemy tiles
          conquered, enemy troops killed. These four components express 100 different outcomes with the application of
          any type of move. For example, selecting a production move would encode vector <code>(0, 1, 0, 0)</code> meaning that the
          second component for troops gained is set to 1. Or, if the player selects an attack move, the resulting
          vector <code>(0, -5, 0, -5)</code> suggests that the player launched an attack that led to 5 troop kills for both
          players.
        </ThesisParagraph>
        <ThesisParagraph>
          For each vector we assign a fitness payoff depending on how beneficial the outcome of the move turned out.
          We start with the lowest fitness payoff for vector <code>(-1, 0, 0, 0)</code> and end with the highest fitness payoff for
          vector <code>(1, -19, -1, -19)</code>. The worst possible move for a player is to lose a tile after applying a move,
          whereas the best possible move is to conquer an enemy tile after killing a maximum of 19 of their troops.
          The main difference compared to other training cases, is that instead of calculating a predefined percentage
          of an end goal (ex. conquering red’s static tiles), we now evaluate the performance of individual moves. In
          order to prevent games from progressing infinitely, we set an upper round limit of 5,000 rounds. Since both
          players are given the same task, it is apparent that if one player evolves to make better moves, eventually
          the opponent will also improve. Both players are set to maximize fitness, therefore the two players drive
          each other into making better moves.
        </ThesisParagraph>
        <ThesisParagraph>
          After running for 25 generations, the blue most fit network has a fitness payoff of 231 and the red most fit
          network has a fitness payoff of 191. Both blue and red networks played for 5,000 rounds. The topology of the
          blue network contains 36 input neurons, 3 hidden neurons, 4 output neurons and 146 connections. Similarly,
          the red network has 36 input neurons, 3 hidden neurons, 4 output neurons and 136 connections. In the
          following graph, we observe the fitness progression through generations. The upper blue and red plots depict
          the fitness of the most fit blue and red networks. The lower light blue and red plots depict the average
          fitness of the blue and red population.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_19} width="475" height="265" tag="figure-6-19"
                      caption="Figure 6.19 Fitness progression of the fifth training case"
        />
        <ThesisParagraph>
          By looking at <ThesisInternalLink href="#figure-6-19">Figure 6.19</ThesisInternalLink> we notice an interesting spike on the 15<sup>th</sup> generation. The most fit individuals
          peaked at a fitness of 414 for blue and 412 for red. Why is it that the fitness dropped right after this
          generation? There may be plenty of reasons as to why this happened, the most probable case being a mutation
          on either blue or red, that changed the course of the next games. If we compare the moves of most-fit
          individuals from the 15<sup>th</sup> and 25<sup>th</sup> generation, we notice that both players in the 15<sup>th</sup> generation launched a
          considerable number of attacks compared with the 25<sup>th</sup> generation. Furthermore, the transport moves were
          chosen way less compared to the other two moves. For the 15<sup>th</sup> generation blue had 2,881 production moves,
          1,630 attack moves, and 481 transport moves. Red had 2,867 production moves, 1,322 attack moves and 810
          transport moves. For the 25<sup>th</sup> generation blue had 1,106 production moves, 1,053 attack moves and 2,841
          transport moves. Finally, red had 1,294 production moves, 260 attack moves and 3,445 transport moves.
        </ThesisParagraph>
        <ThesisParagraph>
          By looking at the gameplay between the most-fit blue and red genomes from the 15<sup>th</sup> generation, we notice
          something interesting. Let us investigate further by rendering two rounds of interest: 2,500 and 5,000 in <ThesisInternalLink href="#figure-6-20">Figure 6.20</ThesisInternalLink> and <ThesisInternalLink href="#figure-6-21">Figure 6.21</ThesisInternalLink>, respectively.
        </ThesisParagraph>
        <ThesisFigure src={figure_6_20} width="488" height="386" tag="figure-6-20"
                      caption="Figure 6.20 Example intermediate state for the fifth training case"
        />
        <ThesisFigure src={figure_6_21} width="488" height="387" tag="figure-6-21"
                      caption="Figure 6.21 Example end state for the fifth training case"
        />
        <ThesisParagraph>
          We notice that the game state from round 2,500 up to round 5,000 is slightly different yet almost the same.
          However, the only real metric that is changing is the fitness payoff. By looking at the sequence of moves
          applied from both players, there seems to be a pattern that suggests cooperation. We expected that the blue
          player would be the rival of red, but it appears that instead of fighting over dominance, the neural
          networks developed a different approach. This is the case for the 15<sup>th</sup> generation, as the two players
          instead of fighting, they have discovered a strategy that exploits fitness and developed a pattern of
          cooperation. Both players receive a fitness payoff by either gaining or losing tiles and troops. In the long
          run, we realize with surprise that both players benefit from each other instead of one trying to harm one
          other.
        </ThesisParagraph>
        <ThesisParagraph>
          These patterns of cooperation have been observed, whilst trying different types of fitness functions. For
          example, if we were to reward transport moves, it is possible that a neural network would rise in fitness by
          exploiting this payoff. There is no rule in the game that prevents one from transporting troops back and
          forth between tiles, therefore, if the transport move is rewarding, it can and eventually will be exploited.
          The same can be concluded for attack moves, but with a twist. One may not be able to attack themselves,
          however, no one is stopping players from attacking one another. Since there is no pre-programmed sense of
          rivalry nor competition, this feature can also be exploited to an extent. Both the blue and red player can
          mutually agree on a strategy of attacking one another; and then rebuilding, only for the purpose of stealing
          the fitness payoff.
        </ThesisParagraph>
        <ThesisParagraph>
          Originally, when designing the fitness function for this scenario, the intent was that the blue player would
          start attacking red and vice versa. However, this is how it could work, and not how it works. The objective
          of the NEAT algorithm for our project is to evolve neural networks capable of maximizing the given fitness
          function. If that function allows for cooperation between the two players, then it is certain that at some
          point this behavior will be tested in action. Even though games can be terminated when deemed to be stale,
          it appears that the neural networks have not only cooperated but also found a way of keeping the game alive.
          The result may have not been desired, but since the fitness of both networks significantly increased,
          technically the algorithm did work.
        </ThesisParagraph>
      </section>
    </>
  )
}