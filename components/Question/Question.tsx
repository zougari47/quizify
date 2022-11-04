'use client'

import { ChangeEvent, FC, useCallback, useMemo, useRef, useState } from 'react'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { Box, Button, Fade, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { Container } from '@mui/system'

interface IQuestionComponentProps {
  question: string
  number: number
  correctAnswer: string
  falseAnswers: string[]
}

const Question: FC<IQuestionComponentProps> = ({
  question,
  number,
  correctAnswer,
  falseAnswers
}) => {
  const [questionProps, setQuestionProps] = useState({
    selectedAnswer: '',
    hasAnswered: false
  })
  const randomNumber = useRef(Math.random())
  console.log('Question has rerender', questionProps.selectedAnswer)

  const handleChangeRadioBtn = (e: ChangeEvent<HTMLInputElement>) =>
    setQuestionProps(prevProps => ({
      ...prevProps,
      selectedAnswer: e.target.value
    }))

  const handleSubmitClick = () => {
    // check if has answered
    if (!questionProps.hasAnswered) {
      // show alert
    }

    if (questionProps.selectedAnswer === correctAnswer) {
      console.log('True')
    } else {
      console.log('False')
    }

    setQuestionProps(prevProps => ({ ...prevProps, hasAnswered: true }))
  }

  const handleNextClick = () => {}

  return (
    <Fade timeout={1000} in={true}>
      <Container>
        <Box
          borderRadius={1}
          p={3}
          boxShadow={`0 3px 6px rgba(0,0,0,0.2)`}
          // sx={theme => ({ boxShadow: theme. })}
        >
          <Typography
            variant="subtitle2"
            display="block"
            textAlign="center"
            mt={2}
            mb={3}
          >
            Question {number}/5
          </Typography>

          <Typography
            display="block"
            textAlign="center"
            fontStyle="italic"
            mb={4}
          >
            {question}
          </Typography>

          <FormControl margin="dense" fullWidth>
            <RadioGroup
              row
              aria-labelledby="answers"
              name="answers"
              sx={{
                justifyContent: 'space-around'
              }}
              value={questionProps.selectedAnswer}
              onChange={handleChangeRadioBtn}
            >
              {[correctAnswer, ...falseAnswers]
                .sort(() => 0.5 - randomNumber.current)
                .map(a => (
                  <FormControlLabel
                    key={a}
                    value={a}
                    control={<Radio />}
                    label={a}
                  />
                ))}
            </RadioGroup>
          </FormControl>

          <Box
            component="div"
            display="flex"
            justifyContent="center"
            mt={4}
            gap={3}
          >
            <Button
              variant="outlined"
              size="large"
              endIcon={<CheckRoundedIcon />}
              onClick={handleSubmitClick}
              disabled={questionProps.hasAnswered ? true : false}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              size="large"
              endIcon={<SendRoundedIcon />}
              disabled={questionProps.hasAnswered ? false : true}
              onClick={handleNextClick}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </Fade>
  )
}

export default Question
