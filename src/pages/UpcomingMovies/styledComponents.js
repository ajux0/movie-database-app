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

  @media (max-width: 480px) {
    font-size: 24px;
  }
`
