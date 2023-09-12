import React, { useContext,} from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';
import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import Categories from '@/container/Home/Categories'
import Price from '@/container/Home/Price'
import Currently from '@/container/Home/Currently'
const HomePage: React.FC = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <TheLayout>
      <div className='home-page'>
        {/* <Categories />
        <Price />
        <Currently /> */}
      </div>
    </TheLayout>
  )
}
export default HomePage;
