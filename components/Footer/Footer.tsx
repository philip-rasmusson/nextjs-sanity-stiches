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
      <h4>Ce n'est pas un pied</h4>
    </FooterStyled>
  )
}
export { Footer }
