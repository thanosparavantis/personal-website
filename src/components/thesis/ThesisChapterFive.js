import ThesisHeading from "./ThesisHeading";
import ThesisParagraph from "./ThesisParagraph";
import ThesisFigure from "./ThesisFigure";
import figure_5_1 from "../../images/thesis/figure_5_1.png";
import figure_5_2 from "../../images/thesis/figure_5_2.png";
import figure_5_3 from "../../images/thesis/figure_5_3.png";
import figure_5_4 from "../../images/thesis/figure_5_4.png";
import ThesisInternalLink from "./ThesisInternalLink";

export default function ThesisChapterFive() {
  return (
    <section>
      <ThesisHeading tag="neural-net-io">
        5. Neural network input and output
      </ThesisHeading>
      <ThesisParagraph>
        For the purposes of this project, all neural networks are initialized with 36 input neurons, no hidden layers
        and 4 output neurons. Inputs are initially fully connected with all outputs. The <code>state_parser.py</code> file contains
        the <code>StateParser</code> class which is responsible for encoding game state input for neural networks and decoding player
        moves from neural networks. The <code>encode_state()</code> method captures the current game state and returns a vector of
        values in <code>[0, 1]</code>. This vector holds encoded values for each tile of the map. These values are calculated by
        taking the number of troops present on the tile and dividing that value with the maximum number of troops on
        each tile. The value is positive if the tile is owned by the blue player and negative if owned by the red
        player. Let us demonstrate an example:
      </ThesisParagraph>
      <ThesisFigure src={figure_5_1} width="465" height="419" tag="figure-5-1"
                    caption="Figure 5.1 Example game state of players starting from top left and bottom right"
      />
      <ThesisParagraph>
        As observed in <ThesisInternalLink href="#figure-5-1">Figure 5.1</ThesisInternalLink> each tile holds an encoded value in the game state representation. For tile <code>(0, 0)</code> we
        see that the value is <code>0.05</code> and for tile <code>(5, 5)</code> the value is <code>-0.05</code>. We know that the maximum number of troops
        allowed on each tile is <code>20</code>, therefore if we do the division, the encoded value is correct. The red tile holds a
        negative value, since it is owned by the red player. As the rest of the map belongs to nature, we observe that
        the encoded values are zero, since there are no troops present on grey tiles.
        Considering the size of the map, the neural network receives a vector that holds 36 values:
      </ThesisParagraph>
      <ThesisParagraph justify={false}>
        <code>
          [0.05 0.0 0.0 0.0 &hellip; 0.0 -0.05]
        </code>
      </ThesisParagraph>
      <ThesisParagraph>
        Let us review another example, where blue and red tiles are spread across the map.
      </ThesisParagraph>
      <ThesisFigure src={figure_5_2} width="465" height="419" tag="figure-5-2"
                    caption="Figure 5.2 Example game state after a considerable number of rounds"
      />
      <ThesisParagraph>
        In <ThesisInternalLink href="figure-5-2">Figure 5.2</ThesisInternalLink> we observe the state of a game after a considerable number of rounds. Both players are spread
        across the map, therefore it is worth looking at how the game state is depicted in vector form:
      </ThesisParagraph>
      <ThesisParagraph justify={false}>
        <code>
          [0.95 1.0 1.0 1.0 &hellip; -1.0 0.0 -1.0 &hellip; 0.0]
        </code>
      </ThesisParagraph>
      <ThesisParagraph>
        This is essentially what the neural networks see. The current game state is depicted in vector form, and then
        passed on as input every time a new move is requested. Positive and negative representations help to distinct
        the difference in tile ownership. A zero value always encodes a tile owned by nature, whereas a positive or
        negative number signifies that the tile is owned.
      </ThesisParagraph>
      <ThesisParagraph>
        The <code>decode_state()</code> method is used to decode the output of neural networks. It accepts a one-dimensional vector
        containing values in <code>[0, 1]</code>. The values originate from the output neurons of neural networks and are translated
        to valid game moves. The output vector is comprised of four different components: production flag, source tile,
        target tile and troop count. These components are extracted and parsed in different ways. The production flag is
        a boolean value that signifies whether the output should be treated as a production move. The source and target
        tile components represent the tile of origin and destination for cases of attack and transport moves. Finally,
        the troop count is the number of troops to be selected from the source tile.
      </ThesisParagraph>
      <ThesisParagraph>
        In order to extract these components, we use the <code>decode_prod_flag()</code>, <code>decode_tile()</code> and <code>decode_troops()</code> methods.
        The first method is used to parse the production flag. It performs a single check, whether the output value is
        smaller or equal to <code>0.5</code>. We end up with the desired boolean value. The second method is used to parse the source
        and target tile components. It divides the <code>[0, 1]</code> space to <code>36</code> distinct subspaces with lower and upper bounds. We
        then compare the output with each space to decide which one of the <code>36</code> tiles should be selected. Similarly, the
        third method maps the <code>[0, 1]</code> space to <code>20</code> distinct subspaces, which is the maximum number of troops that can be
        selected.
      </ThesisParagraph>
      <ThesisParagraph>
        The next step is to decide which type of move is desired, depending on the individual components that are
        extracted. There are four types of move enumerations: <code>IdleMove</code>, <code>ProductionMove</code>, <code>AttackMove</code> and <code>TransportMove</code>.
        Depending on which one will be selected, the appropriate game move is applied. First, if the production flag is
        set to <code>True</code> and a potential production move is valid (according to the game rules), then the <code>ProductionMove</code> is
        selected. Next, if the previous choice is not plausible, we check for a potential attack or transport move. If
        one of the two can be made, the <code>AttackMove</code> or <code>TransportMove</code> is selected, respectively. Finally, if none of the
        previous options are valid, we select the <code>IdleMove</code> enumeration, and the move is considered invalid. The validity
        checks are performed by calling the <code>is_production_move_valid()</code>, <code>is_attack_move_valid()</code> and
        <code>is_transport_move_valid()</code> methods from the Game class.
      </ThesisParagraph>
      <ThesisParagraph>
        If the move enumeration is decided, we apply the respective game move. However, for invalid moves, we add an
        extra step. Because invalid moves have no effect on the game, there needs to be a way to progress without making
        the player stay idle. For example, the output vector might suggest that the player should attack tile <code>(3, 3)</code>,
        but the tile might be out of reach. The parsing is valid, but according to game rules the move is invalid.
        Consequently, in order to avoid such cases, we <em>guide</em> the player into selecting the closest valid move.
      </ThesisParagraph>
      <ThesisParagraph>
        The <code>guide_move()</code> method is responsible for turning an invalid move into a valid one. First, the <code>get_next_moves()</code>
        method is called in order to generate a list of all possible valid moves depending on the current state of the
        game. In order to create that list we go through a process of calculating next game states based on applicable
        moves. Once we have that list, we then compare each move with the invalid one, by calculating the Euclidean
        distance with three components: source tile, target tile and troop count. The move with the smaller distance is
        selected. Finally, the <code>decode_state()</code> method returns the valid guided move, instead of the original.
      </ThesisParagraph>
      <ThesisParagraph>
        <code className="block text-center">
          [0.0 0.04411154570991824 0.9999687598147949 0.9999999999980089]
        </code>
      </ThesisParagraph>
      <ThesisParagraph>
        We begin by parsing the production flag component by looking at the first element of the output vector. Since
        the value is less than <code>0.5</code>, the production flag is <code>True</code>. Next, we look at the second element, to extract the
        source tile component. As mentioned earlier, there are <code>36</code> options. Therefore, after mapping the number to the
        correct subspace we select the <code>(0, 1)</code> source tile. As for the other target tile and troop count components, they
        will be ignored since production moves require only the source tile component. Now that the output vector is
        parsed, we call the <code>is_production_move_valid()</code> method to check whether this move can be made. Assuming the
        method returns <code>True</code>, we end up with the following dictionary object describing the move:
      </ThesisParagraph>
      <ThesisParagraph>
        <code className="block text-left">
          player_move = &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"move_type": Game.ProductionMove,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"source_tile": (0, 1),<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"target_tile": (0, 1),<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"troops": 1,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"guided": False<br/>
          &#125;
        </code>
      </ThesisParagraph>
      <ThesisParagraph>
        Let us review a second example. For this case, we use an output vector that results in an invalid game move.
      </ThesisParagraph>
      <ThesisParagraph>
        <code className="block text-center">
          [0.7583775969117601 0.09880653506612425 0.9956816595680481 0.9999999999999927]
        </code>
      </ThesisParagraph>
      <ThesisParagraph>
        Once parsed, we have the following representation:
      </ThesisParagraph>
      <ThesisParagraph>
        <code className="block text-left">
          player_move = &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"move_type": Game.IdleMove,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"source_tile": (0, 3),<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"target_tile": (5, 4),<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"troops": 20,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"guided": False<br/>
          &#125;
        </code>
      </ThesisParagraph>
      <ThesisParagraph>
        If we look at the game state, we notice that the player move cannot be applied.
      </ThesisParagraph>
      <ThesisFigure src={figure_5_3} width="502" height="155" tag="figure-5-3"
                    caption="Figure 5.3 The map_owners matrix representation from the Game class"
      />
      <ThesisFigure src={figure_5_4} width="508" height="160" tag="figure-5-4"
                    caption="Figure 5.4 The map_troops matrix representation from the Game class"
      />
      <ThesisParagraph>
        Looking at <ThesisInternalLink href="#figure-5-3">Figure 5.3</ThesisInternalLink> and <ThesisInternalLink href="figure-5-4">Figure 5.4</ThesisInternalLink> the tile at <code>(0, 3)</code> is owned by the blue player, however tile <code>(5, 4)</code> is not
        neighboring with any of the player’s tiles. Therefore, the move is not valid. After applying the <code>guide_move()</code>
        method, we end up with the closest possible valid move:
      </ThesisParagraph>
      <ThesisParagraph>
        <code className="block text-left">
          player_move = &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"move_type": Game.AttackMove,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"source_tile": (0, 2),<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"target_tile": (1, 2),<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"troops": 19,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"guided": True<br/>
          &#125;
        </code>
      </ThesisParagraph>
      <ThesisParagraph>
        By looking at the two examples, it is evident that the neural network output always translates to a valid game
        move. Having that in mind, the whole training process is simplified, because we are not forced to end the game
        after coming to a dead end. Even if the neural network is unsure about a certain situation, we always find the
        closest possible move, therefore any output given will alter the state of the game in some way.
      </ThesisParagraph>
    </section>
  )
}