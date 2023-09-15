import { Collections } from '@/data/home';
import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Author: React.FC = () => {
    return (
        <div className="author-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="author png-shadow-white">
                            <img
                                src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/2360a130-033c-4cf3-ba8c-82c123260800/350"
                                alt=""
                                style={{ borderRadius: "20%", maxHeight: 140, objectFit: "contain" }}
                            />
                            <h4 className='truncate-1'>
                                Me Prompt Technology <br />
                                <Link href="#">@Mepoong</Link>
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
                </div>
                <div className="col-lg-12">
                    <div className="section-heading mb-0">
                        <div className="line-dec" />
                        <h2>
                            Our <em>Clients</em>.
                        </h2>
                    </div>
                </div>
                <div className='collections mt-0'>
                    <Row>
                        {Collections.map((workWeb, index) => (
                            <Col lg="4" key={index} >
                                <div className="item px-2">
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
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>


    );
}

export default Author;
