import React from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';
import IDContext from '@/components/emp/idContext'
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { Collections, PerformanceData } from '@/data/home';

const Project: React.FC = () => {
    const context = useContext(IDContext);
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <section className="project section-padding" id="about">
            <div className="container">
                <div className='collections'>

                    <h3>
                        {currentLanguage === "TH" ? "ผู้นำโปรเจค" : "Project leader"}
                    </h3>
                    <Row>
                        {/* {Collections.map((workWeb, index) => (
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
                        ))} */}

                        {PerformanceData?.filter(data => data.creator === true).map((data, index) => {
                            const workWeb = Collections.find(collection => collection.id === data.Collections);
                            return workWeb ? (
                                <Col lg="4" key={index}>
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
                            ) : null;
                        })}
                    </Row>
                </div>
            </div>
            <div className="container">
                <div className='collections'>
                    <h3>
                        {currentLanguage === "TH" ? "ผลงาน" : "Performance"}
                    </h3>
                    <Row>
                        {PerformanceData?.filter(data => data.creator === false).map((data, index) => {
                            const workWeb = Collections.find(collection => collection.id === data.Collections);
                            return workWeb ? (
                                <Col lg="4" key={index}>
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
                            ) : null;
                        })}
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default Project;
