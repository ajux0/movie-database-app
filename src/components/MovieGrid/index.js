import MovieCard from '../MovieCard'

import {MovieGridContainer} from './styledComponents'

const MovieGrid = ({movies}) => (
  <MovieGridContainer>
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </MovieGridContainer>
)

export default MovieGrid
