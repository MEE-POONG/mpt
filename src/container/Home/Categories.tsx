import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { SiTypescript } from "react-icons/si";
import { Container } from 'react-bootstrap';
import { Collections, devLanguages } from '@/data/home';
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`next-arrow two ${className}`}
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
            className={`prev-arrow two ${className}`}
            // style={{ ...style, display: 'flex', background: 'green' }}
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}

const Categories: React.FC = () => {
    const settingsLanguages = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (

        <div className="categories-collections">
            <div className="container">
                <div className="categories">
                    <div className="section-heading mb-0">
                        <div className="line-dec"></div>
                        <h2 >Website development in <em>multiple</em> languages.</h2>
                    </div>
                    <div className='dev-languages'>
                        <Slider {...settingsLanguages}>
                            {devLanguages.map((lang, index) => (
                                <div className="px-2 py-5" key={index}>
                                    <div className="item p-4">
                                        <div className="icon">
                                            <img
                                                className="d-inline"
                                                src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${lang.src}/170`}
                                                alt={lang.languages}
                                            />
                                        </div>
                                        <h4 className='truncate-1'>{lang.languages}</h4>
                                        <div className="icon-button">
                                            <a href={lang.readLink}><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="collections">
                <div className="section-heading">
                    <div className="line-dec"></div>
                    <h2>Explore Some Hot <em>Portfolio</em> By MePrompt.</h2>
                </div>
                <div className='meprompt-portfolio'>
                    <Slider {...settings}>
                        {Collections.map((workWeb, index) => (
                            <div key={index} className="item px-2">
                                <div className='card'>
                                    <img src={workWeb.img} alt="" />
                                    <div className="down-content">
                                        <h4 className='truncate-1'>{workWeb?.name}</h4>
                                        <div className='d-flex justify-content-between'>
                                            <span className="collection">Viewer :<br /><strong>{workWeb?.viewer}</strong></span>
                                            <span className="category">Category:<br /><strong>{workWeb?.category}</strong></span>
                                        </div>
                                        <div className="main-button">
                                            <a href={workWeb.web} target='_blank'>Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>

    );
}

export default Categories;
