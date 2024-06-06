export default function ThesisParagraph({center = false, children}) {
  return (
    <p className={`${center ? "text-center " : ""}text-gray-700 leading-7 mb-3 last:mb-0`}>
      {children}
    </p>
  )
}