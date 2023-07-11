import React, { useContext, FC } from "react";

import { LanguageContext } from './LanguageContext';

type Language = 'EN' | 'TH';

interface LanguageContextProps {
  currentLanguage: Language;
  setCurrentLanguage: (lang: Language) => void;
}

const BtnSetting: FC = () => {
    const { currentLanguage, setCurrentLanguage } = useContext<LanguageContextProps>(LanguageContext);

    const switchLanguage = (): void => {
        setCurrentLanguage(currentLanguage === 'EN' ? 'TH' : 'EN');
    };

    return (
        <button
            className="hidden lg:inline-block"
            onClick={switchLanguage}
        >
            {currentLanguage}
            <img className={currentLanguage === 'TH' ? 'sepia-0' : 'sepia'} width={45} src={'https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/d6b61f6d-92fb-4830-0dfd-aa3ef41ed900/100'} />
            <img className={currentLanguage === 'EN' ? 'sepia-0' : 'sepia'} width={45} src={'https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/b284a787-d18d-42be-6c9d-bc01cfd5d300/100'} />
        </button>
    );
};

export default BtnSetting;