import Layout from '../components/layout'
import { AppProps } from 'next/app'
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset/>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
