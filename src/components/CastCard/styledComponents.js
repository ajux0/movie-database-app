import styled from 'styled-components'

export const CastCardContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  background-color: #1f2937;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

export const CastImage = styled.img`
  width: 100%;
  height: 250px;

  display: block;
  object-fit: cover;

  background-color: #374151;

  @media (max-width: 600px) {
    height: 220px;
  }
`

export const CastName = styled.h3`
  margin: 12px 8px 5px;

  color: #ffffff;
  font-size: 15px;
  line-height: 1.3;
`

export const CharacterName = styled.p`
  margin: 0 8px 15px;

  color: #9ca3af;
  font-size: 13px;
  line-height: 1.4;
`
