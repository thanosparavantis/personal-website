export default function ThesisUnorderedList({children}) {
  return (
    <ul className="list-disc list-inside text-justify text-gray-700 leading-relaxed mb-3 last:mb-0">
      {children}
    </ul>
  )
}