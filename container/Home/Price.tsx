
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
                <div className='package bg-image-unset'>
                    <Slider {...settings}>
                        {price.map((item, index) => (
                            <div className="p-3">
                                <div className="item">
                                    <h4 className='d-flex align-items-center justify-content-center mt-0'>
                                        <div className="icon d-flex me-2">
                                            <img src={`/images/icon-0${index + 2}.png`} alt="" className='m-auto' />
                                        </div>
                                        {item.title}
                                    </h4>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <span className="bid">
                                                <h4 className='mt-0'>
                                                    ราคา {item.price.price}
                                                </h4>
                                                <h4 className='mt-0'>
                                                    แพ็คเกจ 2 ปี ลด 10% {(item.price.price * 2) - ((item.price.price * 2) * 0.1)}
                                                </h4>
                                                <h4 className='mt-0'>
                                                    แพ็คเกจ 3 ปี ลด 15% {(item.price.price * 3) - ((item.price.price * 3) * 0.1)}
                                                </h4>
                                                <div className="line-dec"></div>
                                                <strong>{item.serve.editDesign}</strong>
                                                <div className="line-dec"></div>
                                                <strong>{item.serve.editDesign}</strong>
                                                <br />
                                                <strong>{item.serve.siteArea}</strong>
                                                <br />
                                                <strong>{item.serve.imageStorage}</strong>
                                                <br />
                                                <strong>{item.serve.backup}</strong>
                                                <br />
                                                <strong>{item.serve.Domain}</strong>
                                                <br />
                                                <strong>{item.serve.consulting}</strong>
                                                <br />
                                                {item.serve.logo ?
                                                    <>
                                                        <strong>ออกแบบ Logo ใหม่</strong>
                                                        <br />
                                                    </>
                                                    : ""}
                                                {item.serve.Responsive ?
                                                    <strong>ลองรับทุกขนาดหน้าจอ</strong>
                                                    : ""}
                                                <br />
                                                <strong>{item.article.language}</strong>
                                                <br />
                                                <strong>{item.article.blog}</strong>

                                            </span>
                                            <div className="line-dec"></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div >
        </div >
    );
}

export default Price;
