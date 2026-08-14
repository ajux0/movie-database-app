import styled from 'styled-components'

export const MovieGridContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  justify-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    width: 95%;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`
