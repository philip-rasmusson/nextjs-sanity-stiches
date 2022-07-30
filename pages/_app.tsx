import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components'
import { Footer } from '../components'
import { styled } from '@stitches/react'

export const MainWWrapperStyled = styled('main', {
  width: '100%',
  maxWidth: '1128px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainWWrapperStyled>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MainWWrapperStyled>
  )
}

export default MyApp
