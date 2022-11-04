import { Grid } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '95vh' }}
      >
        <Component {...pageProps} />
      </Grid>
    </main>
  )
}
