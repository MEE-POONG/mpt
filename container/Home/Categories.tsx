import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`next-arrow ${className}`}
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
            className={`prev-arrow ${className}`}
            // style={{ ...style, display: 'flex', background: 'green' }}
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}

const Categories: React.FC = () => {
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

        <div className="categories-collections">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="categories">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-heading">
                                        <div className="line-dec"></div>
                                        <h2>Browse Through Our <em>Categories</em> Here.</h2>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="/images/icon-01.png" alt="" />
                                        </div>
                                        <h4>Blockchain</h4>
                                        <div className="icon-button">
                                            <a href="#"><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="/images/icon-02.png" alt="" />
                                        </div>
                                        <h4>Digital Art</h4>
                                        <div className="icon-button">
                                            <a href="#"><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="/images/icon-03.png" alt="" />
                                        </div>
                                        <h4>Music Art</h4>
                                        <div className="icon-button">
                                            <a href="#"><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="/images/icon-04.png" alt="" />
                                        </div>
                                        <h4>Virtual World</h4>
                                        <div className="icon-button">
                                            <a href="#"><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="/images/icon-05.png" alt="" />
                                        </div>
                                        <h4>Valuable</h4>
                                        <div className="icon-button">
                                            <a href="#"><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="/images/icon-06.png" alt="" />
                                        </div>
                                        <h4>Triple NFT</h4>
                                        <div className="icon-button">
                                            <a href="#"><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="collections">
                            <div className="section-heading">
                                <div className="line-dec"></div>
                                <h2>Explore Some Hot <em>Collections</em> In Market.</h2>
                            </div>
                            <Slider {...settings}>
                                <div className="item px-2">
                                    <img src="/images/collection-01.jpg" alt="" />
                                    <div className="down-content">
                                        <h4>Mutant Bored Ape Yacht Club</h4>
                                        <span className="collection">Items In Collection:<br /><strong>310/340</strong></span>
                                        <span className="category">Category:<br /><strong>Digital Crypto</strong></span>
                                        <div className="main-button">
                                            <a href="explore">Explore Mutant</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item px-2">
                                    <img src="/images/collection-01.jpg" alt="" />
                                    <div className="down-content">
                                        <h4>Bored Ape Kennel Club</h4>
                                        <span className="collection">Items In Collection:<br /><strong>324/324</strong></span>
                                        <span className="category">Category:<br /><strong>Visual Art</strong></span>
                                        <div className="main-button">
                                            <a href="explore">Explore Bored Ape</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item px-2">
                                    <img src="/images/collection-01.jpg" alt="" />
                                    <div className="down-content">
                                        <h4>Genesis Collective Statue</h4>
                                        <span className="collection">Items In Collection:<br /><strong>380/394</strong></span>
                                        <span className="category">Category:<br /><strong>Music Art</strong></span>
                                        <div className="main-button">
                                            <a href="explore">Explore Genesis</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item px-2">
                                    <img src="/images/collection-01.jpg" alt="" />
                                    <div className="down-content">
                                        <h4>Worldwide Artwork Ground</h4>
                                        <span className="collection">Items In Collection:<br /><strong>426/468</strong></span>
                                        <span className="category">Category:<br /><strong>Blockchain</strong></span>
                                        <div className="main-button">
                                            <a href="explore">Explore Worldwide</a>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
