import { AppProps } from 'next/app'
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset/>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
