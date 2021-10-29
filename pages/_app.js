import PlausibleProvider from 'next-plausible'

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain="jasn.link"
      selfHosted={true}
      customDomain="https://analytics.jasonbehnke.io"
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
