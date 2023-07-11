import React, { useState } from "react";;
import type { AppProps } from 'next/app'
import { LanguageContext } from '@/components/Language/LanguageContext';
import { Language } from '@/components/Language/types';
import '../assets/scss/globals.scss'


export default function App({ Component, pageProps }: AppProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('TH');

  return (
    <React.Fragment>
      <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
        <Component {...pageProps} />
      </LanguageContext.Provider>
    </React.Fragment>
  )
}
