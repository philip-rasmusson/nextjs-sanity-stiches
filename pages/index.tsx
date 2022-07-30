import type { NextPage } from 'next'
import { styled } from '@stitches/react'
import Link from 'next/link'
import { CommonLayout } from '../styles/Layout/Layout'

const recipesQuery = `*[_type == "recipe"]{
  _id,
  name,
  slug,
  mainImage,
}`

const ImageWrapper = styled('div', {
  width: '20rem',
  flexGrow: '1',
  alignItems: 'end',
  display: 'flex',
})

const Home: NextPage = ({ recipes }: any) => {
  return (
    <>
      <CommonLayout>
        <ImageWrapper>
          <img src='/_next/static/media/Painter.7fab2d4b.svg' />
        </ImageWrapper>
      </CommonLayout>
    </>
  )
}

export default Home
