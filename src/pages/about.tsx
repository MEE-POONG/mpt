import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import ItemDetails from '@/container/About/ItemDetails'
import Teams from '@/container/About/team'
import Apprentice from '@/container/About/Apprentice'
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
      <div className='about-page page-default-bg'>
        <ItemDetails />
        <Teams />
        <Apprentice />

      </div>
    </TheLayout>
  )
}
export default AboutPage;
