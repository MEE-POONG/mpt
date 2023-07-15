
import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';

import { priceHead, price } from '@/data/home';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`price-next-arrow ${className}`}
            // style={{ ...style, display: 'flex', background: 'red' }}
            onClick={onClick}
        >
            <FaAngleRight />
        </div>
    );
}

const PrevArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`price-prev-arrow ${className}`}
            // style={{ ...style, display: 'flex', background: 'green' }}
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}
const Price: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="create-nft">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2>
                                {currentLanguage === "TH" ? priceHead[0].title?.TH : priceHead[0].title?.EN}
                            </h2>
                            <h4>
                                {currentLanguage === "TH" ? priceHead[0].detail?.TH : priceHead[0].detail?.EN}
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="main-button">
                            <a href="/">{currentLanguage === "TH" ? "ซื้อแพ็คเกจ" : "Buy Package"}</a>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {price.map((item, index) => (

                        <div className="item p-3 mt-0">

                            <h4 className='d-flex align-items-center justify-content-center mt-0'>
                                <div className="icon d-flex me-2">
                                    <img src={`/images/icon-0${index + 2}.png`} alt="" className='m-auto' />
                                </div>
                                {item.title}
                            </h4>
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* <p>{item.logo}</p>
                                    <p>{item.webSelect}</p>
                                    <p>{item.backOffice}</p>
                                    <p>{item.codeUse}</p>
                                    <p>{item.responsive}</p>
                                    <p>{item.webDomain}</p>
                                    <p>{item.ssl}</p>
                                    <p>{item.page}</p>
                                    <p>{item.pageList}</p>
                                    <p>{item.storage}</p>
                                    <p>{item.manual}</p>
                                    <p>{item.Language}</p> */}
                                    <div className="row">
                                        <div className="col-6">
                                            <span>
                                                Current Bid: <br /> <strong>2.03 ETH</strong>
                                            </span>
                                        </div>
                                        <div className="col-6">
                                            <span>
                                                Ends In: <br /> <strong>25th Nov</strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div >
        </div >
    );
}

export default Price;
