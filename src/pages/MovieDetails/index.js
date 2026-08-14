import {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import Loader from '../../components/Loader'
import FailureView from '../../components/FailureView'
import CastCard from '../../components/CastCard'

import {getMovieDetails, getMovieCast} from '../../services/api'
import {IMAGE_URL} from '../../constants/apiConstants'

import {
  PageContainer,
  MovieDetailsContainer,
  MovieImage,
  MovieInfo,
  MovieTitle,
  Rating,
  InfoList,
  InfoItem,
  OverviewTitle,
  Overview,
  SectionTitle,
  CastGrid,
  NoCastText,
} from './styledComponents'

const MovieDetails = () => {
  const {movieId} = useParams()

  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const fetchMovieDetails = useCallback(async () => {
    setIsLoading(true)
    setHasError(false)

    try {
      const [movieData, castData] = await Promise.all([
        getMovieDetails(movieId),
        getMovieCast(movieId),
      ])

      if (movieData.id) {
        setMovie(movieData)
        setCast(castData.cast || [])
      } else {
        setHasError(true)
      }
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }, [movieId])

  useEffect(() => {
    fetchMovieDetails()
  }, [fetchMovieDetails])

  const onRetry = () => {
    fetchMovieDetails()
  }

  if (isLoading) {
    return (
      <PageContainer>
        <Loader />
      </PageContainer>
    )
  }

  if (hasError || !movie) {
    return (
      <PageContainer>
        <FailureView onRetry={onRetry} />
      </PageContainer>
    )
  }

  const {
    title,
    poster_path: posterPath,
    vote_average: voteAverage,
    runtime,
    genres,
    release_date: releaseDate,
    overview,
  } = movie

  const posterUrl = posterPath
    ? `${IMAGE_URL}${posterPath}`
    : 'https://via.placeholder.com/500x750?text=No+Image'

  const genreNames =
    genres && genres.length > 0
      ? genres.map(genre => genre.name).join(', ')
      : 'N/A'

  const runtimeHours = runtime ? Math.floor(runtime / 60) : 0
  const runtimeMinutes = runtime ? runtime % 60 : 0

  const formattedRuntime = runtime
    ? `${runtimeHours}h ${runtimeMinutes}m`
    : 'N/A'

  return (
    <PageContainer>
      <MovieDetailsContainer>
        <MovieImage src={posterUrl} alt={title} />

        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>

          <Rating>
            ⭐ {voteAverage ? voteAverage.toFixed(1) : 'N/A'} / 10
          </Rating>

          <InfoList>
            <InfoItem>
              <strong>Duration</strong>
              <span>{formattedRuntime}</span>
            </InfoItem>

            <InfoItem>
              <strong>Genre</strong>
              <span>{genreNames}</span>
            </InfoItem>

            <InfoItem>
              <strong>Release Date</strong>
              <span>{releaseDate || 'N/A'}</span>
            </InfoItem>
          </InfoList>

          <OverviewTitle>Overview</OverviewTitle>

          <Overview>
            {overview || 'No overview available for this movie.'}
          </Overview>
        </MovieInfo>
      </MovieDetailsContainer>

      <SectionTitle>Cast Details</SectionTitle>

      {cast.length > 0 ? (
        <CastGrid>
          {cast.map(castMember => (
            <CastCard
              key={`${castMember.id}-${castMember.character}`}
              cast={castMember}
            />
          ))}
        </CastGrid>
      ) : (
        <NoCastText>No cast information available.</NoCastText>
      )}
    </PageContainer>
  )
}

export default MovieDetails
