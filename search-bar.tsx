"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center">
        <button type="button" onClick={() => setIsExpanded(!isExpanded)} className="text-white p-2">
          <Search className="h-5 w-5" />
        </button>
        <Input
          type="text"
          placeholder="Titles, people, genres"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-white transition-all duration-300 ${
            isExpanded ? "w-64 opacity-100" : "w-0 opacity-0 hidden md:block"
          }`}
        />
      </form>
    </div>
  )
}

