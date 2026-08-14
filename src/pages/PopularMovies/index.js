import {useCallback, useEffect, useState} from 'react'

import MovieGrid from '../../components/MovieGrid'
import Loader from '../../components/Loader'
import FailureView from '../../components/FailureView'
import Pagination from '../../components/Pagination'
import {getPopularMovies} from '../../services/api'

import {PageContainer, PageTitle} from './styledComponents'

const PopularMovies = () => {
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const fetchMovies = useCallback(async () => {
    setIsLoading(true)
    setHasError(false)

    try {
      const data = await getPopularMovies(page)

      if (data && data.results) {
        setMovies(data.results)
        setTotalPages(data.total_pages || 1)
      } else {
        setHasError(true)
      }
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  const onRetry = () => {
    fetchMovies()
  }

  return (
    <PageContainer>
      <PageTitle>Popular</PageTitle>

      {isLoading && <Loader />}

      {!isLoading && hasError && <FailureView onRetry={onRetry} />}

      {!isLoading && !hasError && (
        <>
          <MovieGrid movies={movies} />

          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </PageContainer>
  )
}

export default PopularMovies
