import '../styles/globals.css'
import Head from 'next/head'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/img/flcoya-favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/flcoya-favicon-32.png" />
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
}