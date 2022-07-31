import { sanityClient, urlFor, usePreviewSubscription } from '../../lib/sanity'
import { PortableText } from '@portabletext/react'
import { styled } from '@stitches/react'
import { CommonLayout } from '../../styles/Layout/Layout'

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      author,
      text
    }`

const ImageStyled = styled('img', {
  objectFit: 'cover',
  objectPosition: 'center center',
  width: '100%',
  height: '100%',
  aspectRatio: '16/9',
  marginBottom: '2rem',
})

const ListItemStyled = styled('li', {
  listStyle: 'none',
  display: 'flex',

  '& p': {
    margin: '0',
    lineHeight: '2rem',
  },
})

const BylineStyled = styled('div', {
  marginTop: '3rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
})

export default function OneRecipe({ data, preview }: any) {
  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post?.slug.current },
    initialData: data,
    enabled: preview,
  })

  console.log(data)

  // if (!data) return <div>Loading...</div>
  return !data ? (
    <p>loddy</p>
  ) : (
    <CommonLayout>
      <article style={{ flexDirection: 'column', marginBottom: '2.5rem' }}>
        {post?.mainImage && (
          <ImageStyled src={urlFor(post?.mainImage).url()} alt={post.title} />
        )}

        <h2>{post?.title}</h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <PortableText value={post?.text} />
        </div>
        {/* <BylineStyled>{post?.author}</BylineStyled> */}
      </article>
    </CommonLayout>
  )
  // )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  )

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: any) {
  const { slug } = params
  const post = await sanityClient.fetch(postQuery, { slug })
  return { props: { data: { post }, preview: true } }
}
