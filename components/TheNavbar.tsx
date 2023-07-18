import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LanguageContext } from '@/components/Language/LanguageContext';
import BtnSetting from './Language/BtnSetting';
import { navData } from '@/data/navber';
import Link from 'next/link';

const TheNavber: React.FC = () => {
  const router = useRouter();
  const { currentLanguage } = useContext(LanguageContext);
  const [isFaded, setIsFaded] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      const shouldFade: boolean = window.scrollY > 50;
      setIsFaded(shouldFade);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  const navList = navData.map((navItem, index) => (
    <li key={index}>
      <Link href={navItem?.pathLink} className={`fw-bold ${router?.pathname === navItem?.pathLink ? "active" : ""}`}>
        {currentLanguage === "TH" ? navItem.name?.TH : navItem.name?.EN}
      </Link>
    </li>
  ));
  return (

    <>
      <header className={`header-area header-sticky ${isFaded ? 'background-header' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link href="/" className="logo m-auto d-flex align-items-center fw-bold">
                  <img src="/images/meprompt/logo.png" alt="" />
                  Me Prompt Technology
                </Link>
                <ul className="nav">
                  {navList}
                </ul>
                <BtnSetting />
                <button className='menu-trigger'>
                  <span>Menu</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default TheNavber;
