import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { SiTypescript } from "react-icons/si";

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
                                        <h2>Website development in <em>multiple</em> languages.</h2>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/89a103ef-d0af-4fad-9970-a3c278f9ec00/170" alt="" />
                                        </div>
                                        <h4>Html5</h4>
                                        <div className="icon-button">
                                            <a href="#"><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/e311df22-7550-4e6a-3dd7-367e504b2900/170" alt="" />
                                        </div>
                                        <h4>Css</h4>
                                        <div className="icon-button">
                                            <a href="#"><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/abf7786a-c158-4a38-aab6-dec67822af00/170" alt="" />
                                        </div>
                                        <h4>Es6</h4>
                                        <div className="icon-button">
                                            <a href="#"><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/557b6253-75ac-4c99-4e8c-3cecee80db00/170" alt="" />
                                        </div>
                                        <h4>Flutter</h4>
                                        <div className="icon-button">
                                            <a href="#"><FaAngleRight /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6">
                                    <div className="item px-2">
                                        <div className="icon">
                                            <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/52a4fe9d-abf5-4e53-9d10-e0d5877cbc00/170" alt="" />
                                        </div>
                                        <h4>Sass</h4>
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
                                        <h4>Framework</h4>
                                        <div className="icon-button">
                                            <a href="https://devahoy.com/getting-started-with-nextjs/"><FaAngleRight /></a>
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
                                <h2>Explore Some Hot <em>Portfolio</em> By MePrompt.</h2>
                            </div>
                            <Slider {...settings}>
                                <div className="item px-2">
                                    <img src="/images/customers/changpong.png" width="500" height ="250" alt="" />
                                    <div className="down-content">
                                        <h4>ช่างพองอิฐประสาน</h4>
                                        <span className="collection">Viewer :<br /><strong>310</strong></span>
                                        <span className="category">Category:<br /><strong>เว็บบริษัท/องค์กร</strong></span>
                                        <div className="main-button">
                                            <a href="explore">Explore</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item px-2">
                                    <img src="/images/customers/homeagain.png" width="500" height ="250" alt="" />
                                    <div className="down-content">
                                        <h4>มูลนิธิบ้านหลังใหม่</h4>
                                        <span className="collection">Viewer :<br /><strong>324</strong></span>
                                        <span className="category">Category:<br /><strong>เว็บบริษัท/องค์กร</strong></span>
                                        <div className="main-button">
                                            <a href="explore">Explore</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item px-2">
                                    <img src="/images/customers/robot.png" width="500" height ="250" alt="" />
                                    <div className="down-content">
                                        <h4>Robot รถตัดหญ้าบังคับวิทยุ</h4>
                                        <span className="collection">Viewer :<br /><strong>380</strong></span>
                                        <span className="category">Category:<br /><strong>เว็บบริษัท/องค์กร</strong></span>
                                        <div className="main-button">
                                            <a href="explore">Explore</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item px-2">
                                    <img src="/images/customers/fairy.png" width="500" height ="250" alt="" />
                                    <div className="down-content">
                                        <h4>Fairy Stone - หินนำโชค</h4>
                                        <span className="collection">Viewer :<br /><strong>426</strong></span>
                                        <span className="category">Category:<br /><strong>เว็บบริษัท/องค์กร</strong></span>
                                        <div className="main-button">
                                            <a href="explore">Explore</a>
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
