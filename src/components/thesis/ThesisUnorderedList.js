export default function ThesisUnorderedList({children}) {
  return (
    <ul className="list-disc list-inside text-justify text-gray-700 leading-7 mb-3 last:mb-0">
      {children}
    </ul>
  )
}