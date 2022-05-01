export default function ThesisParagraph({justify = true, children}) {
  return (
    <p className={`${justify ? "text-justify" : "text-center"} text-gray-700 leading-7 mb-3 last:mb-0`}>
      {children}
    </p>
  )
}