import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import ItemDetails from '@/container/About/ItemDetails'
import CreateNft from '@/container/CreateNft'
import Teams from '@/container/About/team'
const AboutPage: React.FC = () => {

  return (
    <TheLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Me Prompt Technology</title>
      </Head>
      <div className='about-page'>
        <ItemDetails />
        <Teams />
        {/* <CreateNft /> */}
      </div>
    </TheLayout>
  )
}
export default AboutPage;
