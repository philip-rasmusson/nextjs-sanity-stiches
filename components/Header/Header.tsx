import { styled } from '@stitches/react'
import React from 'react'

const HeaderStyled = styled('header', {
  margin: '2rem 0',
})

const DividerStyled = styled('div', {
  borderTop: '1px solid #45454586',
  marginTop: '2rem',
  paddingBottom: '2rem',
})

const LogoWrapperStyled = styled('div', {
  '& h1': {
    color: 'red',
  },
})

const NavbarStyled = styled('nav', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',

  '& ul': {
    display: 'flex',
    columnGap: '1rem',

    '& li': {
      listStyle: 'none',
      letterSpacing: '2px',
      paddingBottom: '.5rem',

      '&:hover': {
        cursor: 'pointer',
        borderBottom: '1px solid #454545',
      },
    },
  },
})

const Header = () => {
  return (
    <HeaderStyled>
      <LogoWrapperStyled>
        <a href='/'>
          <h1>NextJS | Sanity</h1>
        </a>
      </LogoWrapperStyled>
      <DividerStyled></DividerStyled>
      <NavbarStyled>
        <ul>
          <li>
            <a href='/recipes'>Recipes</a>
          </li>
          <li>Blog</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </NavbarStyled>
    </HeaderStyled>
  )
}

export { Header }
