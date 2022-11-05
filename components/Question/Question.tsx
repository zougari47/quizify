import { useRouter } from 'next/router'
import { ChangeEvent, FC, useCallback, useMemo, useRef, useState } from 'react'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { Card, Box, Button, Fade, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { Container } from '@mui/system'

import type { IQuestionComponentProps } from '../../interface/'

const Question: FC<IQuestionComponentProps> = ({
  question,
  number,
  correctAnswer,
  falseAnswers,
  score,
  questionsCount,
  nextQuestion,
  updateScore
}) => {
  const [questionProps, setQuestionProps] = useState({
    selectedAnswer: '',
    hasAnswered: false
  })
  const randomNumber = useRef(Math.random())
  const router = useRouter()

  // **** functions ****
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
      updateScore() // + 1
    }

    setQuestionProps(prevProps => ({ ...prevProps, hasAnswered: true }))
  }

  const handleNextClick = () => {
    // *TODO -  check if the current question is the last question
    if (number === questionsCount) {
      router.push(
        {
          pathname: '/result',
          query: { result: `${score}/${questionsCount}` }
        },
        '/result'
      )
      return
    }
    nextQuestion()
  }

  return (
    <Fade timeout={1000} in={true}>
      <Container>
        <Card
          sx={{ paddingBlock: 3 }}
          // sx={theme => ({ boxShadow: theme. })}
        >
          <Typography
            variant="subtitle2"
            display="block"
            textAlign="center"
            mt={2}
            mb={3}
          >
            Question {number}/{questionsCount}
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
        </Card>
      </Container>
    </Fade>
  )
}

export default Question
