import styled from 'styled-components'

export const PaginationContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 40px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`

export const PrevButton = styled.button`
  min-width: 90px;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
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
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    min-width: 75px;
    padding: 9px 12px;
    font-size: 13px;
  }
`

export const NextButton = styled.button`
  min-width: 90px;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background-color: #e50914;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #b20710;
  }

  &:disabled {
    background-color: #4b5563;
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    min-width: 75px;
    padding: 9px 12px;
    font-size: 13px;
  }
`

export const PageNumber = styled.p`
  min-width: 35px;
  margin: 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`
