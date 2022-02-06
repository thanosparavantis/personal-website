export default function PageHeader({title, description}) {
  return (
    <header className="my-16 text-center">
      <h1 className="text-2xl text-gray-900 font-extrabold mb-3">
        {title}
      </h1>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </header>
  )
}