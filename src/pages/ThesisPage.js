import unipiImg from "../images/thesis/unipi.png"
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
          <h1 className="text-xl text-gray-900 font-bold">
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
      </main>
    </PageTemplate>
  )
}