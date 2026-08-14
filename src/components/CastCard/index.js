import {
  CastCardContainer,
  CastImage,
  CastName,
  CharacterName,
} from './styledComponents'

import {IMAGE_URL} from '../../constants/apiConstants'

const CastCard = ({cast}) => {
  const {name, character, profile_path: profilePath} = cast

  const imageUrl = profilePath
    ? `${IMAGE_URL}${profilePath}`
    : 'https://via.placeholder.com/300x450?text=No+Image'

  return (
    <CastCardContainer>
      <CastImage src={imageUrl} alt={name} />

      <CastName>{name}</CastName>

      <CharacterName>Character: {character || 'Unknown'}</CharacterName>
    </CastCardContainer>
  )
}

export default CastCard
