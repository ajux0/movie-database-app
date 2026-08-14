import styled from 'styled-components'

export const PageContainer = styled.main`
  min-height: calc(100vh - 70px);
  padding: 45px 5% 60px;
  background-color: #111827;
`

export const MovieDetailsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  gap: 45px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`

export const MovieImage = styled.img`
  width: 300px;
  height: 450px;
  flex-shrink: 0;

  object-fit: cover;
  border-radius: 10px;

  background-color: #374151;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);

  @media (max-width: 480px) {
    width: 220px;
    height: 330px;
  }
`

export const MovieInfo = styled.div`
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const MovieTitle = styled.h1`
  margin: 0 0 15px;

  color: #ffffff;
  font-size: 38px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`

export const Rating = styled.p`
  display: inline-block;

  margin: 0 0 25px;
  padding: 7px 12px;

  border-radius: 5px;
  background-color: #1f2937;

  color: #fbbf24;
  font-size: 16px;
  font-weight: 700;
`

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const InfoItem = styled.div`
  display: flex;
  gap: 15px;

  color: #d1d5db;
  font-size: 15px;
  line-height: 1.5;

  strong {
    min-width: 100px;
    color: #ffffff;
  }

  span {
    color: #d1d5db;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2px;
  }
`

export const OverviewTitle = styled.h2`
  margin: 30px 0 10px;

  color: #ffffff;
  font-size: 22px;
`

export const Overview = styled.p`
  margin: 0;

  color: #d1d5db;
  font-size: 16px;
  line-height: 1.8;
`

export const SectionTitle = styled.h2`
  width: 100%;
  max-width: 1100px;
  margin: 55px auto 25px;

  color: #ffffff;
  font-size: 28px;

  @media (max-width: 480px) {
    font-size: 23px;
  }
`

export const CastGrid = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`

export const NoCastText = styled.p`
  margin: 30px auto;
  color: #9ca3af;
  font-size: 16px;
  text-align: center;
`
