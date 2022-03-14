export default function ThesisFigure({src, width, height, caption, tag = null}) {
  return (
    <figure id={tag} className="flex flex-col items-center justify-center
                                text-center my-7 last:mb-0 scroll-spacing">
      <img src={src} title={caption} alt={caption} width={width} height={height} className="mb-2"/>
      <figcaption className="text-sm text-gray-700 italic">
        { tag ? (
          <a href={`#${tag}`}>{caption}</a>
        ) : caption}
      </figcaption>
    </figure>
  )
}