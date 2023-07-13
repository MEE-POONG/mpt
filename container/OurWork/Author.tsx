import React from 'react';

const Author: React.FC = () => {
    return (
        <div className="author-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="author">
                            <img
                                src="/images/logo.png"
                                alt=""
                                style={{ borderRadius: "20%", maxWidth: 170 }}
                            />
                            <h4>
                                Me Prompt Technology <br /> <a href="#">@mpt</a>
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-info">
                            <div className="row">
                                <div className="col-4">
                                    <div className="info-item">
                                        <i className="fa fa-hand" />
                                        <h6>
                                            1238 <em>View</em>
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="info-item">
                                        <i className="fa fa-dollar" />
                                        <h6>
                                            1238 <em>Likes</em>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <h5>559 Followers</h5>
                                </div>
                                <div className="col-7">
                                    <div className="main-button">
                                        <a href="#">Follow @meprompt</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec" />
                            <h2>
                                Our <em>Clients</em>.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img
                                        src="/images/customers/changpong.png"
                                        alt=""
                                        style={{ borderRadius: 20, minHeight: 185 }}
                                    />
                                    <h4>ช่างพองอิฐประสาน</h4>
                                </div>
                                <div className="col-lg-12">
                                    <div className="main-button">
                                        <a href="https://www.xn--72cah0a9bls7bydzab3brky72a.com/">View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img
                                        src="/images/customers/homeagain.png"
                                        alt=""
                                        style={{ borderRadius: 20, minHeight: 185 }}
                                    />
                                    <h4>มูลนิธิบ้านหลังใหม่</h4>
                                </div>
                                <div className="col-lg-12">
                                    <div className="main-button">
                                        <a href="https://home-again.netlify.app/">View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img
                                        src="/images/customers/robot.png"
                                        alt=""
                                        style={{ borderRadius: 20, minHeight: 185 }}
                                    />
                                    <h4>Robot รถตัดหญ้าบังคับวิทยุ</h4>
                                    <div className="main-button">
                                        <a href="https://www.i2arobot.com/?fbclid=IwAR08wbCSwIpaks_wYcnRfYTgGNKlMa-dv9pim3V9bJnVKMUc-q7rgJW_ILw">View</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img
                                        src="/images/customers/fairy.png"
                                        alt=""
                                        style={{ borderRadius: 20, minHeight: 185 }}
                                    />
                                    <h4>Fairy Stone - หินนำโชค</h4>
                                    <div className="main-button">
                                        <a href="https://fairygemstone.com/">View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Author;
