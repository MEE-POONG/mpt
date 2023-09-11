// Layout.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import TheNavbar from './TheNavbar';
import TheFooter from './TheFooter';
import TheHeadFirst from './TheHeadFirst';
import TheHeadPage from './TheHeadPage';
import TheHeader from './TheHead';
const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode;
}

const TheLayOut: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <TheHeader />
      <TheNavbar />
      {router.pathname === '/' ? <TheHeadFirst /> : <TheHeadPage />}
      <main className={inter.className}>{children}</main>
      {/* <div style={{ height: "5000px", backgroundColor: "black" }} /> */}

      <TheFooter />
    </>
  );
};

export default TheLayOut;
