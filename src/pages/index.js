import Head from 'next/head'
import { Inter } from 'next/font/google'
import { HomePageTitle, Services, FeaturedProjects, Slider, RuningLine } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Rebit.ai</title>
        <meta name="description" content="Rebit.ai homepage"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageTitle />
      <Services />
      <RuningLine/>
      <FeaturedProjects />
      {/* <Slider /> */}
    </>
  )
}
