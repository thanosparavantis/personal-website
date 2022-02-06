import unipiImg from "../images/thesis/unipi.png"
import figure_1_1 from "../images/thesis/figure_1_1.png"
import PageTemplate from "../components/PageTemplate";

export default function ThesisPage() {
  return (
    <PageTemplate>
      <main className="my-16 flex flex-col gap-10">
        <header className="flex flex-col items-center justify-center text-center gap-5">
          <img src={unipiImg}
               title="University of Piraeus"
               alt="University of Piraeus"
          />
          <p className="text-lg text-gray-900 font-bold">
            University of Piraeus
            <br/>
            School of Information and Communication Technologies
            <br/>
            Department of Informatics
          </p>
        </header>
        <section className="text-center">
          <h1 className="text-lg text-gray-900 font-bold">
            Applications of NEAT algorithm for automatic gameplay of agents in deterministic and non-deterministic game
            environments
          </h1>
        </section>
        <section>
          <h2 className="text-lg text-gray-900 font-bold mb-3">
            Acknowledgements
          </h2>
          <p className="text-justify text-gray-700 leading-relaxed mb-3">
            This project was a life experience for two reasons: first, due to the vast research and knowledge it
            offered and second, because it was concluded during the coronavirus pandemic. My senior year as a student
            ended abruptly right before finishing my undergraduate studies. Regardless, after hours of reading,
            discussing, brainstorming and programming, I am excited to have finished this project.
          </p>
          <p className="text-justify text-gray-700 leading-relaxed">
            I would like to thank my professor Dr. Dionisios Sotiropoulos for accepting my original proposition for the
            subject and guiding me during this time. I would also like to thank my parents John and Maria, for
            motivating me to keep up the hard work and bearing with me during the quarantine. Lastly, I want to express
            my gratitude for SethBling, an American YouTuber for publishing the video “MarI/O – Machine Learning for
            Video Games” which was my original inspiration for the subject of this project.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-gray-900 font-bold mb-3">
            Abstract
          </h2>
          <p className="text-justify text-gray-700 leading-relaxed">
            On this project, we study applications of the NEAT algorithm in deterministic and non-deterministic game
            environments. First, we look at an overview of the NEAT algorithm, how it works, design principles and the
            challenges that come with implementation. Next, we introduce a custom two-dimensional game in Python for two
            players: blue and red. We lay down the basic rules and structure, in order to create an environment suitable
            for neuroevolution. Finally, we study five training cases, where the blue and red player are given several
            tasks that must be achieved through the evolution of neural networks.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-gray-900 font-bold mb-3">
            Overview of NEAT algorithm
          </h2>
          <p className="text-justify text-gray-700 leading-relaxed mb-3">
            NeuroEvolution of Augmenting Topologies (NEAT) is an algorithm that is used to evolve neural networks
            through a novel method of genetic evolution [1]. Traditionally, the topologies of neural networks in
            neuroevolution (NE) use a fixed layout of neurons. The goal is to search through the weight space and find
            optimal values for a given problem. This task is achieved through a population-based stochastic search
            algorithm, where neural networks crossover to create ancestors with the intent of outperforming their
            predecessors. When mutations occur certain weight values are randomly modified. This allows for neural
            networks to gradually develop new behavior and better approximate the fitness function of a given problem
            [2].
          </p>
          <p className="text-justify text-gray-700 leading-relaxed mb-3">
            The NEAT algorithm is different because both topologies and weights are evolved. The drive behind this novel
            method emerges from an importation question: can evolving topologies and weights provide a clear advantage
            over fixed topologies of evolving weights? If the behavior of neural networks depends on both topology and
            weights, it is evident that evolving both aspects is worth studying [3]. Starting off with an initial
            population, it is a design principle for topologies to be minimal. As generations progress, neural networks
            crossover and mutations occur on both structure and weights. This design difference is crucial because it
            allows for optimal solutions to be developed. Consequently, maintaining minimal topologies is proportional
            to minimizing search spaces, allowing for greater performance.
          </p>
          <p className="text-justify text-gray-700 leading-relaxed mb-3">
            Of course, there are several challenges that come with this methodology. First off, topologies must be
            genetically represented in such a way that the competing conventions problem is addressed. When two
            structurally different neural networks present the same solution to a given task, it is likely that an
            offspring would be negatively affected [4]. Second, it is essential that structural innovations are
            preserved throughout the evolutionary process. Certain features sometimes require more than a few
            generations to develop, as neural networks gradually optimize their structure. Lastly, it is necessary for
            the whole process to come up with minimal solutions. For that to happen, neural networks must start out
            minimally and increase complexity if necessary. This can be achieved without the need of including a
            complexity component on the fitness function.
          </p>
          <p className="text-justify text-gray-700 leading-relaxed mb-3">
            As with any NE algorithm, the weights of a neural network are subject to mutations. In NEAT, mutations also
            occur on connections and nodes. During this process, the algorithm assigns historical markings in the form
            of innovation numbers. That way, we can effectively keep track of all the different mutations and compare
            the genotypes of neural networks. To prevent exploitation of this system, cases of duplicate mutations are
            assigned the same innovation number. Genomes are composed of genes, a linear representation of connecting
            nodes. Genes are defined with an input node, an output node, the weight of the connection, whether it is
            active or disabled and the innovation number. A mutation that adds one node would insert two new genes of
            connectivity and disable the original one, whereas a mutation that adds a connection would simply insert a
            new gene for the two connecting nodes.
          </p>
          <figure className="flex flex-col items-center justify-center text-center">
            <img src={figure_1_1}
                 alt="The phenotype (left) and genotype (right) of a neural network in NEAT."
                 className="mb-1"
            />
            <figcaption className="text-sm text-gray-700 italic">
              Figure 1.1 The phenotype (left) and genotype (right) of a neural network in NEAT.
            </figcaption>
          </figure>
        </section>
      </main>
    </PageTemplate>
  )
}