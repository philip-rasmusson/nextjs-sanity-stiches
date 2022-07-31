import { styled } from '@stitches/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { sanityClient, urlFor } from '../../lib/sanity'
import { CommonLayout } from '../../styles/Layout/Layout'

const recipesQuery = `*[_type == "recipe"]{
  _id,
  name,
  slug,
  mainImage,
}`

export async function getStaticProps() {
  const recipes = await sanityClient.fetch(recipesQuery)

  return {
    props: {
      recipes,
    },
  }
}

const Home: NextPage = ({ recipes }: any) => {
  return (
    <CommonLayout>
      <div>
        {recipes.map(({ slug, name, _id, mainImage }: any) => (
          <Link href={`/recipes/${slug.current}`} key={_id}>
            <p>{name}</p>
          </Link>
        ))}
      </div>
    </CommonLayout>
  )
}

export default Home
