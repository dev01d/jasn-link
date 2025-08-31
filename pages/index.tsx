import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>dev01d</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main>
        <Image
          className="image"
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
        />
        <h3 className="description">jason.behnke</h3>
        <div className="grid">
          <a href="https://jasonbehnke.io" className="card">
            <h3>My Website</h3>
          </a>
          <a href="https://dev.to/dev01d" className="card">
            <h3>Technical writing</h3>
          </a>
          <a
            href="https://vscodethemes.com/e/dev01d.devoid-theme"
            className="card"
          >
            <h3>VSCode Theme</h3>
          </a>
          <a href="https://github.com/dev01d" className="card">
            <h3>Github</h3>
          </a>
          <a href="https://www.twitch.tv/imdev01d" className="card">
            <h3>Twitch</h3>
          </a>
          <a href="mailto:contact@jasonbehnke.io" className="card">
            <h3>Contact</h3>
          </a>
        </div>
      </main>
    </div>
  )
}
