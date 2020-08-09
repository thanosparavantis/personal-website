import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faPaperclip } from "@fortawesome/free-solid-svg-icons"
import TimeAgo from "react-timeago/lib"

export default function ActivityItem({ item }) {
  let icon = faPaperclip
  let color = "text-gray-800"

  if (item.title.includes("YouTube")) {
    icon = faYoutube
    color = "text-red-800"
  } else if (item.title.includes("Facebook")) {
    icon = faFacebook
    color = "text-blue-800"
  } else if (item.title.includes("Twitter")) {
    icon = faTwitter
    color = "text-blue-600"
  }

  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block mt-5 bg-gray-200 hover:bg-gray-300 shadow p-5 focus:outline-none focus:shadow-outline" title="Click here to see more about this">
      <div className="flex flex-wrap items-center font-bold mb-2">
        <FontAwesomeIcon icon={icon} className={`mr-2 ${color}`}/>
        <div className={`${color}`}>{item.title}</div>
        <div className="mx-2 hidden md:block">&middot;</div>
        <TimeAgo date={item.pubDate} className="text-gray-800 text-sm"/>
      </div>
      <div className="text-sm leading-loose whitespace-pre-wrap break-words">
        {item.content}
      </div>
    </a>
  )
}