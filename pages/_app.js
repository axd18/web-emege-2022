import 'swiper/swiper.scss';
import '../assets/css/secciones.css';
import firebase, { FirebaseContext } from '../firebase';

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const App = ({ Component, pageProps }) => {
  
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <FirebaseContext.Provider
      value={{
        firebase
      }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default App
