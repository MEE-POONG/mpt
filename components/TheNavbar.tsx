import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { LanguageContext } from '@/components/Language/LanguageContext';
import BtnSetting from './Language/BtnSetting';
import { navData } from '@/data/navber';
import Link from 'next/link';

const TheNavber: React.FC = () => {
  const router = useRouter();
  const { currentLanguage } = useContext(LanguageContext);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navData.map((navItem, index) => (
        <li key={index}>
          <Link href={navItem?.pathLink} className={`fw-bold ${router?.pathname === navItem?.pathLink ? "active" : ""}`}>
            {currentLanguage === "TH" ? navItem.name?.TH : navItem.name?.EN}
          </Link>
        </li>
      ))}
    </ul>
  );
  return (

    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="/" className="logo m-auto">
                  <img src="/images/logo.png" alt="" />
                </a>
                <ul className="nav">
                  {navList}
                </ul>
                <BtnSetting />
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default TheNavber;
