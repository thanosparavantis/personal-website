export default function PageHeader({title, image, small = false}) {
  return (
    <header className="relative h-64 my-5">
      <div className="z-10 absolute w-full h-full rounded opacity-90
                      bg-gradient-to-b from-transparent via-gray-800 to-gray-900"/>
      <img src={image} alt="" className="absolute rounded pointer-events-none" width="768" height="256"/>
      <div className="z-10 h-full shadow-lg flex justify-center">
        <div className="z-10 h-full px-5 flex flex-col items-center justify-center text-center">
          <h1 className={`${small ? "text-5xl": "text-7xl"} text-gray-100 font-bold`}>
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}