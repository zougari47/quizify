import { GetServerSideProps, NextPage } from 'next'
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  Typography,
} from '@mui/material'
import type { IResultPageProps } from '../../interface'
import { useRouter } from 'next/router'

const ResultPage: NextPage<IResultPageProps> = ({ result }) => {
  const router = useRouter()
  return (
    <Card sx={{ textAlign: 'center', p: 3, maxWidth: '400px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Result
        </Typography>
        <Typography variant="h5" component="h1">
          Your Score is {result.replace('/', ' / ')}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'block' }}>
        <Button
          size="large"
          variant="contained"
          sx={{ fontWeight: 'bold' }}
          onClick={() => router.push('/')}
        >
          Play Again
        </Button>
      </CardActions>
    </Card>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { result } = ctx.query

  // if we don't received the params => redirect to home page
  if (!Boolean(result)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { result },
  }
}

export default ResultPage
