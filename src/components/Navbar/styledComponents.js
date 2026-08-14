import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: #030712;
  border-bottom: 1px solid #1f2937;
`

export const NavbarContent = styled.div`
  width: 90%;
  max-width: 1300px;
  min-height: 70px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    padding: 12px 0;
    gap: 15px;
  }
`

export const Logo = styled.a`
  flex-shrink: 0;
  color: #e50914;
  text-decoration: none;

  h1 {
    margin: 0;
    font-size: 26px;
    font-weight: 800;
  }

  &:hover {
    color: #ff1f2d;
  }
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    order: 3;
    width: 100%;
    justify-content: center;
    gap: 15px;
  }
`

export const NavLinkItem = styled(NavLink)`
  color: #d1d5db;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;

  &.popular-nav-link::after {
    content: 'Popular';
  }

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #e50914;
  }
`

export const SearchContainer = styled.form`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 900px) {
    margin-left: auto;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
`

export const SearchInput = styled.input`
  width: 220px;
  height: 38px;
  padding: 0 12px;

  border: 1px solid #374151;
  border-radius: 5px;
  outline: none;

  background-color: #111827;
  color: #ffffff;
  font-size: 14px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #e50914;
  }

  @media (max-width: 600px) {
    flex: 1;
    width: auto;
  }
`

export const SearchButton = styled.button`
  height: 38px;
  padding: 0 15px;

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
