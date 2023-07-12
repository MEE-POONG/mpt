import React from 'react';
import { Carousel } from 'react-bootstrap';

const TheHeadFirst: React.FC = () => {
    return (

        <div className="main-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="header-text">
                            <h6>Liberty NFT Market</h6>
                            <h2>Create, Sell &amp; Collect Top NFT&apos;s.</h2>
                            <p>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo&apos;s free css templates.</p>
                            <div className="buttons">
                                <div className="border-button">
                                    <a href="explore">Explore Top NFTs</a>
                                </div>
                                <div className="main-button">
                                    <a href="https://youtube.com/templatemo" target="_blank">Watch Our Videos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        {/* <div className="owl-banner owl-carousel">
                            <div className="item">
                                <img src="/images/banner-01.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/images/banner-02.png" alt="" />
                            </div>
                        </div> */}
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                {/* <div className="item"> */}
                                    <img src="/images/banner-01.png" className='p-3' alt="" />
                                {/* </div> */}
                                {/* <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <div className="item"> */}
                                    <img src="/images/banner-02.png" className='p-3' alt="" />
                                {/* </div> */}
                                {/* <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheHeadFirst;
