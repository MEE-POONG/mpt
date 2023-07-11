import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import HomeMain from '@/container/Home/HomeMain'
import HomeCategories from '@/container/Home/HomeCategories'
import HomeCreateNft from '@/container/Home/HomeCreateNft'
import HomeCurrently from '@/container/Home/HomeCurrently'
export default function Home() {
  return (
    <TheLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Me Prompt Technology</title>
      </Head>
      <div className='home-page'>
        <HomeMain />
        <HomeCategories />
        <HomeCreateNft />
        <HomeCurrently />
      </div>
    </TheLayout>
  )
}
