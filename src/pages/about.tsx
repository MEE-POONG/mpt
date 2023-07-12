import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import ItemDetails from '@/container/About/ItemDetails'
import CreateNft from '@/container/CreateNft'
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
        <ItemDetails />
        <CreateNft />
      </div>
    </TheLayout>
  )
}
