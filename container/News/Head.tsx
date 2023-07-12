import TheHeadPage from '@/components/TheHeadPage';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';

const NewsHead: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (

        <div className="page-heading">
            <TheHeadPage />
            <div className="featured-explore">
                <div className="container-fluid">
                    <div className="position-relative z-index-1">
                        <Slider {...settings}>
                            <div className="item px-3">
                                <div className="thumb">
                                    <img
                                        src="/images/featured-01.jpg"
                                        alt=""
                                        style={{ borderRadius: 20 }}
                                    />
                                    <div className="hover-effect">
                                        <div className="content">
                                            <h4>Triple Mutant Ape Bored</h4>
                                            <span className="author">
                                                <img
                                                    src="/images/author.jpg"
                                                    alt=""
                                                    style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                                                />
                                                <h6>
                                                    Liberty Artist
                                                    <br />
                                                    <a href="#">@libertyart</a>
                                                </h6>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item px-3">
                                <div className="thumb">
                                    <img
                                        src="/images/featured-02.jpg"
                                        alt=""
                                        style={{ borderRadius: 20 }}
                                    />
                                    <div className="hover-effect">
                                        <div className="content">
                                            <h4>Triple Mutant Ape Bored</h4>
                                            <span className="author">
                                                <img
                                                    src="/images/author.jpg"
                                                    alt=""
                                                    style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                                                />
                                                <h6>
                                                    Liberty Artist
                                                    <br />
                                                    <a href="#">@libertyart</a>
                                                </h6>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item px-3">
                                <div className="thumb">
                                    <img
                                        src="/images/featured-03.jpg"
                                        alt=""
                                        style={{ borderRadius: 20 }}
                                    />
                                    <div className="hover-effect">
                                        <div className="content">
                                            <h4>Triple Mutant Ape Bored</h4>
                                            <span className="author">
                                                <img
                                                    src="/images/author.jpg"
                                                    alt=""
                                                    style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                                                />
                                                <h6>
                                                    Liberty Artist
                                                    <br />
                                                    <a href="#">@libertyart</a>
                                                </h6>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item px-3">
                                <div className="thumb">
                                    <img
                                        src="/images/featured-04.jpg"
                                        alt=""
                                        style={{ borderRadius: 20 }}
                                    />
                                    <div className="hover-effect">
                                        <div className="content">
                                            <h4>Triple Mutant Ape Bored</h4>
                                            <span className="author">
                                                <img
                                                    src="/images/author.jpg"
                                                    alt=""
                                                    style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                                                />
                                                <h6>
                                                    Liberty Artist
                                                    <br />
                                                    <a href="#">@libertyart</a>
                                                </h6>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item px-3">
                                <div className="thumb">
                                    <img
                                        src="/images/featured-04.jpg"
                                        alt=""
                                        style={{ borderRadius: 20 }}
                                    />
                                    <div className="hover-effect">
                                        <div className="content">
                                            <h4>Triple Mutant Ape Bored</h4>
                                            <span className="author">
                                                <img
                                                    src="/images/author.jpg"
                                                    alt=""
                                                    style={{ maxWidth: 50, maxHeight: 50, borderRadius: "50%" }}
                                                />
                                                <h6>
                                                    Liberty Artist
                                                    <br />
                                                    <a href="#">@libertyart</a>
                                                </h6>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewsHead;
