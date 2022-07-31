import { CSS, styled } from '@stitches/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { ButtonStyled } from '../../components/Button'
import { Text } from '../../components/Text'
import { sanityClient, urlFor } from '../../lib/sanity'
import { CommonLayout } from '../../styles/Layout/Layout'
// import { darkTheme } from '../../styles/themes'

const blogQuery = `*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage,
}`

export async function getStaticProps() {
  const blogPosts = await sanityClient.fetch(blogQuery)

  return {
    props: {
      blogPosts,
    },
  }
}

const Home: NextPage = ({ blogPosts }: any) => {
  return (
    <CommonLayout>
      <div>
        {blogPosts.map(({ slug, title, _id, mainImage }: any) => (
          <Link href={`/blog/${slug.current}`} key={_id}>
            <Text size={3}>{title}</Text>
          </Link>
        ))}
        <ButtonStyled backgroundColor='aqua' label='rejv' />
      </div>
    </CommonLayout>
  )
}

export default Home
