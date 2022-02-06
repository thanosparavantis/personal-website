import {useMemo} from "react";

export default function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  return (
    <footer className="bg-white border-t shadow p-5 text-gray-600 font-bold md:text-right text-center md:text-xs text-sm">
      &copy; {year} Thanos Paravantis
    </footer>
  )
}