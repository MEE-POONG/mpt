import React from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import Link from 'next/link';


const TheSliderPage: React.FC = () => {
    const router = useRouter();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className="page-heading">
            <div className="container">
                <div className="row png-shadow-white">
                    <div className="col-lg-12">
                        <h6 className='c-purple-important '>Web Development & Design</h6>
                        <h2 className='c-purple-important '>Me prompt technology</h2>
                        <span className='h3 mt-3'>
                            <Link href="/" className='c-purple-important fw-normal'>
                                Home
                            </Link>
                            <span className='text-dark fw-normal'>{" > "} News</span>
                        </span>
                    </div>
                </div>
            </div>
            {/* {router.pathname === '/news' && (
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
            )} */}
        </div>
    );
};

export default TheSliderPage;
