// import '../styles/globals.css'
import '../styles/pico.min.css';

function MyApp({ Component, pageProps }) {
  return <>
  <main>
    <Component {...pageProps} />
  </main>
  </>
}

export default MyApp
