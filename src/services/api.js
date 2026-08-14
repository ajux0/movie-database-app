import {API_KEY, BASE_URL} from '../constants/apiConstants'

export const getPopularMovies = async page => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
  )

  return response.json()
}

export const getTopRatedMovies = async page => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
  )

  return response.json()
}

export const getUpcomingMovies = async page => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
  )

  return response.json()
}

export const getMovieDetails = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  )

  return response.json()
}

export const getMovieCast = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  )

  return response.json()
}

export const searchMovies = async (movieName, page) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
      movieName,
    )}&page=${page}`,
  )

  return response.json()
}
