import {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import MovieGrid from '../../components/MovieGrid'
import Loader from '../../components/Loader'
import FailureView from '../../components/FailureView'
import Pagination from '../../components/Pagination'

import {searchMovies} from '../../services/api'

import {PageContainer, PageTitle, NoResultsText} from './styledComponents'

const SearchMovies = () => {
  const {query} = useParams()

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [totalPages, setTotalPages] = useState(1)

  const fetchSearchMovies = useCallback(async () => {
    setIsLoading(true)
    setHasError(false)

    try {
      const data = await searchMovies(decodeURIComponent(query), page)

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
  }, [query, page])

  useEffect(() => {
    setPage(1)
  }, [query])

  useEffect(() => {
    fetchSearchMovies()
  }, [fetchSearchMovies])

  const onRetry = () => {
    fetchSearchMovies()
  }

  if (isLoading) {
    return (
      <PageContainer>
        <Loader />
      </PageContainer>
    )
  }

  if (hasError) {
    return (
      <PageContainer>
        <FailureView onRetry={onRetry} />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PageTitle>Search Results</PageTitle>

      {movies.length > 0 ? (
        <>
          <MovieGrid movies={movies} />
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      ) : (
        <NoResultsText>
          No movies found for &quot;{decodeURIComponent(query)}&quot;
        </NoResultsText>
      )}
    </PageContainer>
  )
}

export default SearchMovies
