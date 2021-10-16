import '../styles/globals.css'
import '../styles/design-tokens.css'
import type { AppProps } from 'next/app'
import AppMainWrapper from '../components/AppMainWrapper/AppMainWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return <AppMainWrapper>  <Component {...pageProps} /></AppMainWrapper>
}
export default MyApp
