import {
  PaginationContainer,
  PaginationButton,
  PageNumber,
} from './styledComponents'

const Pagination = ({page, setPage, totalPages}) => {
  const onClickPrevious = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const onClickNext = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  return (
    <PaginationContainer>
      <PaginationButton
        type="button"
        onClick={onClickPrevious}
        disabled={page === 1}
      >
        Previous
      </PaginationButton>

      <PageNumber>
        Page {page} of {totalPages}
      </PageNumber>

      <PaginationButton
        type="button"
        onClick={onClickNext}
        disabled={page === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  )
}

export default Pagination
