import React, { useContext } from 'react';
import { TheSliderFirstData } from '@/data/components';
import { LanguageContext } from '@/components/Language/LanguageContext';
import { Carousel } from 'react-bootstrap';
import { GiShop } from 'react-icons/gi';

const TheSliderFirst: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <div className="main-banner">
            <div className="container">
                <Carousel indicators={false} controls={false} >
                    {TheSliderFirstData.map(item => (
                        <Carousel.Item key={item?.id}>
                            <div className="row flex-md-row-reverse png-shadow-white">
                                <div className="col-lg-6">
                                    <div className='d-flex h-100 align-items-center justify-content-center'>
                                        <img src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${item?.img}/700`} className=' w-100 px-1' alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center ">
                                    <div>
                                        <h6 className=' c-purple-important'>{currentLanguage === "TH" ? item?.title?.TH : item?.title?.EN}</h6>
                                        <h2 className='display-4  c-purple-important'> {currentLanguage === "TH" ? item?.subTitle?.TH : item?.subTitle?.EN}</h2>
                                        <p className=''>
                                            {currentLanguage === "TH" ? item?.detail?.TH : item?.detail?.EN}
                                        </p>
                                        <div className="buttons">
                                            <div className="main-button mx-auto">
                                                <a href={item.linkTo} target="_blank"><GiShop size={20} />ติดต่อแฟนเพจ</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default TheSliderFirst;
