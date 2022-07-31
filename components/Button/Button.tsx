import { styled } from '@stitches/react'

const ButtonStyled = (props: { backgroundColor?: string; label: string }) => {
  const BtnStyled = styled('button', {
    backgroundColor: `${props.backgroundColor}`,
    borderRadius: '2rem',
    padding: '.5rem 1rem',
  })

  return <BtnStyled>{props.label}</BtnStyled>
}

export { ButtonStyled }
