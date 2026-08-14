import {useCallback, useEffect, useState} from 'react'

import MovieGrid from '../../components/MovieGrid'
import Loader from '../../components/Loader'
import FailureView from '../../components/FailureView'
import Pagination from '../../components/Pagination'
import {getTopRatedMovies} from '../../services/api'

import {PageContainer, PageTitle} from './styledComponents'

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage, totalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const fetchMovies = useCallback(async () => {
    setIsLoading(true)
    setHasError(false)

    try {
      const data = await getTopRatedMovies(page)

      if (data.results) {
        setMovies(data.results)
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

  const renderContent = () => {
    if (isLoading) {
      return <Loader />
    }

    if (hasError) {
      return <FailureView onRetry={onRetry} />
    }

    return (
      <>
        <MovieGrid movies={movies} />

        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </>
    )
  }

  return (
    <PageContainer>
      <PageTitle>Top Rated</PageTitle>
      {renderContent()}
    </PageContainer>
  )
}

export default TopRatedMovies
