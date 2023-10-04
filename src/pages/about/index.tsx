import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import MPTDetails from '@/container/About/MPTDetails'
import Teams from '@/container/About/team'
import Apprentice from '@/container/About/Apprentice'
const AboutPage: React.FC = () => {

  return (
    <TheLayout>
      <div className='about-page page-default-bg'>
        <MPTDetails />
        <Teams />
        <Apprentice />
      </div>
    </TheLayout>
  )
}
export default AboutPage;
