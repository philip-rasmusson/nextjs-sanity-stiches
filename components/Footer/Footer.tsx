import { styled } from '@stitches/react'

const FooterStyled = styled('footer', {
  display: 'flex',
  flex: '1',
  padding: '2rem 0',
  borderTop: '1px solid #eaeaea',
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: '8rem',
})

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <h4>
        This is the <em>Footer</em>
      </h4>
    </FooterStyled>
  )
}
export { Footer }
