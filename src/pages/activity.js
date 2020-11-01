import React, { useEffect, useState } from "react"
import Parser from "rss-parser"
import ActivityItem from "../components/activity-item"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faExclamation, faWaveSquare } from "@fortawesome/free-solid-svg-icons"
import SeoTags from "../components/seo-tags"

export default function ActivityPage() {
  const feedDateKey = "feed-date"
  const feedItemsKey = "feed-items"
  const feedUrl = "https://zapier.com/engine/rss/8156996/thanosproduction"
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const feedDate = localStorage.getItem(feedDateKey)
    const feedItems = localStorage.getItem(feedItemsKey)

    if (feedDate && feedItems) {
      const now = new Date().getTime().toString()
      const then = parseInt(feedDate)
      const isValid = Math.abs(now - then) <= 3600000

      if (isValid) {
        console.debug("Fetching activity items from cache.")
        fetchCached()
      } else {
        console.debug("Invalid activity cache, fetching new items.")
        fetchNew()
      }
    } else {
      console.debug("First time visit, fetch new items.")
      fetchNew()
    }
  }, [])

  function fetchCached() {
    const items = localStorage.getItem(feedItemsKey)
    const parsedItems = JSON.parse(items)
    parsedItems.sort((itemA, itemB) => sort(itemA, itemB))

    setItems(parsedItems)
    setLoading(false)
  }

  function fetchNew() {
    const parser = new Parser()

    parser.parseURL(feedUrl)
      .then(response => {
        const items = response.items
        items.sort((itemA, itemB) => sort(itemA, itemB))

        setItems(items)
        localStorage.setItem("feed-date", new Date().getTime().toString())
        localStorage.setItem("feed-items", JSON.stringify(items))
        setLoading(false)
      })
      .catch(() => {
        setError(true)
      })
  }

  function sort(itemA, itemB) {
    const dateA = new Date(itemA.pubDate)
    const dateB = new Date(itemB.pubDate)
    return dateB - dateA
  }

  return (
    <div>
      <SeoTags title="Activity - Thanos Paravantis"
               description="Aggregated social media posts from my Facebook and Twitter pages."
               relPath="/activity/" />
      <div className="max-w-2xl mx-auto my-24 px-5 md:pl-20 md:my-12">
        <h1 className="font-bold text-xl mb-2 text-gray-900">
          Activity
        </h1>
        {error ? (
          <div className="bg-gray-200 p-5 text-center font-bold text-red-700">
            <FontAwesomeIcon icon={faExclamation} className="mr-3" />
            Something went wrong, please try again later.
          </div>
        ) : ""}

        {loading ? (
          <div className="bg-gray-200 p-5 text-center">
            <FontAwesomeIcon icon={faCog} spin={true} className="mr-3" />
            Loading...
          </div>
        ) : ""}

        {items.length === 0 ? (
          <div className="bg-gray-200 p-5 text-center">
            <FontAwesomeIcon icon={faWaveSquare} className="mr-3" />
            Nothing to see here
          </div>
        ) : ""}

        {items.length > 0 ? (
          <div>
            {items.map((item, key) => <ActivityItem key={key} item={item} />)}
          </div>
        ) : ""}
      </div>
    </div>
  )
}
