import {useEffect, useState} from 'react'

import MovieGrid from '../../components/MovieGrid'
import Loader from '../../components/Loader'
import FailureView from '../../components/FailureView'
import Pagination from '../../components/Pagination'
import {getTopRatedMovies} from '../../services/api'

import {PageContainer, PageTitle} from './styledComponents'

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      setHasError(false)

      try {
        const data = await getTopRatedMovies(page)

        if (data && data.results) {
          setMovies(data.results)
        } else {
          setHasError(true)
        }
      } catch (error) {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [page])

  const onRetry = () => {
    const fetchMovies = async () => {
      setIsLoading(true)
      setHasError(false)

      try {
        const data = await getTopRatedMovies(page)

        if (data && data.results) {
          setMovies(data.results)
        } else {
          setHasError(true)
        }
      } catch (error) {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }

  return (
    <PageContainer>
      <PageTitle>Top Rated</PageTitle>

      {isLoading && <Loader />}

      {!isLoading && hasError && <FailureView onRetry={onRetry} />}

      {!isLoading && !hasError && <MovieGrid movies={movies} />}

      {!hasError && <Pagination page={page} setPage={setPage} />}
    </PageContainer>
  )
}

export default TopRatedMovies
