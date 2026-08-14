import styled from 'styled-components'

export const PaginationContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 40px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const PaginationButton = styled.button`
  min-width: 100px;
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  background-color: #e50914;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #b20710;
  }

  &:disabled {
    background-color: #4b5563;
    cursor: not-allowed;
  }
`

export const PageNumber = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`
