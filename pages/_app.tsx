import { Grid, createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#E7EBF0'
        }
      }
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  )
}
