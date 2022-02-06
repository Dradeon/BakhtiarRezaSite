
import '../styles/global.scss'


// DO NOT CHANGE (ONLY CHANGE IF YOU WANT TO CHANGE LAYOUT FOR ALL PAGES)
export default function App({ Component, pageProps }) {
    return <>
      <noscript>Please Enable Javascript as it essential to run this website.</noscript>
      <Component {...pageProps} />
    </>
     
}
  