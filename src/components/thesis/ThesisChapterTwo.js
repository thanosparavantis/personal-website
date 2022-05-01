import ThesisHeading from "./ThesisHeading";
import ThesisParagraph from "./ThesisParagraph";
import ThesisSubHeading from "./ThesisSubHeading";
import figure_2_1 from "../../images/thesis/figure_2_1.png";
import figure_2_2 from "../../images/thesis/figure_2_2.png";
import figure_2_3 from "../../images/thesis/figure_2_3.png";
import figure_2_4 from "../../images/thesis/figure_2_4.png";
import figure_2_5 from "../../images/thesis/figure_2_5.png";
import figure_2_6 from "../../images/thesis/figure_2_6.png";
import ThesisFigure from "./ThesisFigure";
import ThesisBulletList from "./ThesisUnorderedList";
import ExternalLink from "../ExternalLink";

export default function ThesisChapterTwo() {
  return (
    <>
      <section>
        <ThesisHeading tag="game-overview">
          2. Game Overview
        </ThesisHeading>
        <ThesisParagraph>
          Measuring the efficiency of neural networks in a turn-based strategy game, requires an environment where
          artificial players can declare moves and evaluate the outcome. For this purpose, a basic game framework was
          prototyped in Python. The framework allows for quick development of game presets with common rulesets that act
          as training grounds. Presets are used to create initial game states, where neural networks can unfold their
          strategy. Once the game is deemed to be over, the end state is evaluated, and the fitness is measured.
        </ThesisParagraph>
        <ThesisParagraph>
          The game consists of two players, blue and red, where each one takes turns with the purpose of defeating one
          another. Each player is placed on a map of hexagons called tiles, that simulate different territories. Tiles
          have specific colors of ownership and a varying number of troops. Blue tiles are owned by the blue player and
          red tiles are owned by the red player. For convenience, gray tiles are assumed to belong in nature.
        </ThesisParagraph>
        <ThesisParagraph>
          Tiles are considered owned when one or more troops are present. For a player to be alive, they must have at
          least one tile on their territory. On each round, players can select one of three moves: production, attack
          and
          transport. A production move would increase the number of troops on a tile. An attack move would launch an
          offense against a neighboring tile of different color. A transport move would transfer troops between
          neighboring tiles of the same color. The objective of the game is to eliminate enemy tiles as soon as
          possible.
        </ThesisParagraph>
        <ThesisParagraph>
          Original inspiration for the game is drawn from the famous board game Settlers of Catan. On that game, players
          start off on a map of hexagons, also called tiles. Initially, settlements are placed throughout the map at the
          edges of each hexagon. Each tile produces a different type of resource throughout the game. The objective is
          similar: collect enough victory points to be declared the winner. There are several types of activities each
          player can follow that reward victory points. One can build roads, settlements, cities, trade with others or
          collect special cards. This board game is inspiring for two reasons: first, there are different types of
          strategies one can follow, and second, it can be simplified to different scales.
        </ThesisParagraph>
        <ThesisParagraph>
          The project was programmed in Python 3, an interpreted language, mainly because of its simplicity and second
          due
          to the vast availability of third-party libraries. The syntax in Python is straightforward with no strict
          rules
          to follow. This allows for rapid development of prototypes that help leverage more work at the task and hand,
          instead of devoting extra time on setting up the core functionality. This project heavily depends on
          the <ExternalLink
          href="https://neat-python.readthedocs.io/en/latest/index.html"><code>neat-python</code></ExternalLink> library [5]. This
          library provides the basic tools and functions in order to setup the concepts
          defined in the NEAT algorithm. Furthermore, we use
          the <ExternalLink href="https://numpy.org/"><code>numpy</code></ExternalLink> and <ExternalLink
          href="https://matplotlib.org/"><code>matplotlib</code></ExternalLink> libraries
          which provide excellent
          tools for vector operations and graphs. We put forward the basic concepts of our board game by creating base
          classes: <code>Game</code>, <code>GameMap</code>, <code>GamePlayer</code>, <code>GameResult</code> and <code>StateParser</code>.
          Finally, all files intended for execution are
          marked with
          the <em>run</em> prefix: <code>run_evolve.py</code>, <code>run_inspect.py</code> and <code>run_stats.py</code>.
          We
          will study all those Python files
          and classes in detail.
        </ThesisParagraph>
      </section>
      <section>
        <ThesisSubHeading tag="production-move">
          2.1 Production move
        </ThesisSubHeading>
        <ThesisParagraph>
          A player can choose to make a production move when they are short on troops. For this move to be applied, a
          specific source tile must be chosen. The tile needs to be owned by the player and must not have reached the
          limit of 20 troops. The outcome of this move is the increase of troops by one. Here is an example:
        </ThesisParagraph>
        <ThesisFigure src={figure_2_1} width="465" height="419" tag="figure-2-1"
                      caption="Figure 2.1 Game state before a production move"
        />
        <ThesisFigure src={figure_2_2} width="465" height="419" tag="figure-2-2"
                      caption="Figure 2.2 Game state after a production move"
        />
      </section>
      <section>
        <ThesisSubHeading tag="attack-move">
          2.2 Attack move
        </ThesisSubHeading>
        <ThesisParagraph>
          A player can choose to make an attack move to conquer enemy tiles. For this move to be made, the player must
          select a tile of origin and a destination tile for the attack. Additionally, the following conditions apply:
        </ThesisParagraph>
        <ThesisBulletList>
          <li>The origin tile must belong to the player.</li>
          <li>The destination tile must belong to the opponent or nature.</li>
          <li>Both origin and destination must be neighboring tiles.</li>
          <li>The number of attackers must be less than or equal to the number of troops on the origin tile.</li>
        </ThesisBulletList>
        <ThesisParagraph>
          When the offense is launched, the attacking troops are deducted from the number of troops on the origin
          tile.
          In case all troops are selected for the attack, the origin tile is considered abandoned and becomes part of
          nature. Depending on the number of attackers and defenders, the outcome is defined as follows:
        </ThesisParagraph>
        <ThesisBulletList>
          <li>If the number of attackers is greater than the number of defenders, the tile becomes part of the
            attacker’s territory. The number of troops on the destination tile changes to that of the difference of
            attackers and defenders.
          </li>
          <li>If the number of attackers is less than the number of defenders, the tile owner stays the same. Like the
            first case, the number of troops on the destination tile changes to that of the difference of defenders
            and
            attackers. This case is considered a <em>suicide</em> attack.
          </li>
          <li>If the number of attackers is equal to the number of defenders, both tiles end up having zero troops,
            therefore becoming part of nature.
          </li>
          <li>If the destination tile is part of nature, it becomes part of the attacker’s territory undefended.</li>
        </ThesisBulletList>
        <ThesisParagraph>
          When the attacker chooses to send all their troops to a tile belonging to nature, this is a special case of
          <em>tile hopping</em>. Because the tile is uncontested, all troops will simply switch from one tile to
          another.
          Players
          can use this type of attack to move freely on the map without conquering extra tiles by leaving troops
          behind.
          This case is not to be confused with the transport move.
        </ThesisParagraph>
        <ThesisParagraph>
          The following example illustrates a scenario where the blue player attempts to launch an offense against the
          red player from tile (2, 3) to tile (3, 3). Because the blue player is attacking with all 19 troops on the
          tile, the red player loses the battle, having only 5 defenders on the red tile. The origin tile (2, 3) is
          left
          with zero troops; hence it is abandoned and becomes part of nature.
        </ThesisParagraph>
        <ThesisFigure src={figure_2_3} width="465" height="419" tag="figure-2-3"
                      caption="Figure 2.3 Game state before a attack move"
        />
        <ThesisFigure src={figure_2_4} width="465" height="419" tag="figure-2-4"
                      caption="Figure 2.4 Game state after a attack move"
        />
      </section>
      <section>
        <ThesisSubHeading tag="transport-move">
          2.3 Transport move
        </ThesisSubHeading>
        <ThesisParagraph>
          A player can choose to make a transport move to reinforce weak tiles and distribute troops throughout the
          map.
          For this move to be selected, the player must choose an origin tile and a destination tile for the
          transport.
          Additionally, the following conditions apply:
        </ThesisParagraph>
        <ThesisBulletList>
          <li>Both origin and destination tiles must belong to the player.</li>
          <li>Both origin and destination must be neighboring tiles.</li>
          <li>The number of troops for transport must be less or equal to the number of troops on the origin tile.
          </li>
          <li>The number of troops for transport plus the number of troops on the destination tile must not exceed the
            20-troop limit.
          </li>
        </ThesisBulletList>
        <ThesisParagraph>
          When a transport is decided, the troops from the origin tiles are deduced and then added to the troops of
          the
          destination tile. If the origin tile is left with no troops, then it is considered abandoned and becomes
          part
          of nature.
        </ThesisParagraph>
        <ThesisParagraph>
          The following example illustrates a case where the blue player decides to transfer troops from origin tile
          (4,
          5) to destination tile (5, 4). Both tiles are neighboring and on the same territory, therefore the transport
          can be made. After the move is applied, the tile (5, 4) has more troops than before, and the tile (4, 5) is
          now part of nature.
        </ThesisParagraph>
        <ThesisFigure src={figure_2_5} width="465" height="419" tag="figure-2-5"
                      caption="Figure 2.5 Game state before a transport move"
        />
        <ThesisFigure src={figure_2_6} width="465" height="419" tag="figure-2-6"
                      caption="Figure 2.6 Game state after a transport move"
        />
      </section>
    </>
  )
}