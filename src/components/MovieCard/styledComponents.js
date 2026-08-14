import styled from 'styled-components'

export const MovieCardContainer = styled.div`
  width: 220px;
  background-color: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 190px;
  }

  @media (max-width: 480px) {
    width: 160px;
  }
`

export const MovieImage = styled.img`
  width: 100%;
  height: 320px;
  display: block;
  object-fit: cover;
  background-color: #374151;

  @media (max-width: 768px) {
    height: 280px;
  }

  @media (max-width: 480px) {
    height: 240px;
  }
`

export const MovieInfo = styled.div`
  padding: 14px;
`

export const MovieTitle = styled.h2`
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 17px;
  line-height: 1.3;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const MovieRating = styled.p`
  margin: 0 0 12px;
  color: #fbbf24;
  font-size: 14px;
  font-weight: 600;
`

export const ViewDetailsButton = styled.button`
  width: 100%;
  padding: 10px;

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
