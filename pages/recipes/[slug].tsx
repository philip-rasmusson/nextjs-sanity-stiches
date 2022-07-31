import { sanityClient, urlFor, usePreviewSubscription } from '../../lib/sanity'
import { PortableText } from '@portabletext/react'
import { styled } from '@stitches/react'
import { CommonLayout } from '../../styles/Layout/Layout'

const recipeQuery = `*[_type == "recipe" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      mainImage,
      ingredient[]{
        _key,
        unit,
        wholeNumber,
        fraction,
        ingredient->{
          name
        }
      },
      instructions
    }`

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "recipe" && defined(slug.current)]{
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
  const recipe = await sanityClient.fetch(recipeQuery, { slug })
  return { props: { data: { recipe }, preview: true } }
}

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

export default function OneRecipe({ data, preview }: any) {
  const { data: recipe } = usePreviewSubscription(recipeQuery, {
    params: { slug: data.recipe?.slug.current },
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
        {recipe.mainImage && (
          <ImageStyled
            src={urlFor(recipe?.mainImage).url()}
            alt={recipe.name}
          />
        )}

        <h2>{recipe?.name}</h2>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              flexDirection: 'column',
              paddingRight: '2rem',
              marginRight: '2rem',
              width: '40rem',
              borderRight: '1px solid #454545',
            }}
          >
            <h3>Ingredienser</h3>
            <ul
              style={{ display: 'flex', flexDirection: 'column', padding: '0' }}
            >
              {recipe?.ingredient?.map((ingredient: any) => (
                <ListItemStyled key={ingredient._key} className='ingredient'>
                  <span style={{ width: '3rem' }}>
                    <p>{ingredient?.wholeNumber}</p>
                    <p>{ingredient?.fraction}</p>
                  </span>
                  <span style={{ width: '3rem' }}>
                    <p>{ingredient?.unit}</p>
                  </span>
                  <p>{ingredient?.ingredient?.name}</p>
                </ListItemStyled>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Tillagning</h3>
            <span style={{ paddingLeft: '1.5rem' }}>
              <PortableText value={recipe?.instructions} />
            </span>
          </div>
        </div>
      </article>
    </CommonLayout>
  )
  // )
}
