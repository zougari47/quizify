import React, { ChangeEvent, FC, memo, useCallback } from 'react'
import { Box, Fade, Typography } from '@mui/material'
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup'
import { styled } from '@mui/material/styles'

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}))

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup()

  let checked = false

  if (radioGroup) {
    checked = radioGroup.value === props.value
  }

  return <StyledFormControlLabel checked={checked} {...props} />
}

interface UseRadioGroupComponentProps {
  answers: string[]
  updateState: (value: string) => void
  randomNumber: number
}

const UseRadioGroup: FC<UseRadioGroupComponentProps> = ({
  answers,
  randomNumber,
  updateState,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    updateState(value)
  }

  console.log('useRadioGroup item has rerender')
  return (
    <RadioGroup
      name="use-radio-group"
      defaultValue=""
      row
      sx={{
        mt: 5,
        justifyContent: 'space-around',
      }}
      onChange={handleChange}
    >
      {/* <MyFormControlLabel value="first" label="First" control={<Radio />} />
      <MyFormControlLabel value="second" label="Second" control={<Radio />} />
      <MyFormControlLabel value="third" label="Third" control={<Radio />} />
      <MyFormControlLabel value="fourth" label="Fourth" control={<Radio />} /> */}

      {answers
        .sort(() => 0.5 - randomNumber) // sort answers randomly
        .map(a => (
          <MyFormControlLabel key={a} value={a} label={a} control={<Radio />} />
        ))}
    </RadioGroup>
  )
}

export default React.memo(UseRadioGroup)
