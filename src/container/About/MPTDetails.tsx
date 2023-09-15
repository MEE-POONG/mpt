import React, { useContext } from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';
import { mptDetail } from '@/data/about';


const MPTDetails: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <div className="item-details-page">
            <div className="container">
                <div className="section-heading">
                    <div className="line-dec" />
                    <h2>
                        How about <em>MPT</em> Is?.
                    </h2>
                </div>
                {mptDetail.map((item, index) => (
                    <div className="row" key={index}>

                        <div className="col-lg-7">
                            <div className="left-image png-shadow-white">
                                <img
                                    src={item?.img}
                                    className='w-100'
                                    alt=""
                                    style={{ borderRadius: 20 }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-center">
                            <h4 className=' c-purple-important png-shadow-white'>{currentLanguage === "TH" ? item?.title?.TH : item?.title?.EN}</h4>
                            <div className='png-shadow-white'>
                                <p className='fw-normal'>{currentLanguage === "TH" ? item?.detailOne?.TH : item?.detailOne?.EN}</p>
                                <p className='fw-normal'>{currentLanguage === "TH" ? item?.detailTwo?.TH : item?.detailTwo?.EN}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default MPTDetails;
