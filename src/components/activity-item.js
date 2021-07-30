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
    <a href={item.link}
       target="_blank"
       rel="noopener noreferrer"
       title="Click here to see more about this"
       className="block mt-3 bg-gray-200 hover:bg-gray-300 rounded border
                  p-5 focus:outline-none focus:shadow-outline">
      <div className="flex flex-col items-start md:items-center md:flex-row font-bold mb-2">
        <div className="flex items-center">
          <FontAwesomeIcon icon={icon} className={`mr-2 ${color}`}/>
          <div className={color}>{item.title}</div>
        </div>
        <div className="mx-2 hidden md:block">&middot;</div>
        <TimeAgo date={item.pubDate} className="text-gray-700 text-xs"/>
      </div>
      <div className="text-sm leading-loose whitespace-pre-wrap break-words">
        {item.content}
      </div>
    </a>
  )
}