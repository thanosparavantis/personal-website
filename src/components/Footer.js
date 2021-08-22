import {useMemo} from "react";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="flex items-center py-8 text-gray-500 text-sm border-t">
      <div>
        &copy; {year} Thanos Paravantis
      </div>
      <div className="mx-2">
        &middot;
      </div>
      <div>
        Software Engineer
      </div>
    </footer>
  )
}