import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import Discover from '@/container/About/Discover'
import TopSeller from '@/container/About/TopSeller'
export default function AboutPage() {
  return (
    <TheLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Me Prompt Technology</title>
      </Head>
      <div className='About-page'>
        <Discover />
        <TopSeller />
      </div>
    </TheLayout>
  )
}
