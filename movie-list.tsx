"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Movie {
  id: number
  title: string
  poster_path: string
}

interface MovieListProps {
  title: string
  movies: Movie[]
}

export function MovieList({ title, movies }: MovieListProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const rowRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    const container = rowRef.current
    if (!container) return

    const scrollAmount = 200
    const newPosition =
      direction === "left" ? Math.max(scrollPosition - scrollAmount, 0) : scrollPosition + scrollAmount

    container.scrollTo({ left: newPosition, behavior: "smooth" })
    setScrollPosition(newPosition)
  }

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="relative group">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute left-0 top-0 bottom-0 z-40 h-full rounded-none bg-black/30 hover:bg-black/60",
            scrollPosition <= 0 ? "hidden" : "block",
          )}
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <div ref={rowRef} className="flex space-x-4 overflow-x-scroll scrollbar-hide py-4">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="flex-none transition duration-200 ease-out hover:scale-105"
            >
              <div className="relative h-40 w-72 md:h-56 md:w-96 rounded-md overflow-hidden">
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/placeholder.svg?height=300&width=200"
                  }
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-2 text-sm line-clamp-1">{movie.title}</h3>
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 bottom-0 z-40 h-full rounded-none bg-black/30 hover:bg-black/60"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}

