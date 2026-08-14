import styled from 'styled-components'

export const FailureContainer = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
`

export const FailureTitle = styled.h2`
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 24px;
`

export const FailureDescription = styled.p`
  margin: 0 0 20px;
  color: #9ca3af;
  font-size: 16px;
`

export const RetryButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #e50914;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #b20710;
  }
`
