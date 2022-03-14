import ThesisHeading from "./ThesisHeading";
import ThesisParagraph from "./ThesisParagraph";
import ThesisFigure from "./ThesisFigure";
import figure_3_1 from "../../images/thesis/figure_3_1.png";
import ThesisInternalLink from "./ThesisInternalLink";

export default function ThesisChapterThree() {
  return (
    <section>
      <ThesisHeading tag="state-visualization">
        3. State visualization
      </ThesisHeading>
      <ThesisParagraph>
        For this project, all images of game states are generated using a custom tool. The <code>game_map.py</code> file contains the
        <code>GameMap</code> class which is used to visualize game states in a two-dimensional space. This class is closely coupled
        with the Game class along with parameters provided from the NEAT algorithm. In order to generate the required
        graphics, we utilize <code>matplotlib</code>, a widely used plotting library in Python. Let us begin with an example game
        state:
      </ThesisParagraph>
      <ThesisFigure src={figure_3_1} width="571" height="419" tag="figure-3-1"
                    caption="Figure 3.1 An example game state representation with matplotlib."
      />
      <ThesisParagraph>
        In <ThesisInternalLink href="#figure-3-1">Figure 3.1</ThesisInternalLink> we observe an example game state and how it is represented using the <code>GameMap</code> class. There are
        three main components: <em>title</em>, <em>subtitle</em> and the <em>map</em>. The <em>title</em> is the first element of the visualization, and it
        contains vital information about what is depicted on the <em>map</em>. For our case, we see that the title reads "<code>Nobody
        won the game!</code>", thus we know that we are looking at the end state of a game. In other occasions, we may see
        "<code>Game Overview</code>" which is the initial state, or descriptions of individual moves applied by the two players.
        Examples of player moves applied are described as: "<code>Production Move (x, y)</code>", "<code>Attack Move (x<sub>1</sub>, y<sub>1</sub>) → (x<sub>2</sub>, y<sub>2</sub>)
        with z troops</code>" and "<code>Transport Move (x<sub>1</sub>, y<sub>1</sub>) → (x<sub>2</sub>, y<sub>2</sub>) with z troops</code>" where <code>x</code>, <code>x<sub>1</sub></code>, <code>x<sub>2</sub></code>, <code>y</code>, <code>y<sub>1</sub></code>, <code>y<sub>2</sub></code> are tile
        coordinates and <code>z</code> is the amount of selected troops. The subtitle contains supplementary information that help
        understand further the current state of the game. We have three items: the genome ids, rounds and fitness. The
        genome ids are directly taken from the NEAT library and inform us about which genomes are playing the game. The
        fitness metric is for blue and red and is the overall fitness up to that round. The <code>create_title()</code> and
        <code>create_subtitle()</code> methods are responsible for generating the title and subtitle text respectively. Finally, we
        have the <em>map</em> which is the final and most complex component.
      </ThesisParagraph>
      <ThesisParagraph>
        In order to generate a two-dimensional map of the game state, we call the <code>render()</code> method. This method makes the
        initial calls to matplotlib in order to create a new plot with the rendering. Once the setup is done, we make
        individual calls to the <code>render_tile()</code> method for each tile to be displayed on the map. All tiles are represented
        using the <code>GameMapTile</code> class imported from the <code>game_map_tile.py</code> file. By looking at the attributes of this class,
        we have four notable tile components: the tile background color, the number of troops, the tile coordinates and
        the encoding value. These components are used to visualize each tile according to the current game state. The
        <code>GameMap</code> class holds a <code>game_map_tiles</code> dictionary that maps tile coordinates to <code>GameMapTile</code> instances. When the
        <code>render_tile()</code> method is called, the individual tile components are rendered only when changes are detected.
        Therefore, when the method is first called, the tile is rendered as a whole, but afterwards, only the required
        components are updated according to game state. This is achieved by storing <code>GameMapTile</code> instances in the
        dictionary and checking their attributes for updates later in the execution.
      </ThesisParagraph>
      <ThesisParagraph>
        When the <code>render()</code> method is called, the game map is displayed in a separate pop-up window that blocks main
        thread execution. This is a limitation with matplotlib because the plot must run on the main thread. In order to
        make things simple and convenient, the <code>save()</code> method is used instead to store the map renderings as .png files.
        This is utilized in the <code>run_inspect.py</code> file, where individual games played by genomes can be re-run and rendered
        in the <code>games/</code> folder. The rendered images depict round per round progress of a game and are saved as
        "<code>round-x-player-y.png</code>" where <code>x</code> is the round number and <code>y</code> is the player id. Conveniently, when each round is
        saved as an image, we can go both back and forth between game states and inspect the gameplay progress.
      </ThesisParagraph>
    </section>
  )
}