import { Button, Stack, Typography } from '@mui/material'
import { CSSProperties, forwardRef } from 'react'

type IntroProps = {
  style?: CSSProperties // applied by transition
  onContinue: () => void
}

export const GameIntro = forwardRef<HTMLDivElement, IntroProps>((props, ref) => {
  return (
    <div style={{ ...props.style }} ref={ref} className='menu-intro'>
      <Typography variant='body1'>
        <p>
          The town of Rustfield has fallen on hard times. Just 'bout everything that could go wrong, did.
        </p>
        <p>Fire? Yup.</p>
        <p>Crime? Yup.</p>
        <p>Corruption? You betcha.</p>
        <p>Tornado? Two.</p>
        <p>It's gotten bad enough that the State has appointed you the new Mayor of Rustfield.</p>
        <p>You've got $1 Million (and quesionably broad authority) to turn this place around.</p>
        <p>Make the citizens of Rustfield happy, but don't run out of money!</p>
      </Typography>
      <Stack spacing={2} className='menu-main-buttons'>
        <Button variant='contained' onClick={props.onContinue}> Continue </Button>
      </Stack>
    </div>
  )
})
