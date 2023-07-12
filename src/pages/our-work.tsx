import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import Author from '@/container/OurWork/Author'
import CreateNft from '@/container/CreateNft'
export default function OurWorkPage() {
  return (
    <TheLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Me Prompt Technology</title>
      </Head>
      <div className='ourwork-page'>
        <Author />
        <CreateNft />
      </div>
    </TheLayout>
  )
}
