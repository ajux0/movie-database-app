import {useHistory} from 'react-router-dom'

import {
  MovieCardContainer,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieRating,
  ViewDetailsButton,
} from './styledComponents'

import {IMAGE_URL} from '../../constants/apiConstants'

const MovieCard = ({movie}) => {
  const {id, title, poster_path: posterPath, vote_average: voteAverage} = movie
  const history = useHistory()

  const posterUrl = posterPath
    ? `${IMAGE_URL}${posterPath}`
    : 'https://via.placeholder.com/500x750?text=No+Image'

  return (
    <MovieCardContainer>
      <MovieImage src={posterUrl} alt={title} />

      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>

        <MovieRating>⭐ {voteAverage}</MovieRating>

        <ViewDetailsButton
          type="button"
          onClick={() => history.push(`/movie/${id}`)}
        >
          View Details
        </ViewDetailsButton>
      </MovieInfo>
    </MovieCardContainer>
  )
}

export default MovieCard
