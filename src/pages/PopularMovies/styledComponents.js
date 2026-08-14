import styled from 'styled-components'

export const PageContainer = styled.main`
  min-height: calc(100vh - 70px);
  padding: 30px 0 50px;
  background-color: #111827;
`

export const PageTitle = styled.h1`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  color: #ffffff;
  font-size: 30px;
  text-align: center;
`

export const LoadingText = styled.p`
  margin-top: 60px;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
`

export const ErrorText = styled.p`
  margin-top: 60px;
  color: #f87171;
  font-size: 18px;
  text-align: center;
`
