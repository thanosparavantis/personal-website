export default function PageHeader({title, description}) {
  return (
    <header className="my-16 text-center">
      <h1 className="text-3xl text-gray-900 font-black mb-3">
        {title}
      </h1>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </header>
  )
}