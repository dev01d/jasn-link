import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const RootDocument = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "9a74976ee7614d8ca208264cd558947e"}'
          strategy="afterInteractive"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default RootDocument
