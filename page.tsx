import { Suspense } from "react"
import { searchMovies } from "@/lib/tmdb"
import Link from "next/link"
import Image from "next/image"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q || ""

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Search Results for: {query}</h1>

        <Suspense fallback={<div className="text-center py-12">Loading results...</div>}>
          <SearchResults query={query} />
        </Suspense>
      </div>
    </div>
  )
}

async function SearchResults({ query }: { query: string }) {
  const results = await searchMovies(query)

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl">No results found for "{query}"</p>
        <p className="text-gray-400 mt-2">Try adjusting your search terms</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {results.map((movie) => (
        <Link key={movie.id} href={`/movie/${movie.id}`} className="transition duration-200 ease-out hover:scale-105">
          <div className="relative aspect-[2/3] rounded-md overflow-hidden">
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
          <p className="text-xs text-gray-400">{movie.release_date?.split("-")[0] || "Unknown"}</p>
        </Link>
      ))}
    </div>
  )
}

