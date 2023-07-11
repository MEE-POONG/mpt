import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import NewsDiscover from '@/container/News/NewsDiscover'
import NewsTopSeller from '@/container/News/NewsTopSeller'
import NewsHead from '@/container/News/NewsHead'
// import HomeMain from '@/container/Home/HomeMain'
// import HomeCategories from '@/container/Home/HomeCategories'
// import HomeCreateNft from '@/container/Home/HomeCreateNft'
// import HomeCurrently from '@/container/Home/HomeCurrently'
export default function NewsPage() {
  return (
    <TheLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Me Prompt Technology</title>
      </Head>
      <div className='news-page'>
        <NewsHead />
        <NewsDiscover />
        <NewsTopSeller />
        {/* <HomeMain />
        <HomeCategories />
        <HomeCreateNft />
        <HomeCurrently /> */}
      </div>
    </TheLayout>
  )
}
