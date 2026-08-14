import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import {
  NavbarContainer,
  NavbarContent,
  Logo,
  NavLinks,
  NavLinkItem,
  SearchContainer,
  SearchInput,
  SearchButton,
} from './styledComponents'

const Navbar = () => {
  const history = useHistory()
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const onSearch = event => {
    event.preventDefault()

    const trimmedSearch = searchInput.trim()

    if (trimmedSearch === '') {
      return
    }

    history.push(`/search/${encodeURIComponent(trimmedSearch)}`)
  }

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo as={Link} to="/" exact>
          <h1>movieDB</h1>
        </Logo>

        <NavLinks>
          <NavLinkItem
            to="/"
            exact
            className="popular-nav-link"
            aria-label="Popular"
          >
            <span />
          </NavLinkItem>

          <NavLinkItem to="/top-rated">Top Rated</NavLinkItem>

          <NavLinkItem to="/upcoming">Upcoming</NavLinkItem>
        </NavLinks>

        <SearchContainer onSubmit={onSearch}>
          <SearchInput
            type="text"
            placeholder="Search movies..."
            value={searchInput}
            onChange={onChangeSearchInput}
          />

          <SearchButton type="submit">Search</SearchButton>
        </SearchContainer>
      </NavbarContent>
    </NavbarContainer>
  )
}

export default Navbar
