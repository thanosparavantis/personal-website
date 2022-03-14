import ThesisHeading from "./ThesisHeading";
import ThesisParagraph from "./ThesisParagraph";

export default function ThesisChapterFour() {
  return (
    <section>
      <ThesisHeading tag="neat-parameters">
        4. NEAT parameters
      </ThesisHeading>
      <ThesisParagraph>
        The following options are used throughout this project on all game presets.
      </ThesisParagraph>
      <table className="table-auto border border-gray-400 border-collapse w-full text-gray-700">
        <thead>
        <tr>
          <th className="border border-gray-400 p-3">Parameter</th>
          <th className="border border-gray-400 p-3">Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="border border-gray-400 p-3"><code>fitness_criterion</code></td>
          <td className="border border-gray-400 p-3"><code>max</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The end goal is to maximize the fitness payoff during the evolutionary process.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>fitness_threshold</code></td>
          <td className="border border-gray-400 p-3"><code>100</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Halt the algorithm after fitness has reached 100%.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>no_fitness_termination</code></td>
          <td className="border border-gray-400 p-3"><code>False</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The algorithm should not ignore the first two parameters.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>pop_size</code></td>
          <td className="border border-gray-400 p-3"><code>100</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The population is initialized with 100 genomes.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>reset_on_extinction</code></td>
          <td className="border border-gray-400 p-3"><code>True</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Reset the algorithm in cases where all species become extinct at the same time.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>species_fitness_func</code></td>
          <td className="border border-gray-400 p-3"><code>mean</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The method of calculating the fitness of a certain species.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>max_stagnation</code></td>
          <td className="border border-gray-400 p-3"><code>15</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The number of generations required for a species to become extinct when there is no improvement on fitness.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>species_elitism</code></td>
          <td className="border border-gray-400 p-3"><code>0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The number of species to protect from extinction.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>elitism</code></td>
          <td className="border border-gray-400 p-3"><code>1</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The number of most-fit genomes to preserve intact from generation to generation.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>survival_threshold</code></td>
          <td className="border border-gray-400 p-3"><code>0.2</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The fraction of species that are allowed to reproduce on each generation.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>min_species_size</code></td>
          <td className="border border-gray-400 p-3"><code>2</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The minimum number of genomes required to declare a new species.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>activation_default</code></td>
          <td className="border border-gray-400 p-3"><code>sigmoid</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The default activation function for each node.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>activation_mutate_rate</code></td>
          <td className="border border-gray-400 p-3"><code>0.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability that a mutation occurs on the activation function of a node.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>activation_options</code></td>
          <td className="border border-gray-400 p-3"><code>sigmoid</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The list of available activation functions to choose from when a mutation occurs.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>aggregation_default</code></td>
          <td className="border border-gray-400 p-3"><code>sum</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The default aggregation function for each node.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>aggregation_mutate_rate</code></td>
          <td className="border border-gray-400 p-3"><code>0.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability that a mutation occurs on the aggregation function of a node.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>aggregation_options</code></td>
          <td className="border border-gray-400 p-3"><code>sum</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The list of available aggregation functions to choose from when a mutation occurs.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>compatibility_disjoint_coefficient</code></td>
          <td className="border border-gray-400 p-3"><code>1.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The coefficient for disjoint and excess genes for the genomic distance formula.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>compatibility_weight_coefficient</code></td>
          <td className="border border-gray-400 p-3"><code>1.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The coefficient for weights and bias differences for the genomic distance formula.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>enabled_default</code></td>
          <td className="border border-gray-400 p-3"><code>True</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            New connections should be enabled by default.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>enabled_mutate_rate</code></td>
          <td className="border border-gray-400 p-3"><code>0.1</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The mutation probability for enabling or disabling an existing connection.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>feed_forward</code></td>
          <td className="border border-gray-400 p-3"><code>True</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Neural networks are feedforward, they do not have recurrent connections.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>initial_connection</code></td>
          <td className="border border-gray-400 p-3"><code>full</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Initially, all input nodes are connected with all output nodes.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>node_add_prob</code></td>
          <td className="border border-gray-400 p-3"><code>0.3</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability of a new node being added to the network.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>node_delete_prob</code></td>
          <td className="border border-gray-400 p-3"><code>0.3</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability of an existing node being removed from the network.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>conn_add_prob</code></td>
          <td className="border border-gray-400 p-3"><code>0.3</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability of an existing connection being added on the network.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>con_delete_prob</code></td>
          <td className="border border-gray-400 p-3"><code>0.3</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability of an existing connection being removed from the network.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>num_inputs</code></td>
          <td className="border border-gray-400 p-3"><code>36</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The number of input nodes on all networks.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>num_hidden</code></td>
          <td className="border border-gray-400 p-3"><code>0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The initial number of hidden nodes on all networks.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>num_outputs</code></td>
          <td className="border border-gray-400 p-3"><code>4</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The number of output nodes on all networks.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>bias_init_mean</code></td>
          <td className="border border-gray-400 p-3"><code>0.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The mean of the gaussian distribution from which initial bias values are selected.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>bias_init_stdev</code></td>
          <td className="border border-gray-400 p-3"><code>1.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The standard deviation of the gaussian distribution from which initial bias values are selected.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>bias_init_type</code></td>
          <td className="border border-gray-400 p-3"><code>gaussian</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Initial bias values are selected from a gaussian distribution.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>bias_replace_rate</code></td>
          <td className="border border-gray-400 p-3"><code>0.1</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability of a bias value being replaced with a new one.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>bias_mutate_rate</code></td>
          <td className="border border-gray-400 p-3"><code>0.9</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability of a bias value being modified by adding a random value.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>bias_mutate_power</code></td>
          <td className="border border-gray-400 p-3"><code>0.5</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The standard deviation of a zero-centered gaussian distribution from which bias mutation values are
            selected.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>bias_max_value</code></td>
          <td className="border border-gray-400 p-3"><code>30.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Bias values have this upper limit.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>bias_min_value</code></td>
          <td className="border border-gray-400 p-3"><code>-30.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Bias values have this lower limit.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>weight_init_mean</code></td>
          <td className="border border-gray-400 p-3"><code>0.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The mean of the gaussian distribution from which initial weight values are selected.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>weight_init_stdev</code></td>
          <td className="border border-gray-400 p-3"><code>1.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The standard deviation of the gaussian distribution from which initial weight values are selected.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>weight_init_type</code></td>
          <td className="border border-gray-400 p-3"><code>gaussian</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Initial weight values are selected from a gaussian distribution.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>weight_replace_rate</code></td>
          <td className="border border-gray-400 p-3"><code>0.1</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability of a weight value being replaced with a new one.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>weight_mutate_rate</code></td>
          <td className="border border-gray-400 p-3"><code>0.9</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability of a weight value being modified by adding a random value.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>weight_mutate_power</code></td>
          <td className="border border-gray-400 p-3"><code>0.5</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The standard deviation of a zero-centered gaussian distribution from which weight mutation values are
            selected.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>weight_max_value</code></td>
          <td className="border border-gray-400 p-3"><code>30.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Weight values have this upper limit.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>weight_min_value</code></td>
          <td className="border border-gray-400 p-3"><code>-30.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Weight values have this lower limit.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>response_init_mean</code></td>
          <td className="border border-gray-400 p-3"><code>1.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The mean of the gaussian distribution from which initial response values are selected.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>response_init_stdev</code></td>
          <td className="border border-gray-400 p-3"><code>0.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The standard deviation of the gaussian distribution from which initial response values are selected.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>response_init_type</code></td>
          <td className="border border-gray-400 p-3"><code>gaussian</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Initial response values are selected from a gaussian distribution.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>response_replace_rate</code></td>
          <td className="border border-gray-400 p-3"><code>0.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability of a response value being replaced with a new one.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>response_mutate_rate</code></td>
          <td className="border border-gray-400 p-3"><code>0.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The probability of a response value being modified by adding a random value.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>response_mutate_power</code></td>
          <td className="border border-gray-400 p-3"><code>0.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            The standard deviation of a zero-centered gaussian distribution from which response mutation values are
            selected.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>response_max_value</code></td>
          <td className="border border-gray-400 p-3"><code>1.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Response values have this upper limit.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>response_min_value</code></td>
          <td className="border border-gray-400 p-3"><code>1.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Response values have this lower limit.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3"><code>compatibility_threshold</code></td>
          <td className="border border-gray-400 p-3"><code>3.0</code></td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-3" colSpan="2">
            Genomes with genomic distance less than this value are in the same species.
          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
}