import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import Discover from '@/container/News/Discover'
import TopSeller from '@/container/News/TopSeller'
const NewsPage: React.FC = () => {
  return (
    <TheLayout>
      <div className='news-page'>
        <Discover />
      </div>
    </TheLayout>
  )
}

export default NewsPage;