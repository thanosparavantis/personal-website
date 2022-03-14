import ThesisHeading from "./ThesisHeading";
import ThesisParagraph from "./ThesisParagraph";
import ThesisFigure from "./ThesisFigure";
import figure_1_1 from "../../images/thesis/figure_1_1.png";

export default function ThesisChapterOne() {
  return (
    <section>
      <ThesisHeading tag="neat-overview">
        1. Overview of NEAT algorithm
      </ThesisHeading>
      <ThesisParagraph>
        NeuroEvolution of Augmenting Topologies (NEAT) is an algorithm that is used to evolve neural networks
        through a novel method of genetic evolution [1]. Traditionally, the topologies of neural networks in
        neuroevolution (NE) use a fixed layout of neurons. The goal is to search through the weight space and find
        optimal values for a given problem. This task is achieved through a population-based stochastic search
        algorithm, where neural networks crossover to create ancestors with the intent of outperforming their
        predecessors. When mutations occur certain weight values are randomly modified. This allows for neural
        networks to gradually develop new behavior and better approximate the fitness function of a given problem
        [2].
      </ThesisParagraph>
      <ThesisParagraph>
        The NEAT algorithm is different because both topologies and weights are evolved. The drive behind this novel
        method emerges from an importation question: can evolving topologies and weights provide a clear advantage
        over fixed topologies of evolving weights? If the behavior of neural networks depends on both topology and
        weights, it is evident that evolving both aspects is worth studying [3]. Starting off with an initial
        population, it is a design principle for topologies to be minimal. As generations progress, neural networks
        crossover and mutations occur on both structure and weights. This design difference is crucial because it
        allows for optimal solutions to be developed. Consequently, maintaining minimal topologies is proportional
        to minimizing search spaces, allowing for greater performance.
      </ThesisParagraph>
      <ThesisParagraph>
        Of course, there are several challenges that come with this methodology. First off, topologies must be
        genetically represented in such a way that the competing conventions problem is addressed. When two
        structurally different neural networks present the same solution to a given task, it is likely that an
        offspring would be negatively affected [4]. Second, it is essential that structural innovations are
        preserved throughout the evolutionary process. Certain features sometimes require more than a few
        generations to develop, as neural networks gradually optimize their structure. Lastly, it is necessary for
        the whole process to come up with minimal solutions. For that to happen, neural networks must start out
        minimally and increase complexity if necessary. This can be achieved without the need of including a
        complexity component on the fitness function.
      </ThesisParagraph>
      <ThesisParagraph>
        As with any NE algorithm, the weights of a neural network are subject to mutations. In NEAT, mutations also
        occur on connections and nodes. During this process, the algorithm assigns historical markings in the form
        of innovation numbers. That way, we can effectively keep track of all the different mutations and compare
        the genotypes of neural networks. To prevent exploitation of this system, cases of duplicate mutations are
        assigned the same innovation number. Genomes are composed of genes, a linear representation of connecting
        nodes. Genes are defined with an input node, an output node, the weight of the connection, whether it is
        active or disabled and the innovation number. A mutation that adds one node would insert two new genes of
        connectivity and disable the original one, whereas a mutation that adds a connection would simply insert a
        new gene for the two connecting nodes.
      </ThesisParagraph>
      <ThesisFigure src={figure_1_1} width="579" height="226" tag="figure-1-1"
                    caption="Figure 1.1 The phenotype (left) and genotype (right) of a neural network in NEAT"
      />
      <ThesisParagraph>
        Keeping track of all the different mutations using innovation numbers, allows for great flexibility during
        the crossover stage. We know which genes came before, after or in parallel, therefore, the sequences can be
        compared. When two genomes are crossed over, we look at the genes that comprise their genotypes. There are
        three distinct cases during the alignment: matching genes, disjoint genes and excess genes. We assume that
        matching genes are inherited randomly, with a special case for disjoint and excess genes that come from the
        most fit parent. Enabled genes may become disabled, and disabled genes may be activated again. By initiating
        crossover after evaluating fitness, we end up with a diverse population of neural networks that express
        different types of features.
      </ThesisParagraph>
      <ThesisParagraph>
        Applying structural mutations comes with a cost. By inserting new node and connection genes on the genotype
        of neural networks, their fitness might initially decrease. Because small networks tend to perform better,
        it is crucial that the algorithm takes extra care of complex structures. Large networks usually require more
        generations to optimize and yield a better fitness payoff. Having that in mind, we give large structures a
        fair chance by speciating the population.
      </ThesisParagraph>
      <ThesisParagraph>
        Performing speciation on a diverse population is no easy task. The goal is to sort similar topologies under
        the same types of species. That way, instead of competing with the entire population, neural networks
        compete
        within their own niche. Thankfully, this process is simplified, because of how the genotypes are encoded. It
        turns out that similarities and differences found in the genotype is a natural way of measuring the
        compatibility of genomes. During each generation, genomes are assigned to a species based on a compatibility
        distance metric. The number of disjoint and excess genes along with the weight differences of matching genes
        is considered. Lastly, genomes within their own species reproduce based on explicit fitness sharing. The
        most
        fit genomes within the niche reproduce and the lowest performing genomes are discarded.
      </ThesisParagraph>
      <ThesisParagraph>
        Before utilizing NEAT for this project, it is essential to look at benchmarks and check the validity of
        assumptions put forward. First, NEAT is tested against the problem of evolving a neural network capable of
        solving the XOR problem. Given that at least one hidden layer is required for a solution, it is fundamental
        that we can check whether NEAT can evolve such topologies. Next, NEAT is put to work on double pole
        balancing
        tasks. This benchmark is important because it resembles real life problems with adjustable difficulty.
        Several
        other NE systems use this scenario; therefore, the performance can be compared with ease. Finally, NEAT is
        tested against a series of ablations in order to verify the contribution to the overall performance of each
        individual component: historical markings, speciation and starting out minimally.
      </ThesisParagraph>
      <ThesisParagraph>
        As it turns out, NEAT is more than capable of performing well on all benchmarks. For the XOR problem, the
        algorithm ran 100 times and converged to a solution after an average of 32 generations. The solution
        networks
        on average included 2.35 hidden nodes and 7.48 active connections. During all iterations, the algorithm was
        able to converge on all 100 runs, with the worst case of running for 90 generations. As for the double pole
        balancing challenge, the scenario is that the network must apply forces to a cart in order to keep the two
        poles balanced. There were two versions: double pole balancing with velocity (DPV) and double pole balancing
        without velocity (DPNV). On the DPV problem, NEAT was able to come first compared with four other NE
        systems:
        Evolutionary Programming, Conventional NE, SANE and ESP. On the DPNV problem, NEAT was once again, able to
        finish first compared with two other NE systems: CE and ESP. For both cases, the number of evaluations were
        less than all other methodologies.
      </ThesisParagraph>
      <ThesisParagraph>
        After succeeding on all benchmarks, the NEAT algorithm was applied on the DPV problem with a series of
        ablations. First, NEAT is set to run without the ability of growing the structure of neural networks.
        Because
        all networks start minimally, for this ablation networks are initialized with 10 hidden nodes. After 20
        runs,
        failure rate reached 80%. The second ablation forced networks to start with a random topology instead of
        initializing minimally. The number of hidden nodes is initially set between 1 and 10 with random
        connections.
        It turns out that NEAT was 7 times slower and failed to find a solution 5% of the time. The third ablation
        removed the feature of speciation. For this case, initial population is set to start out with random
        topologies to introduce needed diversity. It is observed that the algorithm failed 25% of the time and was 7
        times slower. The last ablation removed mating of genomes. After 120 runs, it was concluded that the average
        evaluations were 5,557 compared to 3,600 if NEAT was applied normally.
      </ThesisParagraph>
      <ThesisParagraph>
        In summary, NEAT is an efficient algorithm for artificially evolving neural networks. The main difference
        compared to other NE systems, is that both topology and weights are evolved, granting a significant
        performance boost. The XOR problem along with pole balancing tasks have demonstrated that NEAT can solve
        real
        world problems. Ablation studies have shown that the main key components of NEAT: historical markings,
        speciation and incremental growth all bond together to come up with minimal solutions. It is not only the
        end
        result that is important, rather, all intermediate solutions that contribute to the process. We conclude
        that
        NEAT reinforces the analogy between genetic algorithms and natural evolution, as it can optimize and
        complexify solutions at the same time.
      </ThesisParagraph>
    </section>
  )
}