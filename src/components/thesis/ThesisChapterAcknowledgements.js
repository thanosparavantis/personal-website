import ThesisHeading from "./ThesisHeading";
import ThesisParagraph from "./ThesisParagraph";

export default function ThesisChapterAcknowledgements() {
  return (
    <section>
      <ThesisHeading tag="acknowledgements">
        Acknowledgements
      </ThesisHeading>
      <ThesisParagraph>
        This project was a life experience for two reasons: first, due to the vast research and knowledge it
        offered and second, because it was concluded during the coronavirus pandemic. My senior year as a student
        ended abruptly right before finishing my undergraduate studies. Regardless, after hours of reading,
        discussing, brainstorming and programming, I am excited to have finished this project.
      </ThesisParagraph>
      <ThesisParagraph>
        I would like to thank my professor Dr. Dionisios Sotiropoulos for accepting my original proposition for the
        subject and guiding me during this time. I would also like to thank my parents John and Maria, for
        motivating me to keep up the hard work and bearing with me during the quarantine. Lastly, I want to express
        my gratitude for SethBling, an American YouTuber for publishing the video "MarI/O – Machine Learning for
        Video Games" which was my original inspiration for the subject of this project.
      </ThesisParagraph>
    </section>
  )
}