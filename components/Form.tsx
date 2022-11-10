import { useRouter } from 'next/router'
import { ChangeEvent, FC, MouseEvent, useState } from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Slide,
  Card,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'

import type { IHomePageProps, IFormOptions } from '../interface'
const Form: FC<IHomePageProps> = ({ categories, difficulties, types }) => {
  const router = useRouter()
  const [questionNumber, setQuestionNumber] = useState(5)
  const [options, setOptions] = useState({
    category: '0',
    type: 'any',
    difficulty: 'any',
  })

  // function
  const handleQuestionsNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)

    if (value < 1 || value > 50 || isNaN(value)) {
      e.preventDefault()
      return false
    }

    setQuestionNumber(value)
  }

  const handleDropDownChange = (
    e: SelectChangeEvent<unknown>,
    TARGET: 0 | 1 | 2
  ) => {
    const value = e?.target?.value
    let key = ['category', 'type', 'difficulty'][TARGET]

    setOptions(prevOptions => ({ ...prevOptions, [key]: value }))
  }

  const handleSubmitEvent = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()

    router.push(
      {
        pathname: '/quiz',
        query: { questionNumber, ...options },
      },
      '/quiz'
    )
  }
  return (
    <form method="post">
      <Card sx={{ p: 3 }}>
        
          <Typography
            variant="h1"
            textTransform="capitalize"
            textAlign="center"
            fontStyle="italic"
            color="primary"
            gutterBottom
          >
            quizzical
          </Typography>
 

        <TextField
          id="question-number"
          label="Number Of Questions"
          type="number"
          fullWidth
          onChange={handleQuestionsNumberChange}
          value={questionNumber}
          margin="normal"
          // error
          // helperText="Please enter a number between 1 and 50"
          // variant="filled"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            label="Category"
            onChange={e => handleDropDownChange(e, 0)}
            value={options.category}
          >
            {categories.map(cat => (
              <MenuItem key={cat.id} value={String(cat.id)}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="type-select-label">Type</InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            label="Type"
            onChange={e => handleDropDownChange(e, 1)}
            value={options.type}
          >
            {types.map(t => (
              <MenuItem key={t.id} value={t.id}>
                {t.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="difficulty-select-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-select-label"
            id="difficulty-select"
            label="Difficulty"
            onChange={e => handleDropDownChange(e, 2)}
            value={options.difficulty}
          >
            {difficulties.map(dif => (
              <MenuItem key={dif.id} value={dif.id}>
                {dif.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <Button
            variant="contained"
            type="submit"
            size="large"
            fullWidth
            onClick={handleSubmitEvent}
          >
            <Typography variant="h5">Start Quiz</Typography>
          </Button>
        </FormControl>
      </Card>
    </form>
  )
}

export default Form
