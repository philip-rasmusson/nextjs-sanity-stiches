import { styled } from '@stitches/react'
import React from 'react'

const HeaderStyled = styled('header', {
  margin: '2rem 0',
  fontFamily: '$system',
})

const DividerStyled = styled('div', {
  borderTop: '1px solid #45454586',
  marginTop: '2rem',
  paddingBottom: '2rem',
})

const LogoWrapperStyled = styled('div', {
  padding: '0 2rem',
  '& h1': {
    color: '$red500',
  },
})

const NavbarStyled = styled('nav', {
  paddingRight: '2rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  margin: '$1 $2',

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
          <li>
            <a href='/blog'>Blog</a>
          </li>
        </ul>
      </NavbarStyled>
    </HeaderStyled>
  )
}

export { Header }
