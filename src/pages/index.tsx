import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import Categories from '@/container/Home/Categories'
import CreateNft from '@/container/Home/CreateNft'
import Currently from '@/container/Home/Currently'
export default function HomePage() {
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
        <Categories />
        <CreateNft />
        <Currently />
      </div>
    </TheLayout>
  )
}
