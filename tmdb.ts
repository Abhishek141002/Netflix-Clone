// This is a mock implementation of TMDB API calls
// In a real application, you would use the actual TMDB API

interface Movie {
  id: number
  title: string
  poster_path: string
  backdrop_path?: string
  overview?: string
  release_date?: string
  vote_average?: number
  runtime?: number
  adult?: boolean
  genres?: { id: number; name: string }[]
  credits?: {
    cast: { id: number; name: string; character: string }[]
    crew: { id: number; name: string; job: string }[]
  }
}

// Mock data for demonstration
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    poster_path: "/placeholder.svg?height=300&width=200",
    backdrop_path: "/placeholder.svg?height=800&width=1600",
    overview:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    release_date: "2016-07-15",
    vote_average: 8.6,
    runtime: 50,
    adult: false,
    genres: [
      { id: 1, name: "Drama" },
      { id: 2, name: "Sci-Fi" },
      { id: 3, name: "Mystery" },
    ],
    credits: {
      cast: [
        { id: 1, name: "Millie Bobby Brown", character: "Eleven" },
        { id: 2, name: "Finn Wolfhard", character: "Mike Wheeler" },
        { id: 3, name: "Winona Ryder", character: "Joyce Byers" },
        { id: 4, name: "David Harbour", character: "Jim Hopper" },
        { id: 5, name: "Gaten Matarazzo", character: "Dustin Henderson" },
      ],
      crew: [
        { id: 1, name: "The Duffer Brothers", job: "Director" },
        { id: 2, name: "The Duffer Brothers", job: "Writer" },
      ],
    },
  },
  {
    id: 2,
    title: "The Witcher",
    poster_path: "/placeholder.svg?height=300&width=200",
    backdrop_path: "/placeholder.svg?height=800&width=1600",
    overview:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    release_date: "2019-12-20",
    vote_average: 8.2,
    runtime: 60,
    adult: true,
    genres: [
      { id: 1, name: "Fantasy" },
      { id: 2, name: "Drama" },
      { id: 3, name: "Action" },
    ],
  },
  {
    id: 3,
    title: "Breaking Bad",
    poster_path: "/placeholder.svg?height=300&width=200",
    backdrop_path: "/placeholder.svg?height=800&width=1600",
    overview:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    release_date: "2008-01-20",
    vote_average: 9.5,
    runtime: 49,
    adult: true,
    genres: [
      { id: 1, name: "Drama" },
      { id: 2, name: "Crime" },
      { id: 3, name: "Thriller" },
    ],
  },
  {
    id: 4,
    title: "The Queen's Gambit",
    poster_path: "/placeholder.svg?height=300&width=200",
    backdrop_path: "/placeholder.svg?height=800&width=1600",
    overview:
      "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
    release_date: "2020-10-23",
    vote_average: 8.8,
    runtime: 60,
    adult: false,
    genres: [{ id: 1, name: "Drama" }],
  },
  {
    id: 5,
    title: "Money Heist",
    poster_path: "/placeholder.svg?height=300&width=200",
    backdrop_path: "/placeholder.svg?height=800&width=1600",
    overview:
      "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.",
    release_date: "2017-05-02",
    vote_average: 8.3,
    runtime: 70,
    adult: true,
    genres: [
      { id: 1, name: "Crime" },
      { id: 2, name: "Drama" },
      { id: 3, name: "Thriller" },
    ],
  },
  {
    id: 6,
    title: "Dark",
    poster_path: "/placeholder.svg?height=300&width=200",
    backdrop_path: "/placeholder.svg?height=800&width=1600",
    overview:
      "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    release_date: "2017-12-01",
    vote_average: 8.7,
    runtime: 60,
    adult: false,
    genres: [
      { id: 1, name: "Sci-Fi" },
      { id: 2, name: "Mystery" },
      { id: 3, name: "Drama" },
    ],
  },
]

// Get movies by category (trending, popular, top_rated)
export async function getMoviesByCategory(category: string): Promise<Movie[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, you would fetch from TMDB API
  // return fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.TMDB_API_KEY}`)
  //   .then(res => res.json())
  //   .then(data => data.results);

  return mockMovies
}

// Get movie details by ID
export async function getMovieDetails(id: number): Promise<Movie | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, you would fetch from TMDB API
  // return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits`)
  //   .then(res => res.json());

  const movie = mockMovies.find((movie) => movie.id === id)
  return movie || null
}

// Search movies by query
export async function searchMovies(query: string): Promise<Movie[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, you would fetch from TMDB API
  // return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`)
  //   .then(res => res.json())
  //   .then(data => data.results);

  // Filter mock movies based on query
  return mockMovies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
}

// Get similar movies
export async function getSimilarMovies(id: number): Promise<Movie[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, you would fetch from TMDB API
  // return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_API_KEY}`)
  //   .then(res => res.json())
  //   .then(data => data.results);

  // For demo, just return other movies
  return mockMovies.filter((movie) => movie.id !== id)
}

