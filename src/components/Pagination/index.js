import {
  PaginationContainer,
  PrevButton,
  NextButton,
  PageNumber,
} from './styledComponents'

const Pagination = ({page, setPage}) => {
  const onClickPrev = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
    }
  }

  const onClickNext = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <PaginationContainer>
      <PrevButton type="button" onClick={onClickPrev} disabled={page === 1}>
        Prev
      </PrevButton>

      <PageNumber>{page}</PageNumber>

      <NextButton type="button" onClick={onClickNext}>
        Next
      </NextButton>
    </PaginationContainer>
  )
}

export default Pagination
