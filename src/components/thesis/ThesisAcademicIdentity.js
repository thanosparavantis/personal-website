import unipiImg from "../../images/thesis/unipi.png";

export default function ThesisAcademicIdentity() {
  return (
    <header className="flex flex-col items-center justify-center text-center gap-5">
      <img src={unipiImg}
           width="112"
           height="125"
           title="University of Piraeus"
           alt="University of Piraeus"
      />
      <div className="text-lg text-gray-700 font-bold">
        <p>
          University of Piraeus
        </p>
        <p>
          School of Information and Communication Technologies
        </p>
        <p>
          Department of Informatics
        </p>
      </div>
    </header>
  )
}