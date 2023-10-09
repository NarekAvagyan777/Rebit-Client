import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name='keywords' content="web development, mobile development, software development, ui/ux, devops, ai models, consulting" />
        <link rel="shortcut icon" href="/LogoMark_color.png" />
        <link 
          rel="stylesheet"
          href="https://unpkg.com/react-responsive-carousel/lib/styles/carousel.min.css"
        />
      </Head>
    <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
