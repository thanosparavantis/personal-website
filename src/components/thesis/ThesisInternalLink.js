export default function ThesisInternalLink({href, children}) {
  return (
    <a href={href} className="underline text-blue-600 hover:text-blue-800 active:text-green-700">
      {children}
    </a>
  )
}