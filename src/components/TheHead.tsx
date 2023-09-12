
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LanguageContext } from '@/components/Language/LanguageContext';
import { navData } from '@/data/navbar';
import Link from 'next/link';
import Head from 'next/head';

const TheHeader: React.FC = () => {
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
        <Link key={index} href={navItem?.pathLink} className={`${router?.pathname === navItem?.pathLink ? "active" : ""}`}>
            {currentLanguage === "TH" ? navItem.name?.TH : navItem.name?.EN}
        </Link>
    ));
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Me Prompt Technology</title>
        </Head>
    );
}

export default TheHeader;
