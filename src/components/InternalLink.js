import {Link} from "react-router-dom";

export default function InternalLink({href, children}) {
  return (
    <Link to={href} className="underline text-blue-600 hover:text-blue-800 active:text-green-700">
      {children}
    </Link>
  )
}