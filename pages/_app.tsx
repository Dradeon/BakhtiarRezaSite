
import Layout from '../Components/Layout/Layout'
import { AppProps } from '../node_modules/next/app'
import '../styles/global.scss'


export default function App({ Component, pageProps }: AppProps) {
    return <>
      <noscript>Please Enable Javascript as it essential to run this website.</noscript>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
     
}
  